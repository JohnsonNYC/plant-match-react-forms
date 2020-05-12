import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomeView from './components/HomeView';

class App extends React.Component {
  state = {
    username: "",
    view: 'home',
    username: null // TODO: replace null with 'ChromeBoi' or your name to see the greeting
  }

  changeView = (view) => {
    this.setState({ view })
  }

  setUserName = (username) => {
    this.setState({...this.state, username});
  }


  render() {
    return (
      <div className="App">
       <Navbar changeView={this.changeView} view={this.state.view} username={this.state.username} />
       {this.state.view === 'login' && <Login changeView={this.changeView} setUserName={this.setUserName}/>}
       {this.state.view === 'home' && <HomeView username={this.state.username} />}
      </div>
    );
  }
}

export default App;
