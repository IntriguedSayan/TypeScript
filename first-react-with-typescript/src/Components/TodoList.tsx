import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import axios from 'axios';

type TodoItem={

    id:number|string;
    title:string;
    status:boolean;
    
}

interface TodoListProps{
    data:TodoItem[];
}

const TodoList = ({data}:TodoListProps) => {

   
  
    const [todos,setTodos]=useState<TodoItem[]>([]||data);  

    const handleClick=(id:number|string)=>{

    axios.patch(`http://localhost:8080/todos/${id}`,{status:true})
        .then((res)=>{
            getTodos();
            console.log(res)})
        .catch((err)=>console.log(err));

    }
    const getTodos=():void=>{

    axios.get(`http://localhost:8080/todos`)
    .then((res)=>setTodos(res.data))
    .catch((err)=>console.log(err))

    }

    useEffect(()=>{

       
            getTodos();
        
      
    },[data])

  return (
    <div>

        {   
            todos?.length>0?todos.map((elem:TodoItem)=>(

                <TodoItem key={elem.id} id={elem.id} 
                title={elem.title} status={elem.status}
                handleClick={()=>handleClick(elem.id)}
                />

            )):"NO TODOS"
        }

    </div>
  )
}

export default TodoList