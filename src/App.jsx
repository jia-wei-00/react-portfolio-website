import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/404/PageNotFound";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/react-portfolio-website"
            element={
              <>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
