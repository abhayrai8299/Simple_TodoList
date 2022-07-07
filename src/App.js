import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const [isEditItem, setisEditItem] = useState(null);
  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        isEditItem={isEditItem}
        setisEditItem={setisEditItem}
        todos={todos}
        settodos={settodos}
        text={text}
        settext={settext}
      />
      <TodoList
        isEditItem={isEditItem}
        setisEditItem={setisEditItem}
        settext={settext}
        settodos={settodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
