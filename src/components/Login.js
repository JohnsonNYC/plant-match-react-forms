import React from 'react';

class Login extends React.Component {
    state = {
        name:"",
        username:"",
        password: "",
        confirmPassword:""
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')
    toggleChange=(event)=>{
        if(event.target.placeholder==='Name'){
            this.setState({ name: event.target.value  });
        }else if(event.target.placeholder==='Username'){
            this.setState({ username: event.target.value  });
        }else if(event.target.placeholder==='Password'){
            this.setState({ password: event.target.value  });
        }else if(event.target.placeholder==='Confirm Password'){
            this.setState({ confirmPassword: event.target.value  });
        }
    }

    render(){
        const {name,username,password,confirmPassword} = this.state
        console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input placeholder="Name" value={name} onChange={this.toggleChange}/>
                <input placeholder="Username" value={username} onChange={this.toggleChange}/>
                <input placeholder="Password" value={password} onChange={this.toggleChange}/>
                <input placeholder="Confirm Password" value={confirmPassword} onChange={this.toggleChange}/>
                <button type="submit" onSubmit={() => this.props.changeView('home')}>Submit</button>
            </form>
        )
    }
}

export default Login;