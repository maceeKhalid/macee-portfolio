import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Project, Blog } from "../Accesscomps";
import "./NavBar.css";
const NavBar = () => {
  const url='./src/assets/photo/logo.png'
  return (
    <>
      <BrowserRouter>
        <div className="n">
          <div>
            <img src={url} alt="" className="logo"></img>         
             </div>
          <nav className="Nav">
            <ul className="NavUl">
              <li className="Li">
                <Link to="/"className="L active">Home</Link>
              </li>
              <li className="Li">
                <Link to="/About"className="L active">About</Link>
              </li>
              <li className="Li">
                <Link to="/Contact"className="L active">Contact</Link>
              </li>
              <li className="Li">
                <Link to="/Project"className="L active">Project</Link>
              </li>
              <li className="Li">
                <Link to="/Blog"className="L active">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default NavBar;
