import React from 'react'
import './OffCanvas2.css'
import SplitButton from '../SplitButton/SplitButton'

let Logo = require("../../../assets/logo/LogoHeader.png");

function OffCanvas2(props) {
  return (
    <div>
      <button
        className="navbar-toggler bg-main-color"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span className="navbar-toggler-icon"></span>
      </button>


      {/* Div de el OffCanva */}
      <div
        className="offcanvas offcanvas-end bg-secondary-color"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {/* Header del OffCanva */}
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title bg-secondary-color p-2 rounded-3 text-white fs-4"
            id="offcanvasRightLabel"
          >
            <img src={Logo} alt="" width="40" height="40" />
          </h5>

          {/* Boton que cierra el OffCanva */}
          <button
            type="button"
            className="btn-close bg-main-color"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Cuerpo del OffCanva - Links */}
        <div className="offcanvas-body m-auto w-100">
          <nav className="nav w-100 flex-column flex-md-row gap-2 justify-content-md-end fs-5 align-items-center">
            <a
              className="nav-link active bg-secondary-color rounded text-white "
              href="#Init"
              aria-current="page"
              onClick={() => props.boton("0")}
            >
              Inicio
            </a>
            <li
              className="nav-link bg-secondary-color rounded text-white"
              href="#Services"
            >
              <SplitButton items3={props} boton={props.boton}/>
            </li>
            <a
              className="nav-link bg-secondary-color rounded text-white"
              href="#Contact"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default OffCanvas2