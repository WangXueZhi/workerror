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
                <p className="bigTitle wr-ftcolor-red">爆料！</p>
                <form>
                    <Input placeholder="公司名字" type="text" color="red"></Input>
                    <Input placeholder="爆料类别" type="select" color="red">
                        <option>爆料类别</option>
                        <option>加班</option>
                        <option>面试</option>
                    </Input>
                    <Input placeholder="公司所在城市" type="text" color="red"></Input>
                    <Input placeholder="公司关键词,多个由'，'分隔" type="text" color="red"></Input>
                    <Input placeholder="爆料内容,最多不超过500字" type="textarea" color="red" style={this.props['textareaStyle']}></Input>
                    <div className="clearfix" style={this.props['imgCheckStyle']}>
                        <Input placeholder="图形验证码" type="text" color="red" style={this.props['imgInputStyle']}></Input>
                        <div style={this.props['imgBoxStyle']}>
                            <img src="" width="100%" height="100%"/>
                        </div>
                    </div>
                    <p style={this.props['errorTextStyle']} className="">信息不全</p>
                    <div className="buttons clearfix">
                        <Button color="blue" value="重置" style={this.props['buttonReset']}/>
                        <Button color="red" value="爆料" style={this.props['buttonSubmit']}/>
                    </div>
                </form>
            </div>
					</div>;
  }
}

Main.defaultProps = {
  textareaStyle:{
    height:'180px'
  },
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
  buttonReset:{
    width:'46%',
    height:'51px',
    float:'left',
    display:'block'
  },
  buttonSubmit:{
    width:'46%',
    height:'51px',
    float:'right',
    display:'block'
  }
};

render(<Main/>, $('#content')[0]);
