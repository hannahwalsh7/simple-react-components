import React from "react";
import "./TeamMemberProfileImage.scss";

export interface TeamMemberProfileImageProps {
  teamMemberImage: string;
  teamMemberAltText?: string;
}

const TeamMemberProfileImage = (props: TeamMemberProfileImageProps) => {
  return (
    <div className="team-member-profile-image">
      <img className="team-member-profile-image__img" src={props.teamMemberImage} alt={props.teamMemberAltText}/> 
    </div>
  );
};

export default TeamMemberProfileImage;