!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).TimePicker=t(e.React)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function i(e){let{direction:t,onClick:r,disabled:i}=e;return n.default.createElement("span",{className:`rmdp-arrow-container ${t} ${i?"disabled":""}`,onClick:r},n.default.createElement("i",{className:"rmdp-arrow"}))}function a(e){let{name:t,value:r,onChange:i,digits:a}=e;return n.default.createElement("input",{type:"text",name:t,value:r,onChange:function(e){let n=d(e.target.value);if(isNaN(n))return;i(t,n)},onKeyDown:function(e){let n;if("ArrowUp"===e.key)n=1;else{if("ArrowDown"!==e.key)return;n=-1}i(t,d(r)+n)}});function d(e){for(let t of a)e=e.replace(t,a.indexOf(t));return Number(e)}}$RefreshReg$(i,"Arrow"),$RefreshReg$(a,"Input");function d(e){return Array.isArray(e)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".rmdp-time-picker.left div,.rmdp-time-picker.right div{margin:auto}.rmdp-time-picker{display:flex;padding:3px 0}.rmdp-time-picker.active{display:flex}.rmdp-time-picker div{align-items:center;display:flex;flex:1;flex-direction:column;margin-top:1px}.rmdp-time-picker div input{border:none;flex-grow:1;font-size:14px;padding:5px 2px;text-align:center;width:20px}.rmdp-time-picker div input::-webkit-inner-spin-button,.rmdp-time-picker div input::-webkit-outer-spin-button{-webkit-appearance:none}.rmdp-time-picker div input[type=number]{-moz-appearance:textfield}.rmdp-time-picker .dvdr{display:flex;flex-direction:column;justify-content:center;margin-top:-5px}.rmdp-time-picker div .rmdp-am{color:#000;font-size:13px;line-height:22px;margin-top:2px}.rmdp-only-time-picker{margin-bottom:0;width:220px}.rmdp-up i{margin-top:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.rmdp-down i{margin-top:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media (max-height:400px),(max-width:400px){.rmdp-time-picker div input{font-size:12px}.rmdp-time-picker div .rmdp-am{font-size:12px;line-height:22px}}");var l=$RefreshSig$();function o(t){l();let{selectedDate:r,focused:i,handleFocusedDate:a,state:o,setState:c,format:m}=t;return e.useEffect((()=>{d(r)&&0!==r.length&&(i||p(r[0]))}),[i,r,p]),d(r)&&n.default.createElement("div",{style:{display:"flex",padding:"5px 0"}},n.default.createElement("select",{className:"rmdp-input",style:{height:"26px",width:"90%",margin:"auto"},value:i?.day||"",onChange:e=>p(r.find((t=>t.day.toString()===e.target.value)))},r.map((e=>n.default.createElement("option",{key:e.day,value:e.day},e.format(m))))));function p(e){c({...o,focused:e}),a(e)}}l(o,"OD7bBpZva5O2jO+Puf00hKivP7c="),$RefreshReg$(o,"Select");var c,m=$RefreshSig$();function p(t){m();let{state:a,setState:d,handleChange:l,position:c,calendarProps:{formattingIgnoreList:p},nodes:u,Calendar:f,hideSeconds:g,className:h="",style:y={},handleFocusedDate:x,format:v="YYYY/MM/DD",header:k=!0,...E}=t,{date:b,selectedDate:w,multiple:C,range:$,focused:D}=a,R=b.meridiems,S=(C||$?D:w)||b,N=["left","right"].includes(c);const P=e.useMemo((()=>{let e=b._format;return"string"==typeof e&&(Array.isArray(p)&&p.forEach((t=>{"string"==typeof t&&(e=e.replace(new RegExp(t,"g"),""))})),e.toLowerCase().includes("a")||e.includes("hh"))}),[b._format,p]);let z=P&&S.hour<12;return n.default.createElement("div",{style:{display:"grid"}},N&&k&&n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{style:{margin:"auto"}},n.default.createElement("div",{style:{margin:"5px 0",fontSize:"14px"}},S.month.name),n.default.createElement("div",{style:{margin:"10px 0",fontSize:"25px"}},S.format("D"))),n.default.createElement(o,{selectedDate:w,focused:D,handleFocusedDate:x,state:a,setState:d,format:v})),n.default.createElement("div",r({className:`rmdp-time-picker ${c} ${h||""}`,style:{direction:"ltr",minWidth:N?"120px":"220px",...y}},function(e){let{state:t,setState:n,position:r,registerListener:i,calendarProps:a,datePickerProps:d,handleChange:l,nodes:o,Calendar:c,DatePicker:m,handlePropsChange:p,handleFocusedDate:s,...u}=e;return u}(E)),[["hour",P?"hh":"HH"],["minute","mm"],["second","ss"]].map(((e,t)=>{let[r,i]=e;return"second"===r&&g?null:n.default.createElement(s,{key:t,name:r,values:T(r,i),update:O,digits:b.digits,hideDivider:"second"===r||"minute"===r&&g})})),n.default.createElement("div",{style:{display:P?"flex":"none"}},n.default.createElement(i,{direction:"rmdp-up",onClick:A}),n.default.createElement("div",{className:"rmdp-am"},(z?R[0][1]:R[1][1]).toUpperCase()),n.default.createElement(i,{direction:"rmdp-down",onClick:A}))));function O(e,t){S[e]=t,j()}function A(){S.hour+=S.hour<12?12:-12,j()}function j(){l(w,{...a,selectedDate:w,focused:D})}function T(e,t){return S[e]||(S[e]=0),[S[e],S.format(t)]}}function s(e){let{name:t,values:[r,d],update:l,digits:o,hideDivider:c}=e;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",null,n.default.createElement(i,{direction:"rmdp-up",onClick:()=>l(t,r+1)}),n.default.createElement(a,{value:d,onChange:l,digits:o,name:t}),n.default.createElement(i,{direction:"rmdp-down",onClick:()=>l(t,r-1)})),!c&&n.default.createElement("span",{className:"dvdr"},":"))}return m(p,"atQX+zUcymbPE89O3LzmRtiuaxE="),c=s,$RefreshReg$(p,"TimePicker"),$RefreshReg$(c,"Button"),p}));
