import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Card,
  CardImageContainer,
  CardInteract,
  CardSection,
  CardText,
  CardTitle,
} from "@barrelrolla/react-components-library";
import { BioCategory, BioDataType } from "../../data/bio";
import { motion, MotionProps, Variants } from "motion/react";

export default function BioCard({
  category,
  bio,
  index,
  ...rest
}: {
  category: BioCategory;
  bio: BioDataType;
  index?: number;
} & MotionProps) {
  const [loading, setLoading] = useState(true);
  const { id, title, specialty, img, imgClass, bgColor, description, dates } =
    bio;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = bio.img;
  }, [bio]);

  const child: Variants = {
    hidden: {
      opacity: 0,
      translateX: index && index % 2 ? 50 : -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };
  return (
    <motion.div
      className="group/wrapper flex flex-col"
      variants={child}
      {...rest}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card
        containerClasses="group-odd/wrapper:self-start group-even/wrapper:self-end max-w-4xl"
        key={title}
        color="main"
        className="h-full"
      >
        <CardInteract
          as={Link}
          to={`/${category}/${id}`}
          className="flex flex-col @md:h-56 @md:flex-row"
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
              {loading && <div className="h-56 w-full"></div>}
              {!loading && (
                <img
                  className={imgClass || "card-image"}
                  src={img}
                  alt={`${title} logo`}
                />
              )}
            </CardImageContainer>
          </CardSection>
          <CardSection className="flex-1/2">
            <CardTitle className="pb-0">{title}</CardTitle>
            {specialty && <p className="px-4 pb-2 font-normal">{specialty}</p>}
            {dates && <p className="px-4">{dates}</p>}
            <CardText dangerouslySetInnerHTML={{ __html: description }} />
          </CardSection>
        </CardInteract>
      </Card>
    </motion.div>
  );
}
