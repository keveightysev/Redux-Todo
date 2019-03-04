import React, { Component } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


class Todo extends Component {
  render() {
    return (
      <>
        <TaskForm />
        <TaskList />
      </>
    );
  }
}

export default Todo;
