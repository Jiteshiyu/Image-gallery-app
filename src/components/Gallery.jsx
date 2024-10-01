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
      {/* Component for uploading images */}
      <Uploader addImage={addImage} />
      {/* Component to display the grid of images */}
      <ImageGrid images={images} />
    </div>
  );
}
