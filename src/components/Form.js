import React from "react";

const Form = ({
  settext,
  todos,
  text,
  settodos,
  isEditItem,
  setisEditItem
}) => {
  const inputTextHandler = (e) => {
    settext(e.target.value);
  };

  console.log(text);
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (isEditItem !== null) {
      settodos(
        todos.map((element) => {
          if (element.id === isEditItem) {
            return { ...element, text: text };
          }
          return element;
        })
      );
      setisEditItem(null);
      settext("");
    } else {
      settodos([...todos, { text: text, id: Math.random() * 10000 }]);
      settext(" ");
    }
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" value={text} />
      <button onClick={submitTodoHandler}>Add Todo </button>
    </form>
  );
};

export default Form;
