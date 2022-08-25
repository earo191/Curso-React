import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../../hooks/useForm'
import './effect.css';


export const SimpleForm = () => {

    

    const [formValues, handleInputChange] = useForm({
        name : '',
        email: '', 
        password:''
    });

    const { name, email }= formValues;


    return (
        <>
            <h1>Use Effect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    value= { name }
                    autoComplete="off"
                    onChange= { handleInputChange }

                />
            </div>


            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email@gmail.com"
                    value= { email }
                    autoComplete="off"
                    onChange= { handleInputChange }

                />
            </div>

        </>
    )
}
