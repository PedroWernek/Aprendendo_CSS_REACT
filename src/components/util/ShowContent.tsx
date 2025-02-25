import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  componentNames: string[];
  componentIds: string[];
  mainLinkName: string;
  mainLinkPath: string;
}

const ShowContent: React.FC<Props> = ({
  componentNames,
  mainLinkName,
  mainLinkPath,
  componentIds,
}) => {
  const [showContent, setShowContent] = React.useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === mainLinkPath) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, []);

  return (
    <div>
      <div
        className="sidebar__content--button"
        onClick={() => setShowContent(!showContent)}>
        <Link to={mainLinkPath} className="sidebar__content--button-link">
          {mainLinkName}
        </Link>

        {showContent ? (
          <FontAwesomeIcon icon={faSquareCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faSquareCaretDown} />
        )}
      </div>
      {showContent && (
        <nav>
          <ul>
            {componentNames.map((Component, index) => (
              <>
                <li className="sidebar__content--hiden-item-bar">
                  <a
                    href={`${mainLinkPath}#${componentIds[index]}`}
                    className="sidebar__content--hiden-item-link">
                    {Component}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ShowContent;
