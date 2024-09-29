import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Layouts
import Navigation from "./layouts/Navigation";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tour" element={<Tour />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
