const data = [
  {
    name: "TASTY-TREATS",
    key: "1",
    img: "/images/food_delivery.png",
    github: "https://github.com/Hemavarun3/TASTY_TREATS_FRONTEND",
    demo: "https://tastytreatsecom.netlify.app",
    desc: "This is an E-commerce application built using MERN stack. Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, JavaScript, HTML, CSS."
  },
  {
    name: "WEATHER-APP",
    key: "2",
    img: "/images/weatherapp.png",
    github: "https://github.com/Hemavarun3/Weather-App",
    demo: "https://weather-app-1-fub0.onrender.com/",
    desc: "Designed a Weather App using HTML, CSS, and JavaScript, enabling real-time weather updates and location-based functionalities through api calls."
  },
  {
    name: "PORTFOLIO",
    key: "3",
    img: "/images/portfolio.png",
    github: "https://github.com/Hemavarun3/PORTFOLIO",
    demo: "https://hemavarun-portfolio.netlify.app/",
    desc: "Designed a Portfolio website using ReactJs, HTML, CSS, and JavaScript. using various prebuilt features in ReactJs like Timeline Components, etc."
  },
];

export default function Project() {
  return (
    <div className="md:px-16 lg:px-16 px-8 py-8 flex flex-col items-center space-y-16">
      <div className="flex flex-col items-center space-y-8">
        <span className=" text-3xl text-maincolor font-semibold">PROJECTS</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:p-4 lg:p-4 p-2">
          {data.map((project) => (
            <div key={project.key} className="flex flex-col justify-between rounded-2xl overflow-hidden ring-4 ring-maincolor md:p-3 lg:p-3 p-2">
              <a href={project.demo} title={project.name} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 rounded-2xl"
                />
              </a>
              <div className="flex flex-col justify-center items-center p-4">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="mt-2 text-center text-white">{project.desc}</p>
                <div className="mt-4 space-x-2">
                  <a href={project.github}>
                    <button className="px-4 py-2 bg-maincolor text-white rounded-lg">GITHUB</button>
                  </a>
                  <a href={project.demo}>
                    <button className="px-4 py-2 bg-maincolor text-white rounded-lg">DEMO</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-white" />
      <div className="flex flex-col items-center space-y-8">
        <span className=" text-3xl text-maincolor font-semibold">CODING STATS</span>
        <img src='https://leetcard.jacoblin.cool/FlyingHawk?theme=dark&font=Righteous&ext=contest' className="ring-4 ring-maincolor rounded-2xl" alt='imag'></img>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <span className=" text-3xl text-maincolor font-semibold">ACHIEVEMENTS</span>
        <div className=" md:text-2xl lg:text-2xl">
          <ul className="list-disc list-inside">
            <li>Solved 700+ problems on Leetcode.</li>
            <li>Pupil @Codeforces Max rating(1282)</li>
            <li>Max Rating(1837) @Leetcode</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
