import React from "react";
import "./TeamBioList.scss";
import TeamBioListItem from "../TeamBioListItem";

export interface TeamBioListProps {
  removeTeamBioListItem1?: boolean;
  emailLinkText?: string;

  removeTeamBioListItem2?: boolean;
  phoneLinkText?: string;

  removeTeamBioListItem3?: boolean;
  favoriteFoodText?: string;

  removeTeamBioListItem4?: boolean;
  favoriteThingsText?: string;
}

const TeamBioList = (props: TeamBioListProps) => {
  return (
    <div className="team-bio-list" >
      {props.removeTeamBioListItem1 ? "" : <TeamBioListItem itemType="email" isLink={true} linkText={props.emailLinkText} />}
      {props.removeTeamBioListItem2 ? "" : <TeamBioListItem itemType="phone" isLink={true} linkText={props.phoneLinkText} />}
      {props.removeTeamBioListItem3 ? "" : <TeamBioListItem itemType="favoriteFood" isLink={false} favoritesText={props.favoriteFoodText} />}
      {props.removeTeamBioListItem4 ? "" : <TeamBioListItem itemType="favoriteThings" isLink={false} favoritesText={props.favoriteThingsText} />}
    </div>
  );
};

export default TeamBioList;