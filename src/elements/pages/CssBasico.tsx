import CssInline from "../components/subpages/CssInline";
import CssIntegrated from "../components/subpages/CssIntegrated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import Hierarquia from "../components/subpages/CssHierarchy";
import Background from "../components/subpages/Background";

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
