import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form className="form-inline mt-4 justify-content-center" onSubmit={this.props.addTodo}>
                <label htmlFor="" className="sr-only">Todo</label>
                <input type="text" className="form-control mb-2 mr-sm-3 w-75" 
                    placeholder="Insira sua nova atividade"
                    value={this.props.todo} onChange={this.props.onChange} />
                <button className="btn btn-outline-primary mb-2">Submit</button>
            </form>
        );
    }
}

export default TodoForm;