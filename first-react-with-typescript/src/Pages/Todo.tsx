import { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList';
import Button from '../Components/Button';
import axios from "axios";
import Header from '../Components/Header';
import Layout from '../Components/Layout';
import Navbar from '../Components/Navbar';

type TodoListProps={

    id:number|string;
    title:string;
    status:boolean;
  
}



const Todo = () => {

    const [todos,setTodos] = useState<TodoListProps[]>([]);
    const [text,setText]=useState<string>("");
    
    
    const handleChange =(event:object):void=>{

        setText(event.target.value);
        

    }
    console.log(text);
    const getTodos=():void=>{

        axios.get(`http://localhost:8080/todos`)
        .then((res)=>setTodos(res.data))
        .catch((err)=>console.log(err))

    }

    const handleClick=()=>{
        
       
        const newPayload={
            title:text,
            status:false,
        }

        console.log(newPayload);
        axios.post(`http://localhost:8080/todos`,newPayload)
        .then((res)=>{
            console.log(res);
            getTodos();
            alert("Todo added Successfully")

        })
        .catch((err)=>console.log(err));

    }


  return (
    <>
    <Layout>
        <Navbar/>
        <Header label='TODO APP'/>
        <TodoInput changeHandler={handleChange} value={text} />  
        <Button handleClick={handleClick}>{"Submit"}</Button>
        <TodoList data={todos} />
    </Layout>
    </>
  )
}

export default Todo