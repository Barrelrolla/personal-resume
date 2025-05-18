import { CSSProperties } from "react";
import { Link } from "react-router";
import {
  Card as BarrelrollaCard,
  CardImageContainer,
  CardInteract,
  CardSection,
  CardText,
  CardTitle,
} from "@barrelrolla/react-components-library";

type CardProps = {
  id: string;
  title: string;
  img: string;
  description: string;
  dates?: string;
  imgBgColor?: string;
  imgClasses?: string;
};

export default function Card({
  id,
  title,
  img,
  description,
  dates,
  imgBgColor,
  imgClasses,
}: CardProps) {
  return (
    <BarrelrollaCard
      containerClasses="group odd:self-start even:self-end max-w-4xl"
      key={title}
      color="main"
      className="h-full"
    >
      <CardInteract
        as={Link}
        to={`${id}`}
        className="flex flex-col @md:flex-row"
        aria-label={`${title} link`}
        style={{ "--h": "calc(var(--mod-highlight) * -1)" } as CSSProperties}
      >
        <CardSection className="flex-1/2 @md:group-even:order-last">
          <CardImageContainer
            className="flex items-center"
            style={{
              backgroundColor: imgBgColor || "",
            }}
          >
            <img
              className={imgClasses || "card-image"}
              src={img}
              alt={`${title} logo`}
            />
          </CardImageContainer>
        </CardSection>
        <CardSection className="flex-1/2">
          <CardTitle>{title}</CardTitle>
          {dates && <p className="px-4">{dates}</p>}
          <CardText>{description}</CardText>
        </CardSection>
      </CardInteract>
    </BarrelrollaCard>
  );
}
