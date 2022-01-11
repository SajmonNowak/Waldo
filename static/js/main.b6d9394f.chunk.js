(this.webpackJsonpwaldo=this.webpackJsonpwaldo||[]).push([[0],{62:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,l,d,g,j,b,p,h,u,A,x,O=t(6),f=t.n(O),m=t(41),w=t.n(m),C=t(26),v=t(11),B=t(12),W=t(13),F=W.b.div(a||(a=Object(B.a)(["\n  display: flex;\n  color: #011627;\n  background-color:  #FF9F1C;\n  height: 100vh;\n  padding: 50px;\n\n  h2 {\n      font-size: 42px;\n  }\n\n  .imgDiv {\n    width: 30%;\n    margin-left: auto;\n  }\n\n  .imgDiv img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .leftContainer {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    align-items: center;\n  }\n\n  .personalTime{\n    display: flex;\n    font-size: 32px;\n    margin-top: 50px;\n    \n     p{\n       margin-left: 5px;\n       color: red;\n       font-weight: bold;\n     }\n  }\n\n  .highScoreTable {\n    justify-self: center;\n    height: 500px;\n    margin-top: 50px;\n\n    h4{\n      text-align: center;\n      font-size: 24px;\n    }\n\n    .highscores {\n      border-top: 2px solid red;\n      padding-top: 10px;\n    }\n  }\n"]))),V=t.p+"static/media/locnar.314cec99.jpg",q=W.b.button(i||(i=Object(B.a)(["\nwidth: 120px;\nheight: 50px;\nbackground-color: #e71d36;\ncolor: #fdfffc;\nfont-weight: bold;\nfont-size: 20px;\nmargin: 10px;\nmargin-top: 40px;\nborder:none;\n\n&:hover {\n    background-color: #ff0522;\n}\n"]))),y=t(0),U=t.n(y),D=t(3),Q=t(45),S=t(17),E={apiKey:"AIzaSyDXYpEhfVqFcGn24xbduBvKlEtqhsVvSPc",authDomain:"waldo-f6529.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/Waldo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_apiKey:"AIzaSyDXYpEhfVqFcGn24xbduBvKlEtqhsVvSPc",REACT_APP_authDomain:"waldo-f6529.firebaseapp.com",REACT_APP_projectId:"waldo-f6529",REACT_APP_storageBucket:"waldo-f6529.appspot.com",REACT_APP_messagingSenderId:"654322836777",REACT_APP_appId:"1:654322836777:web:e3cd398c5f062cd57b0338"}).REACT_APP_databaseURL,projectId:"waldo-f6529",storageBucket:"waldo-f6529.appspot.com",messagingSenderId:"654322836777",appId:"1:654322836777:web:e3cd398c5f062cd57b0338"},Y=(Object(Q.a)(E),Object(S.f)()),J=function(n){var e=Object(O.useState)(null),t=Object(v.a)(e,2),a=t[0],i=t[1];return Object(O.useEffect)((function(){var e=function(){var e=Object(D.a)(U.a.mark((function e(){var t,a,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(S.b)(Y,n),a=Object(S.i)(t,Object(S.h)("time"),Object(S.g)(10)),e.next=4,Object(S.e)(a);case 4:r=e.sent,c=[],r.forEach((function(n){c.push(n.data())})),i(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),[a]},H=W.b.div(r||(r=Object(B.a)(["\n  display: flex;\n  width: 100%;\n  height: 50px;\n  font-size: 24px;\n\n  .name{\n      width: 200px;\n  }\n\n  .time {\n      margin-left: 50px;\n  }\n\n"]))),R=t(4),I=t(39),K=function(n){var e=n.restart,t=n.levelData,a=n.time,i=J(t.name),r=Object(v.a)(i,2),c=r[0];r[1];return Object(R.jsxs)(F,{children:[Object(R.jsxs)("div",{className:"leftContainer",children:[Object(R.jsx)("h2",{children:"Good Job! You found every character!"}),Object(R.jsxs)("div",{className:"personalTime",children:["Your time was: ",Object(R.jsx)("p",{children:I(a.end-a.start)})]}),c&&Object(R.jsxs)("div",{className:"highScoreTable",children:[Object(R.jsx)("h4",{children:"Best Times "}),Object(R.jsx)("div",{className:"highscores",children:(console.log(c),c.map((function(n){return Object(R.jsxs)(H,{children:[Object(R.jsx)("div",{className:"name",children:n.name}),Object(R.jsx)("div",{className:"time",children:n.time})]})})))})]}),Object(R.jsx)(q,{onClick:e,children:"Restart"})]}),Object(R.jsx)("div",{className:"imgDiv",children:Object(R.jsx)("img",{src:t.img})})]})},L=W.b.div(c||(c=Object(B.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  height: 210px;\n  background-color: #fdfffc;\n  left: ",";\n  top: ",";\n  border: 2px solid black;\n"])),(function(n){return"right"===n.side?n.x+"px":n.x-270+"px"}),(function(n){return n.y-105+"px"})),P=W.b.div(o||(o=Object(B.a)(["\n  background-color: ",";\n  display: flex;\n  height: 80px;\n  width: 100%;\n  font-size: 24px;\n  color: #011627;\n  position: relative;\n\n  img {\n    width: 80px;\n  }\n\n  .cross {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n  div {\n    align-self: center;\n    margin: auto;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.found?"grey":"white"}),(function(n){return n.found?"undefined":"#ff9f1c"})),k="data:image/png;base64,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",T=function(n){var e=n.clickedPosition,t=n.handleSelection,a=n.characters,i=n.wantedCharacters,r=function(n){return!i.some((function(e){return e===n}))};return Object(R.jsx)(L,{x:e.x,y:e.y,side:e.x>window.innerWidth/2?"left":"right",children:a.map((function(n){return Object(R.jsxs)(P,{onClick:function(n){return t(n.currentTarget.id.toLowerCase())},id:n.name,found:r(n.name.toLowerCase()),children:[Object(R.jsx)("img",{src:n.img,alt:n.name}),Object(R.jsx)("div",{children:n.name}),r(n.name.toLowerCase())&&Object(R.jsx)("img",{className:"cross",src:k,alt:"found"})]},n.name)}))})},N=W.b.img(s||(s=Object(B.a)(["\n    width: 100%;\n"]))),G=function(n){var e=document.body.clientWidth;return Math.ceil(1e3*n/e)},Z=function(n){var e=n.x,t=n.y;return{x:G(e),y:G(t)}},M=function(n){var e=n.openCharSelection,t=n.setClickedPosition,a=n.levelImg;return Object(R.jsx)(N,{src:a,onClick:function(n){var a;!function(n){t({x:n.x,y:n.y})}({x:(a=n).nativeEvent.offsetX,y:a.nativeEvent.offsetY}),e()}})},z=W.b.div(l||(l=Object(B.a)(["\n  width: 100px;\n  position: relative;\n  font-size: 22px;\n\n  .imgDiv {\n    position: relative;\n    width: 100px;\n    height: 100px;\n  }\n\n  img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n\n  .cross {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0px;\n    left: 0px;\n  }\n\n  .name {\n      margin-top:10px;\n    text-align: center;\n  }\n"]))),X=W.b.div(d||(d=Object(B.a)(["\n  margin-top: 20px;\n  font-size: 32px;\n  color: ",";\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  right: 50px;\n  width: 300px;\n  height: auto;\n  border: 2px solid #ff9f1c;\n  border-radius: 20px;\n  padding: 5px;\n  background-color: ",';\n\n  .imgDiv {\n    display: flex;\n    margin-top: 10px;\n  }\n\n  .time {\n    margin-left: 40px;\n      color: #e71d36;\n  }\n\n  .closedMenu {\n    display: flex;\n    align-items: center;\n  }\n\n  .icon {\n    font-size: 28px;\n    margin-right: 10px;\n  }\n\n  .togglePart {\n    background-color: "red";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .infoText {\n    padding-top: 20px;\n    padding-bottom: 10px;\n    font-size: 18px;\n  }\n'])),(function(n){return n.open?"#011627":"#ff9f1c"}),(function(n){return n.open?"#ff9f1c":""})),_=t(30),$=t.n(_),nn=function(){return Object(R.jsxs)($.a,{formatValue:function(n){return"".concat(n<10?"0".concat(n):n)},children:[Object(R.jsx)($.a.Minutes,{}),":",Object(R.jsx)($.a.Seconds,{})]})},en=function(n){var e=Object(O.useState)(n||void 0),t=Object(v.a)(e,2),a=t[0],i=t[1],r=Object(O.useCallback)((function(){return i((function(n){return!n}))}),[]);return[a,r]},tn=t(29),an=function(n){var e=n.levelData,t=n.wantedCharacters,a=en(!0),i=Object(v.a)(a,2),r=i[0],c=i[1],o=function(n){return!t.some((function(e){return e===n}))};return Object(R.jsxs)(X,{open:r,children:[Object(R.jsxs)("div",{className:"closedMenu",onClick:c,children:[r?Object(R.jsx)(tn.b,{className:"icon"}):Object(R.jsx)(tn.a,{className:"icon"}),Object(R.jsx)("div",{children:"Wanted"}),Object(R.jsx)("div",{className:"time",children:Object(R.jsx)(nn,{})})]}),r&&Object(R.jsxs)("div",{className:"togglePart",children:[Object(R.jsx)("div",{onClick:c,className:"imgDiv",children:e.characters.map((function(n){return Object(R.jsxs)(z,{children:[Object(R.jsxs)("div",{className:"imgDiv",children:[Object(R.jsx)("img",{src:n.img}),o(n.name.toLowerCase())&&Object(R.jsx)("img",{src:k,alt:"found"})]}),Object(R.jsx)("div",{className:"name",children:n.name})]})}))}),Object(R.jsx)("p",{className:"infoText",children:"Click to close"})]})]})},rn=function(){var n=Object(D.a)(U.a.mark((function n(e){var t,a,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(S.c)(Y,"coordinates",e),n.next=3,Object(S.d)(t);case 3:return(a=n.sent).exists()?i=a.data():console.log("No such document!"),n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),cn=rn,on=function(n){var e=n.levelData,t=n.endGame,a=Object(O.useState)(!1),i=Object(v.a)(a,2),r=i[0],c=i[1],o=Object(O.useState)({x:null,y:null}),s=Object(v.a)(o,2),l=s[0],d=s[1],g=Object(O.useState)(e.characters.map((function(n){return n.name.toLowerCase()}))),j=Object(v.a)(g,2),b=j[0],p=j[1],h=function(n){var e=Z(l);return e.x>n.x1&&e.x<n.x2&&(e.y>n.y1&&e.y<n.y2||void 0)},u=function(){var n=Object(D.a)(U.a.mark((function n(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,cn(e);case 2:t=n.sent,h(t)&&A(e);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),A=function(n){var e=b.filter((function(e){return e!==n}));p(e)};return Object(O.useEffect)((function(){0===b.length&&t()}),[b]),Object(R.jsxs)("div",{style:{position:"relative"},children:[Object(R.jsx)(an,{levelData:e,wantedCharacters:b}),Object(R.jsx)(M,{openCharSelection:function(){c(!r)},setClickedPosition:d,levelImg:e.img}),r&&Object(R.jsx)(T,{clickedPosition:l,handleSelection:function(n){c(!1),u(n)},characters:e.characters,wantedCharacters:b})]})},sn=[{name:"Loc Nar",img:V,characters:[{name:"Ryuk",img:t.p+"static/media/Ryuk.df47d7f0.png"},{name:"Stewie",img:t.p+"static/media/Stewie.df82f0fb.png"},{name:"Ash",img:t.p+"static/media/Ash.524b2eb0.png"}]},{name:"Universe 113",img:t.p+"static/media/universe113.c4254385.jpg",characters:[{name:"Waldo",img:t.p+"static/media/waldo.5484b9e6.png"},{name:"R2-D2",img:t.p+"static/media/r2d2.b028d780.png"},{name:"Johnny",img:"data:image/png;base64,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"}]}],ln=t.p+"static/media/background.c7c0e5b2.jpg",dn=W.b.div(g||(g=Object(B.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url(",");\n    color: #011627;\n    font-size: 24px;\n    padding: 50px;\n\n    h2 {\n        font-size: 42px;\n    }\n\n    .marginBot {\n        margin-bottom: 20px;\n    }\n"])),ln),gn=W.b.div(j||(j=Object(B.a)(["\ncolor: #011627;\ndisplay: flex;\nalign-items: center;\nwidth: 750px;\nmargin: 20px;\nborder: 4px solid #011627;\nborder-radius: 20px;\nbackground-color: #FDFFFC;\ntransition: all .2s ease-in-out;\n\n.levelImgDiv{\n    width: 300px;\n    height: 450px;\n    border-radius: 20px;\n    overflow: hidden;\n} \n\n.levelImgDiv img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n&:hover {\n    transform: scale(1.05);\n    border-color: #ff9f1c;\n}\n  \n"]))),jn=W.b.div(b||(b=Object(B.a)(["\n\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    margin-left: 50px;\n    \n\n    img{\n        width: 100px;\n        height: 100px;\n    }\n\n    div{\n        margin-left: 40px;\n    }\n\n  \n"]))),bn=function(n){var e=n.levelData,t=n.startLevel;return Object(R.jsxs)(gn,{onClick:function(){return t(e)},children:[Object(R.jsx)("div",{className:"levelImgDiv",children:Object(R.jsx)("img",{src:e.img,alt:e.name})}),Object(R.jsx)("div",{children:e.characters.map((function(n){return Object(R.jsxs)(jn,{children:[Object(R.jsx)("img",{src:n.img,alt:n.name}),Object(R.jsx)("div",{children:n.name})]},n.name)}))})]})},pn=function(n){var e=n.startLevel,t=n.playerName;return Object(R.jsxs)(dn,{children:[Object(R.jsxs)("h2",{children:["Welcome ",t]}),Object(R.jsx)("div",{className:"marginBot",children:"Choose your Level"}),sn.map((function(n){return Object(R.jsx)(bn,{levelData:n,startLevel:e},n.name)}))]})},hn=W.b.div(p||(p=Object(B.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 24px;\n\n  .card {\n      padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 800px;\n    height: 400px;\n    border-radius: 20px;\n    background: #ff9f1c;\n\n    a {\n        text-decoration: none;\n        color: #e71d36;\n    }\n  }\n"]))),un=function(n){var e=n.toggle;return Object(R.jsx)(hn,{children:Object(R.jsxs)("div",{className:"card",children:[Object(R.jsxs)("p",{children:["The Art used in this project was created by ",Object(R.jsx)("span",{style:{fontWeight:"bold"},children:"Egor Klyuchnyk"}),". ",Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"Check out his awesome work at ",Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.artstation.com/chekavo",children:"this page "}),". ",Object(R.jsx)("br",{}),"You can also support him "," ",Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222",children:"here"}),". ",Object(R.jsx)("br",{}),"The rest of this game was made as a little coding exercice by",Object(R.jsx)("a",{href:"https://github.com/SajmonNowak",rel:"noreferrer",target:"_blank",children:" me"}),". ",Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"Enjoy =)"]}),Object(R.jsx)(q,{onClick:e,children:"Ok, Got It!"})]})})},An=W.b.div(h||(h=Object(B.a)(["\nfont-size: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: url(",") blue;\n  color: #011627;\n  font-weight: bold;\n"])),ln),xn=W.b.input(u||(u=Object(B.a)(["\nmargin-top: 40px;\nmargin-bottom: 20px;\n  width: 400px;\n  height: 60px;\n  font-size: 24px;\n"]))),On=W.b.div(A||(A=Object(B.a)(["\npadding: 2px;\nbackground-color: white;\nfont-size: 24px;\nmargin-top: 10px;\ncolor: #e71d36\n  \n"]))),fn=function(n){var e=n.setPlayerName,t=n.setPhase,a=Object(O.useState)(""),i=Object(v.a)(a,2),r=i[0],c=i[1],o=Object(O.useState)(!1),s=Object(v.a)(o,2),l=s[0],d=s[1];return Object(R.jsxs)(An,{children:[Object(R.jsx)("div",{children:"What is your name?"}),Object(R.jsx)(xn,{onChange:function(n){return function(n){l&&d(!1),c(n.target.value)}(n)}}),Object(R.jsx)(q,{onClick:function(){r.length>0?(e(r),t(Bn.SELECTION)):d("Please enter a name")},children:"Play"}),l&&Object(R.jsx)(On,{children:l})]})},mn=Object(W.a)(x||(x=Object(B.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  };\n  "]))),wn=function(){var n=Object(D.a)(U.a.mark((function n(e,t,a){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(S.a)(Object(S.b)(Y,a.name),{name:e,time:t});case 2:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),Cn=wn,vn=t(39),Bn={NAME:"Getting the name of User",SELECTION:"Selection of level",END:"Showing End Screen",PLAY:"Playing the game"};var Wn=function(){var n=en(),e=Object(v.a)(n,2),t=e[0],a=e[1],i=Object(O.useState)(Bn.NAME),r=Object(v.a)(i,2),c=r[0],o=r[1],s=Object(O.useState)(null),l=Object(v.a)(s,2),d=l[0],g=l[1],j=Object(O.useState)(),b=Object(v.a)(j,2),p=b[0],h=b[1],u=Object(O.useState)({start:null,end:null}),A=Object(v.a)(u,2),x=A[0],m=A[1];return Object(R.jsxs)("div",{style:{position:"relative"},children:[Object(R.jsx)(mn,{}),c===Bn.NAME&&Object(R.jsxs)(f.a.Fragment,{children:[!t&&Object(R.jsx)(un,{toggle:a}),Object(R.jsx)(fn,{setPlayerName:h,setPhase:o})]}),c===Bn.SELECTION&&Object(R.jsx)(pn,{startLevel:function(n){g(n),o(Bn.PLAY),m(Object(C.a)(Object(C.a)({},x),{},{start:Date.now()}))},playerName:p}),c===Bn.PLAY&&Object(R.jsx)(on,{levelData:d,endGame:function(){o(Bn.END),m(Object(C.a)(Object(C.a)({},x),{},{end:Date.now()})),function(n){var e=vn(n-x.start);Cn(p,e,d)}(Date.now())}}),c===Bn.END&&Object(R.jsx)(K,{levelData:d,restart:function(){o(Bn.SELECTION)},time:x})]})};w.a.render(Object(R.jsx)(f.a.StrictMode,{children:Object(R.jsx)(Wn,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b6d9394f.chunk.js.map