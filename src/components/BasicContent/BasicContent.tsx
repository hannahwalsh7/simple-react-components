import React from "react";
import "./BasicContent.scss";
import Button from "../Button";
import BasicImage from "../BasicImage";
import BasicVideo from "../BasicVideo";

export interface BasicContentProps {
    // basic CMS fields
    backgroundColor?: string;
    title?: string;
    subtitle?: string;
    subsectionHeader?: string;
    subsectionDescription?: string;
    // image CMS fields
    image?: string;
    imageAltText?: string;
    // video CMS fields
    video?: string; // video embedId
    videoTitle?: string;
    controls?: boolean;
    autoplay?: boolean;
    videoClosedCaptions?: string; // CC lang pref
    ccLoad?: boolean;
    // button CMS fields - TODO replace with CTA button fields
    CTAlabel?: string;
    CTAtype?: string;
    CTAcolor?: string;
    CTAurl?: string;
    // icon list CMS fields
    // TODO add once icon list atom is finished
}

const BasicContent = (props: BasicContentProps) => {
    const backgroundColor = props.backgroundColor !== undefined ? props.backgroundColor : 'bg-white';
    
    return (
        <div className={`basic-content ${backgroundColor}`}>
            {props.video ? 
                <div className='basic-content-video'>
                    <BasicVideo 
                        embedId={props.video}
                        videoTitle={props.videoTitle}
                        controls={props.controls}
                        autoplay={props.autoplay}
                        ccLanguagePreference={props.videoClosedCaptions}
                        ccLoad={props.ccLoad}
                    />
                </div>
            : null}

            <div className='basic-content-container'>
                {props.image ? 
                    <div className='basic-content-img'>
                        <BasicImage 
                            image={props.image}
                            imageAltText={props.imageAltText}
                        />
                    </div>
                : null}

                <div className='basic-content-content'>
                    {props.title!==undefined ? <h2 className='basic-content-content-styling'>{props.title}</h2> : null}
                    {props.subtitle!==undefined ? <p className='basic-content-content-styling'>{props.subtitle}</p> :  null}
                    {props.subsectionHeader!==undefined ? <h3 className='basic-content-content-styling'>{props.subsectionHeader}</h3> : null}
                    {props.subsectionDescription!==undefined ? <p className='basic-content-content-styling'>{props.subsectionDescription}</p> : null}
                    
                    {props.CTAlabel ? 
                        <div className='basic-content-content-styling basic-content-cta'>
                            {/* NOTE: default styling is incorrect per AC, will be fixed when we use the CTA component */}
                            <Button 
                                label={props.CTAlabel} 
                                type={props.CTAtype} 
                                color={props.CTAcolor} 
                                url={props.CTAurl}
                            />
                        </div>
                    : null}
                </div>
            </div>
        </div>
    );
};

export default BasicContent;
