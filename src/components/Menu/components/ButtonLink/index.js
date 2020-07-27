import React from "react";
import PropTypes from "prop-types";

function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: "/",
  className: "ButtonLink",
  children: "Novo vídeo",
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
