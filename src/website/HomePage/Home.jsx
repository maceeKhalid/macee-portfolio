
import './Home.css'
const Home = () => {
  const url='./src/assets/photo/banner2.jpg';
  return (
    <>
      <div>
        <div>
          <img src={url} alt="" className='img'/>
        </div>
        <div>
            <button type='button' className='btn smooth'><span className='sBtn'>Explore MyWork</span></button>
        </div>
      </div>
      <div>
        <div>
          <h2 className='Q'>
            <span className='M'>Welcome to my portfolio!</span><br/><span className='N'>I'm Macee Khalid,
            a passionate developer and designer with a keen eye
            for details</span>.<br/><span className='O'>With expertise in React,Javascript,css, and Tailwind.
            I create modern and responsive web applications</span>.<br/><span className='P'>Explore my Projects,skills
            and experiences to see how i can help bring your vision to life.</span>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Home;
