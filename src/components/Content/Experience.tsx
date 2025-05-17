import PageContent from "../Page/PageContent";
import { experienceData } from "../../data/bio";
import Card from "../Card/Card";

export default function Experience() {
  const styling: {
    [x: string]: { logoPadding?: string; imgClass?: string; bgColor?: string };
  } = {
    Ubisoft: {},
    Melontech: {
      logoPadding: "10px",
      imgClass:
        "w-full scale-50 object-contain group-hover:scale-55 transition",
      bgColor: "#183f57",
    },
  };

  return (
    <PageContent title="Experience">
      <div className="bio-container">
        {experienceData.map((exp) => (
          <Card
            key={exp.title}
            bioType="experience"
            title={exp.title}
            description={exp.description}
            img={exp.img}
            dates={exp.dates}
            imgBgColor={styling[exp.title].bgColor}
            imgClasses={styling[exp.title].imgClass}
          />
        ))}
      </div>
    </PageContent>
  );
}
