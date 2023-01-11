import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtask } from "../Redux/Actions"


const Addtask =()=>{

    const [title,setTitle]=useState('')

    const dispatch=useDispatch()

    return (
        <div>
            <input type='text' onChange={(e)=>setTitle(e.target.value)}/>

            <button onClick={()=>dispatch(addtask({text:title,id:Math.random(),isDone:false}))}>Add task</button>
        </div>
    )
}

export default Addtask