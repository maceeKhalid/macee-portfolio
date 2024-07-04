import { useNavigate } from 'react-router-dom';
import './About.css'
const About=()=>{
    const Navgate=useNavigate()
    return(
        <>
        <div className="AboutMe" style={{cursor:'pointer'}}>
            <button style={{borderRadius:'20px',background:'black',color:'white',padding:'10px 20px'}}>About Me</button>
            <div className=''>
                <h2>Turning complex problems<br/>into simple design</h2>
            </div>
            <div className='buttons'style={{display:'flex',gap:'30px',}}>
                <div><button style={{cursor:'pointer',border:'none',outline:'none',background:'black',color:'white',borderRadius:'20px',padding:'10px 20px',}}><h3>40+</h3><br/>happy clients</button></div>
                <div><button style={{cursor:'pointer',border:'none',outline:'none',background:'black',color:'white',borderRadius:'20px',padding:'10px 20px',}}><h3>1+</h3><br/>Years of experience</button></div>
                <div><button style={{cursor:'pointer',border:'none',outline:'none',background:'black',color:'white',borderRadius:'20px',padding:'10px 20px',}}><h3>20+</h3><br/>projects done</button></div>
            </div>
            <div style={{display:'flex', gap:'50px'}}>
                <div>
                    <h3>
                        I wonder if i&apos;ve been changed in the night?Let me think.Was i<br/>
                        same when i got up this morning?I almost think i can remember<br/>
                        feeling a little different.But if i&apos;m not the same ,the question is<br/>
                        &quot;Who in the world am i?&quot; Ah,that&apos;s the puzzle!<br/><br/>
                        Be what you would seem to be- or, if you&quot;d like it put more simple<br/>
                        never imagine yourself not to be the otherwise than what it might <br/>
                        appear to others that what you were or might have been was not <br/>
                        otherwise than what you had been would have appeared to them<br/>
                        to be otherwise.
                    </h3>
                </div>
                <div>
                    <h4>Name:<br/><span className='inTouch'>Macee Khalid</span></h4>
                    <h4>Phone:<br/><span className='inTouch'>+233 534978605</span></h4>
                    <h4>Email:<br/><span className='inTouch'>maceekhalid@gmail.com</span></h4>
                    <h4>Location:<br/><span className='inTouch'>Ghana</span></h4>
                </div>
            </div>
            <button onClick={()=>Navgate('Cv')} style={{borderRadius:'20px',padding:'10px 20px',border:'none',outline:'none'}}>Download cv</button>
        </div>
        <div className=''style={{display:'flex',gap:'80px'}}>
            <div style={{background:'black',color:'white',borderRadius:'20px',cursor:'pointer',padding:'20px 30px',height:'80vh',marginTop:'90px'}}>
                <h2>Frontend<br/>development</h2>
                <div className='' style={{display:'flex',gap:'20px',width:'350px'}}>
                    <div><button>/UX design</button></div>
                    <div><button>design to code</button></div>
                </div>
                <div><h3>I work with HTML<br/>Javascript/React/Css/Tailwind</h3></div>
                <div>
                    <img src='' alt=''/>
                </div>
            </div>
            <div style={{background:'black',color:'white',borderRadius:'20px',cursor:'pointer',padding:'20px 30px',height:'80vh',marginTop:'90px'}}>
            <h2>Digital art and graphic<br/>design</h2>
                <div className='' style={{display:'flex',gap:'20px'}}>
                    <div><button>illustration</button></div>
                    <div><button>AI Experiment</button></div>
                </div>
                <div><h3>I use Adobe Photoshop,Fresco and Blender to<br/>create illustrations and 3D renders for my<br/>clients and stocks</h3></div>
                <div>
                    <img src='' alt=''/>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;