import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <ul className="list-group w-50 mt-4 mx-auto">
                {this.props.todoList.map((todo, index) => (
                    <li key={index} className="list-group-item text-left">{todo}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList;