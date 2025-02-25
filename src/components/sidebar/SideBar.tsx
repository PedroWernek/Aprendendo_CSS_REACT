import React, { useEffect } from "react";
import "../../css/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import path from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import ShowContent from "../util/ShowContent";

const SideBar = () => {
  const [showContent, setShowContent] = React.useState(false);
  const { pathname } = useLocation();

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
      </div>
    </div>
  );
};

export default SideBar;
