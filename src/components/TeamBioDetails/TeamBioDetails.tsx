import React from "react";
import "./TeamBioDetails.scss";
import TeamBio from "../TeamBio";
import RuleDivider from "../RuleDivider";
import TeamBioList from "../TeamBioList"

export interface TeamBioDetailsProps {
  teamMemberImage: string;
  teamMemberName: string;
  teamMemberTitle?: string;
  teamMemberDescription?: string;

  removeEmail?: boolean;
  email?: string;

  removePhone?: boolean;
  phone?: string;

  removeFavoriteFood?: boolean;
  favoriteFood?: string;

  removeFavoriteThings?: boolean;
  favoriteThings?: string;
}

const TeamBioDetails = (props: TeamBioDetailsProps) => {
  return (
    <div className="team-bio-details">
      <TeamBio teamMemberImage={props.teamMemberImage} teamMemberName={props.teamMemberName} teamMemberTitle={props.teamMemberTitle} useLink={false} />
      <p className="team-bio-details__team-member-description">{props.teamMemberDescription}</p>
      <RuleDivider color={"secondaryBlue"} />
      <TeamBioList removeTeamBioListItem1={props.removeEmail} emailLinkText={props.email} removeTeamBioListItem2={props.removePhone} phoneLinkText={props.phone} removeTeamBioListItem3={props.removeFavoriteFood} favoriteFoodText={props.favoriteFood} removeTeamBioListItem4={props.removeFavoriteThings} favoriteThingsText={props.favoriteThings} />
    </div>
  );
};

export default TeamBioDetails;