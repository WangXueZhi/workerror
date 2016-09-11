import React from 'react';
import Button from './button.js';

export default class Search extends React.Component {

  search() {
    return this.refs.searchValue.value;
  }

  render() {
		let btnStyle='button '+this.props['color'];
    return <div className="search" style={this.props['style']}>
            <div>
                <input type="text" placeholder="输入公司名或关键字" ref='searchValue'/>
                <Button search={this.search.bind(this)} color="blue" value="搜索" style={{width:"88px",height:"50px"}}/>
            </div>
            <Button color="red" value="我要爆料" href="baoliao.html" style={{width:"155px",height:"50px",marginLeft:'20px'}}/>
          </div>;
  }
}
//href="searchResult.html"
