import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Doctor from "./Pages/Doctor";
import Revenue from "./Pages/Revenue";
import HomePage from "./Pages/HomePage";
import SideBar from "./components/SideBar";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/doctor" Component={Doctor} />
          <Route path="/revenue" Component={Revenue} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
