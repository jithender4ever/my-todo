import {useState} from "react";
import React from "react";

export function AddTodo({onAdd}) {
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(item);
  }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} placeholder={"todo item..."} value={item} onChange={e => setItem(e.target.value)} />
            <button type={"submit"}>Add Todo</button>
          </form>
    );
}

export default AddTodo;
