import { ADDTASK, HANDLEDELETE, HANDLEDONE } from "./Actiontype"


export const addtask =(payload)=>{
    return(
        {
            type : ADDTASK,
            payload

        }
    )
}

export const handledelete =(payload)=>{
    return(
        {
            type:HANDLEDELETE,
            payload
        }
    )
}

export const handledone =(payload)=>{
    return(
        {
            type:HANDLEDONE,
            payload
        }
    )
}