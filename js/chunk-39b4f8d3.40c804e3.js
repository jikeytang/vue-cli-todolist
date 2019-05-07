(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b4f8d3"],{6511:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todoapp"},[o("header-view",{on:{"add-todo":e.addTodo}}),o("main-view",{attrs:{todos:e.filteredTodos},on:{"del-todo":e.delTodo,"all-done":e.allDone}}),o("footer-view",{attrs:{todos:e.todos,current:e.current},on:{"remove-completed":e.removeCompleted}})],1)},i=[],l=(o("ac6a"),o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header"},[o("h1",[e._v("todos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"请输入待办事项"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})])}),a=[],r={name:"HeaderView",data:function(){return{newTodo:""}},methods:{addTodo:function(){var e=this.newTodo&&this.newTodo.trim();e&&(this.$emit("add-todo",{title:e,completed:!1}),this.newTodo="")}}},s=r,c=o("2877"),d=Object(c["a"])(s,l,a,!1,null,null,null),u=d.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,i=!!n.checked;if(Array.isArray(o)){var l=null,a=e._i(o,l);n.checked?a<0&&(e.allDone=o.concat([l])):a>-1&&(e.allDone=o.slice(0,a).concat(o.slice(a+1)))}else e.allDone=i}}}),o("label",{attrs:{for:"toggle-all"}},[e._v("全选")]),o("ul",{staticClass:"todo-list"},e._l(e.todos,function(t,n){return o("li",{key:n,staticClass:"todo",class:{completed:t.completed,editing:t==e.editedTodo}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"item.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,i=o.target,l=!!i.checked;if(Array.isArray(n)){var a=null,r=e._i(n,a);i.checked?r<0&&e.$set(t,"completed",n.concat([a])):r>-1&&e.$set(t,"completed",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(t,"completed",l)}}}),o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.title))]),o("button",{staticClass:"destroy",on:{click:function(o){return e.handleDel(t)}}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"item.title"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(o){return e.doneEdit(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(o){o.target.composing||e.$set(t,"title",o.target.value)}}})])}),0)])},m=[],p="vue-cli-todos",h={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.completed})},completed:function(e){return e.filter(function(e){return e.completed})},fetch:function(){return JSON.parse(localStorage.getItem(p)||"[]")},save:function(e){localStorage.setItem(p,JSON.stringify(e))}},v={name:"MainView",props:{todos:{type:Array}},data:function(){return{editedTodo:null}},computed:{remaining:function(){return h.active(this.todos).length},allDone:{set:function(e){this.$emit("all-done",e)},get:function(){return 0===this.remaining}}},methods:{handleDel:function(e){this.$emit("del-todo",e)},editTodo:function(e){this.beforeEditCache=e.title,this.editedTodo=e},doneEdit:function(e){this.editedTodo=null,e.title=e.title.trim(),e.title||this.handleDel(e)},cancelEdit:function(e){this.editedTodo=null,e.title=this.beforeEditCache}}},y=v,g=(o("b2b0"),Object(c["a"])(y,f,m,!1,null,null,null)),T=g.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[e._v(e._s(e.todos.length))]),e._v(" 项")]),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{selected:"all"===this.current},attrs:{href:"#/all"}},[e._v("全部")])]),o("li",[o("a",{class:{selected:"active"===this.current},attrs:{href:"#/active"}},[e._v("进行中")])]),o("li",[o("a",{class:{selected:"completed"===this.current},attrs:{href:"#/completed"}},[e._v("已完成")])])]),o("button",{staticClass:"clear-completed",on:{click:e.removeCompleted}},[e._v("清除")])])},C=[],w={name:"FooterView",props:{todos:{type:Array},current:{type:String}},methods:{removeCompleted:function(){this.$emit("remove-completed")}}},b=w,L=Object(c["a"])(b,k,C,!1,null,null,null),_=L.exports,S={name:"Home",components:{HeaderView:u,MainView:T,FooterView:_},data:function(){return{todos:h.fetch(),current:"all"}},watch:{$route:function(e){this.current=e.name},todos:{deep:!0,handler:h.save}},computed:{filteredTodos:function(){return h[this.current](this.todos)}},methods:{allDone:function(e){this.todos.forEach(function(t){t.completed=e})},addTodo:function(e){this.todos.push(e)},delTodo:function(e){this.todos.splice(this.todos.indexOf(e),1)},removeCompleted:function(){this.todos=h.active(this.todos)}}},D=S,E=Object(c["a"])(D,n,i,!1,null,null,null);t["default"]=E.exports},"6cb9":function(e,t,o){},"7f7f":function(e,t,o){var n=o("86cc").f,i=Function.prototype,l=/^\s*function ([^ (]*)/,a="name";a in i||o("9e1e")&&n(i,a,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},ac6a:function(e,t,o){for(var n=o("cadf"),i=o("0d58"),l=o("2aba"),a=o("7726"),r=o("32e9"),s=o("84f2"),c=o("2b4c"),d=c("iterator"),u=c("toStringTag"),f=s.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(m),h=0;h<p.length;h++){var v,y=p[h],g=m[y],T=a[y],k=T&&T.prototype;if(k&&(k[d]||r(k,d,f),k[u]||r(k,u,y),s[y]=f,g))for(v in n)k[v]||l(k,v,n[v],!0)}},b2b0:function(e,t,o){"use strict";var n=o("6cb9"),i=o.n(n);i.a}}]);