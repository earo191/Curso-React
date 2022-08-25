import React, { useReducer,useEffect } from 'react';
import { todoReducer } from "./todoReducer";
import { useForm } from '../../hooks/useForm';

import './style.css'; 
import { TodoList } from "./TodoList";

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {
  
    const [ todos , dispatch ] = useReducer(todoReducer , [], init);

    const [{ description }, handleInputChange,reset ] = useForm({
        description:''
    });

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ))
    
    }, [todos])
    
    const handleDelete = ( todoId ) =>{

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = (todoId) =>{

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <=1){
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action ={
            type : 'add',
            payload : newTodo
        }

        dispatch( action );
        reset();


    }

    return (

        <div>
            <h1>Todo App ( { todos.length } ) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        handleDelete= { handleDelete }
                        handleToggle= { handleToggle }
                    />
                </div>
                <div className="col-5">
                    <h4>Agrega TODO</h4>
                    <hr />
                    <form onSubmit={ handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender...."
                            autoComplete="off" 
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-block mt-1  btn-block"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
