(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),i=n(11),a=n.n(i),r=(n(30),n(19)),o=n(20),h=n(23),u=n(22),l=(n(31),n(55)),j=n(54),d=n(2),f=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={value:"",a_id:"",text:"",ntext:"musicbrainzAPI",artists:{},isLoaded:!1,count:0,releases:[],releases2:[],number:0,aid:"83abf2d5-a578-41a7-b51d-ca9a44a00545",i:0,k:0},c.URI="https://musicbrainz.org/ws/2/artist?query=",c}return Object(o.a)(n,[{key:"fetchMB",value:function(){var t=this,e=this.state.text;this.setState({ntext:e}),this.setState({releases:[]}),window.fetch(this.URI+e+"&limit=20&offset=0&fmt=json").then((function(t){return t.json()})).then((function(e){e.help||(console.log(e),t.setState({artists:e.artists,count:e.count}))}))}},{key:"getReleas",value:function(t){var e=this;window.fetch("https://musicbrainz.org/ws/2/artist/"+t+"?inc=releases&fmt=json").then((function(t){return t.json()})).then((function(t){e.setState({releases:t.releases})}))}},{key:"checkArt",value:function(t){var e=this;return window.fetch("https://musicbrainz.org/ws/2/release/"+t+"?fmt=json").then((function(t){return t.json()})).then((function(t){e.setState({check_cover:t["cover-art-archive"].count})})),this.state.check_cover}},{key:"getCoverArt",value:function(t){var e=this;window.fetch("https://coverartarchive.org/release/"+t).then((function(t){return t.json()})).then((function(t){e.setState({cover:t.image})}))}},{key:"handleUpdate",value:function(t){var e=t.target.value;this.setState({text:e})}},{key:"render",value:function(){var t=this,e=this.state,n=e.artists,c=e.count,s=e.releases;return Object(d.jsxs)(j.a,{maxWidth:"sm",children:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"'musicbrainzAPI'"}),Object(d.jsx)(b,{onChange:this.handleUpdate.bind(this)}),Object(d.jsx)(l.a,{variant:"outlined",onClick:function(){t.fetchMB()},children:"\u691c\u7d22"})]}),Object(d.jsxs)(d.Fragment,{children:[c,"\u4ef6"]}),Object(d.jsxs)("h2",{children:["'",this.state.ntext,"'"]}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{onClick:function(){t.getReleas(t.state.aid)},children:"\u4f5c\u54c1"}),Object(d.jsx)("ul",{children:Object.keys(s).map((function(t){return Object(d.jsx)("li",{children:s[t].title},t)}))})]}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ol",{children:Object.keys(n).map((function(e){return Object(d.jsxs)("li",{children:[n[e].name,"\u3000\u3000",n[e].score,"\u3000\u3000",n[e].country,Object(d.jsx)(l.a,{color:"secondary",onClick:function(){t.setState({aid:n[e].id})},children:"\uff1c"})]},e)}))}),Object(d.jsx)(l.a,{onClick:function(){t.checkArt("63755230-5085-48f4-b1bc-528c7b61b27e")}})]}),this.state.check_cover]})}}]),n}(s.a.Component),b=function(t){return Object(d.jsx)("input",{type:"text",onChange:t.onChange})},v=f,x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),x()}},[[37,1,2]]]);
//# sourceMappingURL=main.92e26b59.chunk.js.map