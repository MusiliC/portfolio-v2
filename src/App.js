import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { Home } from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Home />
        <About />
        <Services />
        <Contact/>
        <Footer />      
           </Router>
    </div>
  );
}

export default App;
