const initialState = {
    tasks: [
        {task:'Take over the world', id: Date.now(), completed: false}, 
        {task: 'Add a new task!', id: Date.now() + 1, completed: false},
        {task: 'This is a completed task', id: Date.now() + 2, completed: true}
      ],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}