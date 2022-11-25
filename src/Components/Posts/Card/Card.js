import React from "react";
import "./Card.css";

function Card(props) {
  console.log("hola");
  console.log(props);

  console.log(props.items.index);

  let sec;
  props.num % 2 ? (sec = 0) : (sec = 1);

  return (
    <>
      {(() => {
        if (sec === 1) {
          return (
            <div className="service" id={props.items.title}>
              <a href="#Services" data-active="1">
                {props.items.image && (
                  <img
                    src={props.items.image.url}
                    className="w-full h-96 object-cover"
                  />
                )}
              </a>
              <div className="service-info">
                <p>{props.items.subtitle}</p>
                <h3>Soluciones {props.items.title}</h3>
                <p>
                  {props.items.completeDescription}
                  {props.items.parcialDescription}
                </p>
                <a href="#Services">
                  <button className="service-info-button" data-active="1">
                    Más Información
                  </button>
                </a>
              </div>
            </div>
          );
        } else if (sec === 0) {
          return (
            <div className="service" id={props.items.title}>
              <div className="service-info">
                <p>{props.items.subtitle}</p>
                <h3>Soluciones {props.items.title}</h3>
                <p>
                  {props.items.completeDescription}
                  {props.items.parcialDescription}
                </p>
                <a href="#Services">
                  <button className="service-info-button" data-active="1">
                    Más Información
                  </button>
                </a>
              </div>

              <a href="#Services" data-active="1">
                {props.items.image && (
                  <img
                    src={props.items.image.url}
                    className="w-full h-96 object-cover"
                  />
                )}
              </a>
            </div>
          );
        }
      })()}
    </>
  );
}

export default Card;

{
  /* <div className="service" id={props.items.title}>
      <a href="#Services" data-active="1">
      {props.items.image && <img src={props.items.image.url} className="w-full h-96 object-cover"/>}
      </a>
      <div className="service-info">
        <p>{props.items.subtitle}</p>
        <h3>Soluciones {props.items.title}</h3>
        <p>
          {props.items.completeDescription}
          {props.items.parcialDescription}
        </p>
        <a href="#Services">
          <button
            className="service-info-button"
            data-active="1"
          >
            Más Información
          </button>
        </a>
      </div>
    </div> */
}
