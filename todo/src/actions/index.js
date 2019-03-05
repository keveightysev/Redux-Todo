export const ADD_TASK = "ADD_TASK";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const DELETE_TASK = "DELETE TASK";

export const addTask = tasks => {
    return {
        type: ADD_TASK,
        payload: tasks,
    };
};

export const markCompleted = id => {
    return {
        type: MARK_COMPLETED,
        payload: id,
    };
};

export const deleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}