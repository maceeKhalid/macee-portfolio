import { useState, useEffect,useRef } from "react";
import "./cv.css";
const Cv = () => {
  const[scrollY,setScrollY]=useState(0)
  const buttonRef=useRef(null)
  useEffect(()=>{
    
    const handleScroll=()=>{
      console.log('scrolling....')
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
    window.removeEventListener('scroll',handleScroll)
    }
  },[])
  useEffect(()=>{
  if(buttonRef.current && scrollY >=buttonRef.current.offsetTop){
  buttonRef.current.style.left='500px'
  }else{
  buttonRef.current.style.left='0px'
  }
  },[scrollY])
  return (
    <>
      <button
        className="bt"
        type="button"
        ref={buttonRef}
        style={{
          margin: "100px 50px",
          fontSize: "15px",
          fontWeight: "20px",
          outline: "none",
          padding: "5px 10px",
          border: "none",
          position: "relative",
          transition: "left 0.5s",
        }}
      >
        <span>Let&apos;s meet</span>
      </button>
      <div style={{ textAlign: "center" }}>
        <div>
          <h2 className="designer">
            I&apos;m Macee Khalid <br />
            Digital designer and illustrator.
          </h2>
        </div>
        <div>
          <button
            type="button"
            style={{
              fontSize: "15px",
              border: "none",
              borderRadius: "20px",
              padding: "8px 18px",
              outline: "none",
            }}
          >
            My Works
          </button>
        </div>
        <div>
          <button
            type="button"
            style={{
              marginTop: "10px",
              fontSize: "15px",
              border: "none",
              borderRadius: "20px",
              padding: "8px 18px",
            }}
          >
            download CV
          </button>
        </div>
        <div>
          <h5
            className="scroll"
            style={{ border: "1px solid", borderRadius: "200px" }}
          >
            scroll for more scroll for more
          </h5>
        </div>
      </div>
    </>
  );
};
export default Cv;
