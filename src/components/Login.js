import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

        onNameChange = (e) => {
            this.setState({
              name: e.target.value 
            })
        }

        onUsernameChange = (e) => {
            this.setState({
                username: e.target.value 
              })
        }

        onPasswordChange = (e) => {
            this.setState({
                password: e.target.value 
              })
        }

        onPasswordConfirmChange = (e) => {
            this.setState({
                confirmPassword: e.target.value 
              })
        }

        onFormSubmit = (e) => {
            e.preventDefault()
            this.props.changeView('home')
        }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form onSubmit={this.onFormSubmit}
            className="vertical-flex">
                <h2>Create an Account</h2>
                <input onChange={this.onNameChange} value={this.state.name} placeholder="Name"/>
                <input onChange={this.onUsernameChange}value={this.state.username}placeholder="Username"/>
                <input onChange={this.onPasswordChange}value={this.state.password}placeholder="Password"/>
                <input onChange={this.onPasswordConfirmChange}value={this.state.confirmPassword}placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;