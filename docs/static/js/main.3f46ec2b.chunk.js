(this["webpackJsonpreact-drum-machine"]=this["webpackJsonpreact-drum-machine"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(3),r=n.n(i),o=n(10),u=n.n(o),s=(n(16),n(1)),a=n(8),l=["kick","snare"],f=Object(i.createContext)(),d=f.Provider,b=function(e){var t=e.children,n=h();return Object(c.jsx)(d,{value:n,children:t})},j=function(){return Object(i.useContext)(f)},h=function(){var e=l.map((function(e){return{name:e,stepList:new Array(16).fill(0)}})),t=Object(a.a)(e),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(i.useState)(0),u=Object(s.a)(o,2);return{stepLists:c,updateStep:function(e,t,n){r((function(c){c[e].stepList[t]=n}))},currentStep:u[0],setCurrentStep:u[1],resetSteps:function(){r((function(){return e}))}}},p=function(e){var t=e.ref,n=e.latency,c=void 0===n?200:n,r=e.onSingleClick,o=void 0===r?function(){return null}:r,u=e.onDoubleClick,s=void 0===u?function(){return null}:u;Object(i.useEffect)((function(){var e=t.current,n=0,i=function(e){n+=1,setTimeout((function(){1===n?o(e):2===n&&s(e),n=0}),c)};return e.addEventListener("click",i),function(){e.removeEventListener("click",i)}}))},v=function(e,t,n){return{width:"2vw",height:"2vw",borderRadius:"15px",margin:"0.5vw",marginRight:(n+1)%4===0?"1.4vw":"0.5vw",border:"1px solid black",backgroundColor:t&&e>0?"#ffff00":t&&0===e?"#FFA500":e>.9?"#0a794b":e>0?"#14F396":"white"}},O=function(e){var t=e.index,n=e.velocity,r=e.handleClick,o=e.isCurrent,u=e.handleDoubleClick,s=Object(i.useRef)();return p({onSingleClick:r,onDoubleClick:u,ref:s,latency:250}),Object(c.jsx)("div",{ref:s,style:v(n,o,t)})},g={display:"flex",width:"100%"},m={position:"relative"},x={width:"50px"},k=function(){var e=j(),t=e.stepLists,n=e.updateStep,i=e.currentStep;return Object(c.jsx)("div",{style:m,children:t.map((function(e,t){return Object(c.jsxs)("div",{style:g,children:[Object(c.jsx)("div",{style:x,children:e.name}),e.stepList.map((function(e,r){return Object(c.jsx)(O,{index:r,velocity:e,handleClick:function(c){n(t,r,e>0?0:.8)},handleDoubleClick:function(){n(t,r,1)},isCurrent:r===i},r)}))]},t)}))})},C=n(4),w=function(){var e=(new C.c).toDestination();return{trigger:function(t,n,c){e.triggerAttackRelease("C2",t,n,c)}}},y=function(){var e=new C.b({frequency:11e3}),t=new C.d({volume:-12,noise:{type:"pink",playbackRate:3},envelope:{attack:.001,decay:.13,sustain:0,release:.03}}).connect(e).toDestination();new C.e(C.f,{volume:-10,oscillator:{partials:[0,2,3,4]},envelope:{attack:.001,decay:.17,sustain:0,release:.05}}).toDestination();return{trigger:function(e,n,c){t.triggerAttack(n,c)}}},S=function(e){var t=e.bpm;C.h.bpm.value=t;var n=j(),c=n.stepLists,r=n.setCurrentStep,o=Object(i.useMemo)((function(){return w()}),[]).trigger,u=Object(i.useMemo)((function(){return y()}),[]).trigger,l=Object(a.a)([]),f=Object(s.a)(l,2),d=f[0],b=f[1];return Object(i.useEffect)((function(){!function(){for(var e=function(){var e=Object(s.a)(n[t],2),i=e[0],a=void e[1];switch(d[i]&&C.h.clear(d[i]),i){case"0":a=C.h.schedule((function(e){c[i].stepList.forEach((function(t,n){t>0&&o("16n",e+n*C.g("16n").toSeconds(),t),C.a.schedule((function(){r(n)}),e+n*C.g("16n").toSeconds())}))}),"0");break;case"1":a=C.h.schedule((function(e){c[i].stepList.forEach((function(t,n){t&&u("16n",e+n*C.g("16n").toSeconds(),t)}))}),"0")}C.h.setLoopPoints(0,"1m"),C.h.loop=!0,b((function(e){e[i]=a}))},t=0,n=Object.entries(c);t<n.length;t++)e()}()}),[c]),{now:C.i()}},L=function(){var e=Object(i.useState)(90),t=Object(s.a)(e,2),n=t[0],r=t[1],o=(S({bpm:n}).now,j().resetSteps);return Object(c.jsxs)("div",{children:["BPM",Object(c.jsx)("input",{placeholder:"bpm",type:"number",min:"1",onChange:function(e){r(parseFloat(e.target.value))},value:n}),Object(c.jsx)("button",{onClick:function(){C.j(),C.h.start()},children:"start"}),Object(c.jsx)("button",{onClick:function(){C.h.pause()},children:"Stop"}),Object(c.jsx)("button",{onClick:function(){o()},children:"Reset"})]})},D={width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},F=function(){return Object(c.jsxs)("div",{style:D,children:[Object(c.jsx)("h1",{children:"Drum Machine"}),Object(c.jsxs)(b,{children:[Object(c.jsx)(L,{}),Object(c.jsx)(k,{})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),E()}},[[26,1,2]]]);