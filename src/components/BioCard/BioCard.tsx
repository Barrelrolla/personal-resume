import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Card,
  CardImageContainer,
  CardInteract,
  CardSection,
  CardText,
  CardTitle,
  Spinner,
} from "@barrelrolla/react-components-library";
import { BioCategory, BioDataType } from "../../data/bio";

export default function BioCard({
  category,
  bio,
}: {
  category: BioCategory;
  bio: BioDataType;
}) {
  const [loading, setLoading] = useState(true);
  const { id, title, img, imgClass, bgColor, description, dates } = bio;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = bio.img;
  }, [bio]);

  if (loading) {
    return (
      <div className="flex h-65 w-xl items-center justify-center odd:self-start even:self-end">
        <Spinner className="text-9xl" strokeWidth={4} />
      </div>
    );
  }

  return (
    <Card
      containerClasses="group odd:self-start even:self-end max-w-4xl"
      key={title}
      color="main"
      className="h-full"
    >
      <CardInteract
        as={Link}
        to={`/${category}/${id}`}
        className="flex flex-col @md:flex-row"
        aria-label={`${title} link`}
        style={{ "--h": "calc(var(--mod-highlight) * -1)" } as CSSProperties}
      >
        <CardSection className="flex-1/2 @md:group-even:order-last">
          <CardImageContainer
            className="flex items-center"
            style={{
              backgroundColor: bgColor || "",
            }}
          >
            <img
              className={imgClass || "card-image"}
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
    </Card>
  );
}
