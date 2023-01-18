import React, { useState, useEffect } from "react";
import "./SpotlightCard.scss";
import TextLink from "../TextLink";
import TeamMemberProfileImage from "../TeamMemberProfileImage";

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
      <div className={`spotlight-card mt mb ${props.halfWidth ? 'spotlight-card-half-width' : ''}`}>
        {/* <div className={`spotlight-card__img-container ${props.halfWidth ? 'spotlight-card__img-container-half-width' : ''}`} id='img-container'> */}
        <div className='spotlight-card__img-container' id='container'>
            {props.image ? <TeamMemberProfileImage teamMemberImage={props.image}/> : null}
        </div>
        {/* <div className={`spotlight-card__content-container ${props.halfWidth ? 'spotlight-card__content-container-half-width' : ''}`} id='container'> */}
        <div className='spotlight-card__content-container' id='container'>
            <div className="spotlight-card__content">
                <h2 className="spotlight-card__content-title" data-epi-edit="Title">
                    {props.title}
                </h2>
                <h3>
                    {props.subtitle}
                </h3>
                {props.description !== undefined ? 
                    <>
                        {/* <p className={`spotlight-card__content spotlight-card__content-p ${props.halfWidth ? 'spotlight-card__content-p-half-width' : ''}`}> */}
                        <p className='spotlight-card__content spotlight-card__content-p' id='content-p'>
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