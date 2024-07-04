import { NavLink } from "react-router-dom"
import './LinkAndRoutes.css'
const Links=()=>{
    return(
        <>
        <div>
            <ul className="ul">
                <li className='li'><NavLink to='/' className='NavLink'>Home</NavLink></li>
                <li className='li'><NavLink to='/Portfolio' className='NavLink'>Portfolio</NavLink></li>
                <li className='li'><NavLink to='/About' className='NavLink'>About</NavLink></li>
                <li className='li'><NavLink to='/Resume' className='NavLink'>Resume</NavLink></li>
                <li className="li"><NavLink to='/contact' className='NavLink'>Contact</NavLink></li>
            </ul>
        </div>
        </>
    )
}
export default Links