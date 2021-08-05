import "./style.css";

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
    <a className="header_link" href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html">
      Polish National Bank currency rates on 05.08.2021
    </a>
  </header>
);

export default Header;
