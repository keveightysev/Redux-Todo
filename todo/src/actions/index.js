export const ADD_TASK = "ADD_TASK";
export const MARK_COMPLETED = "MARK_COMPLETED";

export const addTask = tasks => {
    return {
        type: ADD_TASK,
        payload: tasks,
    };
};

export const markCompleted = id => {
    console.log(`${id} from action`);
    return {
        type: MARK_COMPLETED,
        payload: id,
    };
};