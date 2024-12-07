import React from 'react';
import './Card.css';

// Assign each image a unique variable name
import deleteLogo from '../assest/Delete.png';
import likeLogo from '../assest/Like.png';
import dislikeLogo from '../assest/dislike.png';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} className="card-image" />
      <div className="card-content">
        <h3>{movie.title}</h3>
        <p>{`${movie.year} - ${movie.duration} - ${movie.genre}`}</p>
        <p className="description">{movie.description}</p>
        <div className="card-actions">
          <button className="like-btn">
            <img src={likeLogo} alt="like" />
          </button>
          <button className="dislike-btn">
            <img src={dislikeLogo} alt="dislike" />
          </button>
          <button className="delete-btn">
            <img src={deleteLogo} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
