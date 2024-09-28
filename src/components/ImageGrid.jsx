import ImageItem from "./ImageItem.jsx";

export default function ImageGrid({ images }) {
  return (
    <div className="img-grid"> {/* Container for the image grid */}
      {images.map((img, index) => (
        <ImageItem key={index} image={img} /> // Render each ImageItem component
      ))}
    </div>
  );
}
