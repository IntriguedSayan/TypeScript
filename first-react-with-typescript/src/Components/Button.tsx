

interface ButtonProps{

  children:string;
  handleClick:()=>void;

}


const Button = (props:ButtonProps) => {

  const { children, handleClick } = props;


  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button