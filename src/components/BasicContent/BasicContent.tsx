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
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const backgroundColor = props.backgroundColor !== undefined ? props.backgroundColor : 'bg-white';
    const title = props.title !== undefined ? props.title : 'Content Header';
    const subtitle = props.subtitle !== undefined ? props.subtitle : loremIpsum;
    const subsectionHeader = props.subsectionHeader !== undefined ? props.subsectionHeader : loremIpsum;
    const subsectionDescription = props.subsectionDescription !== undefined ? props.subsectionDescription : loremIpsum;

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
                    <h2 className='basic-content-content-styling'>{title}</h2>
                    <p className='basic-content-content-styling'>{subtitle}</p>
                    <h3 className='basic-content-content-styling'>{subsectionHeader}</h3>
                    <p className='basic-content-content-styling'>{subsectionDescription}</p>
                    
                    {props.CTAlabel ? 
                        <div className='basic-content-content-styling'>
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
