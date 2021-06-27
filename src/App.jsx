import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompTodos } from "./components/IncompTodos";
import { CompTodos, compTodos } from "./components/CompTodos";

export function App() {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState(["aaaa", "iiiii"]);
  const [compTodos, setCompTodos] = useState(["uuuu"]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = (todo) => {
    if (todo === "") return;
    const newTodos = [...incompTodos, todo];
    setIncompTodos(newTodos);
    setTodoText("");
  };

  const onClickComp = (index) => {
    const newTodos = [...compTodos, incompTodos[index]];
    onClickDelete(index);
    setCompTodos(newTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  const onClickReturn = (index) => {
    const returnTodo = compTodos[index];
    const newTodos = [...compTodos];
    newTodos.splice(index, 1);
    setCompTodos(newTodos);
    onClickAdd(returnTodo);
  };

  return (
    <>
      <InputTodo
        todo={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompTodos.length >= 5}
      />
      {incompTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで。消化しなさい。</p>
      )}

      <IncompTodos
        todos={incompTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />

      <CompTodos todos={compTodos} onClick={onClickReturn} />
    </>
  );
}
