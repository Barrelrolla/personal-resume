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
            id={exp.id}
            title={exp.title}
            description={exp.description}
            img={exp.img}
            dates={exp.dates}
          />
        ))}
      </div>
    </PageContent>
  );
}
