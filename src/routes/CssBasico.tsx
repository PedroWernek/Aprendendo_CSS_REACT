import CssInline from "../components/pages/CssInline";
import CssIntegrated from "../components/pages/CssIntegrated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import Hierarquia from "../components/pages/CssHierarchy";
import Background from "../components/pages/Background";

const CssBasico = () => {
  return (
    <div>
      <div className="aviso">
        <FontAwesomeIcon icon={faExclamation} />
        <p className="aviso__icon">
          clique com o botão direito no elemento e "Inspecionar" para entender
          melhor seu funcionamento
        </p>
        <FontAwesomeIcon icon={faExclamation} />
      </div>
      <CssInline />
      <CssIntegrated />
      <Hierarquia />
      <Background />
    </div>
  );
};

export default CssBasico;
