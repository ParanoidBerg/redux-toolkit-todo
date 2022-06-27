import React from 'react';
import styles from './list.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { del } from '../features/reducer';

const List = () => {

    const todos = useSelector((state)=>state.todos)

    const dispatch = useDispatch()

    const handleRemove = (i) =>{
        dispatch(del(i))
    }

    return (
        <div className={styles.list}>
            {todos.map((element, index)=>{
                return (
                    <div className={styles.task}>{element}
                    <button className={styles.del} onClick={() => handleRemove(index)}>X</button> </div>
                )
            })}
            
        </div>
    );
};

export default List;