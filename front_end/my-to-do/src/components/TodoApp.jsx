import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login from "./Login";
import WelcomePage from "./WelcomePage";
import ErrorComponent from "./ErrorComponent";
import Todos from "./Todos";



class TodoApp extends Component {
    render = () => {
        return (
            <div>

                    <Router>
                        <>
                            <Switch>
                                {/* <WelcomePage />
                                <Login />*/}
                                <Route path = "/" exact component={Login} />
                                <Route path = "/login" component={Login} />
                                <Route path = "/welcome" component={WelcomePage} />
                                <Route path = "/todos" component={Todos} />
                                <Route component={ErrorComponent} />
                            </Switch>
                        </>
                    </Router>

            </div>
        )
    }
}
export default TodoApp;

