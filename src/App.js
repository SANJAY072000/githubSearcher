import React,{Component} from 'react';
import './App.css';
import Github from './components/Github';
import Header from './components/Header';
import Auth0Lock from 'auth0-lock';

export default class App extends Component {
  static defaultProps={
  }
  componentWillMount(){
    this.lock=new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated',(auth)=>{
      // console.log(auth);
      this.lock.getUserInfo(auth.accessToken,(err,profile)=>{
        if(err)
        console.log(err);
        else{
          this.setProfile(auth.accessToken,profile);
        }
      });
    });
    this.getProfile();
  }
  getProfile(){
    if(localStorage.getItem('accessToken')!==null){
      this.setState({accessToken:localStorage.getItem('accessToken'),
      profile:JSON.parse(localStorage.getItem('profile'))},()=>console.log('1'));
    }
  }
  setProfile(accessToken,profile){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile',JSON.stringify(profile));
    this.setState({accessToken:localStorage.getItem('accessToken'),
    profile:JSON.parse(localStorage.getItem('profile'))});
  }
  showLock(){
    this.lock.show();
  }
  constructor(props){
    super(props);
    this.state = {
      accessToken:'',
      profile:{}
    };
  }
  logout(){
    this.setState({accessToken:'',
      profile:{}},()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('profile');
      });
  }
  render(){
    let gitty;
    if(this.state.accessToken){
      gitty=<Github/>;
    }
    else{
      gitty="Click on login to view github viewer"
    }
    return(
      <div className="App">
        <Header onLogin={this.showLock.bind(this)}
           onLogout={this.logout.bind(this)}
           accessToken={this.state.accessToken}
           lock={this.lock}
           />
        {gitty}
      </div>
    );
  }
}
