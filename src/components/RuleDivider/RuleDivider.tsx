import React from "react";
import "./RuleDivider.scss";

export interface RuleDividerProps {
  color?: string;
}

const RuleDivider = (props: RuleDividerProps) => {
  return (
    <div className={`rule-divider ${props.color ? 'rule-divider--' + props.color : ''}`}> </div>
  );
};

export default RuleDivider;