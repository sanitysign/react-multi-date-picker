"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function a(e){let{direction:t,onClick:a,disabled:i}=e;return r.default.createElement("span",{className:`rmdp-arrow-container ${t} ${i?"disabled":""}`,onClick:a},r.default.createElement("i",{className:"rmdp-arrow"}))}function i(e){let{name:t,value:a,onChange:i,digits:o}=e;return r.default.createElement("input",{type:"text",name:t,value:a,onChange:function(e){let r=n(e.target.value);if(isNaN(r))return;i(t,r)},onKeyDown:function(e){let r;if("ArrowUp"===e.key)r=1;else{if("ArrowDown"!==e.key)return;r=-1}i(t,n(a)+r)}});function n(e){for(let t of o)e=e.replace(t,o.indexOf(t));return Number(e)}}function o(e){return Array.isArray(e)}$RefreshReg$(a,"Arrow"),$RefreshReg$(i,"Input");var n=$RefreshSig$();function d(t){n();let{selectedDate:a,focused:i,handleFocusedDate:d,state:l,setState:p,format:m}=t;return e.useEffect((()=>{o(a)&&0!==a.length&&(i||c(a[0]))}),[i,a,c]),o(a)&&r.default.createElement("div",{style:{display:"flex",padding:"5px 0"}},r.default.createElement("select",{className:"rmdp-input",style:{height:"26px",width:"90%",margin:"auto"},value:i?.day||"",onChange:e=>c(a.find((t=>t.day.toString()===e.target.value)))},a.map((e=>r.default.createElement("option",{key:e.day,value:e.day},e.format(m))))));function c(e){p({...l,focused:e}),d(e)}}function l(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}n(d,"OD7bBpZva5O2jO+Puf00hKivP7c="),$RefreshReg$(d,"Select");l(".rmdp-analog-clock{background-color:#83cbe7;border:5px solid #09589e;border-radius:50%;height:130px;margin:auto 20px;position:relative;width:130px}.bottom .rmdp-analog-clock,.top .rmdp-analog-clock{margin:20px auto}.rmdp-analog-clock .dot{background-color:#ccc;border-radius:50%;bottom:0;box-shadow:0 2px 4px -1px #000;height:8px;left:0;margin:auto;position:absolute;right:0;top:0;width:8px;z-index:10}.rmdp-analog-clock .rmdp-hour{background-color:#333;height:30px;top:35px;transform-origin:50% 30px;z-index:5}.rmdp-analog-clock .rmdp-hour,.rmdp-analog-clock .rmdp-minute{border-top-left-radius:50%;border-top-right-radius:50%;left:50%;margin-left:-2px;position:absolute;width:4px}.rmdp-analog-clock .rmdp-minute{background-color:#666;height:55px;top:14px;transform-origin:50% 52px;z-index:6}.rmdp-analog-clock .rmdp-second{background-color:#0074d9;border-top-left-radius:50%;border-top-right-radius:50%;height:60px;left:50%;margin-left:-1px;position:absolute;top:10px;transform-origin:50% 55px;width:2px;z-index:7}.rmdp-analog-clock span{color:#333;display:inline-block;font-family:Arial;font-size:16px;font-weight:700;position:absolute;z-index:4}.rmdp-analog-clock .rmdp-h12{left:50%;margin-left:-9px;top:10px}.rmdp-analog-clock .rmdp-h3{right:10px;top:58px}.rmdp-analog-clock .rmdp-h6{bottom:7px;left:50%;margin-left:-4px}.rmdp-analog-clock .rmdp-h9{left:10px;top:58px}.rmdp-analog-clock .dial-lines{background-color:#4ca6f5;height:5px;left:50%;margin-left:-1px;position:absolute;transform-origin:50% 65px;width:2px;z-index:2}.rmdp-analog-clock .dial-lines:nth-of-type(5n){background-color:#0074d9;height:8px;width:3px}@media (max-height:400px),(max-width:400px){.rmdp-analog-clock{height:100px;margin:20px 10px;width:100px}.rmdp-analog-clock .dial-lines{height:3px;transform-origin:50% 50px;width:1px}.rmdp-analog-clock .dial-lines:nth-of-type(5n){background-color:#0074d9;height:5px;width:2px}.rmdp-analog-clock span{font-size:12px;font-weight:400}.rmdp-analog-clock .rmdp-h12{top:6px}.rmdp-analog-clock .rmdp-h3{right:7px;top:41px}.rmdp-analog-clock .rmdp-h6{bottom:6px}.rmdp-analog-clock .rmdp-h9{left:7px;top:41px}.rmdp-analog-clock .rmdp-hour{height:20px;top:30px;transform-origin:50% 20px}.rmdp-analog-clock .rmdp-minute{height:28px;top:19px;transform-origin:50% 31px}.rmdp-analog-clock .rmdp-second{height:33px;top:16px;transform-origin:50% 35px}.rmdp-analog-clock .dot{box-shadow:0 2px 4px -1px #000;height:7px;width:7px}}");l(".rmdp-time-picker.left div,.rmdp-time-picker.right div{margin:auto}.rmdp-time-picker{display:flex;padding:3px 0}.rmdp-time-picker.active{display:flex}.rmdp-time-picker div{align-items:center;display:flex;flex:1;flex-direction:column;margin-top:1px}.rmdp-time-picker div input{border:none;flex-grow:1;font-size:14px;padding:5px 2px;text-align:center;width:20px}.rmdp-time-picker div input::-webkit-inner-spin-button,.rmdp-time-picker div input::-webkit-outer-spin-button{-webkit-appearance:none}.rmdp-time-picker div input[type=number]{-moz-appearance:textfield}.rmdp-time-picker .dvdr{display:flex;flex-direction:column;justify-content:center;margin-top:-5px}.rmdp-time-picker div .rmdp-am{color:#000;font-size:13px;line-height:22px;margin-top:2px}.rmdp-only-time-picker{margin-bottom:0;width:220px}.rmdp-up i{margin-top:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.rmdp-down i{margin-top:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media (max-height:400px),(max-width:400px){.rmdp-time-picker div input{font-size:12px}.rmdp-time-picker div .rmdp-am{font-size:12px;line-height:22px}}");var p=$RefreshSig$();const m=e=>`rotate(${e}deg)`,c=[["hour","HH"],["minute","mm"],["second","ss"]];function s(t){p();let{state:a,setState:i,handleChange:o,handleFocusedDate:n,format:l="YYYY/MM/DD",position:s,calendarProps:{disableDayPicker:f},hideSeconds:g}=t,{date:x,selectedDate:h,multiple:k,range:y,focused:v}=a,b=(k||y?v:h)||x,{hour:w,minute:E,second:$}=b,N={hour:30*w+.5*E,minute:6*E+.1*$,second:6*$},D=e.useMemo((()=>Array.from(Array(60).keys()).map((e=>r.default.createElement("div",{key:e,className:"dial-lines",style:{transform:m(6*(e+1))}})))),[]),z=["3","6","9","12"].map(((e,t)=>r.default.createElement("span",{key:t,className:"rmdp-h"+e},e.replace(/[0-9]/g,(e=>x.digits[e])))));return r.default.createElement("div",{className:s,style:{display:"grid",minWidth:f?"180px":""}},r.default.createElement("div",{className:"rmdp-analog-clock"},r.default.createElement("div",{className:"dot"}),r.default.createElement("div",null,c.map(((e,t)=>{let[a]=e;return"second"===a&&g?null:r.default.createElement("div",{key:t,style:{transform:m(N[a])},className:`rmdp-${a}`})}))),r.default.createElement("div",null,z),r.default.createElement("div",null,D)),Array.isArray(h)&&r.default.createElement(d,{selectedDate:h,focused:v,handleFocusedDate:n,state:a,setState:i,format:l}),r.default.createElement("div",{style:{margin:"auto 0"}},r.default.createElement("div",{className:"rmdp-time-picker"},c.map(((e,t)=>{let[a,i]=e;return"second"===a&&g?null:r.default.createElement(u,{key:t,name:a,values:C(a,i),update:A,digits:x.digits,hideDivider:"second"===a||"minute"===a&&g})})))));function C(e,t){return b[e]||(b[e]=0),[b[e],b.format(t)]}function A(e,t){b[e]=t,o(h,{...a,selectedDate:h,focused:v})}}function u(e){let{name:t,values:[o,n],update:d,digits:l,hideDivider:p}=e;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement(a,{direction:"rmdp-up",onClick:()=>d(t,o+1)}),r.default.createElement(i,{value:n,onChange:d,digits:l,name:t}),r.default.createElement(a,{direction:"rmdp-down",onClick:()=>d(t,o-1)})),!p&&r.default.createElement("span",{className:"dvdr"},":"))}var f;p(s,"y4EXgIXkKUBV6QgFbGFB1cu0o9w="),f=u,$RefreshReg$(s,"AnalogTimePicker"),$RefreshReg$(f,"Button"),exports.default=s;
