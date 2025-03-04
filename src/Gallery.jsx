//The Gallery component needs to render at least two copies of a component called HornedBeast.
//The Gallery component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.
import HornedBeast from './HornedBeast';
import {useState} from 'react';
import React from 'react';

function Gallery() {
  const [likes, setLikes] = useState([0, 0]); // One counter per image

  const handleLike = (index) => {
    console.log(`Image ${index} clicked`); 
    const newLikes = [...likes]; // Create a copy of the current likes array
    newLikes[index] += 1; // Increment the like count at the correct index
    setLikes(newLikes); // Update the state
  };

  return (
    <>
      <HornedBeast 
        title="UniWhal" 
        imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
        description="A unicorn and a narwhal nuzzling their horns" 
        likes={likes[0]} 
        onLike={() => handleLike(0)} // Pass a function specific to this beast
      />
      <HornedBeast 
        title="Rhino Family" 
        imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" 
        description="Parent rhino with two babies" 
        likes={likes[1]} 
        onLike={() => handleLike(1)} // Pass a function specific to this beast
      />
    </>
  );
}

export default Gallery;