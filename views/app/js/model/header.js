import React from 'react';
import Logo from './logo.js';
import Search from './search.js';
import Userhead from './userhead.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showState:'hideMore'
    }
  }

  clickHeaderMore() {
    if(this.state['showState']=='hideMore'){
      this.setState({showState:'showMore'});
    }else{
      this.setState({showState:'hideMore'});
    }
  }

  render() {
    return <header id="header" className={this.state['showState']}>
            <div className="layout clearfix">
              <Logo/>
              <span className="header-more" onClick={this.clickHeaderMore.bind(this)}>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <div className="header-content">
                {
                    this.props['needSearch']?<Search/>:''
                }
                <Userhead isLogin={this.props['isLogin']}/>
              </div>
            </div>
          </header>;
  }
}

Header.defaultProps = {

};
