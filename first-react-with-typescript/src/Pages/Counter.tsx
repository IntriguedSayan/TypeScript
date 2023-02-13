import { useState } from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Layout from '../Components/Layout';
import Navbar from '../Components/Navbar';

const Counter = () => {

  const [state,setState] = useState<number>(0);

  const handleClick = (value:number):void=>{

    setState((prev:number)=>prev+value);
    
  }

  return (
    <>
      <Layout>
        <Navbar/>
        <Header label='Counter'/>
        <Header label={`${state}`}/>

        <Button handleClick={()=>handleClick(1)} >{"Increase"}</Button>
        <Button handleClick={()=>handleClick(-1)}>{"Decrease"}</Button> 
      </Layout>
    </>
  )
}

export default Counter