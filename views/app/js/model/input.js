import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showSelect:false,
      style:{
        display:'none'
      }
    }
  }

  selectChose() {
      alert(1);
  }

  render() {
    let dom = [];
    if(this.props['type']=='select'){
        let option = [];
        option.push(React.Children.map(this.props.children, function (child) {
            return child;
        }))

        let box = <select className={"we-input "+this.props['color']} key="">
                    {option}
                  </select>

        dom.push(box);
    }

    if(this.props['type']=='password'){
        let box = <input type="password" className={"we-input "+this.props['color']} key="" placeholder={this.props['placeholder']}/>
        dom.push(box);
    }

    if(this.props['type']=='text'){
        let box = <input type="text" className={"we-input "+this.props['color']} key="" placeholder={this.props['placeholder']}/>
        dom.push(box);
    }

    if(this.props['type']=='textarea'){
        let box = <textarea className={"we-input "+this.props['color']} key="" placeholder={this.props['placeholder']}></textarea>
        dom.push(box);
    }
    return <div className="Input" style={this.props['style']}>
            {dom}
          </div>;
  }
}

Input.defaultProps = {
  type:'text',
  placeholder:'请输入'
};
