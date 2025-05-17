import { projectsData } from "../../data/bio";
import Card from "../Card/Card";
import PageContent from "../Page/PageContent";

export default function Projects() {
  return (
    <PageContent title="Projects">
      <div className="bio-container">
        {projectsData.map((exp) => (
          <Card
            key={exp.title}
            title={exp.title}
            description={exp.description}
            img={exp.img}
            dates={exp.dates}
            // imgBgColor={styling[exp.title].bgColor}
            // imgClasses={styling[exp.title].imgClass}
          />
        ))}
      </div>
    </PageContent>
  );
}
