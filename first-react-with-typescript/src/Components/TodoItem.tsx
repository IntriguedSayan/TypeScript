import React from 'react'
import styles from "./Styles.module.css";
import Button from './Button';

type TodoItemProps={

    id:number|string;
    title:string;
    status:boolean;
    handleClick:()=>void;
    
}


const TodoItem = ({id,title,status,handleClick}:TodoItemProps) => {
  return (
    
    <div className={styles.todoitem}>  
        <h3>{id}</h3>
        <h2>{title}</h2>
        <h4>{status?"Done":"Not Done"}</h4>
        <Button handleClick={handleClick}>{"Toggle"}</Button>
    </div>
  )
}

export default TodoItem