import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmation: '' 
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault()
        if(this.state.password === this.state.confirmation){
            this.props.changeView('home')
        } else {
            alert('Hey Plant Lover...Your Password and Confirmed Password Do Not Match')
        }
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        console.log(this.state)
        //need onChange listeners that connect to a function
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                <input type="text" name='username' value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <input type="text" name='password' value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <input type="text" name='confirmation' value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Password Confirmation"/>
                <button type="submit" onClick={this.submitForm}>Submit</button>
            </form>
        )
    }
}

export default Login;