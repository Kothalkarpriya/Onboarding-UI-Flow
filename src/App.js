import "./App.css";
import { Form, Navbar } from "./components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
