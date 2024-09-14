import React, { useState } from "react";
import "./GalleryPage.css";
import GalleryLoader from "../../components/GalleryLoading/GalleryLoader";

const GalleryPage = () => {
  const images = require.context("../../common/images/gallery-assets", true);
  const imageList = images.keys().map((image) => images(image));
  const [loaded, setLoaded] = useState(1);
  const handleImageLoad = () => {
    setLoaded((prevCount) => prevCount + 1);
  };
  document.title = "Portfolio | Gallery";
  console.log(loaded);
  return (
    <div>
      {loaded !== imageList.length && <GalleryLoader value={loaded} />}
      <div className="gallery-img-container">
        <div className="gallerypage-heading">
          <h1>Gallery</h1>
        </div>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index}`}
            className="gallery-img"
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
