(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{244:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),s=a(245),c=a.n(s),l=function(e){for(var t=e.currentPage,a=e.onClickNumberOfPage,n=e.totalNumberOfUsers,s=e.numberUsersOnPage,l=Math.ceil(n/s),i=[],o=1;o<=l;o++)i.push(o);var u=function(){window.scrollTo(0,0)};return r.a.createElement("div",{className:c.a.showPages},r.a.createElement("button",{className:c.a.showPrevPage,onClick:function(){a(t>1?t-1:t),u()},disabled:1===t},"Show prev page \u21a9"),r.a.createElement("button",{className:c.a.toTheTop,onClick:u},"\u21ea To the top \u21ea"),r.a.createElement("button",{className:c.a.showNextPage,onClick:function(){a(t<i.length?t+1:t),u()},disabled:t===i.length},"\u21aa Show next page"))}},245:function(e,t,a){e.exports={showPages:"PrevNextTopBtn_showPages__An0bJ",showNextPage:"PrevNextTopBtn_showNextPage__2s-eq",showPrevPage:"PrevNextTopBtn_showPrevPage__M7WoS",toTheTop:"PrevNextTopBtn_toTheTop__3w4dO"}},246:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),s=a(247),c=a.n(s),l=function(e){for(var t=e.currentPage,a=e.onClickNumberOfPage,n=e.totalNumberOfUsers,s=e.numberUsersOnPage,l=Math.ceil(n/s),i=[],o=1;o<=l;o++)i.push(o);var u=i.filter(function(e){return e>=t-5&&e<=t+5});return r.a.createElement("div",{className:c.a.string},r.a.createElement("span",{className:c.a.goToTheTop,onClick:function(){a(t>1?1:t)}},"\u21a9 1 . . . . ."),u.map(function(e,n){return r.a.createElement("span",{onClick:function(){a(e)},key:n,className:t===e?c.a.selectedPage:c.a.numberPage},e)}),r.a.createElement("span",{className:c.a.goToTheEnd,onClick:function(){a(t<l?l:t)}},". . . . . ",i.length," \u21aa"))}},247:function(e,t,a){e.exports={string:"StringOfPage_string__1mlB0",goToTheTop:"StringOfPage_goToTheTop__GbPiJ",goToTheEnd:"StringOfPage_goToTheEnd__3XD59",numberPage:"StringOfPage_numberPage__VreoM",selectedPage:"StringOfPage_selectedPage__AG1Gc"}},248:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),s=a(249),c=a.n(s),l=function(e){var t=e.value,a=e.label,n=e.onChange,s=e.options;return r.a.createElement("label",{className:c.a.selectLabel},r.a.createElement("select",{className:c.a.select,value:"".concat(t),onChange:function(e){return n(+e.currentTarget.value)}},s.map(function(e,t){return r.a.createElement("option",{className:c.a.selectOption,key:t+e.title,value:e.value},e.title)})),r.a.createElement("span",{className:c.a.selectTitle},a))}},249:function(e,t,a){e.exports={selectLabel:"Select_selectLabel__svcCt",select:"Select_select__1h5_F",selectOption:"Select_selectOption__sASzT",selectTitle:"Select_selectTitle__1NfHs"}},250:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=[{value:"5",title:"5"},{value:"10",title:"10"},{value:"15",title:"15"},{value:"20",title:"20"},{value:"25",title:"25"}],r=[{value:"10",title:"10"},{value:"20",title:"20"},{value:"30",title:"30"},{value:"40",title:"40"},{value:"50",title:"50"}]},313:function(e,t,a){e.exports={newsWrapper:"News_newsWrapper__3FtWI",stringPage:"News_stringPage__3SHem",inputWrapper:"News_inputWrapper__3PRwm",searchInput:"News_searchInput__293Vm",newsLink:"News_newsLink__3qBJy",newsTitle:"News_newsTitle__rpjIz",description:"News_description__3_iHw"}},319:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),s=a(28),c=a(26),l=a(29),i=a(0),o=a.n(i),u=a(61),m=a(313),g=a.n(m),p=a(246),P=a(244),_=a(250),h=a(248),N=function(e){var t=e.hitsPerPage,a=e.news,n=e.currentPage,r=e.totalCountUsers,s=e.setNumberPerPage,c=e.getNews,l=a.filter(function(e){return e.title}),m=Object(i.useState)(""),N=Object(u.a)(m,2),f=N[0],v=N[1],w=function(e){return c(e,t)};return o.a.createElement("div",{className:g.a.newsWrapper},o.a.createElement("div",{className:g.a.inputWrapper},o.a.createElement("input",{className:g.a.searchInput,placeholder:"Search...",type:"text",onChange:function(e){return v(e.currentTarget.value)},value:f}),o.a.createElement(h.a,{value:t,onChange:s,label:": \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",options:_.a})),o.a.createElement("div",{className:g.a.stringPage},o.a.createElement(p.a,{onClickNumberOfPage:w,currentPage:n,totalNumberOfUsers:r,numberUsersOnPage:t})),l.map(function(e){var t=e.objectID,a=e.author,n=e.created_at,r=e.points,s=e.title,c=e.url,l=e.num_comments;return o.a.createElement(i.Fragment,{key:t},o.a.createElement("a",{className:g.a.newsLink,href:c,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:g.a.newsTitle},s),o.a.createElement("div",{className:g.a.description},o.a.createElement("div",{className:g.a.item},"Autor : ",a),o.a.createElement("div",{className:g.a.item},"|"),o.a.createElement("div",{className:g.a.item},"Comment : ",l),o.a.createElement("div",{className:g.a.item},"|"),o.a.createElement("div",{className:g.a.item},n.slice(8,10),".",n.slice(5,7),".",n.slice(0,4)),o.a.createElement("div",{className:g.a.item},"|"),o.a.createElement("div",{className:g.a.item},"Points : ",r))))}),o.a.createElement(P.a,{currentPage:n,onClickNumberOfPage:w,totalNumberOfUsers:r,numberUsersOnPage:t}))},f=a(27),v=a(82),w=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews(this.props.currentPage,this.props.hitsPerPage)}},{key:"componentDidUpdate",value:function(e){e.hitsPerPage!==this.props.hitsPerPage&&this.props.getNews(this.props.currentPage,this.props.hitsPerPage)}},{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.news,n=e.getNews,r=e.hitsPerPage,s=e.searchNews,c=e.setNumberPerPage,l=e.totalCountUsers;return o.a.createElement(N,{currentPage:t,news:a,getNews:n,totalCountUsers:l,hitsPerPage:r,searchNews:s,setNumberPerPage:c})}}]),t}(o.a.Component);t.default=Object(f.b)(function(e){return{currentPage:e.newsPage.currentPage,news:e.newsPage.news,hitsPerPage:e.newsPage.hitsPerPage,totalCountUsers:e.newsPage.totalCountUsers}},{getNews:v.b,searchNews:v.c,setNumberPerPage:v.d})(w)}}]);
//# sourceMappingURL=4.8ce122c7.chunk.js.map