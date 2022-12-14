!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("react")):"function"==typeof define&&define.amd?define(["react"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).Colors=o(e.React)}(this,(function(e){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e);function t(){return t=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}function d(e){return Array.isArray(e)}function l(e,o){let r=[];return["left","right"].includes(e)?(o.left&&r.push("rmdp-border-left"),o.right&&r.push("rmdp-border-right")):(o.top&&r.push("rmdp-border-top"),o.bottom&&r.push("rmdp-border-bottom")),r.join(" ")}!function(e,o){void 0===o&&(o={});var r=o.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===r&&t.firstChild?t.insertBefore(d,t.firstChild):t.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".rmdp-colors{display:flex;justify-content:space-around;padding:8px 0}.rmdp-colors.left,.rmdp-colors.right{flex-direction:column;padding:0 8px}.rmdp-color{border-radius:50%;cursor:pointer;height:20px;width:20px}.left .rmdp-color,.right .rmdp-color{margin:auto}.rmdp-blue{background-color:#0074d9}.rmdp-red{background-color:#ea0034}.rmdp-green{background-color:#009688}.rmdp-yellow{background-color:#fad817}.rmdp-color.active{box-shadow:0 0 4px 1px #8798ad}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-blue:hover{background-color:#7ea6f0}.rmdp-day:not(.rmdp-deactive) .highlight-blue{color:#4ca6f5}.rmdp-day.rmdp-deactive .highlight-blue{color:#7b98ce}.rmdp-day.rmdp-selected .highlight-blue{background-color:#0074d9;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-blue{background-color:#aec0e0;color:#fff}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-yellow:hover{background-color:#ffeb3b}.rmdp-day:not(.rmdp-deactive) .highlight-yellow{color:#f7da37}.rmdp-day.rmdp-deactive .highlight-yellow{color:#c0b025}.rmdp-day.rmdp-selected .highlight-yellow{background-color:#fad817;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-yellow{background-color:#dfdd61;color:#fff}.hover-red:hover{background-color:#ff6687!important}.hover-green:hover{background-color:#4db6ac!important}.hover-yellow:hover{background-color:#ffeb3b!important}");var a=$RefreshSig$();function n(o){a();let{state:n,position:c,colors:i=["blue","red","green","yellow"],defaultColor:p=i[0],nodes:h,calendarProps:{activeColor:s},registerListener:f,className:u="",handlePropsChange:m,...g}=o,b=["rmdp-colors",c,l(c,h)];return f("change",(function(e){if(d(e))for(let o=0;o<e.length;o++)e[o].color||(e[o].color=s);else e&&(e.color=s)})),e.useEffect((()=>{s||m({activeColor:p})}),[s,p,m]),r.default.createElement("div",t({className:`${b.join(" ")} ${u}`},function(e){let{state:o,setState:r,position:t,registerListener:d,calendarProps:l,datePickerProps:a,handleChange:n,nodes:c,Calendar:i,DatePicker:p,handlePropsChange:h,handleFocusedDate:s,...f}=e;return f}(g)),i.map(((e,o)=>r.default.createElement("div",{key:o,className:`rmdp-color rmdp-${e} ${s===e?"active":""}`,onClick:()=>function(e){let{selectedDate:o}=n;o&&!d(o)&&(o.color=e);m({activeColor:e,value:o})}(e)}))))}function c(e){let{state:{selectedDate:o,range:r},calendarProps:{activeColor:t}}=e,l={};if(d(o))for(let e=0;e<o.length;e++){let r=o[e],d=r.color||t;o[e].color=d,l[`${r.year}${r.month}${r.day}`]=d}return function(e){let a,n,{date:c}=e;if(!r)return o&&!d(o)&&c.format()===o.format()&&(a=t),d(o)&&(a=l[`${c.year}${c.month}${c.day}`]),n=a?`highlight highlight-${a}`:`hover-${t}`,{className:n}}}return a(n,"OD7bBpZva5O2jO+Puf00hKivP7c="),$RefreshReg$(n,"MultiColors"),function(){let{colors:e=["blue","red","green","yellow"],defaultColor:o=e[0],position:d="bottom",...l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{type:"mapDays",fn:c},r.default.createElement(n,t({colors:e,defaultColor:o,position:d},l))]}}));
