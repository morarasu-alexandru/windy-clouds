(this["webpackJsonpwindy-clouds"]=this["webpackJsonpwindy-clouds"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(27),r=n.n(o),s=(n(82),n(58),n(7)),i=n(13),u=n(141);function l(e,t){Object(a.useEffect)((function(){function n(n){n.keyCode===e&&t()}return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}}),[t,e])}var d=["html","css","javascript","design","react","cache","cookies","classes","framework","navigation","page","sitemap","wireframe","server","cdn","dns","http","https","functions","const","let","api","request","get","post","put","delete","typescript","ajax","sass","less","npm","yarn","preact","d3","bem","webpack"],b=function(e){return Math.floor(Math.random()*e)},j=1,f=2,O=3,m=function(e){switch(e){case j:return 1;case f:return 1.5;case O:return 2;default:return 1}},p=1300,_=function(){var e=Object(a.useState)({stock:d,active:[]}),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(j),r=Object(s.a)(o,2),_=r[0],h=r[1],C=Object(a.useState)(2e4),v=Object(s.a)(C,2),x=v[0],g=v[1],y=Object(a.useState)(!1),S=Object(s.a)(y,2),k=S[0],T=S[1],E=Object(a.useRef)(!1),M=Object(a.useRef)(null),L=Object(a.useState)(p),w=Object(s.a)(L,2),G=w[0],N=w[1],I=Object(a.useCallback)((function(e){c((function(t){var n=t.stock,a=t.active;return a.some((function(t){return t.id===e}))?{stock:n,active:a.filter((function(t){return t.id!==e}))}:t}))}),[]),P=Object(a.useCallback)((function(){c((function(e){var t=e.stock,n=e.active,a=t[b(t.length-1)],c=1===t.length?d:t.filter((function(e){return e!==a})),o={label:a,id:Object(u.a)(),styleTop:b(500),lifeTime:x,pointsMultiplier:m(_)};return{stock:c,active:[].concat(Object(i.a)(n),[o])}}))}),[x,_]),B=Object(a.useCallback)((function(){T(!0),E.current=!0}),[]),R=Object(a.useCallback)((function(){T(!1),E.current=!1}),[]),F=Object(a.useCallback)((function(){c({stock:d,active:[]}),T(!1),E.current=!1,N(p)}),[]),W=Object(a.useCallback)((function(e){c((function(t){var n=t.active,a=t.stock,c=n.findIndex((function(t){return t.label===e})),o=Object(i.a)(n);return o.splice(c,1),{stock:a,active:o}}))}),[]),D=Object(a.useCallback)((function(e){h(e)}),[]),A=Object(a.useCallback)((function(){h((function(e){return function(){switch(e){case j:return f;case f:case O:return O;default:return j}}()}))}),[]),K=Object(a.useCallback)((function(){h((function(e){return function(){switch(e){case j:case f:return j;case O:return f;default:return j}}()}))}),[]);l(38,A),l(40,K);var V=Object(a.useCallback)((function(e){N(function(e){return 0===e?p:1===e?1083.3333333333335:p/(1+e/4)}(e))}),[]);Object(a.useEffect)((function(){return E.current&&(M.current=setInterval((function(){P()}),G)),function(){clearInterval(M.current),M.current=null}}),[I,P,k,G]),Object(a.useEffect)((function(){g(2e4*function(e){switch(e){case j:return 1;case f:return.8;case O:return.6;default:return 1}}(_))}),[_]);var q=Object(a.useMemo)((function(){return n.active}),[n.active]);return Object(a.useMemo)((function(){return{resetClouds:F,startGenerateClouds:B,stopGenerateClouds:R,destroyCloudByLabel:W,destroyCloudById:I,activeClouds:q,windSpeed:_,changeWindSpeed:D,changeCloudGeneratorCadence:V}}),[F,B,R,W,I,q,_,D,V])},h="START_GAME",C="RUNNING_GAME",v="END_GAME",x=n(63),g=n.n(x),y=n(2),S=Object(a.createContext)({hasInputError:!1}),k=S.Provider,T=function(e){var t=Object(a.useState)(h),n=Object(s.a)(t,2),c=n[0],o=n[1],r=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),r=Object(s.a)(o,2),i=r[0],u=r[1],l=Object(a.useRef)(null),d=Object(a.useCallback)((function(){l.current||(l.current=setInterval((function(){c((function(e){return e+1}))}),1e3))}),[]),b=Object(a.useCallback)((function(){clearInterval(l.current),l.current=null}),[]),j=Object(a.useCallback)((function(){c(0),u(0),clearInterval(l.current),l.current=null}),[]);return Object(a.useEffect)((function(){60===n&&(c(0),u((function(e){return e+1})))}),[n]),{seconds:n,minutes:i,startTimer:d,stopTimer:b,resetTimer:j}}(),i=r.seconds,u=r.minutes,l=r.startTimer,d=r.resetTimer,b=r.stopTimer,j=_(),f=j.startGenerateClouds,O=j.stopGenerateClouds,m=j.activeClouds,p=j.resetClouds,x=j.destroyCloudByLabel,S=j.destroyCloudById,T=j.windSpeed,E=j.changeWindSpeed,M=j.changeCloudGeneratorCadence,L=Object(a.useState)(""),w=Object(s.a)(L,2),G=w[0],N=w[1],I=Object(a.useState)(null),P=Object(s.a)(I,2),B=P[0],R=P[1],F=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(12),r=Object(s.a)(o,2),i=r[0],u=r[1],l=Object(a.useCallback)((function(){c(0)}),[]),d=Object(a.useCallback)((function(){u(12)}),[]);return{points:n,lives:i,incrementPoints:Object(a.useCallback)((function(e){c((function(t){return t+e}))}),[]),resetPoints:l,resetLives:d,decreaseOneLive:Object(a.useCallback)((function(){u((function(e){return e-1}))}),[])}}(),W=F.points,D=F.incrementPoints,A=F.resetPoints,K=F.lives,V=F.resetLives,q=F.decreaseOneLive,J=Object(a.useState)(!1),U=Object(s.a)(J,2),Y=U[0],z=U[1],X=Object(a.useCallback)((function(e){N(e.target.value),z(!1)}),[]),Z=Object(a.useCallback)((function(e){if(13===e.which)if(m.some((function(e,t){return e.label===G}))){var t=m.find((function(e){return e.label===G}));D(G.length*t.pointsMultiplier),x(G),N("")}else console.log("error: "),z(!0),N("")}),[m,x,D,G]),H=Object(a.useCallback)((function(){o(C),l(),f(),R(null)}),[f,l]),Q=Object(a.useCallback)((function(){b(),R(W),O(),o(v),d(),p(),V(),A()}),[W,p,V,A,d,O,b]),$=Object(a.useCallback)((function(e){S(e)}),[S]),ee=g()((function(e){E(e.target.value)}),40);Object(a.useEffect)((function(){M(u)}),[M,u]);var te=Object(a.useMemo)((function(){return c===h}),[c]),ne=Object(a.useMemo)((function(){return c===v}),[c]);Object(a.useEffect)((function(){0===K&&Q()}),[Q,K]);var ae=Object(a.useMemo)((function(){return{isStartModalOpen:te,isEndModalOpen:ne,startGenerateClouds:f,stopGenerateClouds:O,activeClouds:m,resetClouds:p,destroyCloudByLabel:x,destroyCloudById:S,windSpeed:T,changeWindSpeed:E,changeCloudGeneratorCadence:M,finalPoints:B,minutes:u,seconds:i,handleWindSpeedChange:ee,points:W,lives:K,gameFaze:c,handleStopGame:Q,handleDestroyCloud:$,decreaseOneLive:q,playerText:G,handlePlayerTextChange:X,handleKeyPress:Z,handleStartGame:H,hasInputError:Y}}),[te,ne,f,O,m,p,x,S,T,E,M,B,u,i,ee,W,K,c,Q,$,q,G,X,Z,H,Y]);return Object(y.jsx)(k,{value:ae,children:e.children})},E=n(144),M=n(140),L=n(139),w=n(146),G=n(145),N=n(147),I=n(142),P=n(138),B=n(46),R=n.n(B),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,border:"none",outline:"none",boxShadow:24},W=function(e){var t=e.isOpen,n=e.children;return Object(y.jsx)(P.a,{open:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",classes:{root:R.a.modalWrapper},BackdropProps:{classes:{root:R.a.backdropModal}},children:Object(y.jsx)(I.a,{sx:F,classes:{root:R.a.card},children:n})})},D=n(33),A=n.n(D),K=function(e){var t=e.inputRef,n=Object(a.useContext)(S),c=n.handleStartGame,o=n.isStartModalOpen,r=Object(a.useCallback)((function(){c(),setTimeout((function(){t.current.focus()}))}),[c,t]);return Object(y.jsxs)(W,{isOpen:o,children:[Object(y.jsxs)(G.a,{classes:{root:A.a.cardContent},children:[Object(y.jsx)(w.a,{classes:{root:A.a.cardTitle},gutterBottom:!0,variant:"h5",component:"div",children:"Windy clouds game"}),Object(y.jsx)(w.a,{variant:"body2",color:"text.secondary",align:"center",classes:{root:A.a.text},children:"Type the text from the clouds and hit enter."}),Object(y.jsx)(w.a,{variant:"body2",color:"text.secondary",align:"center",classes:{root:A.a.text},children:"You can change the speed of the clouds with up and down arrows. You win extra points for clouds that have increased speed."})]}),Object(y.jsx)(N.a,{children:Object(y.jsx)(L.a,{onClick:r,variant:"contained",classes:{root:A.a.button},children:"Start"})})]})},V=n(40),q=n.n(V),J=function(e){var t=e.inputRef,n=Object(a.useContext)(S),c=n.isEndModalOpen,o=n.finalPoints,r=n.handleStartGame,s=Object(a.useCallback)((function(){r(),setTimeout((function(){t.current.focus()}))}),[r,t]);return Object(y.jsxs)(W,{isOpen:c,children:[Object(y.jsxs)(G.a,{classes:{root:q.a.cardContent},children:[Object(y.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"div",classes:{root:q.a.cardTitle},children:"End Game"}),Object(y.jsxs)(w.a,{variant:"body2",color:"text.secondary",classes:{root:q.a.text},children:["Total number of points: ",o]})]}),Object(y.jsx)(N.a,{children:Object(y.jsx)(L.a,{classes:{root:q.a.button},onClick:s,variant:"contained",color:"primary",children:"Try again"})})]})},U=Object(a.memo)((function(e){var t=e.value,n=Object(a.useMemo)((function(){return t>9?t:"0".concat(t)}),[t]);return Object(y.jsx)("span",{children:n})})),Y=n(137),z=n(56),X=n.n(z),Z=function(e){var t=e.cloud,n=e.destroyAfter,c=e.autoDestroyCloud,o=e.decreaseOneLive,r=Object(a.useRef)(!0),s=Object(a.useCallback)((function(){c(t.id)}),[c,t.id]);return Object(a.useEffect)((function(){return function(){s(),clearInterval(r.current)}}),[s]),Object(a.useEffect)((function(){r.current=setTimeout((function(){o(),s()}),n)}),[o,n,s]),Object(y.jsx)(Y.a.div,{style:{top:"".concat(t.styleTop,"px")},className:X.a.CloudElement,animate:{x:1300},transition:{duration:n/1e3,ease:"linear"},children:Object(y.jsx)("span",{className:X.a.CloudElementText,children:t.label})})},H=n(66),Q=n.n(H),$=Object(a.memo)((function(){var e=Object(a.useContext)(S),t=e.activeClouds,n=e.handleDestroyCloud,c=e.decreaseOneLive;return Object(y.jsx)("section",{className:Q.a.CloudsSection,children:null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsx)(Z,{cloud:e,destroyAfter:e.lifeTime,autoDestroyCloud:n,decreaseOneLive:c},e.id)}))})})),ee=n(15),te=n.n(ee),ne=n(67),ae=n.n(ne),ce=function(){var e=Object(a.useContext)(S),t=e.minutes,n=e.seconds,c=e.windSpeed,o=e.handleWindSpeedChange,r=e.points,s=e.lives,u=e.gameFaze,l=e.handleStopGame,d=e.playerText,b=e.handleKeyPress,f=e.handlePlayerTextChange,m=e.hasInputError,p=Object(a.useRef)(null);return Object(y.jsxs)("main",{className:te.a.GameBoard,children:[Object(y.jsx)(K,{inputRef:p}),Object(y.jsx)(J,{inputRef:p}),Object(y.jsxs)("header",{className:te.a.header,children:[Object(y.jsxs)("section",{className:te.a.timeSection,children:["Time: ",Object(y.jsx)(U,{value:t})," : ",Object(y.jsx)(U,{value:n})]}),Object(y.jsxs)("section",{className:te.a.speedControlSection,children:[Object(y.jsx)("div",{className:te.a.sliderText,children:"Wind speed"}),Object(y.jsx)("div",{className:te.a.slider,children:Object(y.jsx)(E.a,{sx:{width:200},children:Object(y.jsx)(M.a,{value:c,onChange:o,"aria-label":"Temperature",defaultValue:j,valueLabelDisplay:"auto",step:1,marks:!0,min:j,max:O,classes:{root:te.a.slider}})})})]}),Object(y.jsxs)("section",{className:te.a.statsSection,children:[Object(y.jsxs)("span",{className:te.a.statsPoints,children:["Points: ",r]}),Object(y.jsxs)("span",{className:te.a.statsLives,children:[Object(y.jsx)("span",{className:te.a.statsLivesLabel,children:"Lives:"}),s<13?Object(y.jsx)(y.Fragment,{children:Object(i.a)(Array(s)).map((function(e,t){return Object(y.jsx)(ae.a,{classes:{root:te.a.favoriteIcon}},t)}))}):Object(y.jsxs)("span",{children:[" ",s]})]})]}),u===C&&Object(y.jsx)("button",{className:te.a.button,onClick:l,children:"Stop Game"})]}),Object(y.jsx)($,{}),Object(y.jsxs)("div",{className:"".concat(te.a.inputContainer," ").concat(m&&te.a["inputContainer--hasError"]),children:[Object(y.jsxs)("label",{className:te.a.inputLabel,htmlFor:"playerText",children:["Cloud name:"," "]}),Object(y.jsx)("input",{autoFocus:!0,ref:p,id:"playerText",className:te.a.inputField,type:"text",value:d,onChange:f,onKeyPress:b,autoComplete:"off"})]})]})};var oe=function(){return Object(y.jsx)(T,{children:Object(y.jsx)(ce,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(oe,{})}),document.getElementById("root")),re()},15:function(e,t,n){e.exports={CloudElement:"game_CloudElement__ayZV_",root:"game_root__3WYjU",GameBoard:"game_GameBoard__2xEAC",header:"game_header__1Twxr",speedControlSection:"game_speedControlSection__-Xe__",sliderText:"game_sliderText__2mb7y",timeSection:"game_timeSection__m73GG",statsPoints:"game_statsPoints__3gMIs",statsLives:"game_statsLives__1Drc_",inputLabel:"game_inputLabel__2jDpv",button:"game_button__3bszg",statsLivesLabel:"game_statsLivesLabel__3Vi2d",statsSection:"game_statsSection__6gKRK",inputContainer:"game_inputContainer__2S1rU","inputContainer--hasError":"game_inputContainer--hasError__1ehKr",inputField:"game_inputField__DXHic",slider:"game_slider__3vOu-",favoriteIcon:"game_favoriteIcon__2Wk3J"}},33:function(e,t,n){e.exports={CloudElement:"startModal_CloudElement__1qax_",root:"startModal_root__3YLni",cardTitle:"startModal_cardTitle__3YqJl",cardContent:"startModal_cardContent__J7QXH",button:"startModal_button__1yxGf",text:"startModal_text__3oVqe"}},40:function(e,t,n){e.exports={CloudElement:"endModal_CloudElement__3GNqu",root:"endModal_root__vgqxV",cardTitle:"endModal_cardTitle__jnj4O",cardContent:"endModal_cardContent__2nRZ6",button:"endModal_button__2-OI9",text:"endModal_text__3ZVoK"}},46:function(e,t,n){e.exports={CloudElement:"modalCustom_CloudElement__n_13A",root:"modalCustom_root__3UJur",backdropModal:"modalCustom_backdropModal__2Luiy",card:"modalCustom_card__38rPV"}},56:function(e,t,n){e.exports={CloudElement:"cloud_CloudElement__1SoSj",root:"cloud_root__1UWO2",CloudElementText:"cloud_CloudElementText__2zBoR"}},58:function(e,t,n){},66:function(e,t,n){e.exports={CloudsSection:"cloudsSection_CloudsSection__2_Q9w"}},82:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.8edea4a3.chunk.js.map