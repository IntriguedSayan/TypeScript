import React, { useState } from 'react'

type TodoInputProps={

    changeHandler:(e:object)=>void;
    value:string;

}

const TodoInput = (props:TodoInputProps) => {

    const{changeHandler,value}=props;
    // const[text,setText]=useState<string>("");

    // const handleChange=(e:object)=>{

    //   setText(e.target.value);

    // }

    console.log(value);


  return (

    <>
        <input type="text" value={value}  onChange={(e:object)=>changeHandler(e)}
        placeholder="Write your Todos" />
    </>
    
  )
}

export default TodoInput