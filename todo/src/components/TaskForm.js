import React from 'react';
import { connect } from 'react-redux';

class TaskForm extends React.Component {
    state = {
        task: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <>
            <form action="">
            <input type="text" value={this.state.task} onChange={this.handleChange} name="task" />
            <button>Add Task</button>
            </form>
            <button>Clear Completed</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};



export default connect(mapStateToProps,{})(TaskForm);