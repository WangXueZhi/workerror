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
                <p className="bigTitle wr-ftcolor-red">注册</p>
                <form>
                    <Input placeholder="邮箱" type="text" color="red"></Input>
                    <Input placeholder="性别" type="select" color="red">
                        <option>性别</option>
                        <option>男</option>
                        <option>女</option>
                    </Input>
                    <Input placeholder="设置密码" type="password" color="red"></Input>
                    <Input placeholder="确认密码" type="password" color="red"></Input>
                    <div className="clearfix" style={this.props['imgCheckStyle']}>
                        <Input placeholder="图形验证码" type="text" color="red" style={this.props['imgInputStyle']}></Input>
                        <div style={this.props['imgBoxStyle']}>
                            <img src="" width="100%" height="100%"/>
                        </div>
                    </div>
                    <p style={this.props['errorTextStyle']} className="">信息不全</p>
                    <div className="buttons clearfix">
                        <Button color="red" value="注册" style={this.props['buttonLogin']}/>
                    </div>
                </form>
            </div>
					</div>;
  }
}

Main.defaultProps = {
  imgCheckStyle:{
    marginTop:'17px'
  },
  imgInputStyle:{
    width:'46%',
    float:'left'
  },
  imgBoxStyle:{
    width:'46%',
    float:'right',
    border:'1px solid #e75656',
    borderRadius: '3px',
    height: '51px',
    cursor: 'pointer'
  },
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
