import React, { useState, useEffect } from "react";
import "./SpotlightCard.scss";
import TextLink from "../TextLink";

export interface SpotlightCardProps {
    title: string;
    image?: string;
    imageAltText?: string;
    subtitle?: string;
    description?: string;
    linkUrl?: string;
    linkText?: string;
    halfWidth?: boolean;
    // TODO add CTA button when access to CFA repo is granted
}

const SpotlightCard = (props: SpotlightCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const [description, setDescription] =  useState('');
    const [showReadToggle, setShowReadToggle] = useState(false);
    const [readToggleText, setReadToggleText] = useState('');

    const substringLength = 385;
    const desktop = window.innerHeight >= 768 && window.innerWidth >= 768;
    const halfWidth = props.halfWidth !== undefined || desktop ? props.halfWidth : false;

    useEffect(() => {
        if(props.description !== undefined){
            let description = '';
            let showReadToggle = false;
            let readToggleText = '';

            if(expanded) {
                description = props.description;
                if(props.description.length > substringLength){
                    showReadToggle = true;
                    readToggleText = 'Read Less';
                }
            } else {
                description = props.description.substring(0,substringLength);
                if(props.description.length > substringLength){
                    description += '...';
                    showReadToggle = true;
                    readToggleText = 'Read More';
                }
            }

            setDescription(description);
            setShowReadToggle(showReadToggle);
            setReadToggleText(readToggleText);
        }
    }, [expanded])
    
    return (
      <div className={`spotlight-card mt mb ${halfWidth ? 'spotlight-card-half-width' : 'spotlight-card-regular'}`}>
        <div className={`spotlight-card__img-container ${halfWidth ? 'spotlight-card__img-container-half-width' : 'spotlight-card__img-container-regular'}`}>
            <img src={props.image} alt={props.imageAltText}/>
        </div>
        <div className={`spotlight-card__content-container ${halfWidth ? 'spotlight-card__content-container-half-width' : 'spotlight-card__content-container-regular'}`}>
            <div className="spotlight-card__content">
                <h1 className="spotlight-card__content-title" data-epi-edit="Title">
                    {props.title}
                </h1>
                <h2 className="spotlight-card__content">
                    {props.subtitle}
                </h2>
                {props.description !== undefined ? 
                    <>
                        <p className={`spotlight-card__content spotlight-card__content-p ${halfWidth ? 'spotlight-card__content-p-half-width' : 'spotlight-card__content-p-regular'}`}>
                            {description} {showReadToggle ? <a onClick={() => setExpanded(!expanded)}>{readToggleText}</a> : null }
                        </p> 
                    </>
                :null}
                {props.linkUrl && props.linkText ? <TextLink linkUrl={props.linkUrl} linkText={props.linkText}/> : null}
            </div>
        </div>
      </div>
    );
  };
  
  export default SpotlightCard;