import { useState } from "react";
import "./NavBar.css";

const NavBar = ({ links, logo }) => {
  const [activeItem, setActiveItem] = useState(links[0].name);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar " data-aos="zoom-in">
      <div className="logo">
        <img src={logo.imgSrc} alt={logo.alt} />
        <h1>{logo.title}</h1>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/assets/imgs/VectorStroke)(2).svg" />
      </button>

      <ul className={`items ${menuOpen ? "show" : ""}`}>
        {links?.map((link, index) => (
          <li
            key={index}
            className={`item ${activeItem === link?.name ? "active" : ""}`}
          >
            <a href={link?.path} onClick={() => handleItemClick(link?.name)}>
              {link?.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;