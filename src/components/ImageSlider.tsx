import { useState } from "react";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import { ProjectDto } from "../types/ProjectDto";
import { CircleArrowButton } from "./CircleArrowButton";

export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

interface ImageSliderProps {
  item: ProjectDto;
  width?: number;
  height?: number;
  objectFit?: ObjectFit;
}

export function ImageSlider({
  item,
  height = 230,
  width = 140,
  objectFit = "fill",
}: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const leftImage = () => {
    if (imageIndex > 0) {
      setImageIndex((oldIndexState) => oldIndexState - 1);
    }
  };
  const rightImage = () => {
    if (imageIndex < item.images.length - 1) {
      setImageIndex((oldIndexState) => oldIndexState + 1);
    }
  };

  return (
    <div style={{ display: "flex", columnGap: 15, alignItems: "center" }}>
      <CircleArrowButton image={left} onClick={leftImage} />

      <div style={{ height: height, width: width }}>
        <img
          style={{ objectFit: objectFit, height: "100%", width: "100%" }}
          src={item.images[imageIndex]}
          alt="Imagem circular"
        />
      </div>

      <CircleArrowButton image={right} onClick={rightImage} />
    </div>
  );
}
