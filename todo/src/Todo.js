import React, { Component } from 'react';

import { GlobalStyle, Main } from './components/Styles';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


class Todo extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main>
          <h1>Yet Another Task List</h1>
          <TaskForm />
          <TaskList />
        </Main>
      </>
    );
  }
}

export default Todo;
