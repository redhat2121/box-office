(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{10:function(e,n,t){e.exports=t.p+"static/media/mustang.75bd07e4.jpg"},32:function(e,n,t){e.exports=t(50)},37:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a,r,l,i=t(0),o=t.n(i),c=t(24),s=t.n(c),u=t(9),m=(t(37),t(3)),d=t(1),p=t(5),f=t(2),b=d.b.ul(a||(a=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),g=Object(d.b)(u.b)(r||(r=Object(f.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(e){return e.theme.mainColors.gray}),(function(e){return e.theme.mainColors.blue}),(function(e){return e.theme.mainColors.blue})),h=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],x=function(){var e=Object(m.f)();return o.a.createElement("div",null,o.a.createElement(b,null,h.map((function(n){return o.a.createElement("li",{key:n.to},o.a.createElement(g,{to:n.to,className:n.to===e.pathname?"active":" "},n.text))}))))},E=d.b.div(l||(l=Object(f.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(e){return e.theme.mainColors.blue}),(function(e){return e.theme.mainColors.dark})),v=function(e){var n=e.title,t=e.subtitle;return o.a.createElement(E,null,o.a.createElement("h1",null,n),o.a.createElement("p",null,t))};var w=function(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement(v,{title:"Box Office",subtitle:"Are you Looking for movie or actor"}),o.a.createElement(x,null),n)},y=t(20),j=t.n(y),O=t(28);function k(e){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(j.a.mark((function e(n){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.tvmaze.com").concat(n)).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C,N,D,I,A=t(29),L=t.n(A),_=Object(d.b)(L.a)(C||(C=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),z=d.b.div(N||(N=Object(f.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),F=d.b.div(D||(D=Object(f.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(e){return e.active?"#ffc806":"#ddd"})),H=Object(d.b)(z)(I||(I=Object(f.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),J=function(e){var n=e.id,t=e.image,a=e.name,r=e.summary,l=e.onStarClick,i=e.isStarred,c=r?"".concat(r.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return o.a.createElement(H,null,o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{src:t,alt:"show"})),o.a.createElement("h1",null,a),o.a.createElement("p",null,c),o.a.createElement("div",{className:"btns"},o.a.createElement(u.b,{to:"/show/".concat(n)},"Read more"),o.a.createElement("button",{type:"button",onClick:l},o.a.createElement(F,{active:i}))))},R=t(10),T=t.n(R),B=t(22),M=t(30);function V(e,n){switch(n.type){case"ADD":return[].concat(Object(M.a)(e),[n.showId]);case"REMOVE":return e.filter((function(e){return e!==n.showId}));default:return e}}function P(e,n,t){var a=Object(i.useReducer)(e,n,(function(e){var n=localStorage.getItem(t);return n?JSON.parse(n):e})),r=Object(p.a)(a,2),l=r[0],o=r[1];return Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(l))}),[l,t]),[l,o]}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return P(V,[],e)}var W=function(e,n){switch(n.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:n.show};case"FETCH_FAILED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,error:n.error});default:return e}};var q,K,Q,$,G,X,Y,Z,ee,ne,te,ae,re,le,ie=function(e){var n=e.data,t=U(),a=Object(p.a)(t,2),r=a[0],l=a[1];return o.a.createElement(_,null,n.map((function(e){var n=e.show,t=r.includes(n.id);return o.a.createElement(J,{key:n.id,id:n.id,name:n.name,image:n.image?n.image.medium:T.a,summary:n.summary,onStarClick:function(){l(t?{type:"REMOVE",showId:n.id}:{type:"ADD",showId:n.id})},isStarred:t})})))},oe=Object(d.b)(z)(q||(q=Object(f.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),ce=function(e){var n=e.image,t=e.name,a=e.gender,r=e.country,l=e.birthday,i=e.deathday;return o.a.createElement(oe,null,o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{src:n,alt:"actor"})),o.a.createElement("h1",null,t," ",a?"(".concat(a,")"):null),o.a.createElement("p",null,r?"Comes from ".concat(r):"No country known"),l?o.a.createElement("p",null,"Born ",l):null,o.a.createElement("p",{className:"deathday"},i?"Died ".concat(i):"Alive"))},se=function(e){var n=e.data;return o.a.createElement(_,null,n.map((function(e){var n=e.person;return o.a.createElement(ce,{key:n.id,name:n.name,country:n.country?n.country.name:null,birthday:n.birthday,deathday:n.deathday,gender:n.gender,image:n.image?n.image.medium:T.a})})))},ue=d.b.input(K||(K=Object(f.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),me=d.b.div(Q||(Q=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),de=d.b.div($||($=Object(f.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(e){return e.theme.mainColors.blue})),pe=t(31),fe=["label"],be=d.b.label(G||(G=Object(f.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(e){return e.theme.mainColors.blue}),(function(e){return e.theme.mainColors.blue}),(function(e){return e.theme.mainColors.blue})),ge=function(e){var n=e.label,t=Object(pe.a)(e,fe);return o.a.createElement(be,{htmlFor:t.id},n,o.a.createElement("input",Object.assign({},t,{type:"radio"})),o.a.createElement("span",null))},he=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",n=Object(i.useState)((function(){var n=sessionStorage.getItem(e);return n?JSON.parse(n):" "})),t=Object(p.a)(n,2),a=t[0],r=t[1],l=function(n){r(n),sessionStorage.setItem(e,JSON.stringify(n))};return[a,l]}(),n=Object(p.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)(null),l=Object(p.a)(r,2),c=l[0],s=l[1],u=Object(i.useState)("shows"),m=Object(p.a)(u,2),d=m[0],f=m[1],b="shows"===d,g=function(){k("/search/".concat(d,"?q=").concat(t)).then((function(e){s(e)}))},h=function(e){f(e.target.value)};return o.a.createElement(w,null,o.a.createElement(ue,{type:"text",placeholder:"Search for something",onChange:function(e){a(e.target.value)},onKeyDown:function(e){13===e.keyCode&&g()},value:t}),o.a.createElement(me,null,o.a.createElement("div",null,o.a.createElement(ge,{label:"Shows",id:"shows-search",value:"shows",checked:b,onChange:h})),o.a.createElement("div",null,o.a.createElement(ge,{label:"Actors",id:"actors-search",value:"people",checked:!b,onChange:h}))),o.a.createElement(de,null,o.a.createElement("button",{type:"button",onClick:g},"Search")),c&&0===c.length?o.a.createElement("div",null,"No results"):c&&c.length>0?c[0].show?o.a.createElement(ie,{data:c}):o.a.createElement(se,{data:c}):null)},xe=function(){var e=U(),n=Object(p.a)(e,1)[0],t=Object(i.useState)(null),a=Object(p.a)(t,2),r=a[0],l=a[1],c=Object(i.useState)(!0),s=Object(p.a)(c,2),u=s[0],m=s[1],d=Object(i.useState)(null),f=Object(p.a)(d,2),b=f[0],g=f[1];return Object(i.useEffect)((function(){if(n&&n.length>0){var e=n.map((function(e){return k("/shows/".concat(e))}));Promise.all(e).then((function(e){return e.map((function(e){return{show:e}}))})).then((function(e){l(e),m(!1)})).catch((function(e){g(e.message),m(!1)}))}else m(!1)}),[n]),o.a.createElement(w,null,u&&o.a.createElement("div",null,"Shows are still loading"),b&&o.a.createElement("div",null,"Error occured: ",b),!u&&!r&&o.a.createElement("div",null,"No shows were added"),!u&&!b&&r&&o.a.createElement(ie,{data:r}))},Ee=d.b.div(X||(X=Object(f.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),ve=d.b.div(Y||(Y=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),we=d.b.div(Z||(Z=Object(f.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),ye=function(e){var n=e.name,t=e.rating,a=e.summary,r=e.tags,l=e.image;return o.a.createElement(Ee,null,o.a.createElement("img",{src:l?l.original:T.a,alt:"show-cover"}),o.a.createElement("div",{className:"text-side"},o.a.createElement(ve,null,o.a.createElement("h1",null,n),o.a.createElement("div",null,o.a.createElement(F,{active:!0}),o.a.createElement("span",null,t.average||"N/A"))),o.a.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:a}}),o.a.createElement("div",null,"Tags:"," ",o.a.createElement(we,null,r.map((function(e,n){return o.a.createElement("span",{key:n},e)}))))))},je=d.b.div(ee||(ee=Object(f.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),Oe=function(e){var n=e.status,t=e.premiered,a=e.network;return o.a.createElement(je,null,o.a.createElement("p",null,"Status: ",o.a.createElement("span",null,n)),o.a.createElement("p",null,"Premiered ",t," ",a?"on ".concat(a.name):null))},ke=d.b.div(ne||(ne=Object(f.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),Se=d.b.div(te||(te=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),Ce=function(e){var n=e.seasons;return o.a.createElement(ke,null,o.a.createElement("p",null,"Seasons in total: ",o.a.createElement("span",null,n.length)),o.a.createElement("p",null,"Episodes in total:"," ",o.a.createElement("span",null,n.reduce((function(e,n){return e+n.episodeOrder}),0))),o.a.createElement(Se,null,n.map((function(e){return o.a.createElement("div",{key:e.id,className:"season-item"},o.a.createElement("div",{className:"left"},o.a.createElement("p",null,"Season ",e.number),o.a.createElement("p",null,"Episodes: ",o.a.createElement("span",null,e.episodeOrder))),o.a.createElement("div",{className:"right"},"Aired:"," ",o.a.createElement("span",null,e.premiereDate," - ",e.endDate)))}))))},Ne=d.b.div(ae||(ae=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),De=function(e){var n=e.cast;return o.a.createElement(Ne,null,n.map((function(e,n){var t=e.person,a=e.character,r=e.voice;return o.a.createElement("div",{key:n,className:"cast-item"},o.a.createElement("div",{className:"pic-wrapper"},o.a.createElement("img",{src:t.image?t.image.medium:T.a,alt:"cast-person"})),o.a.createElement("div",{className:"actor"},o.a.createElement("span",null,o.a.createElement("span",{className:"bold"},t.name)," | ",a.name," ",r?"| Voice":"")))})))},Ie=d.b.div(re||(re=Object(f.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),Ae=d.b.div(le||(le=Object(f.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),Le=function(){var e=function(e){var n=Object(i.useReducer)(W,{show:null,isLoading:!0,error:null}),t=Object(p.a)(n,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){var n=!0;return k("/shows/".concat(e,"?embed[]=seasons&embed[]=cast")).then((function(e){n&&r({type:"FETCH_SUCCESS",show:e})})).catch((function(e){n&&r({type:"FETCH_FAILED",error:e.message})})),function(){n=!1}}),[e]),a}(Object(m.g)().id),n=e.show,t=e.isLoading,a=e.error;return t?o.a.createElement("div",null,"Data is being loaded"):a?o.a.createElement("div",null,"Error occured: ",a):o.a.createElement(Ie,null,o.a.createElement(ye,{image:n.image,name:n.name,rating:n.rating,summary:n.summary,tags:n.genres}),o.a.createElement(Ae,null,o.a.createElement("h2",null,"Details"),o.a.createElement(Oe,{status:n.status,network:n.network,premiered:n.premiered})),o.a.createElement(Ae,null,o.a.createElement("h2",null,"Seasons"),o.a.createElement(Ce,{seasons:n._embedded.seasons})),o.a.createElement(Ae,null,o.a.createElement("h2",null,"Cast"),o.a.createElement(De,{cast:n._embedded.cast})))},_e={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var ze=function(){return o.a.createElement(d.a,{theme:_e},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/"},o.a.createElement(he,null)),o.a.createElement(m.a,{exact:!0,path:"/starred"},o.a.createElement(xe,null)),o.a.createElement(m.a,{exact:!0,path:"/show/:id"},o.a.createElement(Le,null)),o.a.createElement(m.a,null,o.a.createElement("div",null,"Not found"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(u.a,null,o.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f8906d87.chunk.js.map