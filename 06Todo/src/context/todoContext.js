import { useContext,createContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"do your work",
            completed:false
        }
    ],
    addTodo : ()=>{},
    updateTodo : ()=>{},
    deleteTodo : ()=>{},
    toggleComplete : ()=>{},
})

export const useTodo = ()=> useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;