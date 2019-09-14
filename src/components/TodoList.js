import React, { useState, useEffect } from 'react';
import TodoItem from "./ToDoItem";
import FilterTodos from "./FilterTodos";

export function TodoList ({ todos = [], toggleTodo }) {
    const [todosToShow, setTodosToShow] = useState(todos);

    useEffect(() => {
        setTodosToShow([...todos]);
    }, [todos]);

    function handleFilter(filter) {
      if(filter === 'Show Completed') {
          setTodosToShow([...todos.filter(t => t.completed)]);
      } else if(filter === 'Show Pending') {
          setTodosToShow([...todos.filter(t => !t.completed)]);
      } else {
          setTodosToShow([...todos]);
      }
    }

    return (
        <div>
            <h4>List of Todos:</h4>
            <ul>
                {
                    todosToShow.map(i => <TodoItem key={i.name} todo={i} toggleTodo={toggleTodo} />)
                }
            </ul>
            <FilterTodos applyFilter={handleFilter} />
        </div>
    );
}

TodoList.whyDidYouRender = true;

export default React.memo(TodoList);
