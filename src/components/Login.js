import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
    
    state = {
        name: "Name",
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password"
        // TODO: What needs to be represented in state for a fully controlled form?
    }
}
handleNameChange=event=>{
    this.setState({
        name: event.target.value
    })
}
handleUsernameChange=event=>{
    this.setState({
        username: event.target.value
    })
}
handlePasswordChange=event=>{
    this.setState({
        username: event.target.value
    })
}
handleConfirmPasswordChange=event=>{
    this.setState({
        username: event.target.value
    })
}
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.name} placeholder="Name"/>
                <input type="text" onChange={event => this.handleUsernameChange(event)} value={this.state.username} placeholder="Username"/>
                <input type="text" onChange={event => this.handlePasswordChange(event)} value={this.state.password} placeholder="Password"/>
                <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.confirmpassword} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;