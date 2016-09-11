import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style:this.props['style']
    };
  }

  btnClick(){
      if(this.props['href']){
          window.location.href = this.props['href'];
      }
      if(this.props['search']){
          let fun = this.props['search'];
          window.location.href = 'searchResult.html?search='+fun();
      }
  }

  render() {
		let btnStyle='button '+this.props['color'];
    return <button className={btnStyle} style={this.state['style']} onClick={this.btnClick.bind(this)} type="button">
            {this.props['value']}
          </button>;
  }
}

Button.defaultProps = {
  value:"按钮",
  color:'blue',
};
