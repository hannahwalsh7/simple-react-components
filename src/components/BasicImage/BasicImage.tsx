import React from "react";
import "./BasicImage.scss";

export interface BasicImageProps {
  image?: string;
  imageAltText?: string;
}

const BasicImage = (props: BasicImageProps) => {
  return (
    <div className="basic-image">
      {props.image ? <img src={props.image} alt={props.imageAltText} title={props.imageAltText} /> : ''}
    </div>
  );
};

export default BasicImage;