import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { Home } from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
