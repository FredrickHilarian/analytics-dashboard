import "./navbar.scss";
import MenuMobile from "../menuMobile/MenuMobile";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <MenuMobile />
        <div className="logo-image"><img src="logo.svg" alt="" /></div>
        <span>OstosTori</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="/FredrickDark.png"
            alt=""
          />
          <span>Fredrick</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;