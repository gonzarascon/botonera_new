(this.webpackJsonpbotonera_new=this.webpackJsonpbotonera_new||[]).push([[0],{19:function(n,e,t){n.exports=t(43)},43:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(12),l=t.n(o),i=t(2),c=t(3),u=t(4),s=t.n(u);function d(){var n=Object(i.a)(["\n    border-radius: 20px;\n    background: ",";\n    box-shadow: 8px 8px 25px\n        ",",\n      -8px -8px 25px\n        ",";\n  "]);return d=function(){return n},n}var b="(min-width: 36em)",h="(min-width: 48em)",f={darkText:s.a.rgb(10,19,39).lighten(.25),lightBackground:s.a.rgb(255,244,241),buttons:[s.a.rgb(72,144,243),s.a.rgb(87,245,138),s.a.rgb(180,65,245),s.a.rgb(245,67,67),s.a.rgb(236,195,11),s.a.rgb(243,119,72),s.a.rgb(203,186,237),s.a.rgb(3,252,186),s.a.rgb(228,255,26)]},p=function(n){return n.hsl().string()},m=function(n){return"".concat(n/16,"rem")},g=function(n){return Object(c.a)(d(),n.hsl().string(),n.lighten(.2).fade(.45).hsl().string(),n.darken(.2).fade(.45).hsl().string())};function x(){var n=Object(i.a)(["\n  width: 100%;\n  min-height: calc(100vh - 100px - 250px);\n  padding: 25px 0;\n\n  @media "," {\n    padding: 0;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(i.a)(['\n  width: 100%;\n  font-family: "Rubik", sans-serif;\n  color: ',";\n  background-color: ",";\n"]);return v=function(){return n},n}var w=p,E=c.b.div(v(),w(f.lightBackground),w(f.darkText)),j=c.b.main(x(),h),O=t(5),y=t(17),k=Object(a.createContext)(null),C=Object(a.createContext)(null),S={search:""};function q(n,e){return e.type?Object(y.a)({},n,{search:e.payload.search}):n}function P(n){var e=n.children,t=Object(a.useReducer)(q,S),o=Object(O.a)(t,2),l=o[0],i=o[1];return r.a.createElement(k.Provider,{value:l},r.a.createElement(C.Provider,{value:i},e))}function z(){var n=Object(i.a)(["\n  border: none;\n  outline: none;\n  border-bottom: 1px solid white;\n  padding: 10px;\n  background-color: transparent;\n  font-size: ",";\n  font-weight: lighter;\n  margin: 20px auto;\n  color: white;\n\n  max-width: 500px;\n  width: 100%;\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n  }\n"]);return z=function(){return n},n}function B(){var n=Object(i.a)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: ",";\n  width: 100%;\n"]);return B=function(){return n},n}function L(){var n=Object(i.a)(["\n  width: 100%;\n  height: 250px;\n  display: flex;\n  flex-wrap: wrap;\n\n  justify-content: center;\n  align-items: center;\n  padding: 50px 25px;\n"]);return L=function(){return n},n}var T=m,I=c.b.header(L()),A=c.b.h1(B(),T(45)),D=c.b.input(z(),T(20));function R(){var n=function(){var n=Object(a.useContext)(C);if(void 0===n)throw new Error("useSearchDispatch must be used within a SearchContextProvider");return n}();return r.a.createElement(I,null,r.a.createElement(A,null,"Botonera de memes"),r.a.createElement(D,{placeholder:"Busc\xe1 un sonido",onChange:function(e){return t=e.target.value,void n({type:"CHANGE_SEARCH",payload:{search:t}});var t}}))}var _=t(6),H=t.n(_);function F(){var n=Object(i.a)(["\n  font-weight: 100;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  font-size: ",";\n  text-decoration: none;\n  color: white;\n  & svg {\n    width: 100%;\n    max-width: 25px;\n    margin-right: 15px;\n    path {\n      fill: white;\n    }\n  }\n\n  &:visited {\n    text-decoration: none;\n    color: white;\n  }\n\n  @media "," {\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(i.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  padding: 50px 25px;\n"]);return G=function(){return n},n}var J=m,M=c.b.footer(G()),N=c.b.a(F(),J(20),h);function W(){return r.a.createElement(M,null,r.a.createElement(N,{href:"https://github.com/gonzarascon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(H.a,{src:"./assets/icons/github.svg",title:"Github"}),"Hecho con amor a los memes"))}var U=t(1),$=t.n(U),K=t(16),Q=t.n(K);function V(){var n=Object(i.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-transform: uppercase;\n  padding: 15px;\n  text-align: center;\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none;\n"]);return V=function(){return n},n}function X(){var n=Object(i.a)(["\n  width: 100%;\n  height: 75px;\n  color: ",";\n  ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform ease-in-out 0.3s;\n\n  @media "," {\n    height: 100px;\n  }\n\n  @media "," {\n    height: 150px;\n  }\n\n  svg {\n    width: 50%;\n    height: 50%;\n\n    circle {\n      stroke: ",";\n    }\n  }\n\n  .pause-icon {\n    max-height: 50px;\n\n    path {\n      fill: ",";\n    }\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      transform: scale(1.05);\n      cursor: pointer;\n    }\n  }\n"]);return X=function(){return n},n}var Y=p,Z=g,nn=m,en=c.b.div(X(),(function(n){return n.color.isDark()?"white":Y(f.darkText)}),(function(n){return Z(n.color)}),b,h,(function(n){return n.color.isDark()?"white":Y(f.darkText)}),(function(n){return n.color.isDark()?"white":Y(f.darkText)})),tn=c.b.span(V(),nn(20),nn(20));var an=function(n){var e=n.sound,t=n.label,o=n.color,l=n.handlePlay,i=n.playerId,c=n.playing,u=Object(a.useState)(!0),s=Object(O.a)(u,2),d=s[0],b=s[1],h=Object(a.useRef)();return r.a.createElement(en,{color:o,onClick:function(){return l(c?null:i)}},r.a.createElement(Q.a,{src:["./assets/audio/".concat(e,".mp3"),"./assets/audio/".concat(e,".ogg")],playing:c,onLoad:function(){return b(!1)},onEnd:function(){return l(null)},onPause:function(){return $.a.isEqual(h.current,null)?null:h.current.seek(0)},ref:h,html5:!0}),d?r.a.createElement(H.a,{src:"./assets/icons/loader.svg",title:"Loading"}):r.a.createElement(tn,null,c?r.a.createElement(H.a,{src:"./assets/icons/pause.svg",title:"Pause",className:"pause-icon"}):t))};var rn=function(n){var e=n.children;return r.a.createElement(E,null,r.a.createElement(P,null,r.a.createElement(R,null),r.a.createElement(j,null,e),r.a.createElement(W,null)))};function on(){var n=Object(i.a)(["\n  grid-column: 1 / -1;\n  font-size: ",";\n  line-height: ",";\n  font-weight: bolder;\n  text-align: center;\n  display: block;\n"]);return on=function(){return n},n}function ln(){var n=Object(i.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  margin: 0 auto;\n  grid-gap: 20px;\n  align-content: center;\n  justify-items: center;\n"]);return ln=function(){return n},n}var cn=m,un=c.b.section(ln()),sn=c.b.p(on(),cn(35),cn(40)),dn=[{label:"A Laburar",src:"a-laburar",color:$.a.sample(f.buttons),id:0},{label:"Balada Showmatch",src:"balada-showmatch",color:$.a.sample(f.buttons),id:1},{label:"Intelectual",src:"intelectual",color:$.a.sample(f.buttons),id:2},{label:"Saxo sexy",src:"saxo-sexy",color:$.a.sample(f.buttons),id:3},{label:"Tifonic",src:"titanic-flute",color:$.a.sample(f.buttons),id:4},{label:"Flauta Mii",src:"wii-flute",color:$.a.sample(f.buttons),id:5},{label:"Odio los lunes",src:"odio-los-lunes",color:$.a.sample(f.buttons),id:6},{label:"Loros Barranqueros",src:"loros-barranqueros",color:$.a.sample(f.buttons),id:7},{label:"Me cago en la puta",src:"me-cago-pepe",color:$.a.sample(f.buttons),id:8},{label:"Ponele voluntad",src:"ponele-voluntad",color:$.a.sample(f.buttons),id:9},{label:"Agachate y conocelo",src:"agachate-conocelo",color:$.a.sample(f.buttons),id:10}];function bn(){var n=Object(a.useState)(null),e=Object(O.a)(n,2),t=e[0],o=e[1],l=Object(a.useState)(null),i=Object(O.a)(l,2),c=i[0],u=i[1],s=Object(a.useState)(dn),d=Object(O.a)(s,2),b=d[0],h=d[1],f=function(){var n=Object(a.useContext)(k);if(void 0===n)throw new Error("useSearchState must be used within a SearchContextProvider");return n}().search,p=Object(a.useCallback)((function(){u(f)}),[f]),m=Object(a.useCallback)((function(){var n=b,e=null!==c?$.a.filter(n,(function(n){return n.label.toLocaleLowerCase().includes(c.toLocaleLowerCase())})):null;$.a.isEqual(e,null)||$.a.isEqual(e,b)||h(e),$.a.isEqual(c,"")&&!$.a.isEqual(b,dn)&&h(dn)}),[c,b]);function g(n){o(n)}return Object(a.useEffect)((function(){p(),$.a.isEqual(t,null)||o(null)}),[f,p]),Object(a.useEffect)((function(){$.a.isEqual(c,null)||m()}),[c,m]),r.a.createElement(un,null,b.map((function(n){return r.a.createElement(an,{key:n.id,sound:n.src,label:n.label,color:n.color,playing:!!$.a.isEqual(n.id,t),handlePlay:g,playerId:n.id})})),0===b.length&&r.a.createElement(sn,null,r.a.createElement("span",{role:"img","aria-label":"Cara feliz con gota"},"\ud83d\ude05"),r.a.createElement("br",null)," Upsi, no hay audios por ac\xe1."))}var hn=function(){return r.a.createElement(rn,null,r.a.createElement(bn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(hn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.85df5865.chunk.js.map