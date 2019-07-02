import React,{Component} from 'react';

export default class Search extends Component {
  submit(e){
    e.preventDefault();
    let value=this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value='';
  }
  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.submit.bind(this)}>
        <label><input type="search" ref="username" placeholder="Type username and hit enter"/>
      </label>
        </form>
      </div>
    );
  }
}
