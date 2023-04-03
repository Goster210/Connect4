import React from "react";

const Header = ({player}) => {
  return (
    <div className="panel header">
      <div className="header-text">Playe {player} Turn</div>
    </div>
  );
};

export default Header;
