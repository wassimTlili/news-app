import React from 'react';
import image from '../image.png'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 mx-3" style={{ maxWidth: "345px", minHeight: "450px", borderRadius: "10px", display: "inline-block", verticalAlign: "top" }}>
      <img 
        src={src?src:image } 
        style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} 
        className="card-img-top" 
        alt="News" 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" style={{ maxWidth: "320px" }}>{title.slice(0, 50)}{title.length > 50 ? "..." : ""}</h5>
        <p className="card-text text-truncate" style={{ maxWidth: "320px" }}>{description ? description.slice(0, 90) : ""}{description && description.length > 90 ? "..." : ""}</p>
        <a href={url} className="btn btn-primary mt-auto" style={{ borderRadius: "20px" }}>Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
