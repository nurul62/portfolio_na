import React, {Component} from "react";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "nurul",
            password: "nurul",
            showLoginSuccess: false,
            showLoginFail: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // onChangeUsername = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     })
    // }
    // onChangePassword = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    handleChange = (event) => {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleLogin = () => {
        console.log(this.state);
        if(this.state.username === "nurul" && this.state.password === "nurul") {
           console.log("Login success");
           this.setState(
               {
                        showLoginSuccess: true,
                        showLoginFail: false
                    }
               )
        } else {
            this.setState({
                showLoginSuccess: false,
                showLoginFail: true
            })
        }
    }



    render = () => {

        return (
            <div className="login">
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                Password: <input type="password" name="password" value={this.state.password} onChange ={this.handleChange} /><br/>
                <button onClick={this.handleLogin}>Login</button>
                <ShowSuccessMessage showLoginSuccess={this.state.showLoginSuccess} />
                <ShowFailMessage showLoginFail={this.state.showLoginFail} />
            </div>
        )
    }

}


function ShowSuccessMessage (props)  {
    if(props.showLoginSuccess) {
        return (
            <div>Login successful.</div>
        )
    } else
        return null;
}
function ShowFailMessage (props)  {
    if(props.showLoginFail) {
        return (
            <div>Invalid login credentials, please try again!</div>
        )
    } else {
        return null;
    }
}



export default Login;