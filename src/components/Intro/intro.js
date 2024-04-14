import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css'
import introImg from '../../assets/introImg.svg'
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';


const MyComponent = () => {
  window.open("https://drive.google.com/file/d/1wFt-VAO4bus6Es0g_LyZDZbZywdbSpOh/view", "_self");
};
function intro()
{
    return(
      <div className="row">
        <div className="column box1">
          <span className='hello'>Hello, <span className='introText'>I'm <span className='introName'> Hemavarun</span> <br /> <ReactTyped strings={["Software Developer","Problem Solver","Mern Stack Developer"]} typeSpeed={125} loop /></span></span>
          <p className="introPara">An optimistic and inquisitive person who likes to explore various fields which capture my interest. I enjoy solving real-life problems
          and building real world applications.</p>
          <div className='btndiv'>
          <Link><button className='btn' onClick={MyComponent}>Download CV</button></Link>
          <Link><button className='btn'>Hire Me</button></Link>
          </div>
        </div>
        <div className="column box2">
           <center><img src={introImg} alt='introImg'></img></center>
        </div>
      </div>
    );
}

export default intro;