//The Gallery component needs to render at least two copies of a component called HornedBeast.
//The Gallery component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.
import HornedBeast from './HornedBeast';
import {useState} from 'react';

function Gallery({ data, setSelectedBeast }) {
  const [likes, setLikes] = useState(Array(data.length).fill(0)); // One counter per image

  const handleLike = (index) => {
    console.log(`Image ${index} clicked`); 
    const newLikes = [...likes]; // Create a copy of the current likes array
    newLikes[index] += 1; // Increment the like count at the correct index
    setLikes(newLikes); // Update the state
  };

  return (
   <div className="gallery">
    {data.map((beast, index) => (
      <HornedBeast 
      key={index}
      title={beast.title}
      imageUrl={beast.image_url}
      description={beast.description}
      likes={likes[index]}
      onLike={() => handleLike(index)}
      onClick={() => setSelectedBeast(beast)}
      />
    ))}
   </div>
  );
}

export default Gallery;