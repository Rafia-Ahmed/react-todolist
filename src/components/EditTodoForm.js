import React, {useState} from "react"

export default function EditTodoForm(props)
{
    const [value,setValue]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        {
            if (value === "") {
                setValue("")

            }
            else {
                props.editTask(value, props.task.id);
                setValue("")
            }
        }
    }

    return(
        <>
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value}
            onChange={(e) => {
                if (e.target.value.trim() === "") {

                    return;
                }
                else {
                    setValue(e.target.value)
                }
            }}
            className="todo-input" 
            placeholder={props.task.task} >
            </input>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
        </>
    )
}