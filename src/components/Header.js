import React,{Component} from 'react';

export default class Header extends Component {
  onLogin(){
    this.props.onLogin();
  }
  onLogout(){
    this.props.onLogout();
  }
  render(){
    let b;
    if(this.props.accessToken)
    b=(<li className="nav-item active">
        <a className="nav-link" href="#" onClick={this.onLogout.bind(this)}>Logout</a>
      </li>);
      else {
        b=(<li className="nav-item active">
            <a className="nav-link" href="#" onClick={this.onLogin.bind(this)}>Login</a>
          </li>);
      }
    return(
        <nav className="navbar navbar-expand navbar-light border-bottom-dark bg-light">
  <a className="navbar-brand" href="#">Github Searcher</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {b}
    </ul>
  </div>
</nav>
    );
  }
}
