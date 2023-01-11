import { useDispatch } from "react-redux"
import { handledelete, handledone } from "../Redux/Actions"


const Cardlist = ({el})=>{

    const dispatch=useDispatch()
    return(
        <ul>
        
            <h3 className={el.isDone && "handledone"}>{el.text}</h3>
            <button className="Done" onClick={()=>dispatch(handledone(el.id))}>{el.isDone ?  "Undone" : "Done" }</button>
            
            <button onClick={()=>dispatch(handledelete(el.id))}>Delete</button>

        
        </ul>
    )
}

export default Cardlist