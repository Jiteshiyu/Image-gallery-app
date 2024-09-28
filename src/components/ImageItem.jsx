export default function ImageItem({ image }) {
  return (
    <div> {/* Container for the image item */}
      <img src={image} alt="gallery-image" className="img-item" /> {/* Displaying the image */}
    </div>
  );
}
