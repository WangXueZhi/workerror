import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Logo from './model/logo.js';
import Button from './model/button.js';
import Search from './model/Search.js';
// var React = require('react');
// var ReactDOM = require('react-dom');
// var $ = require('jquery');
import '../less/index.less';

class IndexTxt extends React.Component {
  render() {
		let value = this.props['value'];
		let valueArr = value.split('/');
    return <div className="indexTxt">
							{valueArr[0]}
							<br/>
							{valueArr[1]}
						</div>;
  }
}

class Main extends React.Component {

  render() {
    return <div id="Main">
						<Logo/>
						<div id="buttons">
							<Button href="search.html" color="blue" value="搜索爆料" style={this.props['button']}/>
							<Button href="baoliao.html" color="red" value="我要爆料" style={this.props['button']}/>
						</div>
						<div id="indexTxt">
							<IndexTxt value="或许你还在犹豫手头几个offer/或许你刚被坑过却无处诉说"/>
							<IndexTxt value="来这里，做个侠客，勇敢爆料/说你想说的，找你想找的"/>
						</div>
					</div>;
  }
}
Main.defaultProps = {
  button:{
		width:'155px',
		height:'44px'
	}
};

render(<Main/>, $('#content')[0]);
