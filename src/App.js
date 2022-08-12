import logo from "./logo.svg";
import "./App.css";
import 'antd/dist/antd.css'; 
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
}

export default App;
