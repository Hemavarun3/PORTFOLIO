import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
import './footer.css'

export default function footer(params) {
    return(
        <div className="footer">
            <h4>Designed and Developed by Hemavarun</h4>
            <div className="icons">
            <span><span className="icon"><AiFillGithub /></span><span className="icon"><AiOutlineTwitter /></span><span className="icon"><AiFillInstagram /></span><span className="icon"><FaLinkedinIn /></span></span>
            </div>
        </div>
    );
}
