(this.webpackJsonpokdohyuk_calculator=this.webpackJsonpokdohyuk_calculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),CalculationComponent=function(_Component){function CalculationComponent(){var _this;return Object(_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculationComponent),_this=Object(_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(CalculationComponent).call(this)),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(CalculationComponent,_Component),Object(_Users_guksu_Desktop_okdohyuk_Calculator_okdohyuk_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculationComponent,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick}))}}]),CalculationComponent}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=CalculationComponent},function(e,t,a){"use strict";var n=a(1),_=a(2),o=a(4),r=a(3),l=a(5),c=a(0),u=a.n(c),s=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props.result;return u.a.createElement("div",{className:"result"},u.a.createElement("p",null,e))}}]),t}(c.Component);t.a=s},function(e,t,a){"use strict";var n=a(1),_=a(2),o=a(4),r=a(3),l=a(5),c=a(0),u=a.n(c),s=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"button-area"},u.a.createElement("button",{className:"symbol",name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),u.a.createElement("button",{className:"symbol",name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),u.a.createElement("button",{className:"symbol",name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),u.a.createElement("button",{className:"symbol",name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),u.a.createElement("br",null),u.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),u.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),u.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),u.a.createElement("button",{className:"symbol",name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),u.a.createElement("br",null),u.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),u.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),u.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),u.a.createElement("button",{className:"symbol",name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),u.a.createElement("br",null),u.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),u.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),u.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),u.a.createElement("button",{className:"symbol",name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),u.a.createElement("br",null),u.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),u.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),u.a.createElement("button",{name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"\u2b05\ufe0e"),u.a.createElement("button",{id:"same",name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),u.a.createElement("br",null))}}]),t}(c.Component);t.a=s},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),_=a.n(n),o=a(7),r=a.n(o),l=a(1),c=a(2),u=a(4),s=a(3),i=a(5),m=a(8),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return _.a.createElement("div",{className:"explanation"},_.a.createElement("h1",null,"okdohyuk's calculator"),_.a.createElement("h2",null,"\uc0ac\uc6a9\uc124\uba85"),_.a.createElement("p",{className:"use"},"1\ub2e8\uacc4, \ub77c\uc774\ud2b8\ubaa8\ub4dc\uc640 \ub2e4\ud06c\ubaa8\ub4dc\uc911\uc5d0\uc11c \uc790\uc2e0\uc774 \uc6d0\ud558\ub294 \ubaa8\ub4dc\ub97c \uc120\ud0dd\ud574\uc90d\ub2c8\ub2e4.",_.a.createElement("br",null),"2\ub2e8\uacc4, \uc77c\ubc18\uc801\uc778 \uc0ac\uce59\uc5f0\uc0b0 \ubc0f \uc5f0\uc0b0 \uc21c\uc11c\uc5d0 \ub9de\uac8c \uc5f0\uc0b0\uc744 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),_.a.createElement("h2",null,"\uac1c\ubc1c\ud658\uacbd"),_.a.createElement("p",{className:"use"},"\ub77c\uc774\ube0c\ub7ec\ub9ac: \ub9ac\uc561\ud2b8",_.a.createElement("br",null),"\uc5b8\uc5b4: HTML, CSS, JSX"))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,_=new Array(n),o=0;o<n;o++)_[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(_)))).state={checked:"dark"===localStorage.getItem("theme"),theme:localStorage.getItem("theme")},a.toggleThemeChange=function(){!1===a.state.checked?(localStorage.setItem("theme","dark"),document.getElementsByClassName("calculator-body")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!0})):(localStorage.setItem("theme","light"),document.getElementsByClassName("calculator-body")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!1}))},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("calculator-body")[0].setAttribute("data-theme",localStorage.getItem("theme"))}},{key:"render",value:function(){var e=this;return _.a.createElement("label",{className:"switch"},_.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:function(){return e.toggleThemeChange()}}),_.a.createElement("span",{className:"slider round"}))}}]),t}(n.Component),C=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,_=new Array(n),o=0;o<n;o++)_[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(_)))).state={isLoading:!0},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),300)}},{key:"render",value:function(){var e=this.state.isLoading;return _.a.createElement("section",{className:"container"},e?_.a.createElement("div",{className:"loader"},_.a.createElement("span",{className:"loader_text"},"Loading...")):_.a.createElement("div",{className:"Main"},_.a.createElement("div",{className:"calculator-area"},_.a.createElement("div",{className:"calculator-body"},_.a.createElement(p,null),_.a.createElement(m.a,null))),_.a.createElement("div",{className:"explanation-body"},_.a.createElement(k,null))))}}]),t}(n.Component));r.a.render(_.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5bfa8c65.chunk.js.map