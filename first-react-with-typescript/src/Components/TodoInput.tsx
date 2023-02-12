import React from 'react'

type TodoInputProps={

    handleChange:()=>void;
    value:string;

}

const TodoInput = (props:TodoInputProps) => {

    const{handleChange,value}=props;

  return (

    <>
        <input type="text" value={value}  onChange={handleChange}
        placeholder="Write your Todos" />
    </>
    
  )
}

export default TodoInput