import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Anchor,
  Button,
  Card,
  CardImageContainer,
  GitHubIcon,
  Spinner,
} from "@barrelrolla/react-components-library";
import BasePage from "../components/Page/BasePage";
import { getBioData } from "../util/dataHelper";
import { BioDataType } from "../data/bio";
import NotFoundContent from "../components/Page/NotFoundContent";

export default function DetailsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BioDataType | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const foundData = getBioData(id || "");
    setData(foundData);
    if (foundData) {
      const image = new Image();
      image.onload = () => {
        setLoading(false);
      };
      image.src = foundData.img;
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <BasePage>
        <div>
          <Spinner className="mx-auto mt-20 text-9xl" strokeWidth={4} />
        </div>
      </BasePage>
    );
  }

  return (
    <BasePage>
      {!data && <NotFoundContent title="Content" />}
      {data && (
        <div className="mt-6 flex flex-col items-center">
          <Card containerClasses="border-transparent">
            <CardImageContainer
              style={{ backgroundColor: data.bgColor || "#000" }}
            >
              <img
                className={data.imgClass}
                src={data.img}
                alt={`${data.title} logo`}
              />
            </CardImageContainer>
          </Card>
          <h2 className="text-2xl font-medium">{data.title}</h2>
          {data.dates && <p>{data.dates}</p>}
          <p className="my-4">{data.fullInfo}</p>
          {data.website && (
            <Anchor href={data.website} target="_blank">
              {data.website}
            </Anchor>
          )}
          {data.github && (
            <Button
              as="a"
              href={data.github}
              target="_blank"
              wrapperClasses="mt-2"
              startIcon={<GitHubIcon strokeWidth={16} />}
            >
              Repo
            </Button>
          )}
        </div>
      )}
    </BasePage>
  );
}
