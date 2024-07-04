import { useContext} from "react";
import { FruitsContext} from "./parent"; 
const Passing = () =>{
    const names=useContext(FruitsContext)
  return (
    <>
      {names.map((item) => (
        <div key={item.id}>{item}</div>
      ))}
    </>
  );
};
export default Passing;
