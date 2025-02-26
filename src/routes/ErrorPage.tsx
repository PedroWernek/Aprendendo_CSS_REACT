import IsThatMinosPrime from "../assets/images/isthatminosprime.jpg";
import "@fontsource/press-start-2p";

const ErrorPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <img
        src={IsThatMinosPrime}
        alt="Is That Minos Prime?????"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: "30%",
          left: "25%",
          color: "#acb5e3",
          WebkitTextStroke: "3px black",
          fontSize: "65px",
          fontFamily: '"Press Start 2P", cursive',
          textAlign: "center",
        }}>
        ERRO 404!!! WRONG WAY <br />
        TURN BACK {">:("}
      </h1>
    </div>
  );
};

export default ErrorPage;
