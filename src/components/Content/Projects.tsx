import { projectsData } from "../../data/bio";
import BioCard from "../BioCard/BioCard";
import PageContent from "../Page/PageContent";

export default function Projects({ title }: { title?: string }) {
  return (
    <PageContent title={title}>
      <div className="bio-container">
        {projectsData.map((pro) => (
          <BioCard key={pro.id} bio={pro} category="projects" />
        ))}
      </div>
    </PageContent>
  );
}
