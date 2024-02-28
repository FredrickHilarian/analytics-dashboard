import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuMobile.scss";
import { menu } from "../../data";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";


const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="menuMobile">
      <div className="hamburgerMobile">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default MenuMobile;

 
