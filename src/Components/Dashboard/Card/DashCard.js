import React from "react";
import "./DashCard.css";

function DashCard(props) {
  console.log(props);

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
          <button type="button" class="btn btn-danger">
            Eliminar
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default DashCard;
