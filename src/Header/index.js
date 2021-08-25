import "./style.css";

const Header = ({ title, link }) => (
  <header className="header">
    <h1>{title}</h1>
    <a
      className="header_link" href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html"
    >
      {link}
    </a>
  </header>
);

export default Header;
