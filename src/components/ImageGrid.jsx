import ImageItem from "./ImageItem.jsx";

export default function ImageGrid({ images }) {
  return (
    // Container for the image grid
    <div className="img-grid">
      {images.map((img, index) => (
        // Render each ImageItem component
        <ImageItem key={index} image={img} />
      ))}
    </div>
  );
}
