import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { clearCompleted } from '../actions';
import { TaskListCont, Lists } from './Styles';

const TaskList = props => {
    const handleClear = () => {
        props.clearCompleted();
    }

    return(

        <TaskListCont>
            <Lists>
                <h2>Open Tasks</h2>
                {props.tasks.filter(task => task.completed === false).map(task => <Task task={task} key={task.id} />)}
            </Lists>
            <Lists>
                <h2>Completed Tasks <span onClick={handleClear}>Clear All</span></h2>
                
                {props.tasks.filter(task => task.completed === true).map(task => <Task task={task} key={task.id} />)}
            </Lists>
        </TaskListCont>
    );
}

const mapStateToProps = state => {
    return { ...state };
};

export default connect(mapStateToProps,{ clearCompleted })(TaskList);