import "../Footer/FooterPage.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";

function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link className="footer__link" to={"/"}>
          <h2 className="footer__logo">chefy.</h2>
        </Link>
        <div className="footer__right">
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" className="footer__icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" className="footer__icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" className="footer__icon" />
          </a>
        </div>
      </div>
      <p className="footer__copyright">Created by Katia Santos &copy; 2022</p>
    </footer>
  );
}

export default FooterPage;
