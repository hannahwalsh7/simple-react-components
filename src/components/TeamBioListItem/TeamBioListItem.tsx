import React from "react";
import "./TeamBioListItem.scss";
import TextLink from "../TextLink";
import BrandIcon from "../BrandIcon";

export interface TeamBioListItemProps {
  itemType?: string;
  isLink?: boolean;
  linkText?: string;
  favoritesText?: string;
}

const TeamBioListItem = (props: TeamBioListItemProps) => {
  let itemSource: string = `mailto:${props.linkText}`
  let iconName: string = "business_email"
  let headerName: string = "Email"

  if (props.itemType === "phone") {
    itemSource = `tel:${props.linkText}`
    iconName = "technology_mobile-phone"
    headerName = "Phone"
  }

  if (props.itemType === "favoriteFood") {
    itemSource = ""
    iconName = "menu_sandwich-classic-chicken"
    headerName = "Favorite Food"
  }

  if (props.itemType === "favoriteThings") {
    itemSource = ""
    iconName = "restaurant_cow"
    headerName = "Favorite Things"
  }

  if (props.itemType === "") {
    itemSource = ""
    iconName = ""
    headerName = ""
  }

  return (
    <div className="team-bio-list-item">
      <BrandIcon name={iconName} color={"gray6"} />
      <div className="team-bio-list-item__item-text">
        <p className="team-bio-list-item__item-header">{headerName}</p>
        {
          props.isLink ? <TextLink linkUrl={itemSource} linkText={props.linkText} /> :
            <p className="team-bio-list-item__favorites">{props.favoritesText}</p>
        }
      </div>
    </div>
  );
};

export default TeamBioListItem;