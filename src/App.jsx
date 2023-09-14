import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/Compaines/Companies";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <div>
          <div className="white-gradient" />

          <Header />
          <Hero />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="" exact element={<Companies />}></Route>
          <Route path="/residencies" exact element={<Residencies />}></Route>
          <Route path="/value" exact element={<Value />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/getstarted" exact element={<GetStarted />}></Route>
          <Route path="/footer" exact element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
