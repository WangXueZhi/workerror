import React from 'react';

export default class Userhead extends React.Component {
  render() {
    let dom = [];
    if(this.props['isLogin']){
      dom.push(<a href="user.html" key="">
                <span className={"headImgStyle "+this.props['userHead']}></span>
                <span className="userName">{this.props['userName']}</span>
              </a>);
    }else{

      dom.push(<div className="logReg" key="">
                <a key="登陆" className="login" href="login.html">登陆</a>
                <a key="注册" className="regis" href="register.html">注册</a>
              </div>);
    }

    return (<div className="UserHead">
              {dom}
          </div>);
  }
}

Userhead.defaultProps = {
  userName:'username',
  userHead:'sexMan',
  isLogin:''
};
