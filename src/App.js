import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import whyDidYouRender from '@welldone-software/why-did-you-render';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React);
}

function App() {

  const [todos, setTodos] = useState([]);

  function handleOnClick(item) {
    setTodos([...todos, {name: item, completed: false}]);
  }

  function handleToggle(item) {
    const newTodos = todos.map(t => {
      if(t.name === item) {
        t.completed = !t.completed
      }
      return t;
    });

    setTodos([...newTodos]);
  }

  return (
    <div className="App">
      <h2>To-Do App</h2>
      <AddTodo onAdd={handleOnClick} />

      <TodoList todos={todos} toggleTodo={handleToggle}/>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
