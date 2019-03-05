import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = props => {
    return(
        <>
        <h2>Open Tasks</h2>
        {props.tasks.filter(task => task.completed === false).map(task => <Task task={task} key={task.id} />)}
        <h2>Completed tasks</h2>
        {props.tasks.filter(task => task.completed === true).map(task => <Task task={task} key={task.id} />)}
        </>
    );
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{})(TaskList);