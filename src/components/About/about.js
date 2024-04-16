import "./about.css";
import about_img from "../../assets/about_img.png";
import Education from './education';

function About() {
  return (
    <div className="container">
      <div className="row1">
        <div className="col-md-6 b1">
          <h1 style={{ color: 'rgba(178, 121, 216, 0.959)' }}>Know More About Me</h1>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="textblock">Hemavarun </span> from <span className="textblock">Vijayawada, India.</span>
            <br />
            I am currently Pursuing B.Tech ECE at LNM Institute of Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <ul>
              <li className="about-activity">Playing Games</li>
              <li className="about-activity">Writing Tech Blogs</li>
              <li className="about-activity">Travelling</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 b2">
          <center>
            <img src={about_img} alt="introImg" className="img-fluid" />
          </center>
        </div>
      </div>
      <div className="row2">
        <div className="col-md-12">
          <h2>My Education</h2>
          <Education />
        </div>
      </div>
    </div>
  );
}

export default About;
