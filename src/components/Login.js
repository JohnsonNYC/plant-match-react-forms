import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input 
                    type="text"
                    name="name"
                    onChange={(event) => this.handleNameChange(event)}
                    // if there's another parent you may do .props .formData or something like that - see 17 From.js
                    value={this.state.value}
                    placeholder="Name"/>
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <input placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;