import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// { disendo que o prop recebido é um componente
// do tipo React.ComponentType ou seja um componente}

interface ContentHideProps {
  Componente: React.ComponentType;
  messageWhileHiden: string;
  messageWhileVisible: string;
}

//Esse FC serve para tipar o prop automaticamente
// e não precisar tipar manualmente
const ContentHide: React.FC<ContentHideProps> = ({
  Componente,
  messageWhileHiden,
  messageWhileVisible,
}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="content_hide">
      <button
        className="aviso aviso__button"
        onClick={() => setVisible(!visible)}>
        {visible ? messageWhileVisible : messageWhileHiden}
        {visible ? (
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        )}
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", float: "left" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}>
            <Componente />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentHide;
