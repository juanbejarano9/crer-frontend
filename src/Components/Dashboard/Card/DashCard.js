import React from "react";
import "./DashCard.css";
import { toast } from "react-hot-toast";
import { usePosts } from "../../../context/postContext";

function DashCard(props) {
  const { deletePost } = usePosts();

  const handleDelete = (id) => {
    toast((t) => (
      <div style={{ width: "300px" }}>
        <p className="text-center">
          Quieres eliminar el Post? <strong>{id}</strong>
        </p>
        <div className="d-flex w-100 justify-content-between">
          <button className="btn btn-danger" onClick={() => {
            deletePost(id)
            toast.dismiss(t.id)
          }
          }
          >
            Eliminar
          </button>
          <button
            className="btn btn-main-color"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="card">
      <div className="card-body">
        {/* <div>{props.post.title}</div> */}
        <h5 className="card-title">{props.post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.post.subtitle}</h6>
        <ul className="list-group list-group-flush ">
          <l1 className="list-group-item">{props.post.completeDescription}</l1>
          <l1 className="list-group-item">{props.post.parcialDescription}</l1>
          <l1 className="list-group-item dashCard">
            {props.post.image && (
              <img
                src={props.post.image.url}
                className="w-full h-96 object-cover dashCard"
              />
            )}
          </l1>
        </ul>
        <div className="d-flex justify-content-evenly">
          <button type="button" class="btn btn-success">
            Editar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => handleDelete(props.post._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashCard;
