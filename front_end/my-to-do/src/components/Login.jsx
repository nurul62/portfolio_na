import React, {Component} from "react";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
    render = () => {
        return (
            <div className="login">
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange ={this.handleChange} />
                <button>Login</button>

            </div>
        )
    }

}

export default Login;