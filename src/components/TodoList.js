import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <ul className="list-group w-50 mt-4 mx-auto">
                {this.props.todoList.map((todo, index) => (
                    <button 
                        type="button" 
                        key={index} 
                        className="list-group-item list-group-item-action text-left"
                        onClick={() => this.props.toggleCompleted(index)}
                    >
                        {todo.completed 
                            ? <s>{todo.name}</s>
                            : todo.name}
                    </button>
                ))}
            </ul>
        );
    }
}

export default TodoList;