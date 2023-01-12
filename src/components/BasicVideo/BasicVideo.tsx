import React from "react";
import "./BasicVideo.scss";

export interface BasicVideoProps {
  embedId: string;
  videoTitle?: string;
  controls?: boolean;
  autoplay?: boolean;
  ccLanguagePreference?: string;
  ccLoad?: boolean;
};

const BasicVideo = (props: BasicVideoProps) => {  
  if(props.embedId === undefined || props.embedId==='') {
    throw new Error('Must provide a valid embed id.');
  }

  const ccLanguagePreference = props.ccLanguagePreference ? props.ccLanguagePreference : 'en';
  const hl = props.ccLanguagePreference ? props.ccLanguagePreference : 'en';

  let controls = '1';
  if(props.controls !== undefined && !props.controls){
    controls = '0';
  }
  
  let autoplay = '0';
  let mute = '0';
  if(props.autoplay !== undefined && props.autoplay){
    autoplay = '1';
    mute = '1';
  }

  let ccLoad = '0';
  if(props.ccLoad !== undefined && props.ccLoad){
    ccLoad = '1';
  }

  let videoSource: string = `https://www.youtube.com/embed/${props.embedId}?controls=${controls}&autoplay=${autoplay}&mute=${mute}&cc_lang_pref=${ccLanguagePreference}&hl=${hl}&cc_load_policy=${ccLoad}`;

  return (
    <div className="basic-video">
      <iframe
        src={videoSource}
        title={props.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        >
      </iframe>
    </div>
  );
};

export default BasicVideo;