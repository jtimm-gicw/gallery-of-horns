
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

/* eslint-disable react/prop-types */
import React from 'react';

function HornedBeast({ title, imageUrl, description, likes, onLike, onClick }) {
  return (
    <div className="beast-card" onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #cccw', padding: '10px', borderRadius: '8px' }}>
    <h2>{title}</h2>
    <img src={imageUrl}   alt={description}  style={{ width: '20%'}} />
    <p>{description}</p>
    <button onClick={(e) => {e.stopPropagation(); onLike(); }}> ❤️{likes} </button>
    </div>
  );
}

export default HornedBeast;