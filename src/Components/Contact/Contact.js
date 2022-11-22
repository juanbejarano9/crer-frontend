import React from "react";
import "./Contact.css";

function Contact(props) {
  let widthResponsive = "w-50";

  if (props.width < 768 && props.width > 576) {
    widthResponsive = "w-75";
  } else if (props.width < 576) {
    widthResponsive = "w-100";
  }

  return (
    <>
      <div className="p-2 px-3 my-3" id="Contact">
        <div
          className={"bg-third-color p-2 rounded-4 m-auto " + widthResponsive}
        >
          <h3 className="text-white bg-secondary-color p-2 text-center rounded">
            Contacto
          </h3>

          <form action="" className="contact">
            <fieldset className="contact-form bg-secondary-color">
              <div className="bg-third-color text-white">
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" placeholder="Tu nombre" />
              </div>
              <div className="bg-third-color text-white">
                <label htmlFor="">Teléfono</label>
                <input type="tel" placeholder="Tu telefono" />
              </div>
              <div className="bg-third-color text-white">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Tu email" />
              </div>
              <div className="bg-third-color text-white">
                <label htmlFor="">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="bg-third-color text-white">
                <input type="submit" value="Enviar" />
              </div>
            </fieldset>
          </form>

          <a
            href="#Contact"
            className="btn btn-primary d-flex disabled justify-content-center my-2 bg-secondary-color"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            info@crersolucionestecno.com.ar
          </a>
          <a
            href="#Contact"
            className="btn btn-primary disabled d-flex justify-content-center bg-secondary-color"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            +54 9 388 437-3341
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
