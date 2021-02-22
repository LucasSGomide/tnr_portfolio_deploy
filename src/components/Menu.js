import React, { useState } from 'react';
import MenuList from './MenuList';
import menuItems from '../data/menuData';
import boxMenu from '../images/box-menu.png';
import '../styles/Menu.css';

function Menu() {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const renderListMenu = () => {
    if (menuStatus) {
      return (
        <nav className="expanded-menu">
          {menuItems.map((item) => (
            <MenuList
              menuName={ item.name }
              linkPath={ item.path }
              key={ `button-${item.name}` }
            />
          ))}
        </nav>
      );
    }
  };

  const renderBoxMenu = () => {
    const renderBox = (
      <nav>
        <button
          onClick={ () => handleMenu() }
          type="button"
          className="box-menu-btn"
        >
          <img className="box-menu-img" src={ boxMenu } alt="Box Menu" />
        </button>
      </nav>
    );

    return renderBox;
  };

  return (
    <section className="menu">
      { renderListMenu() }
      { renderBoxMenu() }
    </section>
  );
}

export default Menu;
