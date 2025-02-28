import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  componentNames: string[];
  componentIds: string[];
  mainLinkName: string;
  mainLinkPath: string;
  icon?: React.SVGProps<SVGSVGElement>;
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
  }, [pathname, mainLinkPath]);

  return (
    <div>
      <div
        className="sidebar__content--dropdown__btn"
        onClick={() => setShowContent(!showContent)}>
        <Link to={mainLinkPath} className="sidebar__content--button-link">
          {mainLinkName}
        </Link>
        <motion.div animate={{ rotate: showContent ? 360 : 0 }}>
          {showContent ? (
            <FontAwesomeIcon icon={faSquareCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faSquareCaretDown} />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {showContent && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", position: "relative" }} // Animação de entrada
            exit={{ opacity: 0, height: 0 }} // Animação de saída
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }} // Impede cortes bruscos
          >
            <ul>
              {componentNames.map((Component, index) => (
                <li key={index} className="sidebar__content--hiden-item-bar">
                  <a
                    href={`${mainLinkPath}#${componentIds[index]}`}
                    className="sidebar__content--hiden-item-link">
                    {Component}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowContent;
