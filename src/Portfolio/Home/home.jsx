import './Home.css';
const imgUrl1 = "./src/assets/photo/logo.png";
const imgUrl2 = "./src/assets/photo/banner2.jpg";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="logoImg">
          <div className="img1">
            <img src={imgUrl1} alt="" style={{height:'150px',marginLeft:'300px',width:'160px'}}/>
          </div>
          <div>
            <h2 style={{}}>
              Macee<br/> <span style={{letterSpacing:'10px',position:'center',marginRight:'800px',}}>Khalid</span>
            </h2>
          </div>
        </div>
        <div className="">
          <img src={imgUrl2} alt="" className="img2" style={{boxShadow:'0px 5px 10px 0px'}}/>
        </div>
        <div className="intro">
          <div>
            <div className="M">
              <h5>Specialization:</h5>
            </div>
            <div className="N">
              <h3>
                UI/UX designer
                <br />
                and frontend developer
              </h3>
            </div>
          </div>
          <div>
            <div className="O">
              <h5>Based in:</h5>
            </div>
            <div className="P">
              <h3>Accra,Ghana</h3>
            </div>
            <div></div>
            <div>
              <button
                type="button"
                className="btn"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  border:'none',
                  color: "white",
                  fontSize: "20px",
                  padding: "10px 20px",
                }}
              >
                Lets Work Together!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
