import React, {Component} from "react";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    onChangeUsername = (event) => {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }
    onChangePassword = (event) => {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    }
    render = () => {
        return (
            <div className="login">
                Username: <input type="text" value={this.state.username} onChange={this.onChangeUsername} />
                Password: <input type="password" value={this.state.password} onChange ={this.onChangePassword} />
                <button>Login</button>

            </div>
        )
    }

}

export default Login;