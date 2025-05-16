import {
  Card,
  CardImageContainer,
  CardInteract,
  CardSection,
  CardText,
  CardTitle,
  Divider,
} from "@barrelrolla/react-components-library";
import PageTitle from "../components/ui/PageTitle";

import { experienceData } from "../data/bio";
import { ComponentProps, CSSProperties } from "react";

export default function ExperiencePage({ ...rest }: ComponentProps<"div">) {
  const styling: {
    [x: string]: { logoPadding: string; imgClass: string };
  } = {
    Ubisoft: { logoPadding: "0", imgClass: "card-image" },
    Melontech: {
      logoPadding: "10px",
      imgClass: "w-full h-1/2 object-contain group-hover:scale-110 transition",
    },
  };
  return (
    <div className="w-full" {...rest}>
      <PageTitle>Experience</PageTitle>
      <Divider className="w-3/4" width={2} />
      <div className="mt-6 flex flex-col gap-6 items-end md:items-stretch">
        {experienceData.map((exp) => {
          return (
            <Card
              containerClasses="group odd:self-start even:self-end max-w-4xl"
              key={exp.title}
              color="main"
              className="h-full"
            >
              <CardInteract
                className="flex flex-col @md:flex-row"
                aria-label={`${exp.title} link`}
                style={
                  { "--h": "calc(var(--mod-highlight) * -1)" } as CSSProperties
                }
              >
                <CardSection className="flex-1/2 @md:group-even:order-last">
                  <CardImageContainer
                    className="items-center flex"
                    style={{
                      backgroundColor: exp.bgColor,
                      padding: styling[exp.title].logoPadding,
                    }}
                  >
                    <img
                      className={styling[exp.title].imgClass}
                      src={exp.img}
                      alt={`${exp.title} logo`}
                    />
                  </CardImageContainer>
                </CardSection>
                <CardSection className="flex-1/2">
                  <CardTitle>{exp.title}</CardTitle>
                  <p className="px-4">{exp.dates}</p>
                  <CardText>{exp.description}</CardText>
                </CardSection>
              </CardInteract>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
