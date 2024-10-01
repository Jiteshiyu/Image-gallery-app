export default function ImageItem({ image }) {
  return (
    <div>
      {/* Displaying the image */}
      <img src={image} alt="gallery-image" className="img-item" />
    </div>
  );
}
