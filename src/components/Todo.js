import React from "react";
const Todo = ({
  text,
  todo,
  todos,
  settodos,
  settext,
  isEditItem,
  setisEditItem
}) => {
  const deleteHandler = () => {
    settodos(todos.filter((element) => element.id !== todo.id));
  };
  const editItem = (id) => {
    let item = todos.find((task) => {
      return task.id === id;
    });
    console.log(item);
    settext(item.text);
    setisEditItem(id);
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={() => editItem(todo.id)}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
