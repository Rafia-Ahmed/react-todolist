import React, { useState } from "react"

export default function TodoForm(props) {
    const [value, setValue] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        {
            if (value === "") {
                setValue("")

            }
            else {
                props.addTodo(value);
                setValue("")
            }
        }

    }

    return (
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
                    }

                    }
                    className="todo-input"
                    placeholder="What is the task today" >
                </input>
                <button type="submit" className="todo-btn">Add Task</button>
            </form>
        </>
    )
}