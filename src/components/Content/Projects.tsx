import { projectsData } from "../../data/bio";
import Card from "../Card/Card";
import PageContent from "../Page/PageContent";

export default function Projects({ title }: { title?: string }) {
  return (
    <PageContent title={title}>
      <div className="bio-container">
        {projectsData.map((exp) => (
          <Card
            key={exp.title}
            id={exp.id}
            bioType="projects"
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
