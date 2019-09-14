import React from 'react';

function FilterTodos({applyFilter}) {

    function handleClick(e) {
        applyFilter(e.target.innerText);
    }

    return (
        <div>
            <button onClick={handleClick}>Show All</button>
            <button onClick={handleClick}>Show Completed</button>
            <button onClick={handleClick}>Show Pending</button>
        </div>
    )
}

export default FilterTodos;
