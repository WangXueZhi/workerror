import React from 'react';

export default class Newsinfo extends React.Component {
  render() {
    return <span className="Newsinfo" style={this.props['NewsinfoStyle']}>{this.props['value']}</span>
  }
}

Newsinfo.defaultProps = {

};
