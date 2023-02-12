import React, { useEffect, useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList';
import Button from '../Components/Button';
import axios from "axios";
import Header from '../Components/Header';

type TodoListProps={

    id:number|string;
    title:string;
    status:boolean;
  
}

interface Payload{
    title:string;
    status:false;
}

const Todo = () => {

    const [todos,setTodos] = useState<TodoListProps[]>([]);
    const [text,setText]=useState<string>("");
    const [payload,setPayload]=useState<Payload>({title:"",status:false});
    
    const handleChange =(event:object):void=>{

        setText(event.target.value);
        

    }

    const handleClick=()=>{
        
        setPayload({...payload,title:text})

        axios.post(`http://localhost:8080/todos`,payload)
        .then((res)=>{
            console.log(res);
            getTodos();
            alert("Todo added Successfully")

        })
        .catch((err)=>console.log(err));

    }
    const getTodos=():void=>{

        axios.get(`http://localhost:8080/todos`)
        .then((res)=>setTodos(res.data))
        .catch((err)=>console.log(err))

    }

    useEffect(()=>{
        getTodos();
    },[])

  return (
    <>
      <Header label='TODO APP'/>
      <TodoInput handleChange={handleChange} value={text} />  
      <Button handleClick={handleClick}>{"Submit"}</Button>
      <TodoList />

    </>
  )
}

export default Todo