webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},KwGt:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("mvHQ"),r=i.n(a),s=i("yviF"),o=i.n(s),l=(i("dih4"),{name:"modal",data:function(){return{email:"",password:"",modalOpen:!1}},methods:{close:function(){this.$emit("close"),this.email="",this.password="",this.modalOpen=!1,console.log("Modal closing:"+this.modalOpen)},signIn:function(){var e=this;o.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){console.log("Login Sucessful"),e.$router.replace("admin")},function(e){alert("There was an "+e)})},enterKeyListener:function(e){this.modalOpen&&13===e.keyCode&&this.signIn()},resetPass:function(){""===this.email?alert("There was an Error: Email field empty, please enter email and then press reset password"):o.a.auth().sendPasswordResetEmail(this.email).then(function(){alert("A reset password email has been sent")}).catch(function(e){alert("There was an "+e)})}},mounted:function(){this.modalOpen=!0,console.log("Modal loaded on click:"+this.modalOpen)},created:function(){document.addEventListener("keyup",this.enterKeyListener)},destroyed:function(){document.removeEventListener("keyup",this.enterKeyListener)}}),d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"modal-fade"}},[i("div",{staticClass:"modal-backdrop"},[i("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[i("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[i("h5",{staticClass:"header-title"},[e._v("\n          Sign in to use admin page\n          ")]),e._v(" "),i("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("\n            x\n          ")])])],2),e._v(" "),i("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._t("body",[i("div",{staticClass:"left"},[e._v("\n            Email:\n          ")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"right",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"left"},[e._v("\n            Password:\n          ")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"right",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])],2),e._v(" "),i("footer",{staticClass:"modal-footer"},[e._t("footer",[i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:e.resetPass}},[e._v("Reset Password ")]),e._v(" "),i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),e._v(" "),i("button",{staticClass:"btn-green",attrs:{type:"button"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.signIn(t):null},click:e.signIn}},[e._v("\n            Sign In\n          ")])])],2)])])])},staticRenderFns:[]};var c=i("VU/8")(l,d,!1,function(e){i("KwGt")},null,null).exports,u={name:"TextReader",components:{modal:c},data:function(){return{showAlert:!1,showAlert2:!1,disabled:!1,isModalVisible:!1}},head:{title:{inner:"AHills Price Calculator"}},methods:{handleFileSelect:function(e){var t=this,i=e.target.files;if(i[0].name.includes(".csv")){this.showAlert=!1,this.showAlert2=!1,this.disabled=!1;for(var n,a=0;n=i[a];a++){var s=new FileReader;s.onload=function(e){var i=t.parseCSVtoArrayofObjects(e.target.result,"\n",",");sessionStorage.setItem("itemInfo",r()(i))},s.readAsText(n)}}else this.showAlert=!0,this.disabled=!0},parseCSVtoArrayofObjects:function(e,t,i){for(var n=[],a=e.split(t),r=0;r<a.length-1;r++){if(""!=a[r]){var s=new this.saleItem,o=a[r].split(i);s.item_id=r,s.name=o[0],o[0].includes("�")&&(s.name=o[0].replace("�","")),s.container=o[1],s.specification=o[2],s.quantity=o[3],s.price=o[4],""!==o[3]&&""!==o[4]||(this.showAlert2=!0,this.disabled=!0,this.reset()),s.comments=o[5]}n.push(s)}return n},saleItem:function(e,t,i,n,a,r){},confirmEntry:function(){console.log("Data saved to session storage"),this.$router.push("editPage")},clearStorage:function(){sessionStorage.clear(),console.log("SessionStorage cleared")},adminPage:function(){o.a.auth().currentUser?this.$router.push("Admin"):this.showModal()},reset:function(){var e=this.$refs.fileInput;e.type="text",e.type="file"},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}},mounted:function(){window.File&&window.FileReader&&window.FileList&&window.Blob||alert("The File APIs are not fully supported in this browser.")}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textReader"},[i("br"),e._v(" "),i("b-alert",{attrs:{variant:"danger",dismissible:"",fade:"",show:e.showAlert},on:{dismissed:function(t){e.showAlert=!1}}},[e._v("\n    Please upload CSV files only!\n  ")]),e._v(" "),i("b-alert",{attrs:{variant:"danger",dismissible:"",fade:"",show:e.showAlert2},on:{dismissed:function(t){e.showAlert=!1}}},[e._v("\n    Quanity/Buy Price may be empty please check the CSV file!\n  ")]),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file"},on:{change:e.handleFileSelect}}),e._v(" "),i("button",{attrs:{disabled:e.disabled},on:{click:e.confirmEntry}},[e._v("Confirm Entry")]),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("p",[i("button",{on:{click:e.clearStorage}},[e._v("Clear Storage")]),e._v(" "),i("button",{on:{click:e.adminPage}},[e._v("Admin Page")]),e._v(" "),e.isModalVisible?i("modal",{on:{close:e.closeModal}}):e._e()],1)],1)},staticRenderFns:[]},p=i("VU/8")(u,m,!1,null,null,null).exports,h={name:"EditPage",data:function(){return{rows:[{specification:"Column Totals",quantity:"",buyPrice:"",children:[]}],items:[],PriceBands:{priceBandA:46,priceBandB:42,priceBandC:35,priceBandD:33,priceBandE:29,priceBandF:24,priceBandG:21,priceBandH:20,priceBandI:19},columns:[{label:"Id",field:"id",type:"number",width:"25px"},{label:"Name",field:"name"},{label:"Container",field:"container"},{label:"Specification",field:"specification"},{label:"Quantity",field:"quantity",type:"number",headerField:this.totalQuantity},{label:"Buy Price",field:"buyPrice",type:"decimal",headerField:this.totalBuyPrice},{label:"Substitutes",field:"comments",sortable:!1,globalSearchDisabled:!0}]}},head:{title:{inner:"AHills Price Calculator"}},methods:{displayItems:function(e){for(var t=0;t<e.length;t++)this.rows[0].children.push({id:parseInt(e[t].item_id),name:e[t].name,container:e[t].container,specification:e[t].specification,quantity:parseInt(e[t].quantity),buyPrice:parseFloat(e[t].price),comments:e[t].comments})},totalQuantity:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity;return t},totalBuyPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].buyPrice;return t},createSalesPrices:function(){for(var e=JSON.parse(sessionStorage.getItem("itemInfo")),t=[],i=0;i<e.length;i++){var n=new this.saleItemPrices;n.bandA=(e[i].price/((100-this.PriceBands.priceBandA)/100)).toFixed(2),n.bandB=(e[i].price/((100-this.PriceBands.priceBandB)/100)).toFixed(2),n.bandC=(e[i].price/((100-this.PriceBands.priceBandC)/100)).toFixed(2),n.bandD=(e[i].price/((100-this.PriceBands.priceBandD)/100)).toFixed(2),n.bandE=(e[i].price/((100-this.PriceBands.priceBandE)/100)).toFixed(2),n.bandF=(e[i].price/((100-this.PriceBands.priceBandF)/100)).toFixed(2),n.bandG=(e[i].price/((100-this.PriceBands.priceBandG)/100)).toFixed(2),n.bandH=(e[i].price/((100-this.PriceBands.priceBandH)/100)).toFixed(2),n.bandI=(e[i].price/((100-this.PriceBands.priceBandI)/100)).toFixed(2);var a=e[i].quantity*e[i].price;n.rowTotal=a.toFixed(2),a>0&&a<=10?(n.estimatedPrice=n.bandA,n.gpm=this.PriceBands.priceBandA):a>=10.01&&a<=20?(n.estimatedPrice=n.bandB,n.gpm=this.PriceBands.priceBandB):a>=20.01&&a<=35?(n.estimatedPrice=n.bandC,n.gpm=this.PriceBands.priceBandC):a>=35.01&&a<=90?(n.estimatedPrice=n.bandD,n.gpm=this.PriceBands.priceBandD):a>=90.01&&a<=190?(n.estimatedPrice=n.bandE,n.gpm=this.PriceBands.priceBandE):a>=190.01&&a<=300?(n.estimatedPrice=n.bandF,n.gpm=this.PriceBands.priceBandF):a>=300.01&&a<=600?(n.estimatedPrice=n.bandG,n.gpm=this.PriceBands.priceBandG):a>=600.01&&a<=900?(n.estimatedPrice=n.bandH,n.gpm=this.PriceBands.priceBandH):(n.estimatedPrice=n.bandI,n.gpm=this.PriceBands.priceBandI),t.push(n)}return t},saleItemPrices:function(e,t,i,n,a,r,s,o,l,d,c,u){},confirmEntry:function(){var e=this.createSalesPrices();sessionStorage.setItem("itemSalePrices",r()(e)),this.$router.push("finalPage")}},mounted:function(){var e=JSON.parse(sessionStorage.getItem("itemInfo"));this.displayItems(e)}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"editPage"},[t("vue-good-table",{staticStyle:{border:"2px solid #dcdfe6"},attrs:{columns:this.columns,rows:this.rows,styleClass:"vgt-table bordered condensed","max-height":"700px","fixed-header":!0,"search-options":{enabled:!0},"group-options":{enabled:!0,headerPosition:"bottom"}}}),this._v(" "),t("br"),this._v(" "),t("button",{on:{click:this.confirmEntry}},[this._v("Confirm Entry")])],1)},staticRenderFns:[]};var v=i("VU/8")(h,f,!1,function(e){i("bduN")},null,null).exports,g={name:"Admin",data:function(){return{gpm:""}},firebase:function(){return{gpms:H}},methods:{submitGpm:function(){H.push({name:this.gpm,edit:!1,rowMin:0,rowMax:0})},setEdit:function(e){console.log("Edit Pressed"),H.child(e).update({edit:!0})},cancelEdit:function(e){H.child(e).update({edit:!1})},saveEdit:function(e){var t=e[".key"];H.child(t).update({gpm:parseInt(e.gpm),edit:!1,rowMin:parseFloat(e.rowMin),rowMax:parseFloat(e.rowMax)})},logout:function(){var e=this;o.a.auth().signOut().then(function(){console.log("Signed out"),e.$router.replace("/")})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",[e._v("(Testing Purposes) GPM:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.gpm,expression:"gpm"},{name:"validate",rawName:"v-validate",value:"numeric|max:3",expression:"'numeric|max:3'"}],attrs:{type:"text",name:"Test"},domProps:{value:e.gpm},on:{input:function(t){t.target.composing||(e.gpm=t.target.value)}}}),e._v(" "),e.errors.has("Test")?i("p",[e._v(e._s(e.errors.first("Test")))]):e._e(),e._v(" "),i("button",{on:{click:e.submitGpm}},[e._v("add")]),e._v(" "),i("table",{staticClass:"minimalistBlack"},[e._m(0),e._v(" "),i("tbody",e._l(e.gpms,function(t){return i("tr",{key:t[".key"]},[t.edit?[i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gpm,expression:"gpm.gpm"},{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],attrs:{type:"text",name:"GPM"},domProps:{value:t.gpm},on:{input:function(i){i.target.composing||e.$set(t,"gpm",i.target.value)}}})]),e._v(" "),e.errors.has("GPMs")?i("span",[e._v(e._s(e.errors.first("GPM")))]):e._e(),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gpm,expression:"gpm.gpm"}],attrs:{type:"text"},domProps:{value:t.gpm},on:{input:function(i){i.target.composing||e.$set(t,"gpm",i.target.value)}}})]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowMin,expression:"gpm.rowMin"}],attrs:{type:"text"},domProps:{value:t.rowMin},on:{input:function(i){i.target.composing||e.$set(t,"rowMin",i.target.value)}}})]),e._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowMax,expression:"gpm.rowMax"}],attrs:{type:"text"},domProps:{value:t.rowMax},on:{input:function(i){i.target.composing||e.$set(t,"rowMax",i.target.value)}}})]),e._v(" "),i("td",[i("button",{on:{click:function(i){e.saveEdit(t)}}},[e._v("Save")]),e._v(" "),i("button",{on:{click:function(i){e.cancelEdit(t[".key"])}}},[e._v("Cancel")])])]:[i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[e._v(e._s(t.gpm)+"%")]),e._v(" "),i("td",[e._v(e._s((t.gpm/(100-t.gpm)*100).toFixed(2))+"%")]),e._v(" "),i("td",[e._v(e._s(t.rowMin))]),e._v(" "),i("td",[e._v(e._s(t.rowMax))]),e._v(" "),i("td",[i("button",{on:{click:function(i){e.setEdit(t[".key"])}}},[e._v("Edit GPM")])])]],2)}))]),e._v(" "),i("button",{on:{click:e.logout}},[e._v("Logout")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",[e._v("Band")]),e._v(" "),i("th",[e._v("GPM Percent")]),e._v(" "),i("th",[e._v("Markup Percent")]),e._v(" "),i("th",[e._v("Row Minimum")]),e._v(" "),i("th",[e._v("Row Maximum")]),e._v(" "),i("th",[e._v("Edit")])])])}]};var _=i("VU/8")(g,b,!1,function(e){i("hZWD")},null,null).exports,P={name:"FinalPage",data:function(){return{rows:[{specification:"Column Totals",quantity:"",buyPrice:"",children:[]}],items:[],columns:[{label:"Id",field:"id",type:"number",width:"25px"},{label:"Name",field:"name",width:"250px"},{label:"Container",field:"container",width:"60px"},{label:"Specification",field:"specification",width:"50px"},{label:"Quantity",field:"quantity",type:"number",width:"35px",headerField:this.totalQuantity},{label:"Buy Price",field:"buyPrice",type:"decimal",width:"120px",headerField:this.totalBuyPrice},{label:"Substitutes",field:"comments",sortable:!1,width:"150px",globalSearchDisabled:!0},{label:"Row Total",field:"rowTotal",type:"number"},{label:"GPM%",field:"gpm",type:"number",headerField:this.totalGPM},{label:"Estimated Sell Price (based off rowTotals)",field:"estimatedPrice",type:"number",headerField:this.totalSellPrice}],profit:"Press button"}},head:{title:{inner:"AHills Price Calculator"},link:[{rel:"stylesheet",type:"text/css",href:"/static/print.css",media:"print"}]},methods:{displayItems:function(e,t){for(var i=0;i<e.length;i++)this.rows[0].children.push({id:parseInt(e[i].item_id),name:e[i].name,container:e[i].container,specification:e[i].specification,quantity:parseInt(e[i].quantity),buyPrice:parseFloat(e[i].price),comments:e[i].comments,rowTotal:t[i].rowTotal,gpm:t[i].gpm,estimatedPrice:t[i].estimatedPrice})},totalQuantity:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity;return t},totalBuyPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].buyPrice;return this.totalBuyPrice=t.toFixed(2),t},totalSellPrice:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].quantity*e.children[i].estimatedPrice;return this.totalSellPrice=t.toFixed(2),t.toFixed(2)},totalGPM:function(e){for(var t=0,i=0;i<e.children.length;i++)t+=e.children[i].gpm/e.children.length;return t.toFixed(2)},calcProfit:function(){this.profit=(this.totalSellPrice-this.totalBuyPrice).toFixed(2)},printTable:function(){window.frames.print_frame.document.body.innerHTML=document.getElementById("table").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print()}},mounted:function(){var e=JSON.parse(sessionStorage.getItem("itemInfo")),t=JSON.parse(sessionStorage.getItem("itemSalePrices"));this.displayItems(e,t)}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"editPage"},[i("vue-good-table",{staticStyle:{border:"1px solid #dcdfe6"},attrs:{id:"table",columns:e.columns,rows:e.rows,styleClass:"vgt-table bordered condensed","max-height":"700px","fixed-header":!0,"search-options":{enabled:!0},"group-options":{enabled:!0,headerPosition:"bottom"}}}),e._v(" "),i("div",{staticStyle:{"margin-top":"10px"}},[i("p",[i("button",{on:{click:e.calcProfit}},[e._v("Calculate Profit")]),e._v(" Total Profit: "+e._s(e.profit)+" ")]),e._v(" "),i("iframe",{attrs:{name:"print_frame",width:"0",height:"0",src:"finalPage:blank"}}),e._v(" "),i("button",{on:{click:e.printTable}},[e._v("Print Table")])])],1)},staticRenderFns:[]};var w=i("VU/8")(P,y,!1,function(e){i("QbPH")},null,null).exports,x={name:"app",data:function(){return{text:""}},head:{title:{inner:"AHills Price Calculator"},link:[]},components:{TextReader:p,EditPage:v,Admin:_,FinalDisplayPage:w,modal:c}},B={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("link",{attrs:{rel:"icon",src:"./assets/AHillandSonsLogo.png"}}),e._v(" "),i("div",[i("b-nav",{attrs:{tabs:""}},[i("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),i("b-nav-item",{attrs:{to:"/editPage"}},[e._v("Edit Page")]),e._v(" "),i("b-nav-item",{attrs:{to:"/finalPage"}},[e._v("Final Page")]),e._v(" "),i("b-nav-item",{attrs:{"disabled:true":"",to:"/Admin"}},[e._v("Admin")])],1)],1),e._v(" "),i("router-view")],1)},staticRenderFns:[]};var C=i("VU/8")(x,B,!1,function(e){i("Uf9t")},null,null).exports,F=i("/ocq"),S=i("RZCy"),M=i.n(S),E=i("e6fC"),I=(i("Jmt5"),i("9M+g"),i("cOEn")),k=i("sttX");i("gfot");n.a.use(k.a),n.a.use(F.a),n.a.use(M.a),n.a.use(E.a),n.a.use(I.Navbar),n.a.use(I.Nav);var A=new F.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"TextReader",component:p},{path:"/editPage",name:"EditPage",component:v},{path:"/finalPage",name:"FinalDisplayPage",component:w},{path:"/admin",name:"Admin",component:_,meta:{requiresAuth:!0}}]});A.beforeEach(function(e,t,i){var n=o.a.auth().currentUser,a=e.matched.some(function(e){return e.meta.requiresAuth});a&&!n?(alert("Please Sign in to access this page"),i("/")):i()});var T=A,N=i("1mcD"),R=i.n(N),G=(i("hZls"),i("sUu7"));i.d(t,"db",function(){return q}),i.d(t,"gpmRef",function(){return H});var q=o.a.initializeApp({apiKey:"AIzaSyD84mR8U4ovC_raqYd6o_b9KDy3E8zQMks",authDomain:"ahills-price-calculator.firebaseapp.com",databaseURL:"https://ahills-price-calculator.firebaseio.com",projectId:"ahills-price-calculator",storageBucket:"ahills-price-calculator.appspot.com",messagingSenderId:"607541047201"}).database(),H=q.ref("GPM");n.a.use(R.a),n.a.use(G.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:T,render:function(e){return e(C)}})},QbPH:function(e,t){},Uf9t:function(e,t){},bduN:function(e,t){},gfot:function(e,t){},hZWD:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.187562f28e743ae5dced.js.map