import { useState } from "react";
const Todo = () => {
  const [Input, setInput] = useState("");
  const [List, setList] = useState([]);
  const handleMe = (e) => {
    setInput(e.target.value);
  };
  const handleMore = (e) => {
    if (Input !== "") {
      e.preventDefault();
      const update = [...List, Input];
      setList(update);
      setInput("");
    }else{
      alert('type a value')
    }
  };
  const Del=(id)=>{
    setList(List.filter((_,Lists)=>Lists.id!==id))
  }
  return (
    <>
      <form onSubmit={handleMore}>
        <input
          type="text"
          value={Input}
          placeholder="type someThing"
          onChange={handleMe}
        />
      </form>
      {List.map((Lists) => (
        <div key={List.id}>{Lists}
        <button type="button" onClick={()=>Del(List.id)}>Delete</button>
        </div>
      ))}
      <button type="submit" onClick={handleMore}>
        AddMore
      </button>
    </>
  );
};
export default Todo;
