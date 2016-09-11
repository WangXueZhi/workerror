import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showState:'relative'
    }

  }

  componentDidMount() {
    let wh = window.innerHeight;
    let bh = document.body.offsetHeight;
    console.info('wh:'+wh+' ... bh'+bh);
    wh>bh?this.setState({showState:'absolute'}):null;
  }

  render() {
    return <footer id="footer" className={this.state['showState']}>
            <div className="layout clearfix">
              <a>@2016 workerror</a>
              <a>免责声明</a>
              <a>联系我们</a>
              <a>京 ICP 备 13052560 号 </a>
              <a>京公网安备 11010802010035 号</a>
            </div>
          </footer>;
  }
}

Header.defaultProps = {

};
