(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af432"],{"0e29":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-page-heading",{attrs:{title:"Main Content",subtitle:"Boxed"},scopedSlots:t._u([{key:"extra",fn:function(){return[n("b-breadcrumb",{staticClass:"breadcrumb-alt"},[n("b-breadcrumb-item",{attrs:{href:"javascript:void(0)"}},[t._v("Layout")]),t._v(" "),n("b-breadcrumb-item",{attrs:{href:"javascript:void(0)"}},[t._v("Main Content")]),t._v(" "),n("b-breadcrumb-item",{attrs:{active:""}},[t._v("Boxed")])],1)]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"content"},[n("base-block",{attrs:{rounded:""}},[n("p",{staticClass:"text-center"},[t._v("\n        Content has a max-width set, so on larger screens, the content is boxed (screen width greater than 991px).\n      ")])])],1)],1)},r=[],o={created:function(){this.$store.commit("mainContent",{mode:"boxed"})},beforeRouteLeave:function(t,e,n){this.$store.commit("mainContent",{mode:"narrow"}),n()}},s=o,i=n("2877"),c=Object(i["a"])(s,a,r,!1,null,null,null);e["default"]=c.exports}}]);