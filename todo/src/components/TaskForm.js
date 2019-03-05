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
        this.props.addTask(this.state.task);
        this.setState({ task: '' })
    }

    render() {
        return (
            <>
            <form>
            <input type="text" value={this.state.task} onChange={this.handleChange} name="task" />
            <button onClick={this.handleSubmit}>Add Task</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{ addTask })(TaskForm);