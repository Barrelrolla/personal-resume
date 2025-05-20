import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
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
import { BioCategory, BioDataType } from "../data/bio";
import NotFoundContent from "../components/Page/NotFoundContent";
import { motion } from "motion/react";

export default function DetailsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BioDataType | undefined>(undefined);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const foundData = getBioData(
      id || "",
      location.pathname.split("/")[1] as BioCategory,
    );
    setData(foundData);
    if (foundData) {
      document.title = `Julian Teofilov | ${foundData.title}`;
      const image = new Image();
      image.onload = () => {
        setLoading(false);
      };
      image.src = foundData.img;
    } else {
      document.title = "Julian Teofilov | Not Found";
      setLoading(false);
    }
  }, [id, location.pathname]);

  if (loading) {
    return (
      <BasePage>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Spinner className="mx-auto mt-20 text-9xl" strokeWidth={4} />
        </motion.div>
      </BasePage>
    );
  }

  return (
    <BasePage>
      {!data && <NotFoundContent title="Content" />}
      {data && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="mt-6 flex flex-col items-center"
        >
          <Card containerClasses="border-transparent mb-6">
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
          {data.specialty && (
            <p className="font-normal pb-4">{data.specialty}</p>
          )}
          {data.dates && <p>{data.dates}</p>}
          <p className="my-5 max-w-[48rem] whitespace-pre-line">
            {data.fullInfo}
          </p>
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
        </motion.div>
      )}
    </BasePage>
  );
}
