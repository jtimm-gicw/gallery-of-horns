
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

/* eslint-disable react/prop-types */

function HornedBeast({ title, imageUrl, description, likes, onLike }) {
  return (
    <div>
      <h2>{title}</h2>
      <img 
        src={imageUrl} 
        alt={description} 
        onClick={onLike} 
        style={{ cursor: 'pointer', width: '300px' }}
      />
      <p>{description}</p>
      <p>❤️ Likes: {likes}</p>
    </div>
  );
}

export default HornedBeast;