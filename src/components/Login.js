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
//   handleNameChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     // console.log(this.state.name)
//   };

//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//     // console.log(this.state.username)
//   };

//   handlePasswordChange = (event) => {
//     this.setState({
//       password: event.target.value,
//     });
//     // console.log(this.state.password)
//   };

//   handleConfirmPasswordChange = (event) => {
//     this.setState({
//       confirmPassword: event.target.value,
//     });
//     // console.log(this.state.confirmPassword)
//   };

  handleChange = (event) => {
      this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
        this.props.changeView('home')
        this.props.changeUsername(this.state.username)
    } 
    else alert("Password did not match! Please try again")
  }

  render() {
    // TODO: What additional attributes and event handlers are needed on each of the elements below?
    return (
      <form onChange={console.log(this.state)} className="vertical-flex">
        <h2>Create an Account</h2>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Name"
        />
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Username"
        />
        <input
          type="text"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder="Password"
        />
        <input
          type="text"
          name="confirmPassword"
          onChange={this.handleChange}
          value={this.state.confirmPassword}
          placeholder="Confirm Password"
        />
        <button onClick={this.handleSubmit} type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
