import logo from "../images/logo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Rick and Morty "
        title="Rick and Morty "
      />
    </header>
  );
};

export default Header;
