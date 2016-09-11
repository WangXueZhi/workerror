import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Header from './model/header.js';
import Input from './model/input.js';
import Button from './model/button.js';
import '../less/baoliao.less';

class Main extends React.Component {

  render() {
    return <div id="Main">
            <Header needSearch="1" isLogin=""/>
            <div id="baoliaoContent">
                <p className="bigTitle wr-ftcolor-blue">登陆</p>
                <form>
                    <Input placeholder="邮箱" type="text" color="blue"></Input>
                    <Input placeholder="密码" type="password" color="blue"></Input>
                    <p style={this.props['errorTextStyle']} className="">信息不全</p>
                    <div className="buttons clearfix">
                        <Button color="blue" value="登陆" style={this.props['buttonLogin']}/>
                    </div>
                </form>
            </div>
					</div>;
  }
}

Main.defaultProps = {
  errorTextStyle:{
    color:'#e75656',
    fontSize:'15px',
    marginTop:'7px'
  },
  buttonLogin:{
    width:'100%',
    height:'51px',
    float:'left',
    display:'block'
  }
};

render(<Main/>, $('#content')[0]);
