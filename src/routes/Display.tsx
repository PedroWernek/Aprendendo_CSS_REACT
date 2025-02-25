import DisplayFlex from "../components/pages/DisplayFlex";
import DisplayBasic from "../components/pages/DisplayBasic";

const Display = () => {
  return (
    <div>
      <div id="displayBasic">
        <DisplayBasic />
      </div>
      <div id="displayFlex">
        <DisplayFlex />
      </div>
    </div>
  );
};

export default Display;
