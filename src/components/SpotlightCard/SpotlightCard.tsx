import React from "react";
import "./SpotlightCard.scss";
import TextLink from "../TextLink";

export interface SpotlightCardProps {
    title: string;
    imageSource?: string;
    imageAltText?: string;
    subtitle?: string;
    description?: string;
    textLink?: string;
    // TODO add CTA button when access to CFA repo is granted
}

const SpotlightCard = (props: SpotlightCardProps) => {
    return (
      <div className='spotlight-card mt mb'>
        <div className='spotlight-card__img-container'>
            <img src={props.imageSource} alt={props.imageAltText}/>
        </div>
        <div className='spotlight-card__content-container'>
            <div className="spotlight-card__content">
                <h1 className="spotlight-card__content-title spotlight-card__content-title--primaryRed" data-epi-edit="Title">
                    {props.title}
                </h1>
                <h2 className="spotlight-card__content">
                    {props.subtitle}
                </h2>
                <p className="spotlight-card__content">
                    {props.description}
                </p>
            </div>

            
        </div>
      </div>
    );
  };
  
  export default SpotlightCard;