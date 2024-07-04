import { useState } from "react";
const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Textarea, setTextarea] = useState("");
  const [company, setcompany] = useState("");
  const [Phone, setPhone] = useState("");
  const name = (e) => {
    setName(e.target.value);
  };
  const email = (e) => {
    setEmail(e.target.value);
  };
  const textarea = (e) => {
    setTextarea(e.target.value);
  };
  const companyName = (e) => {
    setcompany(e.target.value);
  };
  const phone = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <div>
        <button>Contact</button>
        <div>
          <h2>
            Let&apos;s make
            <br />
            something awesome together
          </h2>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <form>
            <div>
              <label htmlFor="Name" style={{ outline: "none" }}>
                Your Name
              </label>
            </div>
            <div>
              <input
                type="text"
                value={Name}
                id="Name"
                onChange={name}
                style={{
                  gap: "20rem",
                  fontSize: "20px",
                  borderTop: "none",
                  background: "transparent",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid white",
                  color: "none",
                  width: "500px",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="Email"
                style={{ marginTop: "200px", paddingTop: "200px" }}
              >
                Email Address
              </label>
            </div>
            <div>
              {" "}
              <input
                type="email"
                value={Email}
                id="Email"
                onChange={email}
                style={{
                  gap: "20rem",
                  fontSize: "20px",
                  borderTop: "none",
                  background: "transparent",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid white",
                  color: "white",
                  outline: "none",
                  marginTop: "20px",
                  width: "500px",
                }}
              />
            </div>
            <div>
              <label htmlFor="textarea">Few Words</label>
            </div>
            <div>
              <textarea
                type="text"
                value={Textarea}
                id="textarea"
                onChange={textarea}
                style={{
                  gap: "20rem",
                  fontSize: "20px",
                  borderTop: "none",
                  background: "transparent",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid white",
                  color: "white",
                  outline: "none",
                  marginTop: "20px",
                  width: "500px",
                }}
              ></textarea>
            </div>
            <div style={{ display: "flex",gap:'50px',marginLeft:'200px',position:'absolute',top:'165px' }}>
              <div>
                <label htmlFor="company">Company Name</label>
              </div>

              <div>
                <input
                  type="text"
                  value={company}
                  id="company"
                  onChange={companyName}
                  style={{
                  gap: "20rem",
                    fontSize: "20px",
                    borderTop: "none",
                    background: "transparent",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid white",
                    color: "white",
                    outline: "none",
                    marginTop: "20px",
                    width: "400px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="number">Phone Number</label>
              </div>
              <div>
                <input
                  type="number"
                  value={Phone}
                  id="number"
                  onChange={phone}
                  style={{
                    gap: "20rem",
                    fontSize: "20px",
                    borderTop: "none",
                    background: "transparent",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid white",
                    color: "white",
                    outline: "none",
                    marginTop: "20px",
                    width: "400px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <button
          type="button"
          style={{
            marginTop: "50px",
            fontSize: "10px",
            border: "none",
            borderRadius: "20px",
          }}
        >
          Send message
        </button>
        <div style={{ display: "flex" }}>
          <div>
            <h2>Location</h2>
            <h3>Accra,Ghana</h3>
          </div>
          <div>
            <h2>Phone</h2>
            <h3>+233 534978605</h3>
          </div>
          <div>
            <h2>Email</h2>
            <h3>maceekhalid@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
