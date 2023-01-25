import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <FaLinkedin className="foot-link" size="2em" />
      </a>
      <a href="#">
        <FaFacebookSquare className="foot-link" size="2em" />
      </a>
      <a href="#">
        <FaGithub className="foot-link" size="2em" />
      </a>
    </div>
  );
}
export default Footer;
