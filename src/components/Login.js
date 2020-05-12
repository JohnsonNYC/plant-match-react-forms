import React from 'react';

class Login extends React.Component {
    state = {
        view:'home',
        name:'Duncan',
        username:'Duncan',
        password: 'password',
        confirmpassword: 'confirm password'
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    // TODO: What methods need to be created for a fully controlled form?
        //HELPER FUNCTION
    nameChange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    usernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }

    passwordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }

    confirmChange=(event)=>{
        this.setState({
            confirmpassword: event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.changeView('home')
    }
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        console.log(this.state)
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input placeholder="Name" name='name' onChange={event => this.nameChange(event)} value={this.state.name}/>
                <input placeholder="Username" name='username' onChange={event => this.usernameChange(event)} value={this.state.username}/>
                <input placeholder="Password" name ='password'  onChange={event => this.passwordChange(event)} value={this.state.password}/>
                <input placeholder="Confirm Password" name='confirm password'  onChange={event => this.confirmChange(event)} value={this.state.confirmpassword}/>
                <button onClick={this.handleSubmit} name='submit' type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;