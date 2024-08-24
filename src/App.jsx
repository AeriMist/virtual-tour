import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Layouts
import Navigation from "./layouts/Navigation";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
