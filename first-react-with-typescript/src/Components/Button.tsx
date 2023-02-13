

interface ButtonProps{

  className?:string;
  children:string;
  handleClick:()=>void;

}


const Button = (props:ButtonProps) => {

  const { children, handleClick,className } = props;


  return (
    <button className={className} onClick={handleClick}>{children}</button>
  )
}

export default Button