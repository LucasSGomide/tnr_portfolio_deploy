import React from 'react';
import MenuButton from './MenuButton';

function Menu() {
  const menuItems = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Trabalhos',
      path: '/trabalhos',
    },
    {
      name: 'Contato',
      path: '/contato',
    },
    {
      name: 'Sobre',
      path: '/sobre',
    },
    {
      name: 'Me Contrate',
      path: '/servicos',
    },
  ];

  return (
    <div>
      {menuItems.map((item) => (
        <MenuButton
          btnName={ item.name }
          btnPath={ item.path }
          key={ `button-${item}` }
        />
      ))}
    </div>
  );
}

export default Menu;
