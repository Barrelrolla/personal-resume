import { educationData } from "../../data/bio";
import Card from "../Card/Card";
import PageContent from "../Page/PageContent";

export default function Education() {
  return (
    <PageContent title="Education">
      <div className="bio-container">
        {educationData.map((edu) => (
          <Card
            key={edu.title}
            title={edu.title}
            img={edu.img}
            dates={edu.dates}
            description={edu.description}
            imgClasses="scale-90 object-contain group-hover:scale-100 transition"
          />
        ))}
      </div>
    </PageContent>
  );
}
