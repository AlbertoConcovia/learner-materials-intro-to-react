import Home from "./Home";
import Mews from "./Mews";
import Contact from "./Contact";
import About from "./About";

function Navbar() {
  return (
    <nav className="nav__container">
      <ul className="nav__container ul ul__navbar">
        <Home />
        <Mews />
        <Contact />
        <About />
      </ul>
    </nav>
  );
}

export default Navbar;
