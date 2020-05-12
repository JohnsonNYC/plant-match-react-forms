import React from "react";

class Login extends React.Component {
  state = {
    // TODO: What needs to be represented in state for a fully controlled form?
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  // TODO: What methods need to be created for a fully controlled form?
  // HINT: Use the line below to change the view when the form is submitted
  // this.props.changeView('home')
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(this.state.name)
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
    // console.log(this.state.username)
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
    // console.log(this.state.password)
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
    // console.log(this.state.confirmPassword)
  };
  render() {
    // TODO: What additional attributes and event handlers are needed on each of the elements below?
    return (
      <form onChange={console.log(this.state)} className="vertical-flex">
        <h2>Create an Account</h2>
        <input
          type="text"
          name="name"
          onChange={(event) => this.handleNameChange(event)}
          value={this.state.name}
          placeholder="Name"
        />
        <input
          type="text"
          name="username"
          onChange={(event) => this.handleUsernameChange(event)}
          value={this.state.username}
          placeholder="Username"
        />
        <input
          type="text"
          name="password"
          onChange={(event) => this.handlePasswordChange(event)}
          value={this.state.password}
          placeholder="Password"
        />
        <input
          type="text"
          name="confirmPassword"
          onChange={(event) => this.handleConfirmPasswordChange(event)}
          value={this.state.confirmPassword}
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
