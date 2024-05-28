import introImg from '../../assets/introImg.svg';
import { ReactTyped } from 'react-typed';

const MyComponent = () => {
    window.open("https://drive.google.com/file/d/1JnSHT5tvgB2PX6ROyLWyfZCt8URIR7wc/view?usp=sharing", "_self");
};

function intro() {
    return (
        <div className="flex flex-col lg:flex-row lg:px-24 md:px-24 px-16 mt-16 py-24 md:py-4 lg:py-4 space-y-32 md:space-y-16 lg:space-y-0">
            <div className="flex flex-col lg:p-24 md:p-12 space-y-6">
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-3xl'>Hello, I'm <span className='text-maincolor'>Hemavarun</span></h1>
                    <h1 className='text-2xl text-maincolor'>
                        <ReactTyped strings={[" Software Developer", " Problem Solver", " Mern Stack Developer"]} typeSpeed={125} loop />
                    </h1>
                </div>
                <p className="text-xl">An optimistic and inquisitive person who likes to explore various fields which capture my interest. I enjoy solving real-life problems and building real world applications.</p>
                <div className='flex space-x-4'>
                    <button className='bg-maincolor hover:bg-white hover:text-maincolor rounded-2xl px-4 py-2 font-semibold' onClick={MyComponent}>Download CV</button>
                    <a href='/contact'>
                        <button className='bg-maincolor hover:bg-white hover:text-maincolor rounded-2xl px-4 py-2 font-semibold'>Hire Me</button>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center p-2 md:p-16 lg:p-2">
                <img src={introImg} alt='introImg' className="" />
            </div>
        </div>
    );
}

export default intro;
