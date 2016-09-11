import React from 'react';
import Newsinfo from './newsinfo.js';

export default class SearchItem extends React.Component {
  render() {
    return <a href={this.props['href']} className="SearchItem" style={this.props['itemStyle']}>
            <p className="SearchItem-companyName">{this.props['companyName']}</p>
            <p className="SearchItem-companyKeywords">{this.props['companyKeywords']}</p>
            <p className="SearchItem-companyCity">{this.props['companyCity']}</p>
            <Newsinfo value={this.props['newsNumber']}/>
					</a>;
  }
}

SearchItem.defaultProps = {
    itemStyle:{

    }
};
