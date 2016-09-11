import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Logo from './model/logo.js';
import Button from './model/button.js';
import Search from './model/Search.js';
import '../less/search.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
						<Logo/>
						<div id="buttons">
							<Search/>
							<p>想知道某些公司会不会坑？快搜搜看</p>
						</div>
					</div>;
  }
}


render(<Main/>, $('#content')[0]);
