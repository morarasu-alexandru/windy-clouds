(this["webpackJsonpwindy-clouds"]=this["webpackJsonpwindy-clouds"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(27),o=n.n(s),r=(n(84),n(58),n(7)),l=n(13),i=n(142);function u(e,t){Object(a.useEffect)((function(){function n(n){n.keyCode===e&&t()}return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}}),[t,e])}var d=["html","css","javascript","design","react","cache","cookies","classes","framework","navigation","page","sitemap","wireframe","server","cdn","dns","http","https","functions","const","let","api","request","get","post","put","delete","typescript","ajax","sass","less","npm","yarn","preact","d3","bem","webpack"],b=function(e){return Math.floor(Math.random()*e)},j=1,f=2,O=3,m=function(e){switch(e){case j:return 1;case f:return 1.5;case O:return 2;default:return 1}},p=1300,_=function(){var e=Object(a.useState)({stock:d,active:[]}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(j),o=Object(r.a)(s,2),_=o[0],C=o[1],h=Object(a.useState)(2e4),v=Object(r.a)(h,2),x=v[0],g=v[1],y=Object(a.useState)(!1),S=Object(r.a)(y,2),k=S[0],T=S[1],M=Object(a.useRef)(!1),E=Object(a.useRef)(null),L=Object(a.useState)(p),w=Object(r.a)(L,2),N=w[0],G=w[1],I=Object(a.useCallback)((function(e){c((function(t){var n=t.stock,a=t.active;return a.some((function(t){return t.id===e}))?{stock:n,active:a.filter((function(t){return t.id!==e}))}:t}))}),[]),P=Object(a.useCallback)((function(){c((function(e){var t=e.stock,n=e.active,a=t[b(t.length-1)],c=1===t.length?d:t.filter((function(e){return e!==a})),s={label:a,id:Object(i.a)(),styleTop:b(500),lifeTime:x,pointsMultiplier:m(_)};return{stock:c,active:[].concat(Object(l.a)(n),[s])}}))}),[x,_]),B=Object(a.useCallback)((function(){T(!0),M.current=!0}),[]),F=Object(a.useCallback)((function(){T(!1),M.current=!1}),[]),R=Object(a.useCallback)((function(){c({stock:d,active:[]}),T(!1),M.current=!1,G(p)}),[]),A=Object(a.useCallback)((function(e){c((function(t){var n=t.active,a=t.stock,c=n.findIndex((function(t){return t.label===e})),s=Object(l.a)(n);return s.splice(c,1),{stock:a,active:s}}))}),[]),D=Object(a.useCallback)((function(e){C(e)}),[]),W=Object(a.useCallback)((function(){C((function(e){return function(){switch(e){case j:return f;case f:case O:return O;default:return j}}()}))}),[]),H=Object(a.useCallback)((function(){C((function(e){return function(){switch(e){case j:case f:return j;case O:return f;default:return j}}()}))}),[]);u(38,W),u(40,H);var K=Object(a.useCallback)((function(e){G(function(e){return 0===e?p:1===e?1083.3333333333335:p/(1+e/4)}(e))}),[]);Object(a.useEffect)((function(){return M.current&&(E.current=setInterval((function(){P()}),N)),function(){clearInterval(E.current),E.current=null}}),[I,P,k,N]),Object(a.useEffect)((function(){g(2e4*function(e){switch(e){case j:return 1;case f:return.8;case O:return.6;default:return 1}}(_))}),[_]);var U=Object(a.useMemo)((function(){return n.active}),[n.active]);return Object(a.useMemo)((function(){return{resetClouds:R,startGenerateClouds:B,stopGenerateClouds:F,destroyCloudByLabel:A,destroyCloudById:I,activeClouds:U,windSpeed:_,changeWindSpeed:D,changeCloudGeneratorCadence:K}}),[R,B,F,A,I,U,_,D,K])},C="START_GAME",h="RUNNING_GAME",v="END_GAME",x=n(63),g=n.n(x),y=n(2),S=Object(a.createContext)(),k=S.Provider,T=function(e){var t=Object(a.useState)(C),n=Object(r.a)(t,2),c=n[0],s=n[1],o=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(r.a)(s,2),l=o[0],i=o[1],u=Object(a.useRef)(null),d=Object(a.useCallback)((function(){u.current||(u.current=setInterval((function(){c((function(e){return e+1}))}),1e3))}),[]),b=Object(a.useCallback)((function(){clearInterval(u.current),u.current=null}),[]),j=Object(a.useCallback)((function(){c(0),i(0),clearInterval(u.current),u.current=null}),[]);return Object(a.useEffect)((function(){60===n&&(c(0),i((function(e){return e+1})))}),[n]),{seconds:n,minutes:l,startTimer:d,stopTimer:b,resetTimer:j}}(),l=o.seconds,i=o.minutes,u=o.startTimer,d=o.resetTimer,b=o.stopTimer,j=_(),f=j.startGenerateClouds,O=j.stopGenerateClouds,m=j.activeClouds,p=j.resetClouds,x=j.destroyCloudByLabel,S=j.destroyCloudById,T=j.windSpeed,M=j.changeWindSpeed,E=j.changeCloudGeneratorCadence,L=Object(a.useState)(""),w=Object(r.a)(L,2),N=w[0],G=w[1],I=Object(a.useState)(null),P=Object(r.a)(I,2),B=P[0],F=P[1],R=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(12),o=Object(r.a)(s,2),l=o[0],i=o[1],u=Object(a.useCallback)((function(){c(0)}),[]),d=Object(a.useCallback)((function(){i(12)}),[]);return{points:n,lives:l,incrementPoints:Object(a.useCallback)((function(e){c((function(t){return t+e}))}),[]),resetPoints:u,resetLives:d,decreaseOneLive:Object(a.useCallback)((function(){i((function(e){return e-1}))}),[])}}(),A=R.points,D=R.incrementPoints,W=R.resetPoints,H=R.lives,K=R.resetLives,U=R.decreaseOneLive,Y=Object(a.useCallback)((function(e){G(e.target.value)}),[]),q=Object(a.useCallback)((function(e){if(13===e.which&&m.some((function(e,t){return e.label===N}))){var t=m.find((function(e){return e.label===N}));D(N.length*t.pointsMultiplier),x(N),G("")}}),[m,x,D,N]),J=Object(a.useCallback)((function(){s(h),u(),f(),F(null)}),[f,u]),V=Object(a.useCallback)((function(){b(),F(A),O(),s(v),d(),p(),K(),W()}),[A,p,K,W,d,O,b]),Z=Object(a.useCallback)((function(e){S(e)}),[S]),z=g()((function(e){M(e.target.value)}),40);Object(a.useEffect)((function(){E(i)}),[E,i]);var Q=Object(a.useMemo)((function(){return c===C}),[c]),X=Object(a.useMemo)((function(){return c===v}),[c]);Object(a.useEffect)((function(){0===H&&V()}),[V,H]);var $=Object(a.useMemo)((function(){return{isStartModalOpen:Q,isEndModalOpen:X,startGenerateClouds:f,stopGenerateClouds:O,activeClouds:m,resetClouds:p,destroyCloudByLabel:x,destroyCloudById:S,windSpeed:T,changeWindSpeed:M,changeCloudGeneratorCadence:E,finalPoints:B,minutes:i,seconds:l,handleWindSpeedChange:z,points:A,lives:H,gameFaze:c,handleStopGame:V,handleDestroyCloud:Z,decreaseOneLive:U,playerText:N,handlePlayerTextChange:Y,handleKeyPress:q,handleStartGame:J}}),[Q,X,f,O,m,p,x,S,T,M,E,B,i,l,z,A,H,c,V,Z,U,N,Y,q,J]);return Object(y.jsx)(k,{value:$,children:e.children})},M=n(145),E=n(141),L=n(140),w=n(147),N=n(146),G=n(148),I=n(143),P=n(139),B=n(46),F=n.n(B),R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,border:"none",outline:"none",boxShadow:24},A=function(e){var t=e.isOpen,n=e.children;return Object(y.jsx)(P.a,{open:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",classes:{root:F.a.modalWrapper},BackdropProps:{classes:{root:F.a.backdropModal}},children:Object(y.jsx)(I.a,{sx:R,classes:{root:F.a.card},children:n})})},D=n(33),W=n.n(D),H=function(e){var t=e.inputRef,n=Object(a.useContext)(S),c=n.handleStartGame,s=n.isStartModalOpen,o=Object(a.useCallback)((function(){c(),setTimeout((function(){t.current.focus()}))}),[c,t]);return Object(y.jsxs)(A,{isOpen:s,children:[Object(y.jsxs)(N.a,{classes:{root:W.a.cardContent},children:[Object(y.jsx)(w.a,{classes:{root:W.a.cardTitle},gutterBottom:!0,variant:"h5",component:"div",children:"Windy clouds game"}),Object(y.jsx)(w.a,{variant:"body2",color:"text.secondary",align:"center",classes:{root:W.a.text},children:"Type the text from the clouds and hit enter."}),Object(y.jsx)(w.a,{variant:"body2",color:"text.secondary",align:"center",classes:{root:W.a.text},children:"You can change the speed of the clouds with up and down arrows. You win extra points for clouds that have increased speed."})]}),Object(y.jsx)(G.a,{children:Object(y.jsx)(L.a,{onClick:o,variant:"contained",classes:{root:W.a.button},children:"Start"})})]})},K=n(40),U=n.n(K),Y=function(e){var t=e.inputRef,n=Object(a.useContext)(S),c=n.isEndModalOpen,s=n.finalPoints,o=n.handleStartGame,r=Object(a.useCallback)((function(){o(),setTimeout((function(){t.current.focus()}))}),[o,t]);return Object(y.jsxs)(A,{isOpen:c,children:[Object(y.jsxs)(N.a,{classes:{root:U.a.cardContent},children:[Object(y.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"div",classes:{root:U.a.cardTitle},children:"End Game"}),Object(y.jsxs)(w.a,{variant:"body2",color:"text.secondary",classes:{root:U.a.text},children:["Total number of points: ",s]})]}),Object(y.jsx)(G.a,{children:Object(y.jsx)(L.a,{classes:{root:U.a.button},onClick:r,variant:"contained",color:"primary",children:"Try again"})})]})},q=Object(a.memo)((function(e){var t=e.value,n=Object(a.useMemo)((function(){return t>9?t:"0".concat(t)}),[t]);return Object(y.jsx)("span",{children:n})})),J=n(138),V=n(56),Z=n.n(V),z=function(e){var t=e.cloud,n=e.destroyAfter,c=e.autoDestroyCloud,s=e.decreaseOneLive,o=Object(a.useRef)(!0),r=Object(a.useCallback)((function(){c(t.id)}),[c,t.id]);return Object(a.useEffect)((function(){return function(){r(),clearInterval(o.current)}}),[r]),Object(a.useEffect)((function(){o.current=setTimeout((function(){s(),r()}),n)}),[s,n,r]),Object(y.jsx)(J.a.div,{style:{top:"".concat(t.styleTop,"px")},className:Z.a.CloudElement,animate:{x:1300},transition:{duration:n/1e3,ease:"linear"},children:Object(y.jsx)("span",{className:Z.a.CloudElementText,children:t.label})})},Q=n(66),X=n.n(Q),$=Object(a.memo)((function(){var e=Object(a.useContext)(S),t=e.activeClouds,n=e.handleDestroyCloud,c=e.decreaseOneLive;return Object(y.jsx)("section",{className:X.a.CloudsSection,children:null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsx)(z,{cloud:e,destroyAfter:e.lifeTime,autoDestroyCloud:n,decreaseOneLive:c},e.id)}))})})),ee=n(16),te=n.n(ee),ne=n(67),ae=n.n(ne),ce=function(){var e=Object(a.useContext)(S),t=e.minutes,n=e.seconds,c=e.windSpeed,s=e.handleWindSpeedChange,o=e.points,r=e.lives,i=e.gameFaze,u=e.handleStopGame,d=e.playerText,b=e.handleKeyPress,f=e.handlePlayerTextChange,m=Object(a.useRef)(null);return Object(y.jsxs)("main",{className:te.a.GameBoard,children:[Object(y.jsx)(H,{inputRef:m}),Object(y.jsx)(Y,{inputRef:m}),Object(y.jsxs)("header",{className:te.a.header,children:[Object(y.jsxs)("section",{className:te.a.timeSection,children:["Time: ",Object(y.jsx)(q,{value:t})," : ",Object(y.jsx)(q,{value:n})]}),Object(y.jsxs)("section",{className:te.a.speedControlSection,children:[Object(y.jsx)("div",{className:te.a.sliderText,children:"Wind speed"}),Object(y.jsx)("div",{className:te.a.slider,children:Object(y.jsx)(M.a,{sx:{width:200},children:Object(y.jsx)(E.a,{value:c,onChange:s,"aria-label":"Temperature",defaultValue:j,valueLabelDisplay:"auto",step:1,marks:!0,min:j,max:O,classes:{root:te.a.slider}})})})]}),Object(y.jsxs)("section",{className:te.a.statsSection,children:[Object(y.jsxs)("span",{className:te.a.statsPoints,children:["Points: ",o]}),Object(y.jsxs)("span",{className:te.a.statsLives,children:[Object(y.jsx)("span",{className:te.a.statsLivesLabel,children:"Lives:"}),r<13?Object(y.jsx)(y.Fragment,{children:Object(l.a)(Array(r)).map((function(e,t){return Object(y.jsx)(ae.a,{classes:{root:te.a.favoriteIcon}})}))}):Object(y.jsxs)("span",{children:[" ",r]})]})]}),i===h&&Object(y.jsx)("button",{className:te.a.button,onClick:u,children:"Stop Game"})]}),Object(y.jsx)($,{}),Object(y.jsxs)("div",{className:te.a.inputContainer,children:[Object(y.jsxs)("label",{className:te.a.inputLabel,htmlFor:"playerText",children:["Cloud name:"," "]}),Object(y.jsx)("input",{autoFocus:!0,ref:m,id:"playerText",className:te.a.inputField,type:"text",value:d,onChange:f,onKeyPress:b,autoComplete:"off"})]})]})};var se=function(){return Object(y.jsx)(T,{children:Object(y.jsx)(ce,{})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(se,{})}),document.getElementById("root")),oe()},16:function(e,t,n){e.exports={CloudElement:"game_CloudElement__MLgwS",root:"game_root__3uRPB",GameBoard:"game_GameBoard__22w2c",header:"game_header__IlHHE",speedControlSection:"game_speedControlSection__1IkUI",sliderText:"game_sliderText__10cH8",timeSection:"game_timeSection__hVE0s",statsPoints:"game_statsPoints__1qT2n",statsLives:"game_statsLives__1SmuY",inputLabel:"game_inputLabel__PS0OF",button:"game_button__1ZNDd",statsLivesLabel:"game_statsLivesLabel__1bsue",statsSection:"game_statsSection__1nAmi",inputContainer:"game_inputContainer__22U97",inputField:"game_inputField__2lcqQ",slider:"game_slider__2As_Z",favoriteIcon:"game_favoriteIcon__i5BS0"}},33:function(e,t,n){e.exports={CloudElement:"startModal_CloudElement__2mH7J",root:"startModal_root__1Nhj5",cardTitle:"startModal_cardTitle__MDNIw",cardContent:"startModal_cardContent__28a-h",button:"startModal_button__PafIA",text:"startModal_text__dfe1_"}},40:function(e,t,n){e.exports={CloudElement:"endModal_CloudElement__sT-C1",root:"endModal_root__1LSCH",cardTitle:"endModal_cardTitle__2e_8S",cardContent:"endModal_cardContent__3GDZK",button:"endModal_button__tfUBp",text:"endModal_text__1yyMn"}},46:function(e,t,n){e.exports={CloudElement:"modalCustom_CloudElement__2NxF_",root:"modalCustom_root__18jhu",backdropModal:"modalCustom_backdropModal__1Xrre",card:"modalCustom_card__3lXaV"}},56:function(e,t,n){e.exports={CloudElement:"cloud_CloudElement__MrSYl",root:"cloud_root__1RIRQ",CloudElementText:"cloud_CloudElementText__248rA"}},58:function(e,t,n){},66:function(e,t,n){e.exports={CloudsSection:"cloudsSection_CloudsSection__3FRnu"}},84:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.4c519197.chunk.js.map