(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{184:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"다양한-type들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다양한-type들","aria-hidden":"true"}},[e._v("#")]),e._v(" 다양한 type들")]),e._v(" "),a("h3",{attrs:{id:"type을-출력하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type을-출력하기","aria-hidden":"true"}},[e._v("#")]),e._v(" Type을 출력하기")]),e._v(" "),a("p",[e._v("Coq에서 "),a("code",[e._v("Check")]),e._v("는 data나 function의 type을 출력한다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Check true.\n")])])]),a("p",[e._v("명령어는")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("true\n     : bool\n")])])]),a("p",[e._v("을 출력한다. 함수 타입에 대해서는,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Check negb.\n")])])]),a("p",[e._v("을 실행하면")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("negb\n     : bool -> bool\n")])])]),a("p",[e._v("가 출력된다. 어떤 데이터나 함수든지 Check를 통해 타입을 알 수 있다.")]),e._v(" "),a("h3",{attrs:{id:"compound-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compound-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Compound Types")]),e._v(" "),a("p",[e._v("지금까지 정의된 type은 enumerated type이었다. 하지만 이와 달리, Constructor가 그 자체로 하나의 type이 되는 것이 아니라, argument를 받아 그때마다 다른 element를 만들 수도 있다.")]),e._v(" "),a("p",[e._v("rgb 타입을 정의하자:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Inductive rgb : Type :=\n  | red : rgb\n  | green : rgb\n  | blue : rgb.\n")])])]),a("p",[e._v("이것을 기반으로 다른 타입을 추가로 정의해보자.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Inductive color : Type :=\n  | black : color\n  | white : color\n  | primary : rgb -> color.\n")])])]),a("p",[e._v("color 타입에는, 앞에서와 마찬가지로 black, white의 argument를 받지 않는 constructor가 있고,\nrgb argument를 받아서 color를 내놓는 primary constructor가 있다.\n앞에서 정의한 rgb 타입들을 인자로 넘긴다.\n예를 들어 "),a("code",[e._v("primary red")]),e._v("는 하나의 color 타입의 값이 된다.\n그외에는 특별히 다른 것은 없어보인다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Definition monochrome (c : color) : bool :=\n  match c with\n  | black => true\n  | white => true\n  | primary p => false\n  end.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Definition isred (c : color) : bool :=\n  match c with\n  | black => false\n  | white => false\n  | primary red => true\n  | primary _ => false\n  end.\n")])])])])}],!1,null,null,null);s.options.__file="2-more-types.md";t.default=s.exports}}]);