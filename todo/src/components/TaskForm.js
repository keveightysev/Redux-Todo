import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class TaskForm extends React.Component {
    state = {
        task: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: Date.now(),
            completed: false,
        };
        const tasks = [...this.props.tasks, newTask];
        this.props.addTask(tasks);
    }

    render() {
        return (
            <>
            <form>
            <input type="text" value={this.state.task} onChange={this.handleChange} name="task" />
            <button onClick={this.handleSubmit}>Add Task</button>
            </form>
            <button>Clear Completed</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{ addTask })(TaskForm);