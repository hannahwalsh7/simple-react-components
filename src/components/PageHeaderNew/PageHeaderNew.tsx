import React from "react";
import ImageWithStickers from "../ImageWithStickers";
import "./PageHeaderNew.scss";

export interface PageHeaderNewProps {
    title: string;
    subtitle?: string;
    image?: string;
    imageAltText?: string;
    imageOptions?: string;
    topSticker?: string;
    topStickerColor?: string;
    bottomSticker?: string;
    bottomStickerColor?: string;
}

const PageHeaderNew = (props: PageHeaderNewProps) => {
    return (
        <div className="page-header-new">
            <div className="page-header-new__text-container">
                <h2 className="page-header-new__title">{props.title}</h2>
                <p className="page-header-new__subtitle">{props.subtitle}</p>
            </div>
            <ImageWithStickers imageOptions={props.imageOptions} image={props.image} imageAltText={props.imageAltText} topStickerName={props.topSticker} topStickerColor={props.topStickerColor} bottomStickerName={props.bottomSticker} bottomStickerColor={props.bottomStickerColor} />
        </div>
    );
};

export default PageHeaderNew;