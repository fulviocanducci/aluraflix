import React from 'react';
import Logo from '../../assests/img/Logo-Gray.png';
import Button from '../Button';

import './Menu.css';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} border="0" alt="FulFix" className="Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
