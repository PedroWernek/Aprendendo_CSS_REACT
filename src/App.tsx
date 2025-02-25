import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="App__sidebar">
        <SideBar />
      </div>
      <div className="App__content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
