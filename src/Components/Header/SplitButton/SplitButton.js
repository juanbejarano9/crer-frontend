import React from "react";
import "./SplitButton.css";

function SplitButton(props) {
  return (
    <div className="btn-group" style={{ height: "30px" }}>
      <button
        type="button"
        className="btn nav-link bg-secondary-color rounded text-white py-0 splitBorder"
      >
        Servicios
      </button>
      <button
        type="button"
        className="btn dropdown-toggle dropdown-toggle-split splitBorder"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="#Services"
            onClick={() => props.boton("1")}
          >
            ak1
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#Services"
            onClick={() => props.boton("2")}
          >
            ak2
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#Services"
            onClick={() => props.boton("3")}
          >
            ak3
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#Services"
            onClick={() => props.boton("4")}
          >
            ak4
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#Services"
            onClick={() => props.boton("5")}
          >
            {/* {props.items3.items2.items1[4].title} */}
            ak5
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SplitButton;
