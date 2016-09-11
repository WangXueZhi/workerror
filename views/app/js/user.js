import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Header from './model/header.js';
import Button from './model/button.js';
import Newsinfo from './model/newsinfo.js';
import Footer from './model/footer.js';
import '../less/user.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
            <Header needSearch="1" isLogin=""/>
            <div className="layout clearfix">
              <div className="wrapper-head">
                <p className="">消息中心</p>
                <Newsinfo value="12"/>
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
                <div className="itemMessage">
                    <div className="clearfix">
                        <div className={"itemMessage-userHead itemMessage-ele "+this.props['headType']}></div>
                        <div className="itemMessage-userName itemMessage-ele">老子</div>
                    </div>
                    <p className="itemMessage-content">师弟哦啊谁懂啊上帝哦哈送到好似活动哈时代</p>
                </div>
              </div>
              <div className="buttonsGroup clearfix">
                  <Button color="blue" value="更多消息" style={this.props['buttonsStyle']}/>
                  <Button color="red" value="去爆料" style={this.props['buttonsStyle']}/>
              </div>
            </div>
            <Footer/>
					</div>;
  }
}

Main.defaultProps = {
  buttonsStyle:{
    height: '50px',
    fontSize: '22px'
  },
  headType:'sexMan'
};

render(<Main/>, $('#content')[0]);
