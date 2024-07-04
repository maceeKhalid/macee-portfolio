import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const imgUrl1 = "./src/assets/photo/logo.png";
const imgUrl2 = "./src/assets/photo/banner2.jpg";
const Home = () => {
  const Navgate = useNavigate();
  return (
    <>
      <div
        className="profile"
        style={{
          marginLeft: "0",
          background: "white",
          position: "absolute",
          top: "2px",
          cursor: "pointer",
        }}
      >
        <div className="M" style={{ marginLeft: "60px", marginTop: "20px" }}>
          <div className="logoText" style={{}}>
            <img
              src={imgUrl1}
              alt="logo"
              style={{ width: "15%", height: "10vh", borderRadius: "500px" }}
            />
            <h2
              className="name"
              style={{ marginLeft: "190px", position: "absolute", top: "20px" }}
            >
              Macee
              <br />
              <span className="khalid">Khalid</span>
            </h2>
          </div>
          <div className="img">
            <img
              src={imgUrl2}
              alt="banner2"
              style={{ width: "90%", height: "40vh", borderRadius: "50px" }}
            />
          </div>
          <div className="brief" style={{}}>
            <div className="skill">
              <h5
                className="sp"
                style={{
                  letterSpacing: "2px",
                  fontSize: "15px",
                  opacity: "0.6",
                }}
              >
                specialization:
              </h5>
              <h3 className="des">
                UI/UX designer <br />
                and frontend developer
              </h3>
            </div>
            <div className="city">
              <h5
                className="ba"
                style={{
                  letterSpacing: "2px",
                  fontSize: "15px",
                  opacity: "0.6",
                }}
              >
                Based in:
              </h5>
              <h3 className="gh">Accra, Ghana</h3>
            </div>
          </div>
        </div>
        <button
          className="bt"
          style={{
            border: "none",
            borderRadius: "20px",
            padding: "10px 15px",
            marginTop: "30px",
            marginLeft: "150px",
          }}
        >
          let&apos;s Work Together
        </button>
      </div>
      <motion.div
        initial={{ y:300,opacity: 0 }}
        animate={{ y:-90,opacity: 1 }}
        transition={{delay:1.5,duration:1.5}}
        className="container"
        style={{
          position: "absolute",
          left: "630px",
          overflowX: "hidden",
          marginTop: "200px",
        }}
      >
        <div
          className=""
          style={{ wordSpacing: "", letterSpacing: "2px", fontSize: "30px" }}
        >
          <h3>
            I&apos;m Macee Khalid
            <br />
            Digital designer and
            <br />
            illustrator.
          </h3>
        </div>
        <div
          className="p"
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "100px",
            padding: "10px 20px",
            width: "800px",
          }}
        >
          <div className="">
            <button
              type="button"
              className="wv"
              style={{
                fontSize: "10px",
                padding: "10px 20px",
                borderRadius: "20px",
                width: "100px",
              }}
            >
              My Works
            </button>
          </div>
          <div className="">
            <motion.button initial={{x:-500}} animate={{x:0}} transition={{delay:1.5,duration:1.5}}
              type="button"
              onClick={() => Navgate("Cv")}
              className="wv"
              style={{
                fontSize: "10px",
                padding: "10px 20px",
                borderRadius: "20px",
              }}
            >
              Download cv &#x2BC4;&#x2795;
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Home;
