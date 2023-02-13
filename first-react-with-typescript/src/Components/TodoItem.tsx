import styles from "./Styles.module.css";
import Button from './Button';

type TodoItemProps={

    id:number|string;
    title:string;
    status:boolean;
    handleClick:()=>void;
    deleteHandler:()=>void;
}


const TodoItem = ({id,title,status,handleClick,deleteHandler}:TodoItemProps) => {
  return (
    
    <div className={styles.todoitem}>  
        <h3>{id}</h3>
        <h3>{title}</h3>
        <h4>{status?"Done":"Not Done"}</h4>
        <Button handleClick={handleClick}>{"Toggle"}</Button>
        <Button handleClick={deleteHandler}>{"Delete"}</Button>
    </div>
  )
}

export default TodoItem