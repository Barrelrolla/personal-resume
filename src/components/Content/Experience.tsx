import PageContent from "../Page/PageContent";
import { experienceData } from "../../data/bio";
import BioCard from "../BioCard/BioCard";

export default function Experience({ title }: { title?: string }) {
  return (
    <PageContent title={title}>
      <div className="bio-container">
        {experienceData.map((exp) => (
          <BioCard key={exp.id} bio={exp} category="experience" />
        ))}
      </div>
    </PageContent>
  );
}
