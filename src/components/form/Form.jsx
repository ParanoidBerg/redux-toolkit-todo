import React, { useState } from 'react';
import styles from './form.module.css'
import { useDispatch } from 'react-redux/es/exports';

const Form = () => {
    const [text, setText] = useState('')

    const handleSetText = (e) =>{
        setText(e.target.value)
    }
const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text !== '') {
            dispatch ({
                type: "add",
                payload: text
                    
                
            })
            setText('')
        }
    }
    return (
        <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            type='text'
            value={text}
            onChange={handleSetText}
            className={styles.input}
            placeholder='Введите дело'
            ></input>
            <button type='submit' className={styles.btn}>Добавить</button>
        </form>
        </>
    );
};

export default Form;