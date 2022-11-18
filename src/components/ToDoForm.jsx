// Import si react nya
import React, { useState } from "react";

// component ToDoForm (Functional Component)
function ToDoForm({ propsSubmitHandler }) {
    // Bikin State untuk menampung todo dari todoInput
    const [inputTodo, setInputTodo] = useState('');

    const todoInputOnChangeHandler = (event) => {
        setInputTodo(event.target.value);
    }

    const formSubmitHandler = (event) => {
        // membuat behaviournya kembali ke jalur tidak normal
        event.preventDefault();
        propsSubmitHandler(inputTodo);
        // kita kosongin value dari si input
        setInputTodo("");
    }

    // Ingin Meembuat Render Sebuah Form
    return (
        <form action="" onSubmit={formSubmitHandler}>
            {/* Tulisan Input Kerjaan Baru */}
            {/* Label + Input */}
            <div style={{ marginBottom: "0.5em" }}>
                {/* <label for=""></label> */}
                <label htmlFor="todoInput" style={{marginRight: "0.5em"}}>Input kerjaan baru</label>

                {/* Untuk Si Input Ini sekarang, kita harus memiliki suatu ... */}
                {/* STATE untuk menampung value dari input */}
                <input type="text" name="todo-input" id="todoInput" value={inputTodo} onChange={todoInputOnChangeHandler} />
            </div>

            {/* Button */}
            <div>
                <button type="submit">Tambah ToDo</button>
            </div>
        </form>
    )
}

export default ToDoForm;