import DisplayFlex from "../components/pages/DisplayFlex";
import DisplayBasic from "../components/pages/DisplayBasic";
import DisplayGrid from "../components/pages/DisplayGrid";

const Display = () => {
  return (
    <div className="display">
      <div id="displayBasic">
        <DisplayBasic />
      </div>
      <div id="displayFlex">
        <DisplayFlex />
      </div>
      <div id="displayGrid">
        <DisplayGrid />
      </div>
    </div>
  );
};

export default Display;
