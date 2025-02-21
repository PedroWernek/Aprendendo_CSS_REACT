import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBasico from "./elements/pages/CssBasico";
import Home from "./elements/pages/home/Home";
import SideBar from "./elements/components/sidebar/SideBar";
import Display from "./elements/components/subpages/DisplayBasic";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css-basico" element={<CssBasico />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
