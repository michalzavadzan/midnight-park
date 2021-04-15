(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Games"],{a2e9:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"mx-auto px-4 w-11/12"},c=Object(n["h"])("div",{class:"my-10"},[Object(n["h"])("h1",{class:"text-4xl md:text-6xl font-bold my-3"},"All games"),Object(n["h"])("h4",{class:"text-lg font-normal"},"500.000+ games")],-1),o={class:"flex flex-col md:flex-row justify-start items-center"},s=Object(n["g"])(" Change order: "),l={key:0,class:"relative z120"},d={class:"absolute bg-gray-100 p-2 rounded-lg"},u={class:"flex justify-center mx-auto my-10 w-11/12"},g={key:0,class:"h-screen z-30"},i=Object(n["h"])("div",{class:"lds-dual-ring"},null,-1),b={class:"flex flex-wrap justify-around"},O={class:"flex justify-end items-center mx-auto w-11/12 my-10"},m={class:"px-4 font-semibold text-lg"};function p(e,t,r,p,j,x){var f=Object(n["w"])("svg-icon"),y=Object(n["w"])("game-card");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("section",a,[c,Object(n["h"])("div",o,[Object(n["h"])("p",{class:"pr-2 flex text-md text-gray-500 hover:text-gray-200 transition-all duration-200 cursor-pointer",onClick:t[1]||(t[1]=function(t){return e.toggleOrder=!e.toggleOrder})},[s,Object(n["h"])(f,{name:"arrow-right"})]),e.toggleOrder?(Object(n["r"])(),Object(n["e"])("div",l,[Object(n["h"])("div",d,[Object(n["h"])("button",{class:"mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500",onClick:t[2]||(t[2]=function(t){return e.changeOrder("-added"),e.toggleOrder=!e.toggleOrder})}," Popular "),Object(n["h"])("button",{class:"mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500",onClick:t[3]||(t[3]=function(t){return e.changeOrder("-released"),e.toggleOrder=!e.toggleOrder})}," Released "),Object(n["h"])("button",{class:"mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500",onClick:t[4]||(t[4]=function(t){return e.changeOrder("name"),e.toggleOrder=!e.toggleOrder})}," Name "),Object(n["h"])("button",{class:"mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500",onClick:t[5]||(t[5]=function(t){return e.changeOrder("-metacritic"),e.toggleOrder=!e.toggleOrder})}," Rating ")])])):Object(n["f"])("",!0)])]),Object(n["h"])("main",u,[e.isLoading?(Object(n["r"])(),Object(n["e"])("div",g,[i])):Object(n["f"])("",!0),Object(n["h"])("div",b,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(e.results[0],(function(e){return Object(n["r"])(),Object(n["e"])(y,{key:e.id,result:e},null,8,["result"])})),128))])]),Object(n["h"])("div",O,[e.currentPage>=3?(Object(n["r"])(),Object(n["e"])("button",{key:0,onClick:t[6]||(t[6]=function(){return e.getFirstPage&&e.getFirstPage.apply(e,arguments)}),class:"mx-2 py-2 px-4 border-b"}," First ")):Object(n["f"])("",!0),e.currentPage>1?(Object(n["r"])(),Object(n["e"])("button",{key:1,onClick:t[7]||(t[7]=function(){return e.getPrevPage&&e.getPrevPage.apply(e,arguments)}),class:"mx-2 py-2 px-4 rounded-md border"}," Prev ")):Object(n["f"])("",!0),Object(n["h"])("p",m,Object(n["y"])(e.currentPage),1),Object(n["h"])("button",{onClick:t[8]||(t[8]=function(){return e.getNextPage&&e.getNextPage.apply(e,arguments)}),class:"mx-2 py-2 px-4 rounded-md border"}," Next ")])],64)}r("99af");var j=r("5530"),x=(r("96cf"),r("1da1")),f=r("bc3a"),y=r.n(f),h=r("9977"),v=r("0032"),P=Object(n["i"])({setup:function(){var e=Object(n["t"])({isLoading:!1,results:[],currentPage:1,ordering:"-added",dates:"1960-01-01,2022-01-01",toggleOrder:!1});function t(t){e.currentPage=1,e.ordering=t}Object(n["D"])((function(){e.isLoading=!0,e.results=[];var t=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y()("https://api.rawg.io/api/games?key=c0233312e0954f0ca72e3d1e9d64ef32&dates=".concat(e.dates,"&ordering=").concat(e.ordering,"&page=").concat(e.currentPage,"&page_size=20"));case 2:r=t.sent,e.results.push(r.data.results),e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}));var r=function(){e.currentPage++,document.body.scrollTop=0,document.documentElement.scrollTop=0},a=function(){1!=e.currentPage&&(e.currentPage--,document.body.scrollTop=0,document.documentElement.scrollTop=0)},c=function(){e.currentPage=1,document.body.scrollTop=0,document.documentElement.scrollTop=0};return Object(j["a"])(Object(j["a"])({},Object(n["z"])(e)),{},{getNextPage:r,getPrevPage:a,getFirstPage:c,changeOrder:t})},components:{GameCard:h["a"],SvgIcon:v["a"]}});P.render=p;t["default"]=P}}]);
//# sourceMappingURL=Games.6eb182fb.js.map