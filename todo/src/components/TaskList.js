import React from 'react';
import { connect } from 'react-redux';

const TaskList = props => {
    return(
        <>
        {props.tasks.map(task => <p>{task.task}</p>)}
        </>
    );
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{})(TaskList);