import React, { useState, useEffect } from "react";
import "./SpotlightCard.scss";
import TextLink from "../TextLink";

export interface SpotlightCardProps {
    title: string;
    imageSource?: string;
    imageAltText?: string;
    subtitle?: string;
    description?: string;
    textLink?: string;
    halfWidth?: boolean;
    // TODO add CTA button when access to CFA repo is granted
}

const SpotlightCard = (props: SpotlightCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const [description, setDescription] =  useState('');
    const [showReadToggle, setShowReadToggle] = useState(false);
    const [readToggleText, setReadToggleText] = useState('');

    const textLinkText = 'Meet the Leadership Team';
    const substringLength = 385;
    const mobile = window.innerHeight <= 767 && window.innerWidth <= 767;
    const halfWidth = props.halfWidth !== undefined && !mobile ? props.halfWidth : false;

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
      <div className= {'spotlight-card mt mb ' + (halfWidth ? 'spotlight-card-half-width' : '')}>
        <div className={'spotlight-card__img-container ' + (halfWidth ? 'spotlight-card__img-container-half-width' : '')}>
            <img src={props.imageSource} alt={props.imageAltText}/>
        </div>
        <div className={'spotlight-card__content-container ' + (halfWidth ? 'spotlight-card__content-container-half-width' : '')}>
            <div className="spotlight-card__content">
                <h1 className="spotlight-card__content-title spotlight-card__content-title--primaryRed" data-epi-edit="Title">
                    {props.title}
                </h1>
                <h2 className="spotlight-card__content">
                    {props.subtitle}
                </h2>
                {props.description !== undefined ? 
                    <>
                        <p className={'spotlight-card__content spotlight-card__content-p ' + (halfWidth ? 'spotlight-card__content-p-half-width' : '')}>
                            {description} {showReadToggle ? <a onClick={() => setExpanded(!expanded)}>{readToggleText}</a> : null }
                        </p> 
                        <br/>
                    </>
                :null}
                {props.textLink ? <TextLink linkUrl={props.textLink} linkText={textLinkText}/> : null}
            </div>
        </div>
      </div>
    );
  };
  
  export default SpotlightCard;