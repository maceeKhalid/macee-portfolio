import { useNavigate } from "react-router-dom"
const Cv=()=>{
    const Navgate=useNavigate()
    return(
        <>
        <h2>Download me</h2>
        <button onClick={()=>Navgate(-1)}>Back to 
            home
        </button>
        </>
    )
}
export default Cv