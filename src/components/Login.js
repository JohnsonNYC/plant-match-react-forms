import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: '',
        password: '',
        username: '',
        confirmPasdsword: ''
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onPasswordConfirmChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    onUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input value={this.state.name} placeholder="Name"/>
                <input onChange={this.onUsernameChange} value={this.state.username} placeholder="Username"/>
                <input onChange={this.onPasswordChange} value={this.state.password} placeholder="Password"/>
                <input placeholder="Confirm Password" onChange={this.onPasswordConfirmChange} value={this.state.confirmPasdsword}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;