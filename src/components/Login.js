import React from 'react';

class Login extends React.Component {
   
    state = {
        name : "",
        userName: "",
        password: "",
        confirmPassword:""
    }

handleName = event =>{
    this.setState({
        name: event.target.value
    })
}

handleUserName = event =>{
    this.setState({
        username: event.target.value
    })
}

handlePassword = event =>{
    this.setState({
        password: event.target.value
    })
}
handleConfirm = event =>{
    this.setState({
        confirmPassword: event.target.value
    })
}

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input type="text" onChange={event => this.handleName(event)} value={this.state.name} placeholder="Name"/>
                <input type="text" onChange={event => this.handleUserName(event)} value={this.state.username} placeholder="Username"/>
                <input type="text" onChange={event => this.handlePassword(event)} value={this.state.password} placeholder="Password"/>
                <input type="text" onChange={event => this.handleConfirm(event)} value={this.state.confirmpassword} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Login;