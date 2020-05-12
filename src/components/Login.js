import React from 'react';

class Login extends React.Component {
    state = {
        name:" ",
        Username:" ",
        password:" "

        // TODO: What needs to be represented in state for a fully controlled form?
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      handleSubmit = (event) => {
          event.preventDefault()
        this.props.changeView("home");
    }


    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input placeholder="Name" id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                <input placeholder="Username" id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
                <input placeholder="Password" id="password" name="password" type="text" onChange={this.handleChange} value={this.state.password}/>
                <input placeholder="Confirm Password" id="confirm password" name="comfirm password" type="text" onChange={this.handleChange} value={this.state.password}/>
                <button  type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;