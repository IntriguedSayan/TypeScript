import React from 'react'

interface HeaderProps{
  
  label:string

}
const Header = ({label}:HeaderProps) => {
  return (

    <h2>{label}</h2>


  )
}

export default Header