import PageContent from "../Page/PageContent";
import { experienceData } from "../../data/bio";
import Card from "../Card/Card";

export default function Experience() {
  return (
    <PageContent title="Experience">
      <div className="bio-container">
        {experienceData.map((exp) => (
          <Card
            key={exp.title}
            id={exp.id}
            title={exp.title}
            description={exp.description}
            img={exp.img}
            dates={exp.dates}
            imgBgColor={exp.bgColor}
            imgClasses={exp.imgClass}
          />
        ))}
      </div>
    </PageContent>
  );
}
