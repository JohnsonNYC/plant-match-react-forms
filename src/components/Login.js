import React from 'react';

class Login extends React.Component {
    state = {
        Login: Login // TODO: What needs to be represented in state for a fully controlled form?
    }

    handleSubmit = ()=>{

        this.setState(
            this.props.changeView('home')
        )
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input placeholder="Name"/>
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <input placeholder="Confirm Password"/>
                <button onSubmit={this.handleSubmit} type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;