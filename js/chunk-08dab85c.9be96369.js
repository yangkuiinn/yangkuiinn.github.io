(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08dab85c"],{"68d5":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"center"},[s("div",{staticClass:"logo"}),s("van-form",[s("van-field",{attrs:{name:"phone",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),s("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:e.onSubmit}},[e._v("登录")])],1),s("div",{staticClass:"registered",on:{click:e.registered}},[e._v("注册")])],1)],1)])},o=[],n=s("d399"),r={data:function(){return{phone:"",password:""}},methods:{onSubmit:function(){var e=this;console.log("执行");var t={phone:this.phone,password:this.password};this.api.login(t).then((function(t){200==t.data.code?(localStorage.setItem("userId",t.data.profile.userId),localStorage.setItem("token",t.data.token),e.$router.push("/")):Object(n["a"])(t.data.message)})).catch((function(e){console.log(e)}))},registered:function(){this.$router.push("/registered")}}},i=r,c=(s("c12f"),s("2877")),l=Object(c["a"])(i,a,o,!1,null,"267b303e",null);t["default"]=l.exports},c12f:function(e,t,s){"use strict";s("68d5")}}]);
//# sourceMappingURL=chunk-08dab85c.9be96369.js.map