import ContentHide from "../components/util/ContentHide";
import CssBasico from "./CssBasico";
import Display from "./Display";

const Home = () => {
  return (
    <div className="home">
      <ContentHide
        Componente={CssBasico}
        messageWhileHiden="Mostrar CSS básico"
        messageWhileVisible="Esconder CSS básico"
      />
      <ContentHide
        Componente={Display}
        messageWhileHiden="Mostrar o conteudo do display"
        messageWhileVisible="Esconder conteudo do display"
      />
    </div>
  );
};

export default Home;
