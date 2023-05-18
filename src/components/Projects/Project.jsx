import React from "react";

const Project = ({ data }) => {
  const { image, title, category } = data;
  return (
    <div className="project-card">
      <img src={image} alt="" className="project-img" />
      <h3 className="project-title">{title}</h3>
      <a href="#" className="project-button">
        Demo <i className="bx bx-right-arrow-alt project-button-icon"></i>
      </a>
    </div>
  );
};

export default Project;
