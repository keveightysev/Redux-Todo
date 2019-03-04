export const ADD_TASK = "ADD_TASK";

export const addTask = tasks => {
    return {
        type: ADD_TASK,
        payload: tasks,
    };
};