import React, {Component} from "react"
import Login from "./Login";
class TodoApp extends Component {
    render = () => {
        return (
            <div>
                <h1> My to do</h1>
                <Login />
            </div>
        )
    }
}
export default TodoApp;

