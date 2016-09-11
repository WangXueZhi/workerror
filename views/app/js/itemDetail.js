import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Header from './model/header.js';
import Button from './model/button.js';
import '../less/itemDetail.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
            <Header needSearch="1" isLogin="1"/>
            <div className="layout clearfix">
              <div className="itemHead">
                  <div className="companyHead">
                    <p className="companyHead-name">杭州乐每客文化创意有限公司</p>
                    <p className="companyHead-city">杭州</p>
                  </div>
                  <div className="itemHead-content">
                      每天快下班的时候开始安排大量工作, 不做完不让走，来一句：赶紧做完回去好好休息！ 我擦，你是真心想让我休息吗？搞到后半夜也不说给报销打车费，也不犒劳员工，就说一句大家辛苦了，回去好好休息吧！尼玛，能休息好就怪了！
                  </div>
                  <div className="clearfix">
                    <div className="companyItem-time companyItem-info">
                      <span>2016.5.1</span>
                    </div>
                    <div className="companyItem-liuyan companyItem-info">
                      <i className="icon-liuyan"></i>
                      <span>12</span>
                    </div>
                    <div className="companyItem-zan companyItem-info">
                      <i className="icon-zan"></i>
                      <span>99</span>
                    </div>
                  </div>
              </div>
              <div className="itemMessageList">
                <div className="itemMessage">
                    <div className="clearfix">
                        <div className={"itemMessage-userHead itemMessage-ele "+this.props['headType']}></div>
                        <div className="itemMessage-userName itemMessage-ele">老子</div>
                    </div>
                    <p className="itemMessage-content">师弟哦啊谁懂啊上帝哦哈送到好似活动哈时代</p>
                </div>
                <div className="itemMessage">
                    <div className="clearfix">
                        <div className={"itemMessage-userHead itemMessage-ele "+this.props['headType']}></div>
                        <div className="itemMessage-userName itemMessage-ele">老子</div>
                    </div>
                    <p className="itemMessage-content">师弟哦啊谁懂啊上帝哦哈送到好似活动哈时代</p>
                </div>
              </div>
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
  },
  headType:'sexMan'
};

render(<Main/>, $('#content')[0]);
