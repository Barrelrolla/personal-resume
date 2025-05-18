import { educationData } from "../../data/bio";
import BioCard from "../BioCard/BioCard";
import PageContent from "../Page/PageContent";

export default function Education({ title }: { title?: string }) {
  return (
    <PageContent title={title}>
      <div className="bio-container">
        {educationData.map((edu) => (
          <BioCard key={edu.id} bio={edu} category="education" />
        ))}
      </div>
    </PageContent>
  );
}
