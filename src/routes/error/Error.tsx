import NavBar from "../../components/NavBar";
import "./Error.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Error() {
  return (
    <>
      <NavBar />
      <div className="error">
        <h2>404 Not Found</h2>
        <p>
          The route you just tried to follow does not exist, please go back to
          the&nbsp;
          <Link to={`/personal-webpage`}>
            <p className="link-p">landing page</p>
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Error;
