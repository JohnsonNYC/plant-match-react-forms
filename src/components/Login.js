import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: "",
        userName: "",
        password: "",
        confirm: ""
    };

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    changeInput = (inputField, value) => {
        const copy = {...this.state};
        copy[inputField] = value;
        this.setState(copy);
    };

    submitLogin = (event) => {
        event.preventDefault();
        console.log("SUBMIT LOGIN", this.state.userName);
        this.props.setUserName(this.state.userName);
        this.props.changeView("home");
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input placeholder="Name" value={this.state.name} onChange={(event) => this.changeInput("name", event.target.value)}/>
                <input placeholder="Username" value={this.state.userName} onChange={(event) => this.changeInput("userName", event.target.value)}/>
                <input placeholder="Password" value={this.state.password} onChange={(event) => this.changeInput("password", event.target.value)}/>
                <input placeholder="Confirm Password" value={this.state.confirm} onChange={(event) => this.changeInput("confirm", event.target.value)}/>
                <button type="submit" onClick={this.submitLogin}>Submit</button>
            </form>
        )
    }
}

export default Login;