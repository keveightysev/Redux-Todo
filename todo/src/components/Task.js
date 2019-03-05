import React from 'react';
import { connect } from 'react-redux';
import { markCompleted, deleteTask, editTask } from '../actions';

class Task extends React.Component {

    state = {
        task: this.props.task.task,
        id: this.props.task.id,
        completed: this.props.task.completed,
        editClicked: false,
    }

    markCompleted = (e, id) => {
        e.preventDefault();
        this.props.markCompleted(id);
    }

    deleteTask = (e, id) => {
        e.preventDefault();
        this.props.deleteTask(id);
    }

    editButton = e => {
        e.preventDefault();
        this.setState({ editClicked: !this.state.editClicked })
    }

    saveEdit = (e, id, task) => {
        e.preventDefault();
        this.props.editTask(id, task);
        this.setState({ editClicked: false })
    }

    handleChange = e => {
        this.setState({
            task: e.target.value,
        })
    }

    render() {
        return(
            <>
            <p>{!this.state.editClicked 
                    ? this.state.task 
                    : <>
                    <input 
                        value={this.state.task}
                        onChange={this.handleChange} 
                    />
                    <button onClick={e => this.saveEdit(e, this.state.id, this.state.task)}>Save</button>
                    </>
                }
                    
            </p>
            {!this.state.completed ? <button onClick={this.editButton}>Edit Task</button> : null}
            <button onClick={e => this.markCompleted(e, this.state.id)}>{!this.state.completed ? <span>Mark Completed</span> : <span>Re-Open Task</span>}</button>
            <button onClick={e => this.deleteTask(e, this.state.id)}>Delete Task</button>
            </>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { markCompleted, deleteTask, editTask })(Task);