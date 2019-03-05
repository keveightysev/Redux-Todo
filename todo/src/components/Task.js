import React from 'react';
import { connect } from 'react-redux';
import { markCompleted, deleteTask, editTask } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEdit, faTrashAlt, faCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskCont, Icons } from './Styles';

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
        if (this.state.task.length === 0) {
            return null;
        }
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
            <TaskCont>
                <p>{!this.state.editClicked 
                        ? this.state.task 
                        : <>
                        <input 
                            value={this.state.task}
                            onChange={this.handleChange} 
                        />
                        <button onClick={e => this.saveEdit(e, this.state.id, this.state.task)}>
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        </>
                    }
                        
                </p>
                <Icons>
                    {!this.state.completed ? <button onClick={this.editButton} alt="Edit Text"><FontAwesomeIcon icon={faEdit} /></button> : null}
                    <button onClick={e => this.markCompleted(e, this.state.id)}>{!this.state.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faUndoAlt} />}</button>
                    <button onClick={e => this.deleteTask(e, this.state.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </Icons>
            </TaskCont>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { markCompleted, deleteTask, editTask })(Task);