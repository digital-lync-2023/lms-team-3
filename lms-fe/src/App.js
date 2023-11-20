import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home"
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgot" element={<Forgot/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
