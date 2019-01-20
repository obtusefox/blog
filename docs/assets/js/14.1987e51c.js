(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("클릭만 하면 되는 crostini에 비해 설치하기 복잡하다. 그리고 앱을 실행할 때마다 shell에서 명령어를 실행해야 한다. 크롬의 Crouton 확장이 잘 동작하지 않아 창이 실행되지 않을 때도 있다. 그래도 crostini처럼 이상하게 동작하진 않는다. 그러니 내가 쓰는 것.")]),t._v(" "),t._m(4),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dnschneid/crouton",target:"_blank",rel:"noopener noreferrer"}},[t._v("crouton"),r("OutboundLink")],1),t._v("의 "),r("code",[t._v("Usage")]),t._v(" 안내를 따라 설치하되, 18.04를 설치하게 지정하자. 문제가 생길 수 있다고 하는데 아직 유의미한 문제를 마주하진 못했다. 링크에서 crouton을 받은 후에 크롬 창에서 ctrl + alt + T를 이용해 shell을 띄우고")]),t._v(" "),t._m(5),r("p",[t._v("명령어를 입력하면 된다. 오래 오래 걸려서 설치가 된다.\n다시 shell에서")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),r("p",[t._v("로 git, lxde의 파일관리자, 외형 관리자, gtk 엔진들을 설치하자.\ngtk 테마로 구글이 crostini에 사용하는 "),r("a",{attrs:{href:"https://chromium.googlesource.com/chromiumos/third_party/cros-adapta/+/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("cros-adapata"),r("OutboundLink")],1),t._v(", 아이콘 테마로 "),r("a",{attrs:{href:"https://github.com/daniruiz/flat-remix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flat Remix"),r("OutboundLink")],1),t._v("를 사용하자.")]),t._v(" "),t._m(10),r("p",[t._v("로 두 파일을 받자. 그리고 크롬에서 새 shell을 띄우고")]),t._v(" "),t._m(11),r("p",[t._v("을 이용해 탐색기를 띄워주자. 아까 받은 cros-adapata 테마를 .themes 폴더에 넣어주고, flat-remix 테마를 .themes 폴더에 넣어주자. 그리고 또 새 shell을 띄워서")]),t._v(" "),t._m(12),r("p",[t._v("로 외형 관리자를 실행하고 gtk 테마를 cros-adapta로, icon 테마를 flat-remix로 바꾸자. 이제 마찬가지 방식으로 다른 앱을 실행하면 예뻐져있는 것을 확인할 수 있다.")]),t._v(" "),r("p",[t._v("다만 앱으로 가는 바로가기를 만들 수 없다는 것이 안타깝다. 이것은 chrome extension으로 만들 수 있는 권한 밖의 것인지 확인해보고, 가능하다면 직접 만들어보는 것도 괜찮을 것 같다.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"crouton-셋팅하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crouton-셋팅하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton 셋팅하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crostini를-쓰지-않을-이유"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crostini를-쓰지-않을-이유","aria-hidden":"true"}},[this._v("#")]),this._v(" Crostini를 쓰지 않을 이유")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("성능은 crostini와 crouton 모두 비슷하다고 한다. 물론 crouton을 쓰면 그래픽 가속이 되지만, 나는 xiwi를 사용하기 때문에 해당 사항이 없다. 그러나 crostini를 쓸 때에는 간단하지만 기이한 버그가 나를 괴롭혔다. 입력 문제. 리눅스 앱으로 창 전환을 하면 "),e("code",[this._v("tttttt...")]),this._v(", "),e("code",[this._v("222222...")]),this._v(" 등의 기이한 입력이 발생하는 것. 그리고 CoqIde 경우 파일 열기나 저장 다이얼로그를 아무리 꺼도 다시 창이 떠버리는 기이한 버그. 보고를 하긴 했는데 언제 고쳐질지 모르겠고, crostini가 그리 완벽하진 않음을 느꼈다. 가끔은 앱이 실행되지 않는듯 삐걱거리는 것이 늘 느껴진다. 결국 crostini가 제공하는 통합성을 포기하고 crouton을 사용하기로 했다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crouton의-단점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crouton의-단점","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton의 단점")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crouton로-18-04-bionic-설치하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crouton로-18-04-bionic-설치하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton로 18.04 Bionic 설치하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("> shell\nsudo cd ~/Downloads\ncrouton -r bionic -t xiwi -n bionic\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(">shell\nsudo enter-chroot\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("로 container에 접속할 수 있다. 일단 "),e("code",[this._v("sudo apt update")]),this._v("로 패키지 정보를 업데이트하자.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chromeos와-어울리는-테마-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chromeos와-어울리는-테마-설치","aria-hidden":"true"}},[this._v("#")]),this._v(" ChromeOS와 어울리는 테마 설치")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo apt install git pcmanfm lxappearance gtk2-engines-murrine gtk2-engines-pixbuf\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git clone https://chromium.googlesource.com/chromiumos/third_party/cros-adapta\ngit clone https://github.com/daniruiz/flat-remix\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo startxiwi pcmanfm\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo startxiwi lxappearance\n")])])])}],!1,null,null,null);a.options.__file="crouton.md";e.default=a.exports}}]);