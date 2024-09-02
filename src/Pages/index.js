import React,{useState, useCallback} from 'react'
import {useNavigate} from "react-router-dom"
export default function HomePage() {
    const [value,setvalue]=useState("")
    const navigate=useNavigate()
    const handlejoinroom=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
  return (
    <div>
        <input type="text" placeholder='Enter Room Number' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={handlejoinroom}>Join Now</button>
    </div>
  )
}
