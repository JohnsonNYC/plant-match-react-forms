import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: '',
        password: '',
        username: '',
        confirmPassword: ''
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')
    onNameChange = (e) => {
        this.setState({
           name: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
         })
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
         })
    }
    onConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value
         })
    }
    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        console.log(this.state)
        return (
            <form  className="vertical-flex">
                <h2>Create an Account</h2>
                <input onChange={this.onNameChange} value={this.state.name} placeholder="Name"/>
                <input onChange={this.onUsernameChange} placeholder="Username"/>
                <input onChange={this.onPasswordChange} value={this.state.username} placeholder="Password"/>
                <input onChange={this.onConfirmPasswordChange} value={this.state.confirmPassword}placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;