import React from "react";
import OffCanvas2 from '../OffCanvas/OffCanvas2'

let Logo = require("../../../assets/logo/LogoHeader.png");
let Logo2 = require("../../../assets/logo/crer.png");

function Header(props) {
  return (
    <nav className="navbar navbar-expand-md p-1 sticky-top bg-secondary-color">
      <div className="container-fluid">
        <a className="navbar-brand p-0" href="#Init">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="" width="40" height="40" />
            <img src={Logo2} alt="" width="80" height="40" />
          </div>
        </a>
        <OffCanvas2></OffCanvas2>
        {/* /* <Offcanvas items2={props} boton={props.changeMain}></Offcanvas> */ }
      </div>
    </nav>
  );
}

export default Header;
