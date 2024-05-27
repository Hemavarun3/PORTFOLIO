import about_img from "../../assets/about_img.png";
import Education from './education';

function About() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:px-24 md:px-24 px-16 mt-16 py-24 md:py-4 lg:py-4 space-y-32 md:space-y-16 lg:space-y-0">
        <div className="flex flex-col lg:p-24 md:p-12 space-y-6">
          <div className='flex flex-col space-y-4'>
            <span className='text-maincolor text-3xl'>Know More About Me</span>
          </div>
          <p className="text-xl">Hi Everyone, I am Hemavarun from Vijayawada, India.
            I am currently Pursuing B.Tech ECE at LNM Institute of Information Technology.</p>
          <div className=''>
            <p>Apart from coding, some other activities that I love to do!
              <ul className="list-disc list-inside ml-4">
                <li>Playing Volley Ball</li>
                <li>Travelling</li>
                <li>Watching movies</li>
              </ul>
            </p>

          </div>
        </div>
        <div className="flex justify-center items-center p-2 md:p-16 lg:p-2">
          <img src={about_img} alt='introImg' className="" />
        </div>
      </div>
      <div className="flex flex-col space-y-8 items-center mt-16 lg:px-24 md:px-24 px-16">
        <h2 className="text-maincolor text-3xl font-semibold">My Education</h2>
        <Education />
      </div>
    </div>
  );
}

export default About;
