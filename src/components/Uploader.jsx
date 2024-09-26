import { useState } from "react";

export default function Uploader({ addImage }) {
  const [imageUrl, setImageUrl] = useState("");

  const updateImages = (event) => {
    event.preventDefault();
    if (!imageUrl) return;
    addImage(imageUrl);
    setImageUrl("");
  };

  return (
    <form onSubmit={updateImages} className="upload-form">
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        className="searchbox"
      />
      <button className="submit-btn">Upload Image</button>
    </form>
  );
}
