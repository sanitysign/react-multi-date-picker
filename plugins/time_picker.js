"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function a(e){let{direction:t,onClick:n,disabled:a}=e;return r.default.createElement("span",{className:`rmdp-arrow-container ${t} ${a?"disabled":""}`,onClick:n},r.default.createElement("i",{className:"rmdp-arrow"}))}function i(e){let{name:t,value:n,onChange:a,digits:i}=e;return r.default.createElement("input",{type:"text",name:t,value:n,onChange:function(e){let r=d(e.target.value);if(isNaN(r))return;a(t,r)},onKeyDown:function(e){let r;if("ArrowUp"===e.key)r=1;else{if("ArrowDown"!==e.key)return;r=-1}a(t,d(n)+r)}});function d(e){for(let t of i)e=e.replace(t,i.indexOf(t));return Number(e)}}$RefreshReg$(a,"Arrow"),$RefreshReg$(i,"Input");function d(e){return Array.isArray(e)}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".rmdp-time-picker.left div,.rmdp-time-picker.right div{margin:auto}.rmdp-time-picker{display:flex;padding:3px 0}.rmdp-time-picker.active{display:flex}.rmdp-time-picker div{align-items:center;display:flex;flex:1;flex-direction:column;margin-top:1px}.rmdp-time-picker div input{border:none;flex-grow:1;font-size:14px;padding:5px 2px;text-align:center;width:20px}.rmdp-time-picker div input::-webkit-inner-spin-button,.rmdp-time-picker div input::-webkit-outer-spin-button{-webkit-appearance:none}.rmdp-time-picker div input[type=number]{-moz-appearance:textfield}.rmdp-time-picker .dvdr{display:flex;flex-direction:column;justify-content:center;margin-top:-5px}.rmdp-time-picker div .rmdp-am{color:#000;font-size:13px;line-height:22px;margin-top:2px}.rmdp-only-time-picker{margin-bottom:0;width:220px}.rmdp-up i{margin-top:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.rmdp-down i{margin-top:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media (max-height:400px),(max-width:400px){.rmdp-time-picker div input{font-size:12px}.rmdp-time-picker div .rmdp-am{font-size:12px;line-height:22px}}");var l=$RefreshSig$();function o(t){l();let{selectedDate:n,focused:a,handleFocusedDate:i,state:o,setState:c,format:m}=t;return e.useEffect((()=>{d(n)&&0!==n.length&&(a||p(n[0]))}),[a,n,p]),d(n)&&r.default.createElement("div",{style:{display:"flex",padding:"5px 0"}},r.default.createElement("select",{className:"rmdp-input",style:{height:"26px",width:"90%",margin:"auto"},value:a?.day||"",onChange:e=>p(n.find((t=>t.day.toString()===e.target.value)))},n.map((e=>r.default.createElement("option",{key:e.day,value:e.day},e.format(m))))));function p(e){c({...o,focused:e}),i(e)}}l(o,"OD7bBpZva5O2jO+Puf00hKivP7c="),$RefreshReg$(o,"Select");var c,m=$RefreshSig$();function p(t){m();let{state:i,setState:d,handleChange:l,position:c,calendarProps:{formattingIgnoreList:p},nodes:u,Calendar:f,hideSeconds:g,className:h="",style:x={},handleFocusedDate:y,format:v="YYYY/MM/DD",header:k=!0,...E}=t,{date:w,selectedDate:b,multiple:C,range:$,focused:D}=i,R=w.meridiems,S=(C||$?D:b)||w,N=["left","right"].includes(c);const P=e.useMemo((()=>{let e=w._format;return"string"==typeof e&&(Array.isArray(p)&&p.forEach((t=>{"string"==typeof t&&(e=e.replace(new RegExp(t,"g"),""))})),e.toLowerCase().includes("a")||e.includes("hh"))}),[w._format,p]);let O=P&&S.hour<12;return r.default.createElement("div",{style:{display:"grid"}},N&&k&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{margin:"auto"}},r.default.createElement("div",{style:{margin:"5px 0",fontSize:"14px"}},S.month.name),r.default.createElement("div",{style:{margin:"10px 0",fontSize:"25px"}},S.format("D"))),r.default.createElement(o,{selectedDate:b,focused:D,handleFocusedDate:y,state:i,setState:d,format:v})),r.default.createElement("div",n({className:`rmdp-time-picker ${c} ${h||""}`,style:{direction:"ltr",minWidth:N?"120px":"220px",...x}},function(e){let{state:t,setState:r,position:n,registerListener:a,calendarProps:i,datePickerProps:d,handleChange:l,nodes:o,Calendar:c,DatePicker:m,handlePropsChange:p,handleFocusedDate:s,...u}=e;return u}(E)),[["hour",P?"hh":"HH"],["minute","mm"],["second","ss"]].map(((e,t)=>{let[n,a]=e;return"second"===n&&g?null:r.default.createElement(s,{key:t,name:n,values:F(n,a),update:z,digits:w.digits,hideDivider:"second"===n||"minute"===n&&g})})),r.default.createElement("div",{style:{display:P?"flex":"none"}},r.default.createElement(a,{direction:"rmdp-up",onClick:A}),r.default.createElement("div",{className:"rmdp-am"},(O?R[0][1]:R[1][1]).toUpperCase()),r.default.createElement(a,{direction:"rmdp-down",onClick:A}))));function z(e,t){S[e]=t,j()}function A(){S.hour+=S.hour<12?12:-12,j()}function j(){l(b,{...i,selectedDate:b,focused:D})}function F(e,t){return S[e]||(S[e]=0),[S[e],S.format(t)]}}function s(e){let{name:t,values:[n,d],update:l,digits:o,hideDivider:c}=e;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement(a,{direction:"rmdp-up",onClick:()=>l(t,n+1)}),r.default.createElement(i,{value:d,onChange:l,digits:o,name:t}),r.default.createElement(a,{direction:"rmdp-down",onClick:()=>l(t,n-1)})),!c&&r.default.createElement("span",{className:"dvdr"},":"))}m(p,"atQX+zUcymbPE89O3LzmRtiuaxE="),c=s,$RefreshReg$(p,"TimePicker"),$RefreshReg$(c,"Button"),exports.default=p;
