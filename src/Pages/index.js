import React,{useState, useCallback} from 'react'
import "./Home.css"
import image from "./images/podcast-7779510_1280.webp"
import {useNavigate} from "react-router-dom"
export default function HomePage() {
    const [value,setvalue]=useState("")
    const navigate=useNavigate()
    const handlejoinroom=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
  return (
    <div className="container">
    <div>
        <img src={image} className='image' alt="img" />
    </div>
    <div className='home'>
        <h2 className='small-heading'>Welcome to TalkChat!!</h2>
        <input className='text-field' type="text" placeholder='Enter Room Number' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button className='button' onClick={handlejoinroom}>Join Now</button>
    </div>

    </div>
  )
}
