import React from "react";
import "./ImageWithStickers.scss";
import TopSticker from "../TopSticker";
import BottomSticker from "../BottomSticker";
import BasicImage from "../BasicImage";

export interface ImageWithStickersProps {
  image?: string;
  imageAltText?: string;
  imageOptions?: string;
  topStickerName?: string;
  topStickerColor?: string;
  bottomStickerName?: string;
  bottomStickerColor?: string;
}

const ImageWithStickers = (props: ImageWithStickersProps) => {
  let removeImage: boolean = false;
  let removeTopSticker: boolean = false;
  let removeBottomSticker: boolean = false;
  
  if (props.imageOptions === "topSticker") {
    removeImage = false;
    removeTopSticker = false;
    removeBottomSticker = true;
  }

  if (props.imageOptions === "bottomSticker") {
    removeImage = false;
    removeTopSticker = true;
    removeBottomSticker = false;
  }

  if (props.imageOptions === "noStickers") {
    removeImage = false;
    removeTopSticker = true;
    removeBottomSticker = true;
  }

  if (props.imageOptions === "none") {
    removeImage = true;
    removeTopSticker = true;
    removeBottomSticker = true;
  }

 
  return (
    <div className={`image-with-stickers ${removeImage ? `image-with-stickers--remove-image` : ''} ${removeTopSticker ? `image-with-stickers--remove-top-sticker` : ''} ${removeBottomSticker ? `image-with-stickers--remove-bottom-sticker` : ''}`}>
      {removeImage ? "" : <BasicImage image={props.image} imageAltText={props.imageAltText} />}
      {removeTopSticker ? "" : <TopSticker iconName={props.topStickerName} color={props.topStickerColor} />}
      {removeBottomSticker ? "" : <BottomSticker iconName={props.bottomStickerName} color={props.bottomStickerColor} />}
    </div>
  );
};

export default ImageWithStickers;