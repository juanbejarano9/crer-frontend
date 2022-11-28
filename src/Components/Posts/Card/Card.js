import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props.dimmensions);
  /* console.log(props.items.index); */

  let sec;
  props.num % 2 ? (sec = 0) : (sec = 1);

  return (
    <>
      {(() => {
        //Tarjetas Grandes
        if (sec === 1 && props.dimmensions.width >= 768) {
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
        } else if (sec === 0 && props.dimmensions.width >= 768) {
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

        //Tarjetas del Medio
        if (props.dimmensions.width < 768 && props.dimmensions.width > 576) {
          return (
            <div id="Services">
              <div id={props.items.title}>
                <div className="card border-0">
                  {props.items.image && (
                    <img
                      src={props.items.image.url}
                      className="w-full h-96 object-cover"
                    />
                  )}
                  <div className="card-body serviceCardMedium ">
                    <h4 className="card-title text-white">
                      {props.items.title}
                    </h4>
                    <p className="card-text">
                      {props.items.completeDescription}
                    </p>
                    <a href="#Services" className="btn btn-secondary-color">
                      Ver Más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (props.dimmensions.width < 576) {
          return (
            <div
              className="row row-cols-sm-2 row-cols-md-4 g-4 m-0"
              id="Services"
            >
              <div className="card accordionBorder p-0" id={props.items.title}>
                {props.items.image && (
                  <img
                    src={props.items.image.url}
                    className="w-full h-96 object-cover"
                  />
                )}
                <div className="accordion " id="accordionPanelsStayOpenExample">
                  <div className="accordion-item accordionBorder">
                    <h2
                      className="accordion-header "
                      id={`panelsStayOpen-heading${props.num}`}
                    >
                      <button
                        className="accordion-button collapsed accordionBackground accordionRadius"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${props.num}`}
                        aria-expanded="false"
                        aria-controls={`panelsStayOpen-collapse${props.num}`}
                      >
                        <h5 className="card-title text-white ">
                          {props.items.title}
                        </h5>
                      </button>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse${props.num}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`panelsStayOpen-heading${props.num}`}
                    >
                      <div className="accordion-body">
                        {props.items.completeDescription}
                      </div>
                      <a
                        className="btn btn-secondary-color d-flex justify-content-center m-2 text-dark-color"
                        href="#Init"
                        role="button"
                      >
                        Ver Más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
