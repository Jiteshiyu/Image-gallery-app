import ImageItem from "./ImageItem.jsx";

export default function ImageGrid({ images }) {
  return (
    <div className="img-grid">
      {images.map((img, index) => (
        <ImageItem key={index} image={img} />
      ))}
    </div>
  );
}
