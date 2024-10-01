import { useState } from "react";

export default function Uploader({ addImage }) {
  // State to hold the image URL
  const [imageUrl, setImageUrl] = useState("");

  // Function to handle image upload
  const updateImages = (event) => {
    event.preventDefault();
    if (!imageUrl) return;
    addImage(imageUrl);
    setImageUrl("");
  };

  return (
    // Form for uploading images
    <form onSubmit={updateImages} className="upload-form">
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        // Update state on input change
        className="searchbox"
      />
      {/* Button to submit the form */}
      <button className="submit-btn">Upload Image</button>
    </form>
  );
}
