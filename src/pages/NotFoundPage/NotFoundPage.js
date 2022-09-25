import { Link } from "react-router-dom";
import { TabTitle } from "../../utils/Utils";
import "./NotFoundPage.scss";

function NotFoundPage() {
  //function to change tab title dinamically
  TabTitle("Not Found Page");
  return (
    <main className="notFound">
      <div className="notFound__container">
        <h1 className="notFound__title">
          We couldn't find the Chef page you are looking for...
        </h1>
        <p className="notFound__text">
          Consider checking another chef from the home page.
        </p>
        <Link className="notFound__link" to="/">
          Bring me back to home page.
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
