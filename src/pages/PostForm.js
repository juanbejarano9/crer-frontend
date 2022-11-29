import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { usePosts } from "../context/postContext";

import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export function PostForm() {
  const { createPost } = usePosts();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h1 className="fs-1 fw-bold text-white p-5">Editar Post</h1>
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          completeDescription: "",
          parcialDescription: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("El titulo es requerido"),
          subtitle: Yup.string().required("El subtitulo es requerido"),
          completeDescription: Yup.string().required(
            "La Descripción Completa es requerida"
          ),
          parcialDescription: Yup.string().required(
            "La Descripcion Parcial es requerida"
          ),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="card w-50 m-auto rounded-4 bg-third-color">
            <div className="card-body text-center">
            <h4 class="card-title text-white">Post</h4>
              <ul className="list-group list-group-flush d-flex align-items-center">
                <li className="list-group-item bg-secondary-color rounded-3 my-2 w-75">
                  <Field className="w-100" name="title" placeholder="Titulo" />
                  <ErrorMessage
                    component="p"
                    className="text-danger"
                    name="title"
                  />
                </li>
                <li className="list-group-item bg-secondary-color rounded-3 my-2 w-75">
                  <Field className="w-100" name="subtitle" placeholder="Subtitulo" />
                  <ErrorMessage
                    component="p"
                    className="text-danger"
                    name="subtitle"
                  />
                </li>
                <li className="list-group-item bg-secondary-color rounded-3 my-2 w-75">
                  <Field
                    as="textarea"
                    className="w-100"
                    rows="4"
                    name="completeDescription"
                    placeholder="Descripción Completa"
                  />
                  <ErrorMessage
                    component="p"
                    className="text-danger"
                    name="completeDescription"
                  />
                </li>
                <li className="list-group-item bg-secondary-color rounded-3 my-2 w-75">
                  <Field
                    as="textarea"
                    className="w-100"
                    rows="3"
                    name="parcialDescription"
                    placeholder="Descripcion Parcial"
                  />
                  <ErrorMessage
                    component="p"
                    className="text-danger"
                    name="parcialDescription"
                  />
                </li>
              </ul>

              <div className=" d-flex justify-content-around">
                <Link to="/dashboard" className="btn btn-warning">Atrás</Link>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Contact />
      <Footer />
    </div>
  );
}

export default PostForm;
