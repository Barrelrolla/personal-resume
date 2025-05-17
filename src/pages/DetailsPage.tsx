import { useLocation, useNavigate, useParams } from "react-router";
import BasePage from "../components/Page/BasePage";
import PageContent from "../components/Page/PageContent";
import { getBioData } from "../util/dataHelper";
import { useEffect, useState } from "react";
import { BioDataType } from "../data/bio";
import { Spinner } from "@barrelrolla/react-components-library";

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
        <>
          <h2>{data.title}</h2>
          <p>{data.fullInfo}</p>
        </>
      )}
    </BasePage>
  );
}
