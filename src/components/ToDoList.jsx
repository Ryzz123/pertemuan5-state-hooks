import React from "react";

// ada listing todo awalnya ada apa aja
// array of string

// Kita Harus Bikin ini jadi state
// const todos = ["Belajar Fundamental React", "Ngoding Sampai Lemas !"];

// component ToDoListnya

// destructuring si props
function ToDoList({ propsTodos }) {
  return (
    // Root Element 'pseudo' / fiktif = fragment
    <>
      <h3>Listing Todo List</h3>
      {/* list yang tidak terurut (unordered list - ul) */}
      <ul>
        {/* Kita  Harus Membuat Looping Yang mengeembalikan si <li>todos[n]</li> */}
        {propsTodos.map((todo) => {
            return <li>{todo}</li>
        })}
      </ul>
    </>
  );
}

export default ToDoList;