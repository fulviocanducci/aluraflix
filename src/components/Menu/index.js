import React from "react";
import Logo from "../../assests/img/Logo-Gray.png";
import Button from "../Button";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} border="0" alt="FulFix" className="Logo" />
      </a>
      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
