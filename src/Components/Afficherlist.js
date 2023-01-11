import { useState } from "react"
import { useSelector } from "react-redux"
import Cardlist from "./Cardlist"




const Afficherlist=()=>{

    const [test,setTest] = useState("ALL")

    
    const TaskL = useSelector(state=>state.TaskL)
    return(
        <div>
           <h1> TO DO LIST</h1>
           <button onClick={()=>setTest("ALL")}>All</button>
            <button onClick={()=>setTest("DONE")}>Done</button>
            <button onClick={()=>{setTest("UNDONE")}}>Undone</button>
           
            {
                test == "ALL" ?
                TaskL.map(el=> <Cardlist el={el}/>)
                :
                test == "UNDONE" ?
                TaskL.filter(el=> el.isDone == true).map(el=> <Cardlist el={el}/>)
                :
                TaskL.filter(el=> el.isDone == false).map(el=> <Cardlist el={el}/>)
            }
           
        </div>
    )
}

export default Afficherlist