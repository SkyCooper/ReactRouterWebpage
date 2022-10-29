import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services/>}/>
        <Route path="html" element={<Html/>}/>
        <Route path="css" element={<Css/>}/>
        <Route path="brush" element={<Logo/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
