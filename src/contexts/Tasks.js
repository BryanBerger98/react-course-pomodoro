// import { createContext, useState } from "react";

// const TasksContext = createContext({
//     theme: 'light',
//     toggleTheme: () => {}
// });

// export { TasksContext };

// const TasksContextProvider = ({children}) => {

//     const [tasks, setTasks] = useState([]);

//     const addTask = (task) => {
//         setTasks([...tasks, task]);
//     }

//     const removeTask = (taskIndex) => {
//         const tasksArr = [...tasks];
//         tasksArr.splice(taskIndex, 1);
//         setTasks(tasksArr);
//     }

//     const value = {
//         tasks,
//         addTask,
//         removeTask
//     }

//     return(
//         <TasksContext.Provider value={value}>
//             {children}
//         </TasksContext.Provider>
//     )

// }

// export default TasksContextProvider;

import { useDebugValue } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const TasksContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export { TasksContext };

const INITIAL_TASKS = {
    tasks: [],
    count: 0
}

function tasksReducer(state, action) {
    if (action.type === 'ADD_TASK' && action.value) {
        const tasks = [...state.tasks, action.value];
        return {
            tasks,
            count: tasks.length
        }
    }
    if (action.type === 'REMOVE_TASK' && !isNaN(+action.value)) {
        const tasks = [...state.tasks];
        tasks.splice(+action.value, 1);
        return {
            tasks,
            count: tasks.length
        }
    }
    return state ? state : INITIAL_TASKS;
}

const TasksContextProvider = ({children}) => {

    const [tasksData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS);

    const addTask = (task) => {
        dispatchTasks({type: 'ADD_TASK', value: task});
    }

    const removeTask = (taskIndex) => {
        dispatchTasks({type: 'REMOVE_TASK', value: taskIndex});
    }

    const value = {
        tasksData,
        addTask,
        removeTask
    }

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksContextProvider;