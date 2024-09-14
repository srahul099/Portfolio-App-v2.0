import React from "react";
import "./GalleryPage.css";
import alanwalker from "../../common/images/gallery-assets/alan walker.jpg";
import bayern from "../../common/images/gallery-assets/bayern jersey.png";
import drs from "../../common/images/gallery-assets/DRS.png";
import harvey from "../../common/images/gallery-assets/harvy.jpg";
import monster from "../../common/images/gallery-assets/M0NSTER.jpg";
import marsh from "../../common/images/gallery-assets/marshmello colour.png";
import psg from "../../common/images/gallery-assets/psg jersey png.png";
import psg2 from "../../common/images/gallery-assets/psg1.png";
import statue from "../../common/images/gallery-assets/statue edit.png";
import tanjiro from "../../common/images/gallery-assets/tanjiro 2.png";
import thanos from "../../common/images/gallery-assets/thanos final.png";
import beks from "../../common/images/gallery-assets/tried something with grad maps.png";
import united from "../../common/images/gallery-assets/United jeersey 2.2.png";
import vineeth from "../../common/images/gallery-assets/vineeth1.jpg";
import stillwerise from "../../common/images/gallery-assets/Picsart_22-10-02_16-42-33-788.jpg";
import f1blender from "../../common/images/gallery-assets/f1 2.png";
import barca from "../../common/images/gallery-assets/barca concept 1.png";
import chelsea from "../../common/images/gallery-assets/chelsea.png";
import blender1 from "../../common/images/gallery-assets/final render 1.png";
import blender2 from "../../common/images/gallery-assets/final render 2.png";
import blender3 from "../../common/images/gallery-assets/final render 3 (1).png";
import blender4 from "../../common/images/gallery-assets/final render 4.png";
import kakashi from "../../common/images/gallery-assets/kakashi post (1).png";
import naruto from "../../common/images/gallery-assets/naruto.png";
import pendu from "../../common/images/gallery-assets/ronaldo 2 (2).png";
import pendu2 from "../../common/images/gallery-assets/ten hag edit2.png";

const GalleryPage = () => {
  document.title = "Portfolio | Gallery";
  return (
    <div className="gallery-container">
      <div className="gallerypage-heading">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-img-container">
        <img src={alanwalker} alt="" />
        <img src={bayern} alt="" />
        <img src={drs} alt="" />
        <img src={harvey} alt="" />
        <img src={monster} alt="" />
        <img src={marsh} alt="" />
        <img src={psg} alt="" />
        <img src={psg2} alt="" />
        <img src={statue} alt="" />
        <img src={tanjiro} alt="" />
        <img src={thanos} alt="" />
        <img src={beks} alt="" />
        <img src={united} alt="" />
        <img src={stillwerise} alt="" />
        <img src={vineeth} alt="" />
        <img src={f1blender} alt="" />
        <img src={barca} alt="" />
        <img src={chelsea} alt="" />
        <img src={blender1} alt="" />
        <img src={blender2} alt="" />
        <img src={blender3} alt="" />
        <img src={blender4} alt="" />
        <img src={kakashi} alt="" />
        <img src={naruto} alt="" />
        <img src={pendu} alt="" />
        <img src={pendu2} alt="" />
      </div>
    </div>
  );
};

export default GalleryPage;
