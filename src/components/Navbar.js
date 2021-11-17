import Link from "./Link";

function Navbar() {
  return (
    <nav className="nav__container">
      <ul className="nav__container ul ul__navbar">
        <Link name="Home" href="home" />
        <Link name="Mews" href="Mews" />
        <Link name="Contact" href="Contact" />
        <Link name="About" href="https://www.cats.org.uk/sponsor"/>
      </ul>
    </nav>
  );
}

export default Navbar;
