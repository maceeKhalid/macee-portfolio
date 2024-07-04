import { Routes, Route } from "react-router-dom";
import { Home, Portfolio,About, Resume,Cv, Contact } from "./components";
import Links from "./Links";
const RoutesAndRoute = () => {
  return (
    <>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="About" element={<About/>}/>
        <Route path="Resume" element={<Resume />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="Cv" element={<Cv/>}/>
      </Routes>
    </>
  );
};
export default RoutesAndRoute;
