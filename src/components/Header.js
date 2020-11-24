import logo from "../images/logo.png";
// import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__title__image"
        src={logo}
        alt="Rick and Morty Cards"
        title="Rick and Morty Cards"
      />
    </header>
  );
};

export default Header;
