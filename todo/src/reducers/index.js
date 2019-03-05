import { ADD_TASK, 
    MARK_COMPLETED, 
    DELETE_TASK, 
    EDIT_TASK,
    CLEAR_COMPLETED, } from '../actions';

const initialState = {
    tasks: [
        {task:'Take over the world', id: Date.now(), completed: false}, 
        {task: 'Add a new task!', id: Date.now() + 1, completed: false},
        {task: 'This is a completed task', id: Date.now() + 2, completed: true}
      ],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false,
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            }
        case MARK_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.completed = !task.completed;
                    }
                    return task;
                }),
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        task.task = action.payload.task;
                    }
                    return task;
                })
            }
        case CLEAR_COMPLETED:
            return {
                state,
                tasks: state.tasks.filter(task => task.completed === false)
            }
        default:
            return state;
    }
}