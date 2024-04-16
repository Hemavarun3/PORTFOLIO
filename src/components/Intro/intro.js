import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css';
import introImg from '../../assets/introImg.svg';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const MyComponent = () => {
  window.open("https://drive.google.com/file/d/1wFt-VAO4bus6Es0g_LyZDZbZywdbSpOh/view", "_self");
};

function intro() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 box1">
                    <span className='hello'>Hello, <span className='introText'>I'm <span className='introName'> Hemavarun</span> <br /> <ReactTyped strings={["Software Developer","Problem Solver","Mern Stack Developer"]} typeSpeed={125} loop /></span></span>
                    <p className="introPara">An optimistic and inquisitive person who likes to explore various fields which capture my interest. I enjoy solving real-life problems
                    and building real world applications.</p>
                    <div className='btndiv'>
                        <button className='btn' onClick={MyComponent}>Download CV</button>
                        <Link to="hire-me-section" smooth={true}><button className='btn'>Hire Me</button></Link>
                    </div>
                </div>
                <div className="col-md-6 box2">
                    <center><img src={introImg} alt='introImg' className="img-fluid" /></center>
                </div>
            </div>
        </div>
    );
}

export default intro;
