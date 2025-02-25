import "../../css/display.css";

const DisplayBasic = () => {
  return (
    <div className="display">
      <div className="display__container">
        <p>Tipo Block:</p>
        <div className="block">
          <div className="red">Primeira div</div>
          <div className="green">Segunda div</div>
          <div className="blue">Terceira div</div>
        </div>
      </div>
      <div className="display__container">
        <p>Tipo Inline:</p>
        <div className="inline">
          <div className="red">Primeira div</div>
          <div className="green">Segunda div</div>
          <div className="blue">Terceira div</div>
        </div>
      </div>
      <div className="display__container">
        <p>Tipo Inline-Block:</p>
        <div className="inline-block">
          <div className="red">Primeira div</div>
          <div className="green">Segunda div</div>
          <div className="blue">Terceira div</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBasic;
