import React from "react";
import "../../css/sidebar.css";
import { Link } from "react-router-dom";
import ShowContent from "../util/ShowContent";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__content--title">
        Aprendendo CSS
        <Link to="/" className="sidebar__content--image-icon">
          <span className="sidebar__content--frame-icon" />
        </Link>
      </h1>
      <div className="sidebar__content">
        <Link className="sidebar__content--item" to="/css-basico">
          CSS BÁSICO
        </Link>
        <ShowContent
          componentNames={["Basic", "Flex", "Grid"]}
          mainLinkName="DISPLAY"
          mainLinkPath="/display"
          componentIds={["displayBasic", "displayFlex", "displayGrid"]}
        />
        <Link className="sidebar__content--item" to="/position">
          POSITION
        </Link>
        <Link className="sidebar__content--item" to="/overflow">
          OVERFLOW
        </Link>
        <Link className="sidebar__content--item" to="/float">
          FLOAT
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
