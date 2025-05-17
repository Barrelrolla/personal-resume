import { useLocation, useNavigate, useParams } from "react-router";
import BasePage from "../components/Page/BasePage";
import PageContent from "../components/Page/PageContent";
import { getBioData } from "../util/dataHelper";
import { useEffect, useState } from "react";
import { BioDataType } from "../data/bio";
import {
  Anchor,
  Button,
  Card,
  CardImageContainer,
  GitHubIcon,
  Spinner,
} from "@barrelrolla/react-components-library";

export default function DetailsPage() {
  const [data, setData] = useState<BioDataType | undefined>(undefined);
  const navigate = useNavigate();
  const { id } = useParams();
  const path = useLocation().pathname.split("/");

  useEffect(() => {
    const foundData = getBioData(id || "");
    if (!foundData) {
      navigate("/not-found", { replace: true });
    }

    setData(foundData);
  }, [id, navigate]);

  return (
    <BasePage>
      <PageContent className="capitalize" title={path[1]} />
      {!data && (
        <div>
          <Spinner className="mx-auto text-9xl mt-20" strokeWidth={4} />
        </div>
      )}
      {data && (
        <div className="flex flex-col items-center mt-6">
          <Card containerClasses="border-transparent">
            <CardImageContainer
              style={{ backgroundColor: data.bgColor || "#fff" }}
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
