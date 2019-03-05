import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

class Task extends React.Component {

    state = {
        task: this.props.task.task,
        id: this.props.task.id,
    }

    markCompleted = (e, id) => {
        e.preventDefault();
        console.log(this.props.markCompleted);
        this.props.markCompleted(id);
    }

    render() {
        return(
            <>
            <p>{this.state.task}</p>
            <button onClick={e => this.markCompleted(e, this.state.id)}>Mark Completed</button>
            <button>Delete Task</button>
            </>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { markCompleted })(Task);