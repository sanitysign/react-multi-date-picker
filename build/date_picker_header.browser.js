!function(e,d){"object"==typeof exports&&"undefined"!=typeof module?module.exports=d(require("react"),require("react-date-object")):"function"==typeof define&&define.amd?define(["react","react-date-object"],d):(e="undefined"!=typeof globalThis?globalThis:e||self).DatePickerHeader=d(e.React,e.DateObject)}(this,(function(e,d){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),p=r(d);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var d=1;d<arguments.length;d++){var r=arguments[d];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e){return Array.isArray(e)}return function(e,d){void 0===d&&(d={});var r=d.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css","top"===r&&t.firstChild?t.insertBefore(p,t.firstChild):t.appendChild(p),p.styleSheet?p.styleSheet.cssText=e:p.appendChild(document.createTextNode(e))}}(".rmdp-header-plugin{background-color:#0074d9;color:#fff;display:grid}.rmdp-header-plugin div{display:flex;flex-direction:column;justify-content:center}.rmdp-header-plugin .rmdp-hp-dd{font-size:50px;font-weight:500}.rmdp-header-plugin.small.bottom .rmdp-hp-dd,.rmdp-header-plugin.small.top .rmdp-hp-dd{font-size:28px}.rmdp-header-plugin.top{border-radius:5px 5px 0 0}.rmdp-header-plugin.bottom{border-radius:0 0 5px 5px}.rmdp-header-plugin.left{border-radius:5px 0 0 5px}.rmdp-header-plugin.right{border-radius:0 5px 5px 0}.rmdp-header-plugin.bottom.big,.rmdp-header-plugin.top.big{height:200px}.rmdp-header-plugin.left.big,.rmdp-header-plugin.right.big{width:225px}.rmdp-header-plugin.bottom.medium,.rmdp-header-plugin.top.medium{height:150px}.rmdp-header-plugin.left.medium,.rmdp-header-plugin.right.medium{width:150px}.rmdp-header-plugin.bottom.small,.rmdp-header-plugin.top.small{height:90px}.rmdp-header-plugin.left.small,.rmdp-header-plugin.right.small{width:110px}.green .rmdp-header-plugin{background-color:#3d9970}.purple .rmdp-header-plugin{background-color:#9c27b0}.red .rmdp-header-plugin{background-color:#ea0034}.teal .rmdp-header-plugin{background-color:#009688}.yellow .rmdp-header-plugin{background-color:#f7da37}.rmdp-header-plugin.no-border-top-left-radius{border-top-left-radius:0}.rmdp-header-plugin.no-border-bottom-left-radius{border-bottom-left-radius:0}.rmdp-header-plugin.no-border-top-right-radius{border-top-right-radius:0}.rmdp-header-plugin.no-border-bottom-right-radius{border-bottom-right-radius:0}.rmdp-header-plugin.no-border-radius{border-radius:0}@media (max-height:400px),(max-width:400px){.rmdp-header-plugin.bottom.big,.rmdp-header-plugin.top.big{height:100px}.rmdp-header-plugin.left.big,.rmdp-header-plugin.right.big{width:125px}.rmdp-header-plugin.bottom.medium,.rmdp-header-plugin.top.medium{height:75px}.rmdp-header-plugin.left.medium,.rmdp-header-plugin.right.medium{width:75px}.rmdp-header-plugin.bottom.small,.rmdp-header-plugin.top.small{height:55px}.rmdp-header-plugin.left.small,.rmdp-header-plugin.right.small{width:55px}.rmdp-header-plugin.big.bottom .rmdp-hp-dd,.rmdp-header-plugin.big.top .rmdp-hp-dd,.rmdp-header-plugin.small.left .rmdp-hp-dd,.rmdp-header-plugin.small.right .rmdp-hp-dd{font-size:30px}.rmdp-header-plugin.medium.bottom .rmdp-hp-dd,.rmdp-header-plugin.medium.top .rmdp-hp-dd{font-size:20px}.rmdp-header-plugin.medium.bottom .rmdp-hp-dddd,.rmdp-header-plugin.medium.bottom .rmdp-hp-my,.rmdp-header-plugin.medium.top .rmdp-hp-dddd,.rmdp-header-plugin.medium.top .rmdp-hp-my{font-size:14px}.rmdp-header-plugin.small.bottom .rmdp-hp-dd,.rmdp-header-plugin.small.top .rmdp-hp-dd{font-size:18px}.rmdp-header-plugin.small .rmdp-hp-dddd,.rmdp-header-plugin.small .rmdp-hp-my{font-size:12px}}"),function(e){let d,{state:r,position:l,size:m="big",nodes:o,calendar:n=r.calendar,locale:u=r.locale,className:h="",...g}=e;var s;d=!r.selectedDate||r.multiple||r.range||a(r.selectedDate)?a(r.selectedDate)?r.focused||(s=r.selectedDate)[s.length-1]:new p.default:r.selectedDate,d=new p.default(d).set({calendar:n,locale:u});let c=["rmdp-header-plugin",l,m];return o[l]?c.push("no-border-radius"):["left","right"].includes(l)&&(o.top&&c.push(`no-border-top-${l}-radius`),o.bottom&&c.push(`no-border-bottom-${l}-radius`)),t.default.createElement("div",i({className:`${c.join(" ")} ${h}`},function(e){let{state:d,setState:r,position:t,registerListener:p,calendarProps:i,datePickerProps:a,handleChange:l,nodes:m,Calendar:o,DatePicker:n,handlePropsChange:u,handleFocusedDate:h,...g}=e;return g}(g)),t.default.createElement("div",{className:"rmdp-hp-dddd"},d.format("dddd")),t.default.createElement("div",{className:"rmdp-hp-dd"},d.format("DD")),t.default.createElement("div",{className:"rmdp-hp-my"},d.format("MMM YYYY")))}}));
