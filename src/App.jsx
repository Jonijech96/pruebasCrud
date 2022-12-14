import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Reference } from "./components/Reference";
import { Pokemons } from "./components/Pokemons";
import { Bootstrap } from "./components/Bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToDoListApp } from "./components/ToDoListApp";
import { CrudApp } from "./components/crud/CrudApp";
import { SnippetsApi } from "./components/SnippetsApi";
import { CarsCrud } from "./components/crud-cars/CarsCrud";

function App() {
  return (
    <div className="App">
      {/* <Reference /> */}
      {/* <Pokemons /> */}
      {/* <Bootstrap /> */}
      {/* <ToDoListApp /> */}
      {/* <CrudApp /> */}
      {/* <SnippetsApi /> */}
      
      <CarsCrud />
    </div>
  );
}

export default App;
