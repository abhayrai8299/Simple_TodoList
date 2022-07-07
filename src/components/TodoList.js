import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, settodos, settext, isEditItem, setisEditItem }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            isEditItem={isEditItem}
            setisEditItem={setisEditItem}
            settext={settext}
            settodos={settodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
