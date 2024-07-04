import { createContext } from "react"
import Passing from "./child"
export const FruitsContext=createContext();
const Accessing=()=>{
    const Fruits=['mango','Apple','orange','grapes ']
    return(
        <>
        <FruitsContext.Provider value={Fruits}>
        <Passing names={Fruits}/>
        </FruitsContext.Provider>
        </>
    )
}
export default Accessing
