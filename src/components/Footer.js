import icon from "../cat.png";
import Link from "../components/Link";

function Footer() {
  return (
    <footer>
      <section className="nav__container footer">
        <ul className="footer__section ul">
          <Link name="About" href="https://www.cats.org.uk/sponsor" />
          <Link name="Belly Rubs" href="https://www.cats.org.uk/sponsor" />
          <Link name="Donate" href="https://www.cats.org.uk/sponsor" />
          <Link name="Cat Nip" href="https://www.cats.org.uk/sponsor" />
          <Link name="Customers" href="https://www.cats.org.uk/sponsor" />
        </ul>

        <ul className="footer__section ul">
          <Link name="Resources" href="https://www.cats.org.uk/sponsor" />
          <Link name="Dogs" href="https://www.cats.org.uk/sponsor" />
          <Link name="Blog" href="https://www.cats.org.uk/sponsor" />
          <Link name="eBooks" href="https://www.cats.org.uk/sponsor" />
          <Link name="Revenge" href="https://www.cats.org.uk/sponsor" />
        </ul>

        <ul className="footer__section ul">
          <Link name="Contact" href="https://www.cats.org.uk/sponsor" />
          <Link name="Help" href="https://www.cats.org.uk/sponsor" />
          <Link name="Meow" href="https://www.cats.org.uk/sponsor" />
          <Link name="Mice" href="https://www.cats.org.uk/sponsor" />
        </ul>

        <ul className="footer__section ul">
          <Link name="Ts &amp; Cs" href="https://www.cats.org.uk/sponsor" />
          <Link name="Privacy Policy" href="https://www.cats.org.uk/sponsor" />
          <Link name="&copy; 2021 TR Inc." href="https://www.cats.org.uk/sponsor" />
          <i> <img className="icon" src={icon} alt="A ginger cat silhouette" /> </i>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
