import { educationData } from "../../data/bio";
import Card from "../Card/Card";
import PageContent from "../Page/PageContent";

export default function Education({ title }: { title?: string }) {
  return (
    <PageContent title={title}>
      <div className="bio-container">
        {educationData.map((edu) => (
          <Card
            key={edu.title}
            id={edu.id}
            bioType="education"
            title={edu.title}
            img={edu.img}
            dates={edu.dates}
            description={edu.description}
            imgClasses={edu.imgClass}
            imgBgColor={edu.bgColor}
          />
        ))}
      </div>
    </PageContent>
  );
}
