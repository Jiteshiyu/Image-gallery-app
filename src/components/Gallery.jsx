import { useState } from "react";
import ImageGrid from "./ImageGrid.jsx";
import Uploader from "./Uploader.jsx";

export default function Gallery() {
  // State to hold the array of image URLs
  const [images, setImages] = useState([
    "../bird.jpg",
    "../mountain.jpg",
    "../bear.jpg",
  ]);

  // Function to add a new image URL to the state
  const addImage = (url) => {
    setImages([...images, url]);
  };

  return (
    <div>
      <Uploader addImage={addImage} /> {/* Component for uploading images */}
      <ImageGrid images={images} /> {/* Component to display the grid of images */}
    </div>
  );
}
