import React from 'react'
import "./addTodo.css"

const AddTodo = ({inputText, setInputText, todos, setTodos, status}) => {
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            isChange: false,
            isDeleted: false,
            id: Math.floor(Math.random()*1000)
        }]);
        setInputText("");
    };
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }
    return (
        <form action="" className="addTodo" onSubmit={addTodo}>
            {status === "done" || status === "recent"
            ? <input type="text" required disabled value={inputText} className="addTodo__input" placeholder="You can`t write"/>
            : <input required className="addTodo__input" type="text" placeholder="What needs to be done" onChange={inputHandler} value={inputText}/>}
            <button className="btn btn-info addTodo__btn" type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo
