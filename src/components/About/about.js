import "./about.css";
import about_img from "../../assets/about_img.png";
import Education from './education'

function about() {
  return (
    <div className="about">
      <div className="row1">
        <div className="column b1">
        <h1 style={{color:'rgba(178,121,216,.959)'}}>Know More About Me</h1>
        <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <p  className="textblock">Hemavarun </p>
        from<p className="textblock"> Vijayawada, India.</p>
        <br />
         I am currently Pursuing B.Tech ECE at LNM Institute of Information Technology.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
        <ul>
        <li className="about-activity">
          Playing Games
        </li>
        <li className="about-activity">
           Writing Tech Blogs
        </li>
        <li className="about-activity">
           Travelling
        </li>
      </ul>
      </p>
        </div>
        <div className="column b2">
          <center>
            <img src={about_img} alt="introImg"></img>
          </center>
        </div>
      </div>
      <div className="row2">
      <h2>My Education</h2>
      <Education />
      </div>
    </div>
  );
}
export default about;
