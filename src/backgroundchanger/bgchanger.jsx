import { useState, } from "react";
const BgChanger = () => {
  const [bgChanger, setBgchanger] = useState("");
  const handlecolor = (e) => {
    const color = e.target.value;
    setBgchanger(color);
  };
  return (
    <>
      <form>
        <label htmlFor="bg"></label>
        <input
          className="inputL"
          type="text"
          onChange={handlecolor}
          value={bgChanger}
          id="bg"
          placeholder="Type Ya preferred color"
          style={{ backgroundColor: bgChanger }}
        />
      </form>
    </>
  );
};
export default BgChanger;
