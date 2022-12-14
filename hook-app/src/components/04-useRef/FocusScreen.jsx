import React, { useRef } from 'react'
import '../01-useState/counter.css'


export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = ()=>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input type="text" 
                className="form-control"
                placeholder="Su nombre"
                ref={ inputRef }
            />

            <button className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
