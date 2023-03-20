import React from "react";

import {
  Navbar,
  NavbarBrand
} from "reactstrap";
import Cart from "./Cart";

const Navbars = () => {

  return (
    <div className="bg-dark px-5 py-1">
      <Navbar>
        <NavbarBrand href="/" className="text-white">My Online Shopping Site</NavbarBrand>
          <Cart />
      </Navbar>
    </div>
  );
};

export default Navbars;
