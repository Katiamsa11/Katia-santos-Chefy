import "../Footer/FooterPage.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";

function FooterPage() {
  return (
    <footer className="footer">
      <h2 className="footer__logo">chefy.</h2>

      <div className="footer__right">
        <Link to="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="instagram" className="footer__icon" />
        </Link>
        <Link to="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" className="footer__icon" />
        </Link>
        <Link to="https://twitter.com" target="_blank">
          <img src={twitter} alt="twitter" className="footer__icon" />
        </Link>
      </div>
      <p className="footer__copyright">Chefy &copy; 2022</p>
    </footer>
  );
}

export default FooterPage;
