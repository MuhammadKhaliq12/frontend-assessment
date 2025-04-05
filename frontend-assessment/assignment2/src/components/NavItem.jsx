import React from "react";

const NavItem = ({ children }) => {
  return <span className="hover:text-gray-300 cursor-pointer">{children}</span>;
};

export default NavItem;
