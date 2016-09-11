import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Header from './model/header.js';
import Button from './model/button.js';
import '../less/companyDetail.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
            <Header needSearch="1" isLogin=""/>
            <div className="layout clearfix">
              <div className="companyHead">
                <p className="companyHead-name">杭州乐每客文化创意有限公司</p>
                <p className="companyHead-keywords">维他密,早教</p>
                <p className="companyHead-city">杭州</p>
              </div>
              <div className="typetitle">
                <a href="#" className="active">#加班</a>
                <a href="#">#面试</a>
              </div>
              <div className="companyItemsList">
                <a className="companyItem" href="itemDetail.html">
                  <p>每天快下班的时候开始安排大量工作, 不做完不让走，来一句：赶紧做完回去好好休息！</p>
                  <div className="companyItem-liuyan companyItem-info">
                    <i className="icon-liuyan"></i>
                    <span>12</span>
                  </div>
                  <div className="companyItem-time companyItem-info">
                    <span>2016.5.1</span>
                  </div>
                  <div className="companyItem-zan companyItem-info">
                    <i className="icon-zan"></i>
                    <span>99</span>
                  </div>
                </a>
                <a className="companyItem" href="itemDetail.html">
                  <p>每天快下班的时候开始安排大量工作, 不做完不让走，来一句：赶紧做完回去好好休息！</p>
                  <div className="companyItem-liuyan companyItem-info">
                    <i className="icon-liuyan"></i>
                    <span>12</span>
                  </div>
                  <div className="companyItem-time companyItem-info">
                    <span>2016.5.1</span>
                  </div>
                  <div className="companyItem-zan companyItem-info">
                    <i className="icon-zan"></i>
                    <span>99</span>
                  </div>
                </a>
              </div>
              <div className="buttonsGroup clearfix" style={this.props['buttonsGroupStyle']}>
                  <Button color="blue" value="更多" style={this.props['buttonsStyle']}/>
                  <Button color="red" value="爆料这个公司" style={this.props['buttonsStyle']}/>
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
