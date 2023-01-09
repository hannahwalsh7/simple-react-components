import React from "react";
import "./BasicImage.scss";

export interface BasicImageProps {
  image: string;
  imageAltText?: string;
}

const BasicImage = (props: BasicImageProps) => {
  return (
    <div className="basic-image">
      <img src={props.image} alt={props.imageAltText} />
    </div>
  );
};

export default BasicImage;