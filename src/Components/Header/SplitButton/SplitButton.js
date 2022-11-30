import React from "react";
import "./SplitButton.css";
import { Link } from "react-router-dom";

import { usePosts } from "../../../context/postContext";

function SplitButton(props) {

  const { posts } = usePosts();

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
          <Link
            to={"/dashboard"}
            className="dropdown-item disabled"
          >
            Dashboard
          </Link>
        </li>
        
        
        <li>
          <hr className="dropdown-divider" />
        </li>
        
        {posts.map((post) => (
          <li key={post._id} className="dropdown-item">
            <a href="" className="text-black text-decoration-none">{post.title}</a>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default SplitButton;
