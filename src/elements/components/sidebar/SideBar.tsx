import React, { useEffect } from "react";
import "../../../css/sidebar.css";
import { Link } from "react-router-dom";
import iconImage from "../../../assets/images/logocss.png";

const SideBar = () => {
  const [showContent, setShowContent] = React.useState(false);

  useEffect(() => {
    setShowContent(false);
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <h1 className="sidebar__content--title">
          Aprendendo CSS
          <Link to="/" className="sidebar__content--image-icon">
            <span className="sidebar__content--frame-icon" />
          </Link>
        </h1>
        <Link className="sidebar__content--item" to="/css-basico">
          CSS BÁSICO
        </Link>
        <button
          className="sidebar__content--button"
          onClick={() => setShowContent(!showContent)}>
          {" "}
          DISPLAY
        </button>
        {showContent && (
          <Link className="sidebar__content--item" to="/display">
            display basic
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
