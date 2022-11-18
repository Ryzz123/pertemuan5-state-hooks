// Untuk Membuat State, kita akan menggunakan suatu fungsi bawaan react
// namanya adalah useState
import React, { useState } from "react";

// Definisikan suatu angka awalnya
// let counter = 0; // sampai disini bukan suatu state

// Functional Component
function Todoincremeent() {
  // counter khusus di dalam si todoInrementnya
  // local variabel yang reaktif (state !)

  // Definisikan Fungsi untuk menghandle onClick

    // Definisikan state

    // Index 0 = nama variabel reaktif (state)
    // SELALU AMSUSIKAN BAHWA SI STATE adalah IMMUTABLE (Tidak Boleh Di re-assign)
    // Tidak boleh di-samadengan-in
    // index 1 = nama dari fungsi yang digunakan untuk memutasikan (mengganti) si variabel reaktifnya
    const [counter, setCounter] = useState(0)

  function buttonTambahCounterOnclickHandler() {
    console.log(counter);
    // counter = counter + 1; // di dalam state tidak boleh reassign !
    setCounter(counter + 1);
  }

  return (
    <>
      <div>{counter}</div>
      <div>
        {/* buttonnya bisa di klick nih */}
        {/* on<Namaeventnya> */}
        {/* click => onClick */}
        {/* Akan Mengarah Ke Suatu Fungsi */}
        <button onClick={buttonTambahCounterOnclickHandler}>Tambah Counter</button>
      </div>
    </>
  );
}

export default Todoincremeent;
