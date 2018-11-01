webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},KwGt:function(e,t){},MnhC:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("mvHQ"),o=i.n(a),s=i("yviF"),r=i.n(s),l=(i("dih4"),{name:"modal",data:function(){return{email:"",password:"",modalOpen:!1}},methods:{close:function(){this.$emit("close"),this.email="",this.password="",this.modalOpen=!1,console.log("Modal closing:"+this.modalOpen)},signIn:function(){var e=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){console.log("Login Sucessful"),e.$router.replace("admin")},function(e){alert("There was an "+e)})},enterKeyListener:function(e){this.modalOpen&&13===e.keyCode&&this.signIn()},resetPass:function(){""===this.email?alert("There was an Error: Email field empty, please enter email and then press reset password"):r.a.auth().sendPasswordResetEmail(this.email).then(function(){alert("A reset password email has been sent")}).catch(function(e){alert("There was an "+e)})}},mounted:function(){this.modalOpen=!0,console.log("Modal loaded on click:"+this.modalOpen)},created:function(){document.addEventListener("keyup",this.enterKeyListener)},destroyed:function(){document.removeEventListener("keyup",this.enterKeyListener)}}),c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"modal-fade"}},[i("div",{staticClass:"modal-backdrop"},[i("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[i("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[i("h5",{staticClass:"header-title"},[e._v("\n          Sign in to use admin page\n          ")]),e._v(" "),i("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("\n            x\n          ")])])],2),e._v(" "),i("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._t("body",[i("div",{staticClass:"left"},[e._v("\n            Email:\n          ")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"right",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"left"},[e._v("\n            Password:\n          ")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"right",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])],2),e._v(" "),i("footer",{staticClass:"modal-footer"},[e._t("footer",[i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:e.resetPass}},[e._v("Reset Password ")]),e._v(" "),i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),e._v(" "),i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.signIn(t):null},click:e.signIn}},[e._v("\n            Sign In\n          ")])])],2)])])])},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(e){i("KwGt")},null,null).exports,u={name:"TextReader",components:{modal:d},data:function(){return{showAlert:!1,showAlert2:!1,disabled:!1,isModalVisible:!1}},head:{title:{inner:"AHills Price Calculator"}},methods:{handleFileSelect:function(e){var t=this,i=e.target.files;if(i[0].name.includes(".csv")){this.showAlert=!1,this.showAlert2=!1,this.disabled=!1;for(var n,a=0;n=i[a];a++){var s=new FileReader;s.onload=function(e){var i=t.parseCSVtoArrayofObjects(e.target.result,"\n",",");sessionStorage.setItem("itemInfo",o()(i))},s.readAsText(n)}}else this.showAlert=!0,this.disabled=!0},parseCSVtoArrayofObjects:function(e,t,i){for(var n=[],a=e.split(t),o=0;o<a.length-1;o++){if(""!=a[o]){var s=new this.saleItem,r=a[o].split(i);s.item_id=o,s.name=r[0],r[0].includes("�")&&(s.name=r[0].replace("�","")),s.container=r[1],s.specification=r[2],s.quantity=r[3],s.price=r[4],""!==r[3]&&""!==r[4]||(this.showAlert2=!0,this.disabled=!0,this.reset()),s.comments=r[5]}n.push(s)}return n},saleItem:function(e,t,i,n,a,o){},confirmEntry:function(){console.log("Data saved to session storage"),this.$router.push("editPage")},clearStorage:function(){sessionStorage.clear(),console.log("SessionStorage cleared")},adminPage:function(){r.a.auth().currentUser?this.$router.push("Admin"):this.showModal()},reset:function(){var e=this.$refs.fileInput;e.type="text",e.type="file"},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}},mounted:function(){window.File&&window.FileReader&&window.FileList&&window.Blob||alert("The File APIs are not fully supported in this browser.")}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textReader"},[i("br"),e._v(" "),i("b-alert",{attrs:{variant:"danger",dismissible:"",fade:"",show:e.showAlert},on:{dismissed:function(t){e.showAlert=!1}}},[e._v("\n    Please upload CSV files only!\n  ")]),e._v(" "),i("b-alert",{attrs:{variant:"danger",dismissible:"",fade:"",show:e.showAlert2},on:{dismissed:function(t){e.showAlert=!1}}},[e._v("\n    Quanity/Buy Price may be empty please check the CSV file!\n  ")]),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file"},on:{change:e.handleFileSelect}}),e._v(" "),i("button",{attrs:{disabled:e.disabled},on:{click:e.confirmEntry}},[e._v("Confirm Entry")]),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("p",[i("button",{on:{click:e.clearStorage}},[e._v("Clear Storage")]),e._v(" "),i("button",{on:{click:e.adminPage}},[e._v("Admin Page")]),e._v(" "),e.isModalVisible?i("modal",{on:{close:e.closeModal}}):e._e()],1)],1)},staticRenderFns:[]},p=i("VU/8")(u,m,!1,null,null,null).exports,h={name:"EditPage",data:function(){return{rows:[{specification:"Column Totals",quantity:"",buyPrice:"",children:[]}],items:[],columns:[{label:"Id",field:"id",type:"number",width:"25px"},{label:"Name",field:"name"},{label:"Container",field:"container"},{label:"Specification",field:"specification"},{label:"Quantity",field:"quantity",type:"number",headerField:this.totalQuantity},{label:"Buy Price",field:"buyPrice",type:"decimal",headerField:this.totalBuyPrice},{label:"Substitutes",field:"comments",sortable:!1,globalSearchDisabled:!0}]}},head:{title:{inner:"AHills Price Calculator"}},methods:{displayItems:function(e){for(var t=0;t<e.length;t++)this.rows[0].children.push({id:parseInt(e[t].item_id),name:e[t].name,container:e[t].container,specification:e[t].specification,quantity:parseInt(e[t].quantity),buyPrice:parseFloat(e[t].price),comments:e[t].comments})},totalQuantity:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity;return t},totalBuyPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].buyPrice;return t},createSalesPrices:function(){for(var e=r.a.database().ref("GPM/").orderByKey(),t=JSON.parse(sessionStorage.getItem("itemInfo")),i=[],n=0;n<t.length;n++){var a=new this.saleItemPrices,o=(t[n].quantity*t[n].price).toFixed(2);a.rowTotal=o,e.on("value",function(e){e.forEach(function(e){var i=e.val();o>=i.rowMin&&o<=i.rowMax&&(a.gpm=i.gpm,a.estimatedPrice=(t[n].price/((100-i.gpm)/100)).toFixed(2))})},function(e){console.log("Error: "+e.code)}),i.push(a)}return i},saleItemPrices:function(e,t,i){},confirmEntry:function(){var e=this.createSalesPrices();sessionStorage.setItem("itemSalePrices",o()(e)),this.$router.push("finalPage")}},mounted:function(){var e=JSON.parse(sessionStorage.getItem("itemInfo"));this.displayItems(e);this.createSalesPrices()}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"editPage"},[t("vue-good-table",{staticStyle:{border:"2px solid #dcdfe6"},attrs:{columns:this.columns,rows:this.rows,styleClass:"vgt-table bordered condensed","max-height":"700px","fixed-header":!0,"search-options":{enabled:!0},"group-options":{enabled:!0,headerPosition:"bottom"}}}),this._v(" "),t("br"),this._v(" "),t("button",{on:{click:this.confirmEntry}},[this._v("Confirm Entry")])],1)},staticRenderFns:[]};var v=i("VU/8")(h,f,!1,function(e){i("QMA4")},null,null).exports,g={name:"Admin",data:function(){return{gpm2:""}},firebase:function(){return{gpms:O}},methods:{submitGpm:function(){O.push({name:this.gpm,edit:!1,rowMin:0,rowMax:0})},setEdit:function(e){console.log("Edit Pressed"),O.child(e).update({edit:!0})},cancelEdit:function(e){O.child(e).update({edit:!1})},saveEdit:function(e){var t=e[".key"];O.child(t).update({gpm:parseInt(e.gpm),edit:!1,rowMin:parseFloat(e.rowMin),rowMax:parseFloat(e.rowMax)})},logout:function(){var e=this;r.a.auth().signOut().then(function(){console.log("Signed out"),e.$router.replace("/")})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("table",{staticClass:"minimalistBlack"},[e._m(0),e._v(" "),i("tbody",e._l(e.gpms,function(t){return i("tr",{key:t[".key"]},[t.edit?[i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gpm,expression:"gpm.gpm"}],attrs:{type:"text"},domProps:{value:t.gpm},on:{input:function(i){i.target.composing||e.$set(t,"gpm",i.target.value)}}})]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gpm,expression:"gpm.gpm"}],attrs:{type:"text"},domProps:{value:t.gpm},on:{input:function(i){i.target.composing||e.$set(t,"gpm",i.target.value)}}})]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowMin,expression:"gpm.rowMin"}],attrs:{type:"text"},domProps:{value:t.rowMin},on:{input:function(i){i.target.composing||e.$set(t,"rowMin",i.target.value)}}})]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowMax,expression:"gpm.rowMax"}],attrs:{type:"text"},domProps:{value:t.rowMax},on:{input:function(i){i.target.composing||e.$set(t,"rowMax",i.target.value)}}})]),e._v(" "),i("td",[i("button",{on:{click:function(i){e.saveEdit(t)}}},[e._v("Save")]),e._v(" "),i("button",{on:{click:function(i){e.cancelEdit(t[".key"])}}},[e._v("Cancel")])])]:[i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[e._v(e._s(t.gpm)+"%")]),e._v(" "),i("td",[e._v(e._s((t.gpm/(100-t.gpm)*100).toFixed(2))+"%")]),e._v(" "),i("td",[e._v(e._s(t.rowMin))]),e._v(" "),i("td",[e._v(e._s(t.rowMax))]),e._v(" "),i("td",[i("button",{on:{click:function(i){e.setEdit(t[".key"])}}},[e._v("Edit GPM")])])]],2)}))]),e._v(" "),i("button",{on:{click:e.logout}},[e._v("Logout")]),e._v(" "),i("h4",[e._v("Admin Page - Things to know")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",[e._v("Band")]),e._v(" "),i("th",[e._v("GPM Percent")]),e._v(" "),i("th",[e._v("Markup Percent")]),e._v(" "),i("th",[e._v("Row Minimum")]),e._v(" "),i("th",[e._v("Row Maximum")]),e._v(" "),i("th",[e._v("Edit")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("This page will still be accessable until you have logged out")]),this._v(" "),t("li",[this._v("To see a change in markup value the GPM value needs to be changed ")]),this._v(" "),t("li",[this._v("When setting row values the Minimum value needs to be +1p on the previous row maximum")]),this._v(" "),t("li",[this._v("BandI - When checking which gpm it will look between the min and max rowTotal values, \n        meaning the maximum it needs to be a high value")])])}]};var _=i("VU/8")(g,b,!1,function(e){i("q5gR")},null,null).exports,y={name:"FinalPage",data:function(){return{rows:[{specification:"Column Totals",quantity:"",buyPrice:"",children:[]}],items:[],columns:[{label:"Id",field:"id",type:"number",width:"25px"},{label:"Name",field:"name",width:"250px"},{label:"Container",field:"container",width:"60px"},{label:"Specification",field:"specification",width:"50px"},{label:"Quantity",field:"quantity",type:"number",width:"35px",headerField:this.totalQuantity},{label:"Buy Price",field:"buyPrice",type:"decimal",width:"120px",headerField:this.totalBuyPrice},{label:"Substitutes",field:"comments",sortable:!1,width:"150px",globalSearchDisabled:!0},{label:"Row Total",field:"rowTotal",type:"number"},{label:"GPM%",field:"gpm",type:"number",headerField:this.totalGPM},{label:"Estimated Sell Price (based off rowTotals)",field:"estimatedPrice",type:"number",headerField:this.totalSellPrice}],profit:"Press button"}},head:{title:{inner:"AHills Price Calculator"},link:[{rel:"stylesheet",type:"text/css",href:"/static/print.css",media:"print"}]},methods:{displayItems:function(e,t){for(var i=0;i<e.length;i++)this.rows[0].children.push({id:parseInt(e[i].item_id),name:e[i].name,container:e[i].container,specification:e[i].specification,quantity:parseInt(e[i].quantity),buyPrice:parseFloat(e[i].price),comments:e[i].comments,rowTotal:t[i].rowTotal,gpm:t[i].gpm,estimatedPrice:t[i].estimatedPrice})},totalQuantity:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity;return t},totalBuyPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].buyPrice;return this.totalBuyPrice=t.toFixed(2),t},totalSellPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].estimatedPrice;return this.totalSellPrice=t.toFixed(2),t.toFixed(2)},totalGPM:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].gpm/e.children.length;return t.toFixed(2)},calcProfit:function(){this.profit=(this.totalSellPrice-this.totalBuyPrice).toFixed(2)},printTable:function(){window.frames.print_frame.document.body.innerHTML=document.getElementById("table").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print()}},mounted:function(){var e=JSON.parse(sessionStorage.getItem("itemInfo")),t=JSON.parse(sessionStorage.getItem("itemSalePrices"));this.displayItems(e,t)}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"editPage"},[i("vue-good-table",{staticStyle:{border:"1px solid #dcdfe6"},attrs:{id:"table",columns:e.columns,rows:e.rows,styleClass:"vgt-table bordered condensed","max-height":"700px","fixed-header":!0,"search-options":{enabled:!0},"group-options":{enabled:!0,headerPosition:"bottom"}}}),e._v(" "),i("div",{staticStyle:{"margin-top":"10px"}},[i("p",[i("button",{on:{click:e.calcProfit}},[e._v("Calculate Profit")]),e._v(" Total Profit: "+e._s(e.profit)+" ")]),e._v(" "),i("iframe",{attrs:{name:"print_frame",width:"0",height:"0",src:"finalPage:blank"}}),e._v(" "),i("button",{on:{click:e.printTable}},[e._v("Print Table")])])],1)},staticRenderFns:[]};var P=i("VU/8")(y,w,!1,function(e){i("MnhC")},null,null).exports,x={name:"app",data:function(){return{text:""}},head:{title:{inner:"AHills Price Calculator"},link:[]},components:{TextReader:p,EditPage:v,Admin:_,FinalDisplayPage:P,modal:d}},M={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("link",{attrs:{rel:"icon",src:"./assets/AHillandSonsLogo.png"}}),e._v(" "),i("div",[i("b-nav",{attrs:{tabs:""}},[i("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),i("b-nav-item",{attrs:{to:"/editPage"}},[e._v("Edit Page")]),e._v(" "),i("b-nav-item",{attrs:{to:"/finalPage"}},[e._v("Final Page")]),e._v(" "),i("b-nav-item",{attrs:{"disabled:true":"",to:"/Admin"}},[e._v("Admin")])],1)],1),e._v(" "),i("router-view")],1)},staticRenderFns:[]};var S=i("VU/8")(x,M,!1,function(e){i("Uf9t")},null,null).exports,C=i("/ocq"),k=i("RZCy"),E=i.n(k),I=i("e6fC"),F=(i("Jmt5"),i("9M+g"),i("cOEn")),A=i("sttX");i("gfot");n.a.use(A.a),n.a.use(C.a),n.a.use(E.a),n.a.use(I.a),n.a.use(F.Navbar),n.a.use(F.Nav);var T=new C.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"TextReader",component:p},{path:"/editPage",name:"EditPage",component:v},{path:"/finalPage",name:"FinalDisplayPage",component:P},{path:"/admin",name:"Admin",component:_,meta:{requiresAuth:!0}}]});T.beforeEach(function(e,t,i){var n=r.a.auth().currentUser,a=e.matched.some(function(e){return e.meta.requiresAuth});a&&!n?(alert("Please Sign in to access this page"),i("/")):i()});var R=T,q=i("1mcD"),$=i.n(q),B=(i("hZls"),i("sUu7"));i.d(t,"db",function(){return N}),i.d(t,"gpmRef",function(){return O});var N=r.a.initializeApp({apiKey:"AIzaSyD84mR8U4ovC_raqYd6o_b9KDy3E8zQMks",authDomain:"ahills-price-calculator.firebaseapp.com",databaseURL:"https://ahills-price-calculator.firebaseio.com",projectId:"ahills-price-calculator",storageBucket:"ahills-price-calculator.appspot.com",messagingSenderId:"607541047201"}).database(),O=N.ref("GPM");n.a.use($.a),n.a.use(B.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:R,render:function(e){return e(S)}})},QMA4:function(e,t){},Uf9t:function(e,t){},gfot:function(e,t){},q5gR:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.858ee8a6d6b3f5eb0514.js.map