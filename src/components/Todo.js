import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
export default function Todo(props)
{
    return(
        <div className={`${props.task.completed ? "todoclose-div":"todo-div" }`}>
        {console.log(props.task.completed)}
           <p onClick={()=>props.toggle(props.task.id)}
           className={`${props.task.completed ? "completed":"" }`}>
            {props.task.task} </p>
            
            <div className="todo-icon">
            &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faPenToSquare}
                onClick={
                    ()=>props.editTodo(props.task.id)
                }
                />
                &nbsp;
                <FontAwesomeIcon icon={faTrash} 

                onClick={(event)=>{
                    
                    props.delete(props.task.id)}
                    } />

           </div>
        </div>
    )
}