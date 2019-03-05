import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { clearCompleted } from '../actions';

const TaskList = props => {
    const handleClear = () => {
        props.clearCompleted();
    }

    return(
        <>
        <h2>Open Tasks</h2>
        {props.tasks.filter(task => task.completed === false).map(task => <Task task={task} key={task.id} />)}
        <h2>Completed Tasks</h2>
        <p onClick={handleClear}>Clear All</p>
        {props.tasks.filter(task => task.completed === true).map(task => <Task task={task} key={task.id} />)}
        </>
    );
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{ clearCompleted })(TaskList);