import React from 'react';

class Login extends React.Component {
    state = {
        name: "",
        userName: "",
        password: ""
        // TODO: What needs to be represented in state for a fully controlled form?
    }
    handleNameChange = (event) =>{
        this.setState({name: event.target.value})
        console.log(this.state)
        console.log(event.target.value)
    }
    handleUsernameChange = (event) =>{
        this.setState({username: event.target.value})
    }
    handlePasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        alert("the form was submitted:" + this.state.value)
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input onChange={(event) => this.handleNameChange(event)} placeholder="Name"/>
                <input onChange={(event) => this.handleUsernameChange(event)} placeholder="Username"/>
                <input onChange={(event) => this.handlePasswordChange(event)} placeholder="Password"/>
                <input placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;