import React, { isValidElement, cloneElement } from "react";
import Arrow from "../arrow/arrow";
import { Fragment } from "react";

export default function Header({
  state,
  setState,
  disableYearPicker,
  disableMonthPicker,
  buttons,
  renderButton,
  handleMonthChange,
  disabled,
  hideMonth,
  hideYear,
  isRTL,
  fullYear,
  monthAndYears: [months, years],
  monthYearSeparator,
  formatMonth,
  formatYear,
  headerOrder,
}) {
  let style = {},
    {
      date,
      onlyMonthPicker,
      onlyYearPicker,
      mustShowYearPicker,
      minDate,
      maxDate,
      year,
      today,
    } = state,
    isPreviousDisable =
      minDate &&
      date.year <= minDate.year &&
      minDate.monthIndex > date.monthIndex - 1,
    isNextDisable =
      maxDate &&
      date.year >= maxDate.year &&
      maxDate.monthIndex < date.monthIndex + 1;

  let maxYear = today.year + 7;

  maxYear = maxYear - 12 * Math.floor((maxYear - year) / 12);

  if ((hideMonth || fullYear) && hideYear && !buttons) return null;

  if (onlyMonthPicker || fullYear) {
    if (minDate && minDate.year >= date.year) isPreviousDisable = true;
    if (maxDate && maxDate.year <= date.year) isNextDisable = true;
  }

  if (mustShowYearPicker || onlyYearPicker) {
    let minYear = maxYear - 11;

    isPreviousDisable = minDate && minDate.year > minYear;
    isNextDisable = maxDate && maxDate.year < maxYear;
  }

  if (disabled) {
    isPreviousDisable = true;
    isNextDisable = true;
  }

  return (
    <div className="rmdp-header">
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        {Array.from(new Set(headerOrder)).map((item, index) => (
          <Fragment key={index}>{getHeaderItem(item)}</Fragment>
        ))}
      </div>
    </div>
  );

  function getHeaderItem(item) {
    switch (item) {
      case "LEFT_BUTTON":
        return buttons && getButton("left");
      case "RIGHT_BUTTON":
        return buttons && getButton("right");
      case "MONTH_YEAR":
      case "YEAR_MONTH":
        if (fullYear) {
          return (
            <div className="rmdp-header-values" style={style}>
              {!hideYear && date.format("YYYY")}
            </div>
          );
        } else {
          const items = item
            .split("_")
            .filter(
              (item) =>
                (item === "MONTH" && !hideMonth) ||
                (item === "YEAR" && !hideYear)
            );

          return months.map((month, index) => (
            <div key={index} className="rmdp-header-values" style={style}>
              {items.length > 0 &&
                items
                  .map((item, i) => (
                    <Fragment key={i}>
                      {getMonthOrYear(item, month, index)}
                    </Fragment>
                  ))
                  .reduce((prev, curr, idx) => [prev, getSeparator(idx), curr])}
            </div>
          ));
        }
    }
  }

  function getMonthOrYear(item, month, index) {
    if (item === "MONTH") {
      return (
        !hideMonth && (
          <>
            <button
              className={`rmdp-header-button rmdp-header-button--month ${state.mustShowMonthPicker ? "active" : ""}`}
              style={{
                cursor:
                  disabled || disableMonthPicker || onlyMonthPicker
                    ? "default"
                    : "pointer",
              }}
              onClick={() => !disableMonthPicker && toggle("mustShowMonthPicker")}
              type="button"
            >
              {getMonth(month, years[index])}
            </button>
          </>
        )
      );
    } else {
      return (
        !hideYear && (
          <button
            className={`rmdp-header-button rmdp-header-button--month ${state.mustShowYearPicker ? "active" : ""}`}
            style={{
              cursor:
                disabled || disableYearPicker || onlyYearPicker
                  ? "default"
                  : "pointer",
            }}
            onClick={() => !disableYearPicker && toggle("mustShowYearPicker")}
            type="button"
          >
            {getYear(years[index], month)}
          </button>
        )
      );
    }
  }

  function getSeparator(idx) {
    return monthYearSeparator == null ? (isRTL ? "،" : ",") : monthYearSeparator ?? <span key={idx}>{monthYearSeparator}</span>;
  }

  function getButton(direction) {
    let handleClick = () => increaseValue(direction === "right" ? 1 : -1),
      disabled =
        (direction === "left" && isPreviousDisable) ||
        (direction === "right" && isNextDisable);

    return renderButton instanceof Function ? (
      renderButton(direction, handleClick, disabled)
    ) : isValidElement(renderButton) ? (
      cloneElement(renderButton, { direction, handleClick, disabled })
    ) : (
      <Arrow
        direction={`rmdp-${direction}`}
        onClick={handleClick}
        disabled={disabled}
      />
    );
  }

  function increaseValue(value) {
    if (
      disabled ||
      (value < 0 && isPreviousDisable) ||
      (value > 0 && isNextDisable)
    )
      return;

    if (fullYear) {
      date.year += value;
    } else if (!mustShowYearPicker && !onlyYearPicker) {
      date.toFirstOfMonth();

      if (onlyMonthPicker) {
        date.year += value;
      } else {
        date.month += value;

        handleMonthChange(date);
      }
    } else {
      year = year + value * 12;

      if (value < 0 && minDate && year < minDate.year) year = minDate.year;
      if (value > 0 && maxDate && year > maxDate.year) year = maxDate.year;
    }

    setState({
      ...state,
      date,
      year,
    });
  }

  function toggle(picker) {
    if (disabled) return;

    let object = {
      mustShowMonthPicker: false,
      mustShowYearPicker: false,
    };

    object[picker] = !state[picker];

    setState({
      ...state,
      ...object,
    });
  }

  function getMonth(month, year) {
    return typeof formatMonth === "function" ? formatMonth(month, year) : month;
  }

  function getYear(year, month) {
    return typeof formatMonth === "function" ? formatYear(year, month) : year;
  }
}
