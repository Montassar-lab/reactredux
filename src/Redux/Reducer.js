import { ADDTASK, HANDLEDELETE, HANDLEDONE } from "./Actiontype"




const initialState = {
    TaskL : [
        { text: 'Buy tabbac', id : 0 , isDone:false},        
        {text: 'Buy more tabbac', id:1 , isDone:false},
        {text:'Quit smoking', id:2, isDone:false}
    ]
}

const Reducer=(state=initialState,action)=>{

    switch (action.type) {
        default: return state
        case ADDTASK : return {...state,TaskL:[...state.TaskL,action.payload]}
        case HANDLEDONE: return {...state, TaskL: state.TaskL.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)}
        case HANDLEDELETE : return {...state, TaskL:state.TaskL.filter(el=>el.id !==action.payload)}
    }
}

export default Reducer