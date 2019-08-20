import React, {Component} from "react";
import {Link} from "react-router-dom";


class WelcomePage extends Component {


    render = () => {
        return (
            <div>
                Welcome to home. Find my todos <Link to="/todos">here.</Link>
            </div>
        )
    }
}

export default WelcomePage;