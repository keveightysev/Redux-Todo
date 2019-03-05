import React from 'react';
import { connect } from 'react-redux';
import { markCompleted, deleteTask } from '../actions';

class Task extends React.Component {

    state = {
        task: this.props.task.task,
        id: this.props.task.id,
    }

    markCompleted = (e, id) => {
        e.preventDefault();
        this.props.markCompleted(id);
    }

    deleteTask = (e, id) => {
        e.preventDefault();
        console.log(`${id} from onClick`)
        this.props.deleteTask(id);
    }

    render() {
        return(
            <>
            <p>{this.state.task}</p>
            <button onClick={e => this.markCompleted(e, this.state.id)}>Mark Completed</button>
            <button onClick={e => this.deleteTask(e, this.state.id)}>Delete Task</button>
            </>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { markCompleted, deleteTask })(Task);