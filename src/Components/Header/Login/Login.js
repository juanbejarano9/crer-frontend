import React from "react";

function Login() {
  return (
    <div className="ms-3">
      <button
        type="button"
        className="bg-secondary-color border-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-user-circle"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="10" r="3" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content border border-2 border-main-color rounded-3">
            <div class="modal-header bg-main-color border-0">
              <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
                Login - Soporte
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-secondary-color text-white p-0">
              <form action="">
                <div className="p-4">
                  <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Juan Bejarano"
                    />
                  </div>

                  <div>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input
                      type="password"
                      id="contraseña"
                      name="contraseña"
                      placeholder="Juan Bejarano"
                    />
                  </div>
                </div>

                <div class="modal-footer bg-main-color border-0">
                  <button
                    type="button"
                    class="btn btn-secondary bg-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="submit" class="btn btn-third-color">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
