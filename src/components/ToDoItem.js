import React from "react";
import classNames from 'classnames';
import './TodoItem.css';

function TodoItem({todo, toggleTodo}) {
    function handleClick(e) {
        toggleTodo(e.target.innerText);
    }

    const style = classNames({"item": todo.completed});
    return <li onClick={handleClick} className={style}>{todo.name}</li>
}

export default TodoItem;
