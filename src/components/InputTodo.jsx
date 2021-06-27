export const InputTodo = (props) => {
  // css in JS
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };
  const { todo, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todo}
        onChange={onChange}
      ></input>
      <button disabled={disabled} onClick={() => onClick(todo)}>
        追加
      </button>
    </div>
  );
};
