import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Header from './model/header.js';
import Button from './model/button.js';
import SearchItem from './model/searchItem.js';
import '../less/searchResult.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
            <Header needSearch="1" isLogin=""/>
            <div className="layout clearfix">
              <p>搜索／杭州</p>
              <SearchItem href="companyDetail.html" newsNumber="1" companyName="杭州阿里巴巴科技有限公司" companyKeywords="杭州，淘宝" companyCity="杭州"/>
              <SearchItem href="companyDetail.html" newsNumber="1" companyName="杭州阿里巴巴科技有限公司" companyKeywords="杭州，淘宝" companyCity="杭州"/>
              <SearchItem href="companyDetail.html" newsNumber="1" companyName="杭州阿里巴巴科技有限公司" companyKeywords="杭州，淘宝" companyCity="杭州"/>
              <div className="buttonsGroup clearfix" style={this.props['buttonsGroupStyle']}>
                  <Button color="blue" value="更多" style={this.props['buttonsStyle']}/>
                  <Button color="red" value="我也来爆料" style={this.props['buttonsStyle']}/>
              </div>
            </div>
					</div>;
  }
}

Main.defaultProps = {
  buttonsGroupStyle:{
    marginTop: '12px'
  },
  buttonsStyle:{
    height: '50px',
    fontSize: '22px'
  }
};

render(<Main/>, $('#content')[0]);
