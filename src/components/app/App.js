import React, {useState, useEffect} from 'react'
import "./App.css"
import Header from '../header'
import Search from "../search"
import TodoList from "../todoList"
import AddTodo from "../addTodo/"


const App = () => {
    const [todos, setTodos] = useState(window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : []);
    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState('all');
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className="app">
            <div className="app-container">
                <Header todos={todos}/>
                <Search todos={todos} setSearch={setSearch} status={status} setStatus={setStatus}/>
                {todos.filter(item => {
                    return !item.isDeleted
                }).length === 0 && status === "all"
                ? <p>Здесь будут ваши задания</p>
                : todos.filter(item => {
                    return item.isActive && !item.isDeleted
                }).length === 0 && status === "active"
                ? <p>Здесь будут ваши активные задания</p>
                : todos.filter(item => {
                    return !item.isActive && !item.isDeleted
                }).length === 0 && status === "done"
                ? <p>Здесь будут ваши выполненные задания</p>
                : todos.filter(item => {
                    return item.isDeleted
                }).length === 0 && status === "recent"
                ? <p>Здесь будут удалённые задания</p>
                : <TodoList todos={todos} setTodos={setTodos} status={status} search={search}/>}
                <AddTodo status={status} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}

export default App
