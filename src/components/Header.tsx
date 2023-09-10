import { useState, useEffect } from "react"
import dotImg from "../assets/Logomark.png"
import hamburger from "../assets/menu-02.png"
import { BiBell } from "react-icons/bi" 
import { AiOutlineSetting } from "react-icons/ai" 
interface Props {

} 

const Header = () => {
  return (
    <>
     <div className=" flex justify-between pt-2 px-3 ">
        <div className=" flex items-center gap-2">
           <img src={dotImg} alt="" /> 
             <h1 className=" font-bold">ToDo</h1>
        </div>
        <div className="hidden md:flex items-center gap-2">
        <AiOutlineSetting className="hover:animate-spin"/>
        < BiBell/>
           <img src={dotImg} alt="" />
        </div>
        <div className=" md:hidden"><button><img src={hamburger} alt="" /></button></div>
        </div>   
    </>
  )
}
export default Header
