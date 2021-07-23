import React from 'react'
import "./search.css"

const Search = ({status, setStatus, setSearch}) => {
    const statusCheck = (e) => {
        setStatus(e.target.value)
    };
    const searchTask = (e) => {
        setSearch(e.target.value)
    } 
    return (
        <div className="search">
            <input type="text" className='search-input' defaultValue="" placeholder='search todo' onChange={searchTask}/>
            <div className="search__btns">
                <button className={`search__btn btn btn-outline-secondary ${status === 'all' ? 'active' : ''}`} type='button' value='all' onClick={statusCheck}>All</button>
                <button className={`search__btn btn btn-outline-secondary ${status === 'active' ? 'active' : ''}`} type='button' value='active' onClick={statusCheck}>Active</button>
                <button className={`search__btn btn btn-outline-secondary ${status === 'done' ? 'active' : ''}`} type='button' value='done' onClick={statusCheck}>Done</button>
                <button className={`fas fa-trash-restore btn btn-outline-primary search__rec ${status === 'recent' ? 'active' : ''}`} onClick={statusCheck} value='recent'></button>
            </div>
        </div>
    )
}

export default Search
