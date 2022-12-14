!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("react"),require("react-date-object")):"function"==typeof define&&define.amd?define(["react","react-date-object"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).MultiColors=r(e.React,e.DateObject)}(this,(function(e,r){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e),d=t(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)}function a(e,r){let t=[];return["left","right"].includes(e)?(r.left&&t.push("rmdp-border-left"),r.right&&t.push("rmdp-border-right")):(r.top&&t.push("rmdp-border-top"),r.bottom&&t.push("rmdp-border-bottom")),t.join(" ")}!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===t&&o.firstChild?o.insertBefore(d,o.firstChild):o.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".rmdp-colors{display:flex;justify-content:space-around;padding:8px 0}.rmdp-colors.left,.rmdp-colors.right{flex-direction:column;padding:0 8px}.rmdp-color{border-radius:50%;cursor:pointer;height:20px;width:20px}.left .rmdp-color,.right .rmdp-color{margin:auto}.rmdp-blue{background-color:#0074d9}.rmdp-red{background-color:#ea0034}.rmdp-green{background-color:#009688}.rmdp-yellow{background-color:#fad817}.rmdp-color.active{box-shadow:0 0 4px 1px #8798ad}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-blue:hover{background-color:#7ea6f0}.rmdp-day:not(.rmdp-deactive) .highlight-blue{color:#4ca6f5}.rmdp-day.rmdp-deactive .highlight-blue{color:#7b98ce}.rmdp-day.rmdp-selected .highlight-blue{background-color:#0074d9;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-blue{background-color:#aec0e0;color:#fff}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-yellow:hover{background-color:#ffeb3b}.rmdp-day:not(.rmdp-deactive) .highlight-yellow{color:#f7da37}.rmdp-day.rmdp-deactive .highlight-yellow{color:#c0b025}.rmdp-day.rmdp-selected .highlight-yellow{background-color:#fad817;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-yellow{background-color:#dfdd61;color:#fff}.hover-red:hover{background-color:#ff6687!important}.hover-green:hover{background-color:#4db6ac!important}.hover-yellow:hover{background-color:#ffeb3b!important}");var c=$RefreshSig$();function n(r){c();let{state:t,position:n,colors:s=["blue","red","green","yellow"],defaultColor:u=s[0],nodes:p,calendarProps:h,registerListener:f,className:g="",handlePropsChange:m,...y}=r,[b,v]=e.useState(h.activeColor||u),k=["rmdp-colors",n,a(n,p)],D=e.useRef({});return D.current.handlePropsChange=m,e.useEffect((()=>{if(Array.isArray(t.selectedDate)){let e=[],r={};for(let o=0;o<t.selectedDate.length;o++){let l=t.selectedDate[o],a=new d.default(l).setLocale(void 0).format("YYYYMMDD"),c=l.color||b;l.color||(t.selectedDate[o].color=c),r[a]=c,e.push(a)}let o=JSON.stringify(e);if(o===D.current.stringValues)return;D.current.stringValues=o,D.current.colors=r}D.current.handlePropsChange({mapDays:i(t.selectedDate,t.range,D,b),value:t.selectedDate,activeColor:b})}),[t.selectedDate,t.range,b]),f("change",(function(e){if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r].color||(e[r].color=b);else e&&(e.color=b)})),o.default.createElement("div",l({className:`${k.join(" ")} ${g}`},function(e){let{state:r,setState:t,position:o,registerListener:d,calendarProps:l,datePickerProps:a,handleChange:c,nodes:n,Calendar:i,DatePicker:s,handlePropsChange:u,handleFocusedDate:p,...h}=e;return h}(y)),s.map(((e,r)=>o.default.createElement("div",{key:r,className:`rmdp-color rmdp-${e} ${b===e?"active":""}`,onClick:()=>function(e){v(e);let{selectedDate:r,range:o}=t;r&&!Array.isArray(r)&&(r.color=e);let d={activeColor:e,value:r,mapDays:i(r,o,D,e)};m(d)}(e)}))))}function i(e,r,t,o){return function(l){let a,c,{date:n}=l;if(!r){if(e&&!Array.isArray(e)&&n.format()===e.format()&&(a=o),Array.isArray(e)){let e=new d.default(n).setLocale(void 0).format("YYYYMMDD");t.current.stringValues.includes(e)&&(a=t.current.colors[e])}return c=a?`highlight highlight-${a}`:`hover-${o}`,{className:c}}}}return c(n,"Jnw8/0DVkltc88kPVy8+b1QMblo="),$RefreshReg$(n,"MultiColors"),n}));
