import { useState } from 'react';
import Button from './Button';
import Styles from "./Styles.module.css";
import {useLocation, useNavigate} from "react-router-dom";

function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const [state,setState]=useState<string>(location.pathname);

    const handleHome=():void=>{

        setState(location.pathname);
        navigate("/");
       

    }

    const handleCounter=():void=>{

        setState(location.pathname);
        navigate("/counter");
      

    }

    const handleTodos=():void=>{

        setState(location.pathname);
        navigate("/todos");
        

    }
    console.log(state);
  return (
    <div className={Styles.navbar} >
        <Button className={state==="/"?Styles.active:Styles.outline} handleClick={handleHome}>{"Home"}</Button>
        <Button className={state==="/counter"?Styles.active:Styles.outline} handleClick={handleCounter}>{"Counter"}</Button>
        <Button className={state==="/todos"?Styles.active:Styles.outline} handleClick={handleTodos}>{"Todos"}</Button>
    </div>
  )
}

export default Navbar