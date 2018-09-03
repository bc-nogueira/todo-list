import React from 'react';
import '../App.css';
import { FaCheck, FaUndo, FaTrashAlt} from 'react-icons/fa';

class TodoList extends React.Component {
    render() {
        const { todoList, showedTodoList, filterList } = this.props;
        return (
            (todoList && todoList.length > 0) && (
                <div>
                    <ul className="list-group w-50 mt-4 mx-auto">
                        {showedTodoList.map((todo, index) => (
                            <ul 
                                key={index} 
                                className="list-group-item text-left d-flex justify-content-between"
                            >
                                {todo.completed && (
                                    <div>
                                        <FaUndo 
                                            onClick={() => this.props.toggleCompleted(index, false)} 
                                            className="mr-3 text-danger pointer-cursor"/>
                                        <s>{todo.name}</s>
                                    </div>
                                )}
                                {!todo.completed && (
                                    <div>
                                        <FaCheck 
                                            onClick={() => this.props.toggleCompleted(index, true)}
                                            className="mr-3 text-success pointer-cursor"/>
                                        {todo.name}
                                    </div>
                                )}
                                <FaTrashAlt 
                                    onClick={() => this.props.deleteTodo(index)}
                                    className="pointer-cursor" />
                            </ul>
                        ))}
                    </ul>
                    <div className="mt-3 text-center">
                        <button className="btn btn-secondary mr-1" 
                            onClick={() => filterList(null)}>All</button>
                        <button className="btn btn-success mr-1" 
                            onClick={() => filterList(true)}>Completed</button>
                        <button className="btn btn-danger" 
                            onClick={() => filterList(false)}>Uncompleted</button>
                    </div>
                </div>
            )
        );
    }
}

export default TodoList;