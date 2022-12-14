"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));function a(e){return e&&e.name?e.name.split("_")[1]:""}function r(e){let{state:r,handleChange:l,position:n,direction:o=(["fa","ar"].includes(a(r.date.locale))?"rtl":"ltr"),format:i=("rtl"===o?"DD MMMM":"MMMM DD"),names:d,DatePicker:c}=e,{selectedDate:s,date:{locale:p}}=r,f=s[0]?.format?.(i),m=s[1]?.format?.(i),u=["bottom","top"].includes(n),g={en:{selectedDates:"Selected Dates"+(u?":":""),from:"From:",to:"To:",selectDate:"Select Date",close:"Close",separator:"-"},fa:{selectedDates:"تاریخ انتخابی شما"+(u?":":""),from:"از:",to:"تا:",selectDate:"انتخاب کنید",close:"بستن",separator:"-"}},h=d||g[a(p)]||g.en;return t.default.createElement("div",{className:`rmdp-range-picker-footer ${o} ${n}`,style:{display:u?"block":"grid",gridTemplateRows:"auto 1fr"}},t.default.createElement("h6",{className:"rmdp-week-day"},h.selectedDates),t.default.createElement("div",{style:{display:u?"flex":"grid",gridTemplateRows:"1fr auto"}},t.default.createElement("div",{className:"rmdp-header-values",style:{flex:"1",display:u?"":"grid"}},t.default.createElement("div",{style:{display:"inline-block"}},t.default.createElement("i",{className:"rmdp-cancel",onClick:()=>y(0)},"+"),t.default.createElement("span",null,h.from," ",f??h.selectDate)),u&&t.default.createElement("span",{style:{padding:"0px 10px"}},h.separator),t.default.createElement("div",{style:{display:"inline-block"}},t.default.createElement("i",{className:"rmdp-cancel",onClick:()=>y(1)},"+"),t.default.createElement("span",null,h.to," ",m??h.selectDate))),c&&t.default.createElement("button",{className:"rmdp-button",onClick:()=>c.closeCalendar()},h.close)));function y(e){Array.isArray(s)&&(s.splice(e,1),l(s,{...r,selectedDate:s}))}}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".rmdp-range-picker-footer{padding:10px;text-align:left}.rtl.rmdp-range-picker-footer{direction:rtl;text-align:right}.rmdp-range-picker-footer h6{font-size:16px;margin:0;white-space:nowrap}.left.rmdp-range-picker-footer h6,.right.rmdp-range-picker-footer h6{flex-direction:row;padding-top:5px;width:100%}.rmdp-cancel{background-color:#bdbcbc;border-radius:50%;color:#fff;cursor:pointer;display:inline-block;font-family:Arial!important;font-size:16px;height:17px;line-height:19px;margin:auto 7px auto 0;text-align:center;transform:rotate(45deg);width:17px}.rtl .rmdp-cancel{margin-left:7px;margin-right:unset}.rmdp-range-picker-footer span{font-size:16px;margin-top:auto}"),$RefreshReg$(r,"Footer"),exports.default=r;
