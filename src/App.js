import React from "react";
import { useState } from "react";
import "./App.css";
import Lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(Lottie.loadAnimation);



const App = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([])
  return (
    <>

      <div style={{
        backgroundImage: `url("https://img.freepik.com/vector-premium/fondo-geometrico-abstracto-forma-geometrica-colorida-sobre-fondo-blanco-ilustracion-vectorial-plantilla-tema-minimo-memphis-banner-sitios-web-fondo_58717-844.jpg?w=2000")`
      }}>

        <div className="px-4 py-5 my-5 text-center">

          <lord-icon
            src="https://cdn.lordicon.com/ccwgfhfg.json"
            trigger="loop"
            delay="2000"
            colors="outline:#545454,primary:#e83a30,secondary:#30e849,tertiary:#ebe6ef"
            stroke="75"
            style={{ width: "250px", height: "250px" }}>
          </lord-icon>

          <h1 className="display-5 fw-bold">TO DO LIST</h1>

          <div className="col-lg-6 mx-auto">
            <form className="card p-2"
              onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setTodos(todos.concat([inputValue]))
                      setInputValue("");
                    }
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Press enter to add a task"/>
             
              </div>
            </form>
          </div>

        </div>


        <ul className="todos list-group col-lg-6 mx-auto">
          {todos.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between">
              <p>{item}{""} </p>
              <lord-icon
                src="https://cdn.lordicon.com/ivayzoru.json"
                trigger="hover"
                colors="outline:#121331,primary:#30e849,secondary:#ebe6ef"
                stroke="100"
                style={{ width: "30px", height: "30px" }}
                onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}
                > 

              </lord-icon></li>
          ))}
        </ul>

        <div className="alert alert-danger col-lg-6 mx-auto mt-4" role="alert">
        {todos.length} Task to do
        </div>

       
      </div>

    </>
  );
};

export default App;