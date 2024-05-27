const data = [
  {
    "name": "TASTY-TREATS",
    "key": "1",
    "img": "/images/food_delivery.png",
    "github": "https://github.com/Hemavarun3/TASTY_TREATS_FRONTEND",
    "demo": "https://tastytreatsecom.netlify.app",
    "desc": "This is an E-commerce application built using MERN stack. Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, JavaScript, HTML, CSS."
  },
  {
    "name": "WEATHER-APP",
    "key": "2",
    "img": "/images/weatherapp.png",
    "github": "https://github.com/Hemavarun3/Weather-App",
    "demo": "https://weather-app-1-fub0.onrender.com/",
    "desc": "Designed a Weather App using HTML, CSS, and JavaScript, enabling real-time weather updates and location-based functionalities."
  },
  {
    "name": "PORTFOLIO",
    "key": "3",
    "img": "/images/portfolio.png",
    "github": "https://github.com/Hemavarun3/PORTFOLIO",
    "demo": "https://hemavarun-portfolio.netlify.app/",
    "desc": "Designed a Portfolio website using ReactJs, HTML, CSS, and JavaScript. using various prebuilt features in ReactJs like Timeline Components, etc."
  },
];

export default function Project() {
  return (
    <div className="flex  flex-col px-64 py-16 space-y-24">
        {data.map((project) => (
          <div key={project.key} className="group relative  rounded-2xl overflow-hidden ring-4 ring-maincolor">
            <a href={project.demo} title={project.name} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.name} className="w-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:opacity-50" />
            </a>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h2 className="text-xl font-bold text-white">{project.name}</h2>
              <p className="mt-2 text-center">{project.desc}</p>
              <div className="mt-4 space-x-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-maincolor text-white rounded-lg">GITHUB</button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-maincolor text-white rounded-lg">DEMO</button>
                </a>
              </div>
            </div>
          </div>
        ))}

    </div>
  );
}
