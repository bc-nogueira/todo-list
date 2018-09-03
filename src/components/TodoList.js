import React from 'react';

class TodoList extends React.Component {
    render() {
        const { todoList, showedTodoList, filterList } = this.props;
        return (
            (todoList && todoList.length > 0) && (
                <div>
                    <ul className="list-group w-50 mt-4 mx-auto">
                        {showedTodoList.map((todo, index) => (
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
                    <div className="mt-3 text-center">
                        <button className="btn btn-secondary mr-1" 
                            onClick={() => filterList(null)}>All</button>
                        <button className="btn btn-success mr-1" 
                            onClick={() => filterList(true)}>Completed</button>
                        <button className="btn btn-danger" 
                            onClick={() => filterList(false)}>Incompleted</button>
                    </div>
                </div>
            )
        );
    }
}

export default TodoList;