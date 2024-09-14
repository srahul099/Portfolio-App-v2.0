import React, { useState } from "react";
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
import Loader from "../../components/Loader/Loader";

const GalleryPage = () => {
  const [loaded, setLoaded] = useState(0);
  document.title = "Portfolio | Gallery";
  return (
    <div>
      {loaded != 24 && <Loader />}
      <div className="gallery-img-container">
        <div className="gallerypage-heading">
          <h1>Gallery</h1>
        </div>
        <img src={alanwalker} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={bayern} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={drs} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={harvey} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={monster} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={marsh} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={psg} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={psg2} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={statue} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={tanjiro} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={thanos} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={beks} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={united} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={stillwerise} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={vineeth} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={f1blender} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={barca} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={chelsea} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={blender1} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={blender2} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={blender3} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={blender4} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={kakashi} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={naruto} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={pendu} alt="" onLoad={() => setLoaded(loaded + 1)} />
        <img src={pendu2} alt="" onLoad={() => setLoaded(loaded + 1)} />
      </div>
    </div>
  );
};

export default GalleryPage;
