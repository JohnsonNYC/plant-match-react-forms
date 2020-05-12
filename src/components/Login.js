import React from 'react';

class Login extends React.Component {
    state = {
        name: "Name",
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password" 
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    setName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    setUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    confirmNewPassword = (event) => {
        this.setState({
            confirmPassord: event.target.value
        })
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        //need onChange listeners that connect to a function
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input type="text" onChange={event => this.setName(event)} value={this.state.name} placeholder="Name"/>
                <input type="text" onChange={event => this.setUsername(event)} value={this.state.username} placeholder="Username"/>
                <input type="text" onChange={event => this.setPassword(event)} value={this.state.password} placeholder="Password"/>
                <input type="text" onChange={event => this.confirmNewPassword(event)} value={this.state.confirmPassword} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;