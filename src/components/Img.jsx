import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ alt, src, className }) => {
  return (
    <div>
      <LazyLoadImage alt={alt} src={src} className={className || ""} />
    </div>
  );
};

export default Img;
