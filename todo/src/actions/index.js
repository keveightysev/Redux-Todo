export const ADD_TASK = "ADD_TASK";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task,
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

export const editTask = (id, task) => {
    return {
        type: EDIT_TASK,
        payload: {
            id: id,
            task: task,
        },
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}