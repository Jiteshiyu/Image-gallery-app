import { useState } from "react";
import ImageGrid from "./ImageGrid.jsx";
import Uploader from "./Uploader.jsx";

export default function Gallery() {
  const [images, setImages] = useState([
    // Initial set of images (URLs)
    "../bird.jpg",
    "../mountain.jpg",
    "../bear.jpg",
  ]);

  const addImage = (url) => {
    setImages([...images, url]);
  };

  return (
    <div>
      <Uploader addImage={addImage} />
      <ImageGrid images={images} />
    </div>
  );
}
