import React, {Component} from "react"

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:1, description: "Learn fishing", targetDate: false, completionDate: Date()},
                {id:2, description: "Learn hiking", targetDate: false, completionDate: Date()},
                {id:3, description: "Learn rowing", targetDate: false, completionDate: Date()}
            ]
        }

    }
    render = () => {
        return (
            <div>
                <h1>My Todos</h1>
                <table>
                    <thead>
                        <th>id</th>
                        <th>description</th>
                        <th>targetDate</th>
                        <th>completion</th>
                    </thead>
                    <tbody>
                    {this.state.todos.map(todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td>{todo.completionDate.toString()}</td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todos;