 import React from 'react'

 
 const Todo = ({todos, setTodos, todosEl, status}) => {
    const deleteTodo = () => {
        setTodos(todos.map(item => item.id === todosEl.id ? {...item, isDeleted: !item.isDeleted} : item))
    };
    const fullDeleteTodo = () => {
        setTodos(todos.filter(item => item.id !== todosEl.id))
    };
    // const deleteTodo = () => {
    //     setTodos(todos.map(item =>{
    //         if (item.isDeleted) {
    //             return item.id !== todosEl.id
    //         }else{
    //             return item.id === todosEl.id ? {...item, isDeleted: !item.isDeleted} : item
    //         }
    //     }))
    // } 
    const doneTodo = () => {
        setTodos(todos.map((item) => item.id === todosEl.id ? {...item, isActive: !item.isActive} : item))
    };
    const importantTodo = () => {
        setTodos(todos.map((item) => item.id === todosEl.id ? {...item, isImportant: !item.isImportant} : item))
    };
    const changeTodo = () => {
        setTodos(todos.map((item) => item.id === todosEl.id ? {...item, isChange: !item.isChange} : item))
    };
    const textAreaHandler = (e) => {
        return todosEl.todoName = e.target.value
    }



     return (
        <li className="todoList__task">
        {!todosEl.isChange
            ? <p className={`todoList__name ${todosEl.isActive ? '' : 'done'} ${todosEl.isImportant ? 'important' : ''}`}>{todosEl.todoName}</p>
            : <textarea className="todoList__input" type="text" defaultValue={todosEl.todoName} onChange={textAreaHandler}/>}

        {status === "recent"
            ? <div className="todoList__btns">
                <button className="todoList__btn btn btn-outline-danger disabled btn-sm" type="button" onClick={fullDeleteTodo}>
                    <i className="fas fa-eraser"></i>
                </button>
                <button className="btn btn-warning" onClick={deleteTodo}>ReStore</button>
              </div>
            : <div className="todoList__btns">
                <i className={`fas fa-edit todoList__editBtn ${todosEl.isChange ? 'active' : ''}`} onClick={changeTodo}></i>
                <button className={`todoList__btn btn btn-outline-success ${todosEl.isActive ? '' : 'active'}`} type="button"   onClick={doneTodo}>
                    <i className="fas fa-check"></i>
                </button>
                <button className={`todoList__btn btn btn-outline-warning ${todosEl.isImportant ? 'active' : ''}`}  type="button" onClick={importantTodo}>
                    <i className="fas fa-exclamation-triangle"></i>
                </button>
                <button className="todoList__btn btn btn-outline-danger" type="button" onClick={deleteTodo}>
                    <i className="fas fa-eraser"></i>
                </button>
              </div>
        }
        
        
        </li>
     )
 }
 
 export default Todo
 