import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  isValidElement,
  cloneElement,
} from "react";
import ElementPopper from "react-element-popper";
import DateObject from "react-date-object";
import Calendar from "../calendar/calendar";
import getFormat from "../../shared/getFormat";
import stringify from "../../shared/stringify";
import isArray from "../../shared/isArray";
import check from "../../shared/check";
import getLocaleName from "../../shared/getLocaleName";
import toLocaleDigits from "../../shared/toLocaleDigits";
import isRTL from "../../shared/isRTL";
import CrossIcon from "../../elements/cross/cross";
import "./date_picker.css";

function DatePicker(
  {
    value,
    calendar,
    locale,
    format,
    onlyMonthPicker,
    onlyYearPicker,
    onChange,
    range = false,
    multiple = false,
    name,
    id,
    title,
    placeholder,
    required,
    style = {},
    className = "",
    inputClass,
    disabled,
    render,
    weekDays,
    months,
    children,
    inputMode,
    scrollSensitive = true,
    hideOnScroll,
    minDate,
    maxDate,
    formattingIgnoreList,
    containerClassName = "",
    calendarPosition = "bottom-left",
    editable = true,
    onOpen,
    onClose,
    arrowClassName = "",
    zIndex = 100,
    arrow = true,
    fixMainPosition,
    onPositionChange,
    onPropsChange,
    digits,
    readOnly,
    shadow = true,
    onFocusedDateChange,
    type,
    weekPicker,
    mobileLabels,
    onOpenPickNewDate = true,
    mobileButtons = [],
    dateSeparator,
    multipleRangeSeparator = ",",
    inputRef: userInputRef,
    onChanging,
    onBlur,
    parseInputValue,
    allowInvalidDate = false,
    clearBtn = true,
    ClearBtnComponent,
    ...otherProps
  },
  outerRef
) {
  let [date, setDate] = useState(),
    [temporaryDate, setTemporaryDate] = useState(),
    [stringDate, setStringDate] = useState(""),
    [isVisible, setIsVisible] = useState(false),
    [isCalendarReady, setIsCalendarReady] = useState(false),
    datePickerRef = useRef(),
    inputRef = useRef(),
    calendarRef = useRef(),
    ref = useRef({}),
    separator = dateSeparator || (range || weekPicker ? " ~ " : ", "),
    datePickerProps = arguments[0],
    isMobileMode = isMobile(),
    closeCalendar = useCallback(() => {
      if (onClose?.() === false) return;

      let input = getInput(inputRef);

      if (input) input.blur();

      /*
        trigger `blur` event when popup is closed, calendar must be closed before `focusout` is triggered, so we use `setTimeout`,
        note that native `focusout` event will trigger React's `blur` event handler
      */
      setTimeout(() => {
        if (input) input.dispatchEvent(new Event("focusout", { bubbles: true }));
      })

      if (ref.current.mobile) {
        let popper = calendarRef.current.parentNode.parentNode;

        popper.classList.remove("rmdp-calendar-container-mobile");
        popper.style.position = "absolute";
        popper.style.visibility = "hidden";
      }

      setIsVisible(false);
      setIsCalendarReady(false);
    }, [onClose]),
    buttons = [
      {
        type: "button",
        className: "rmdp-button rmdp-action-button",
        onClick: () => {
          setTemporaryDate(undefined);
          closeCalendar();
        },

        label: toLocale("CANCEL"),
      },
      {
        type: "button",
        className: "rmdp-button rmdp-action-button",
        onClick: () => {
          if (temporaryDate) {
            handleChange(temporaryDate, true);
            setTemporaryDate(undefined);
          }

          closeCalendar();
        },

        label: toLocale("OK"),
      },
    ];

  /*
    `onBlur` event should be triggered only when popup is closed, we dispatch `blur` event when popup is closed
  */
  const onBlurCb = useCallback(e => {
    if (typeof onBlur !== "function" || !datePickerRef.current || datePickerRef.current.isOpen) return;
    onBlur(e);
  }, [onBlur]);

  if (isMobileMode && !ref.current.mobile) {
    ref.current = { ...ref.current, mobile: true };
  }

  if (!isMobileMode && ref.current.mobile) {
    ref.current = { ...ref.current, mobile: false };
  }

  formattingIgnoreList = stringify(formattingIgnoreList);
  format = getFormat(onlyMonthPicker, onlyYearPicker, format);

  [calendar, locale] = check(calendar, locale);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!isVisible || ref.current.mobile) return;
      /**
       * Due to the fact that by activating the portal mode,
       * the calendar element is moved out of the date picker container,
       * it is not possible to detect external clicks using the datePickerRef.
       * Therefore, inputRef and calendarRef can be checked separately.
       *
       * If the clicked area is outside of both the input and calendar elements,
       * the calendar should be closed.
       */
      let outsideList = [];

      [inputRef.current, calendarRef.current].forEach((element) => {
        if (
          element &&
          !element.contains(event.target) &&
          !event.target.classList.contains("b-deselect")
        ) {
          outsideList.push(element);
        }
      });

      if (outsideList.length === 2) return closeCalendar();

      if (calendarRef.current && calendarRef.current.contains(event.target)) {
        datePickerRef.current.removeTransition();
        datePickerRef.current.refreshPosition();
      }
    }

    function handleScroll() {
      if (hideOnScroll && isVisible) closeCalendar();
    }

    document.addEventListener("click", handleClickOutside, false);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [closeCalendar, outerRef, isVisible, hideOnScroll]);

  useEffect(() => {
    let date = value,
      { date: refDate, initialValue } = ref.current,
      getLastDate = () => date[date.length - 1];

    function checkDate(date) {
      if (!date) return;
      if (!(date instanceof DateObject))
        date = new DateObject({ date, calendar, locale, format });

      if (date.calendar !== calendar) date.setCalendar(calendar);

      date.set({
        weekDays,
        months,
        digits,
        locale,
        format,
        ignoreList: JSON.parse(formattingIgnoreList),
      });

      return date;
    }

    if (!value && !initialValue && refDate) {
      date = refDate;
    } else if (initialValue && !value) {
      initialValue = undefined;
    }

    let strDate = "";

    if (range || multiple || isArray(date)) {
      if (!isArray(date)) {
        date = range && multiple ? (date ? [[date]] : []) : [date];
      }

      if (multiple && range) {
        date = date.map((range, i) => {
          const [dates, strDates] = getDatesAndStrDates(
            isArray(range) ? range : [range]
          );

          strDate +=
            strDates +
            (i < date.length - 1 ? ` ${multipleRangeSeparator} ` : "");

          return dates;
        });
      } else {
        [date, strDate] = getDatesAndStrDates(date);
      }

      strDate = strDate.toString().replace(/\s,\s$/, "");

      function getDatesAndStrDates(date) {
        date = date.map(checkDate).filter((value) => value !== undefined);

        if (range && date.length > 2) date = [date[0], getLastDate()];

        return [date, getStringDate(date, separator)];
      }
    } else {
      if (isArray(date)) date = getLastDate();

      date = checkDate(date);

      if (date) strDate = date.format();
    }

    if (document.activeElement !== getInput(inputRef)) {
      setStringDate(strDate);
    }

    ref.current = {
      ...ref.current,
      date,
      separator,
      initialValue: initialValue || value,
    };

    if (ref.current.mobile && datePickerRef.current.isOpen) {
      setTemporaryDate(date);
    } else {
      setDate(date);
    }
  }, [
    value,
    calendar,
    locale,
    format,
    range,
    multiple,
    separator,
    onlyMonthPicker,
    onlyYearPicker,
    weekDays,
    months,
    digits,
    formattingIgnoreList,
  ]);

  useEffect(() => {
    /**
     * If the locale is non-English, after manually changing the input value,
     * the caret position jumps to the end of the input.
     * To solve this issue, we save the previous position of caret in the ref,
     * and in this effect, we recover it.
     */
    let { selection } = ref.current;

    if (!selection) return;
    /**
     * If the caret position is undefined, there is no reason to get the input.
     * So we only get the input if the caret position is available.
     */
    let input = getInput(inputRef);

    if (!input) return;

    input.setSelectionRange(selection, selection);
    ref.current.selection = undefined;
    /**
     * after manually changing the month by typing in the input,
     * if the calendar position is in top of the input
     * and the number of days in the new month is greater than the number of days in the previous month,
     * the calendar will cover the input due to its larger size.
     * To resolve this issue, we refresh the calendar position here.
     */
    datePickerRef.current.refreshPosition();
  }, [stringDate]);

  if (multiple || range || isArray(date) || !editable) inputMode = "none";

  return (
    <ElementPopper
      ref={setRef}
      element={renderInput()}
      popper={isVisible && renderCalendar()}
      active={!isMobileMode && isCalendarReady}
      position={calendarPosition}
      arrow={!isMobileMode && arrow}
      fixMainPosition={!scrollSensitive || fixMainPosition}
      zIndex={zIndex}
      onChange={!isMobileMode && onPositionChange}
      containerClassName={`rmdp-container ${containerClassName}`}
      arrowClassName={[
        "rmdp-ep-arrow",
        `rmdp-ep-${shadow ? "shadow" : "border"}`,
        className,
        arrowClassName,
      ].join(" ")}
      {...otherProps}
    />
  );

  function setRef(element) {
    if (element) {
      element.openCalendar = () => setTimeout(() => openCalendar(), 10);
      element.closeCalendar = closeCalendar;
      element.isOpen = isVisible && isCalendarReady;
    }

    datePickerRef.current = element;

    if (outerRef instanceof Function) return outerRef(element);
    if (outerRef) outerRef.current = element;
  }

  function setInputRefs(element) {
    inputRef.current = element;

    if (typeof userInputRef === "function") return userInputRef(element);
    if (userInputRef) userInputRef.current = element;
  }

  function renderInput() {
    if (render) {
      return (
        <div ref={setInputRefs}>
          {isValidElement(render)
            ? cloneElement(render, {
                value: stringDate,
                openCalendar,
                onFocus: openCalendar,
                onBlur: onBlurCb,
                handleValueChange,
                onChange: handleValueChange,
                locale,
                separator,
              })
            : render instanceof Function
            ? render(
                stringDate,
                openCalendar,
                handleValueChange,
                locale,
                separator
              )
            : null}
        </div>
      );
    } else {
      const withClearBtn = clearBtn && !readOnly && !disabled && editable;
      const additionalStyle = withClearBtn ? { paddingRight: "26px" } : null;

      return (
        <div style={{ position: "relative" }}>
          <input
            ref={setInputRefs}
            type={type || "text"}
            name={name}
            id={id}
            title={title}
            required={required}
            onFocus={openCalendar}
            onBlur={onBlurCb}
            className={inputClass || "rmdp-input"}
            placeholder={placeholder}
            value={stringDate}
            onChange={handleValueChange}
            style={{ ...style, ...additionalStyle }}
            autoComplete="off"
            disabled={disabled ? true : false}
            inputMode={inputMode || (isMobileMode ? "none" : undefined)}
            readOnly={readOnly}
          />

          {!!withClearBtn &&
            !!stringDate?.toString?.() &&
            (ClearBtnComponent ? (
              <ClearBtnComponent className="rmdp__clear-btn" onClick={() => handleChange(null, undefined, "")} />
            ) : (
              <button
                className="rmdp__clear-btn"
                type="button"
                onClick={() => handleChange(null, undefined, "")}
              >
                <CrossIcon className="rmdp__clear-icon" />
              </button>
            ))}
        </div>
      )
    }
  }

  function renderCalendar() {
    return (
      <Calendar
        ref={calendarRef}
        value={temporaryDate || date}
        onChange={handleChange}
        range={range}
        multiple={multiple}
        calendar={calendar}
        locale={locale}
        format={format}
        onlyMonthPicker={onlyMonthPicker}
        onlyYearPicker={onlyYearPicker}
        className={className + (isMobileMode ? " rmdp-mobile" : "")}
        weekDays={weekDays}
        months={months}
        digits={digits}
        minDate={minDate}
        maxDate={maxDate}
        formattingIgnoreList={JSON.parse(formattingIgnoreList)}
        onPropsChange={onPropsChange}
        shadow={shadow}
        onReady={setCalendarReady}
        DatePicker={datePickerRef.current}
        datePickerProps={datePickerProps}
        onFocusedDateChange={handleFocusedDate}
        weekPicker={weekPicker}
        {...otherProps}
      >
        {children}
        {isMobileMode && renderButtons()}
      </Calendar>
    );
  }

  function isMobile() {
    return typeof className === "string" && className.includes("rmdp-mobile");
  }

  function renderButtons() {
    let mustSetTopBorder = [].concat
      .apply([], datePickerProps.plugins || [])
      .some(({ props = {} }) => !props.disabled);

    return (
      isArray(mobileButtons) && (
        <div
          className={`rmdp-action-buttons ${isRTL(locale) ? "rmdp-rtl" : ""} ${
            mustSetTopBorder ? "rmdp-border-top" : ""
          }`}
        >
          {mobileButtons.concat(buttons).map(({ label, ...props }, index) => (
            <button key={index} {...props}>
              {label}
            </button>
          ))}
        </div>
      )
    );
  }

  function toLocale(string) {
    const currentLocale = locale || new DateObject().locale;

    if (typeof currentLocale.name !== "string") return string;

    const actions = {
      en: { OK: "OK", CANCEL: "CANCEL" },
      fa: { OK: "تأیید", CANCEL: "لغو" },
      ar: { OK: "تأكيد", CANCEL: "الغاء" },
      hi: { OK: "पुष्टि", CANCEL: "रद्द करें" },
    };

    return (
      mobileLabels?.[string] ||
      actions[getLocaleName(currentLocale)]?.[string] ||
      string
    );
  }

  function openCalendar() {
    if (disabled || readOnly || onOpen?.() === false) return;

    if (mustPickNewDate()) {
      let date = new DateObject({
        calendar,
        locale,
        format,
        months,
        weekDays,
        digits,
        ignoreList: JSON.parse(formattingIgnoreList),
      });

      if ((!minDate || date > minDate) && (!maxDate || date < maxDate)) {
        handleChange(date);
        onPropsChange?.({ ...datePickerProps, value: date });

        ref.current.date = date;
      }
    }

    let input = getInput(inputRef);

    if (isMobileMode && input) input.blur();

    if (input || !isVisible) {
      setIsVisible(true);
    } else {
      closeCalendar();
    }
  }

  function mustPickNewDate() {
    return (
      onOpenPickNewDate &&
      !value &&
      !ref.current.date &&
      !range &&
      !multiple &&
      !isMobileMode
    );
  }

  async function handleChange(date, force, inputValue) {
    if (isMobileMode && !force) return setTemporaryDate(date);

    // allows to cancel date selection after ajax validation
    if (typeof onChanging === "function" && (await onChanging(date)) === false) {
      setStringDate(stringDate);

      return false;
    }

    let strDate = "";

    if (date) {
      if (multiple && range && isArray(date)) {
        strDate = date
          .map((range) => getStringDate(range, separator))
          .join(` ${multipleRangeSeparator} `);
      } else {
        strDate = getStringDate(date, separator);
      }
    }

    const mustUpdateState = await onChange?.(date, {
      validatedValue: strDate,
      input: inputRef.current,
      isTyping: inputValue != null,
    });

    if (mustUpdateState === false) {
      setStringDate(stringDate);

      return false;
    }

    setDate(date);
    setStringDate(inputValue ?? strDate.toString().replace(/\s,\s$/, ""));

    ref.current = { ...ref.current, date };
  }

  function handleValueChange(e) {
    if (!editable) return;

    ref.current.selection = e.target.selectionStart;

    let value = e.target.value,
      object = {
        calendar,
        locale,
        format,
        ignoreList: JSON.parse(formattingIgnoreList),
      };

    digits = isArray(digits) ? digits : locale.digits;

    if (!value.trim()) {
      return handleChange(null, undefined, "");
    }

    if (!digits) return;
    //converting value to english digits
    for (let digit of digits) {
      value = value.replace(new RegExp(digit, "g"), digits.indexOf(digit));
    }

    let newDate;

    if (!isArray(date)) {
      newDate = getSingleDate(value);
    } else if (!multiple || !range) {
      newDate = getMultipleDates(value);
    } else {
      newDate = (value || "")
        .split(multipleRangeSeparator)
        .filter(Boolean)
        .map(getMultipleDates);
    }

    /**
      we want to differentiate the cases when invalid date is entered in the input and when no date is entered at all
      to show the user an appropriate validation message, so we check below for `allowInvalidDate` option
    */
    handleChange(
      !isArray(date) ? ((newDate.isValid || allowInvalidDate) ? newDate : null) : newDate,
      undefined,
      toLocaleDigits(value, digits)
    );

    function getSingleDate(value) {
      /**
       * Allows to provide a custom parsing function, which can be useful if DateObject doesn't support the locale
       */
      if (typeof parseInputValue === "function") {
        return new DateObject({
          ...object,
          date: parseInputValue(value),
        });

        /**
         * Given that the only valid date is the date that has all three values of the day, month, and year.
         * To generate a new date, we must check whether the day, month, and year
         * are defined in the format or not.
         */
      } else if (/(?=.*Y)(?=.*M)(?=.*D)/.test(format)) {
        /**
         * If the above condition is true,
         * we generate a new date from the input value.
         */
        return new DateObject({
          ...object,
          date: value,
        });
      } else {
        /**
         * Otherwise, we generate today's date and replace the input value with today's values.
         * For example, if we are only using the TimePicker and the input value follows the format "HH:mm",
         * if we generate a new date from the format "HH:mm", given that the values of the day, month, and year
         * do not exist in the input value, an invalid date will be generated.
         * Therefore, it is better to generate today's date and replace only the hour and minute with today's values.
         */
        return new DateObject(object).parse(value);
      }
    }

    function getMultipleDates(value) {
      return (value || "")
        .split(separator)
        .filter(Boolean)
        .map((value) => getSingleDate(value.trim()));
    }
  }

  function setCalendarReady() {
    setIsCalendarReady(true);

    if (!isMobileMode) return;

    let popper = calendarRef.current.parentNode.parentNode;

    popper.className = "rmdp-calendar-container-mobile";
    popper.style.position = "fixed";
    popper.style.transform = "";

    setTimeout(() => {
      popper.style.visibility = "visible";
    }, 50);
  }

  function handleFocusedDate(focusedDate, clickedDate) {
    if (!isArray(ref.current.date) && !range && clickedDate && !isMobileMode) {
      closeCalendar();
    }

    onFocusedDateChange?.(focusedDate, clickedDate);
  }
}

export default forwardRef(DatePicker);

function getStringDate(date, separator) {
  let dates = [].concat(date).map(toString);

  dates.toString = function () {
    return this.filter(Boolean).join(separator);
  };

  return dates;

  function toString(date) {
    return date?.isValid ? date.format() : "";
  }
}

function getInput(inputRef) {
  if (!inputRef.current) return;

  return inputRef.current.tagName === "INPUT"
    ? inputRef.current
    : inputRef.current.querySelector("input");
}
