import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from "./components/Home/Navbar/Navbar";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import BlogSection from './components/BlogSection/BlogSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/project">
          <ProjectSection />
        </Route>
        <Route path="/blog">
          <BlogSection />
        </Route>
        <Route path="/about">
          <AboutMeSection />
        </Route>
        <Route path="/contact">
          <ContactSection />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
