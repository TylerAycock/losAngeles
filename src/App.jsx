import { GiMountaintop } from "react-icons/gi";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Climb from "./components/Climb";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/history"} element={<History />} />
        <Route path={"/climb"} element={<Climb />} />
      </Routes>
    </div>
  );
}

export default App;
