import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.jsx";

function App() {

  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
