// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import Todoincremeent from "./components/ToDoIncrement";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    "Belajar Fundamental React", 
    "Ngoding Sampai Lemas !", 
    "Nambah Satu Lagi"
  ]);

  // Bikin Satu Fungsi untuk menambahkan si todos
  const fungsiPenambahTodos = (todo) => {
    console.log('todo input adalah', todo);
    // tambahkan si todo ke dalam todos

    // berarti kita sekarang harus
    // membuat sebuah array yang baru berdasarkan data todos yang lama
    // DITAMBAHKAN dengan si todo

    // Kita bisa menggunakan TRIPLE DOT (...) => spread operator
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      {/* header Tambahan Di sini */}
      <header>
        <h1>Aplikasi Todo List Pertamaku</h1>
      </header>

      <section style={{ margin: "1em 0em" }}>
        {/* Text Ini adalah sesuatu "props" nya, Tidak digunakan sekarang */}
        <Todoincremeent text="something" />
      </section>

      <section style={{ margin: "1em 0em" }}>
        {/* Kita Panggil si TodoForm */}
        <ToDoForm propsSubmitHandler={fungsiPenambahTodos} />

        {/* Kita Akan menggunakan suatu ... props */}
        <ToDoList propsTodos={todos} />
      </section>  

      <footer>
        <h3>Dibuat oleh &copy; 2022</h3>
      </footer>
    </div>
  );
}

export default App;
