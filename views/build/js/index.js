webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(187);


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _jquery = __webpack_require__(170);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _logo = __webpack_require__(172);

	var _logo2 = _interopRequireDefault(_logo);

	var _button = __webpack_require__(174);

	var _button2 = _interopRequireDefault(_button);

	var _Search = __webpack_require__(188);

	var _Search2 = _interopRequireDefault(_Search);

	__webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// var React = require('react');
	// var ReactDOM = require('react-dom');
	// var $ = require('jquery');


	var IndexTxt = function (_React$Component) {
			_inherits(IndexTxt, _React$Component);

			function IndexTxt() {
					_classCallCheck(this, IndexTxt);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexTxt).apply(this, arguments));
			}

			_createClass(IndexTxt, [{
					key: 'render',
					value: function render() {
							var value = this.props['value'];
							var valueArr = value.split('/');
							return _react2.default.createElement(
									'div',
									{ className: 'indexTxt' },
									valueArr[0],
									_react2.default.createElement('br', null),
									valueArr[1]
							);
					}
			}]);

			return IndexTxt;
	}(_react2.default.Component);

	var Main = function (_React$Component2) {
			_inherits(Main, _React$Component2);

			function Main() {
					_classCallCheck(this, Main);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
			}

			_createClass(Main, [{
					key: 'render',
					value: function render() {
							return _react2.default.createElement(
									'div',
									{ id: 'Main' },
									_react2.default.createElement(_logo2.default, null),
									_react2.default.createElement(
											'div',
											{ id: 'buttons' },
											_react2.default.createElement(_button2.default, { href: 'search.html', color: 'blue', value: '搜索爆料', style: this.props['button'] }),
											_react2.default.createElement(_button2.default, { href: 'baoliao.html', color: 'red', value: '我要爆料', style: this.props['button'] })
									),
									_react2.default.createElement(
											'div',
											{ id: 'indexTxt' },
											_react2.default.createElement(IndexTxt, { value: '或许你还在犹豫手头几个offer/或许你刚被坑过却无处诉说' }),
											_react2.default.createElement(IndexTxt, { value: '来这里，做个侠客，勇敢爆料/说你想说的，找你想找的' })
									)
							);
					}
			}]);

			return Main;
	}(_react2.default.Component);

	Main.defaultProps = {
			button: {
					width: '155px',
					height: '44px'
			}
	};

	(0, _reactDom.render)(_react2.default.createElement(Main, null), (0, _jquery2.default)('#content')[0]);

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(174);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).apply(this, arguments));
	  }

	  _createClass(Search, [{
	    key: 'search',
	    value: function search() {
	      return this.refs.searchValue.value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var btnStyle = 'button ' + this.props['color'];
	      return _react2.default.createElement(
	        'div',
	        { className: 'search', style: this.props['style'] },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', { type: 'text', placeholder: '输入公司名或关键字', ref: 'searchValue' }),
	          _react2.default.createElement(_button2.default, { search: this.search.bind(this), color: 'blue', value: '搜索', style: { width: "88px", height: "50px" } })
	        ),
	        _react2.default.createElement(_button2.default, { color: 'red', value: '我要爆料', href: 'baoliao.html', style: { width: "155px", height: "50px", marginLeft: '20px' } })
	      );
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);
	//href="searchResult.html"


	exports.default = Search;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(183)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(190, function() {
				var newContent = __webpack_require__(190);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(179)();
	// imports
	exports.i(__webpack_require__(180), "");

	// module
	exports.push([module.id, "* {\n  font-family: 'Microsoft Yahei';\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  background-color: #fff;\n}\nselect::-ms-expand {\n  display: none;\n}\n.wr-bgcolor-blue {\n  background-color: #4e8fb8;\n}\n.wr-bgcolor-red {\n  background-color: #e75656;\n}\n.wr-ftcolor-blue {\n  color: #4e8fb8;\n}\n.wr-ftcolor-red {\n  color: #e75656;\n}\n.button {\n  text-align: center;\n  border: none;\n  outline: none;\n  border-radius: 2px;\n}\n.button.red {\n  background-color: #e75656;\n  color: #fff;\n}\n.button.red:active {\n  background-color: #c84b4b;\n}\n.button.blue {\n  background-color: #4e8fb8;\n  color: #fff;\n}\n.button.blue:active {\n  background-color: #3a6886;\n}\n.buttonsGroup > .button {\n  width: 46%;\n}\n.buttonsGroup > .button:first-child {\n  float: left;\n}\n.buttonsGroup > .button:last-child {\n  float: right;\n}\n.layout {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 10px;\n  position: relative;\n}\n.clearfix {\n  zoom: 1;\n  display: block;\n}\n.clearfix:after {\n  content: \" \";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.logo p {\n  margin: 0;\n  color: #919191;\n  line-height: 1;\n  text-align: left;\n}\n.logo p span:nth-child(1) {\n  color: #4c4c4c;\n}\n.logo p span:nth-child(2) {\n  color: #4e8fb8;\n}\n.logo p span:nth-child(3) {\n  color: #e75656;\n}\n.logo .logo-disc {\n  padding: 0 5px;\n}\n.search {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 66%;\n  max-width: 768px;\n}\n.search > div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 2px;\n  overflow: hidden;\n  width: 77%;\n}\n.search > div .button {\n  border-radius: 0;\n}\n.search > div input {\n  width: 85%;\n}\n.search .button {\n  font-size: 20px;\n}\n.search input {\n  width: 494px;\n  font-size: 15px;\n  color: #4e8fb8;\n  border: 1px solid #4e8fb8;\n  height: 50px;\n  padding: 10px 20px;\n  outline: none;\n}\n.Input {\n  border-radius: 3px;\n  position: relative;\n}\n.Input > textarea.we-input {\n  height: 180px;\n  resize: none;\n}\n.Input > .we-input {\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  border-radius: 3px;\n  border: none;\n  font-size: 21px;\n  outline: none;\n  color: #969696;\n  background-color: #fff;\n  background: transparent;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.Input > .we-input.blue {\n  border: 1px solid #4e8fb8;\n}\n.Input > .we-input.red {\n  border: 1px solid #e75656;\n}\n.bigTitle {\n  width: 100%;\n  text-align: center;\n  font-size: 36px;\n}\n.typetitle {\n  margin: 20px 0;\n}\n.typetitle > a {\n  display: inline-block;\n  margin-left: 38px;\n  font-size: 23px;\n  text-decoration: none;\n  color: #7f7f7f;\n}\n.typetitle > a:first-child {\n  margin-left: 0;\n}\n.typetitle > a.active {\n  border-bottom: 1px solid #457da1;\n  color: #457da1;\n  padding-right: 20px;\n  padding-bottom: 5px;\n}\n.SearchItem {\n  display: block;\n  height: 82px;\n  background-color: #f9f9f9;\n  border-radius: 10px;\n  padding: 0 10px;\n  overflow: hidden;\n  margin-top: 12px;\n}\n.SearchItem:first-child {\n  margin-top: 0;\n}\n.SearchItem > p {\n  height: 82px;\n  margin: 0;\n  padding: 0;\n  line-height: 82px;\n  vertical-align: middle;\n}\n.SearchItem > p:not(.SearchItem-companyName) {\n  color: #b9b9b9;\n}\n.SearchItem > .Newsinfo {\n  margin-top: 32px;\n}\n.SearchItem > * {\n  float: left;\n}\n.SearchItem > *:not(.SearchItem-companyName) {\n  margin-left: 50px;\n}\n.SearchItem > .SearchItem-companyName {\n  font-size: 25px;\n  color: #000000;\n}\n@media screen and (max-width: 620px) {\n  .SearchItem > .SearchItem-companyKeywords {\n    display: none;\n  }\n}\n@media screen and (max-width: 490px) {\n  .SearchItem > .SearchItem-companyCity {\n    display: none;\n  }\n  .SearchItem > .SearchItem-companyName {\n    width: 72%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 18px;\n  }\n}\n.wrapper-head {\n  height: 122px;\n  border-bottom: 1px dashed #77a0ba;\n}\n.wrapper-head > .Newsinfo {\n  margin-top: 52px;\n  margin-left: 20px;\n}\n.wrapper-head > p {\n  float: left;\n  height: 122px;\n  line-height: 122px;\n  margin: 0 auto;\n  margin-left: 50px;\n  color: #b9b9b9;\n}\n.wrapper-head > p:first-child {\n  margin-left: 0;\n  color: #000000;\n  font-size: 25px;\n}\n@media screen and (max-width: 620px) {\n  .wrapper-head > p:nth-child(2) {\n    display: none;\n  }\n}\n@media screen and (max-width: 490px) {\n  .wrapper-head > p:first-child {\n    width: 72%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .wrapper-head > p:nth-child(3) {\n    display: none;\n  }\n}\n.Newsinfo {\n  display: inline-block;\n  min-width: 17px;\n  height: 17px;\n  background-color: #e75656;\n  border-radius: 50px;\n  color: #ffffff;\n  font-size: 12px;\n  text-align: center;\n  line-height: 17px;\n  padding: 0 3px;\n}\n#header {\n  width: 100%;\n  background-color: #f9f9f9;\n  position: relative;\n  overflow: hidden;\n  -webkit-transition: height .5s ease 0s;\n  transition: height .5s ease 0s;\n}\n#header.hideMore {\n  height: 89px;\n}\n#header.showMore {\n  height: 89px;\n}\n#header .logo {\n  display: inline-block;\n  float: left;\n  margin-top: 18px;\n  text-decoration: none;\n}\n#header .logo p {\n  font-size: 15px;\n}\n#header .logo p span {\n  font-size: 35px;\n}\n#header .header-content {\n  width: 100%;\n  height: 90px;\n}\n#header .header-content .search {\n  float: left;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n#header .header-content .UserHead {\n  width: 150px;\n  height: 52px;\n  float: right;\n  margin-top: 19px;\n}\n#header .header-content .UserHead a {\n  text-decoration: none;\n}\n#header .header-content .UserHead .logReg {\n  float: right;\n  margin-top: 12px;\n}\n#header .header-content .UserHead .logReg a {\n  font-size: 20px;\n}\n#header .header-content .UserHead .logReg .login {\n  color: #4e8fb8;\n  margin-right: 18px;\n}\n#header .header-content .UserHead .logReg .regis {\n  color: #e75656;\n}\n#header .header-content .UserHead .headImgStyle {\n  display: inline-block;\n  width: 52px;\n  height: 52px;\n  overflow: hidden;\n  border-radius: 50%;\n  position: relative;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#header .header-content .UserHead .headImgStyle.sexMan {\n  background-image: url(" + __webpack_require__(181) + ");\n}\n#header .header-content .UserHead .headImgStyle.sexWoman {\n  background-image: url(" + __webpack_require__(181) + ");\n}\n#header .header-content .UserHead .userName {\n  margin-left: 10px;\n  font-size: 18px;\n  color: #4c4c4c;\n}\n#header .header-more {\n  width: 50px;\n  height: 50px;\n  display: none;\n  border-radius: 5px;\n  float: right;\n  margin-top: 30px;\n}\n#header .header-more > i {\n  width: 50%;\n  height: 3px;\n  display: block;\n  margin: 0 auto;\n  background-color: #e75656;\n  margin-top: 6px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transition: -webkit-transform .5s ease 0s;\n  transition: -webkit-transform .5s ease 0s;\n  transition: transform .5s ease 0s;\n  transition: transform .5s ease 0s, -webkit-transform .5s ease 0s;\n}\n@media screen and (max-width: 1100px) {\n  #header .search {\n    width: 55%;\n  }\n}\n@media screen and (max-width: 850px) {\n  #header .search {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 758px) {\n  #header.showMore {\n    height: 250px;\n  }\n  #header .header-content {\n    width: 100%;\n    height: auto;\n  }\n  #header .header-content .search {\n    width: 100%;\n    margin-left: 0px;\n  }\n  #header .header-more {\n    display: inline-block;\n  }\n  #header.showMore .header-more > i:nth-child(1) {\n    -webkit-transform: rotate(40deg) translate(6px, 7px);\n            transform: rotate(40deg) translate(6px, 7px);\n  }\n  #header.showMore .header-more > i:nth-child(2) {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  #header.showMore .header-more > i:nth-child(3) {\n    -webkit-transform: rotate(-40deg) translate(6px, -7px);\n            transform: rotate(-40deg) translate(6px, -7px);\n  }\n}\n.icon-liuyan {\n  width: 26px;\n  height: 17px;\n  border: 1px solid #457da1;\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.icon-liuyan:after {\n  content: '...';\n  color: #457da1;\n  display: inline-block;\n  position: absolute;\n  top: -8px;\n  left: 6px;\n}\n.icon-zan {\n  width: 18px;\n  height: 17px;\n  display: inline-block;\n  background-image: url(" + __webpack_require__(182) + ");\n  vertical-align: middle;\n}\n#footer {\n  width: 100%;\n  height: 50px;\n  background-color: #f9f9f9;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n#footer a {\n  text-decoration: none;\n  color: #ccc;\n  font-size: 13px;\n}\n#footer a:before {\n  content: \"\\2022\";\n  margin-right: 3px;\n  font-family: Arial;\n  color: #bbbbbb;\n  padding: 0px 5px;\n}\n#footer a:first-child:before {\n  content: \"\";\n  margin-right: 3px;\n  font-family: Arial;\n  color: #bbbbbb;\n  padding: 0px 0px;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #f9f9f9;\n}\n#content {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#content #Main {\n  width: 335px;\n  text-align: center;\n  position: relative;\n}\n#content #Main .logo {\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  top: 0;\n  left: 50%;\n  text-decoration: none;\n}\n#content #Main .logo p {\n  font-size: 19px;\n}\n#content #Main .logo p span {\n  font-size: 40px;\n}\n#content #Main #buttons {\n  margin-top: 101px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n#content #Main #buttons .button {\n  font-size: 25px;\n}\n#content #Main #buttons .search {\n  width: 0;\n  overflow: hidden;\n}\n#content #Main #indexTxt .indexTxt {\n  width: 100%;\n  min-height: 30px;\n  margin-top: 40px;\n  text-align: left;\n  line-height: 28px;\n  padding-top: 10px;\n  font-size: 18px;\n}\n#content #Main #indexTxt .indexTxt:nth-child(1) {\n  border-top: 1px solid #e75656;\n  color: #e75656;\n}\n#content #Main #indexTxt .indexTxt:nth-child(2) {\n  border-top: 1px solid #4e8fb8;\n  color: #4e8fb8;\n  margin-top: 32px;\n}\n", ""]);

	// exports


/***/ }

});