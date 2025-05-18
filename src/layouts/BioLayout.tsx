import { Outlet } from "react-router";
import PageTitle from "../components/ui/PageTitle";
import { Divider } from "@barrelrolla/react-components-library";

export default function BioLayout({ title }: { title: string }) {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Divider width={2} className="w-3/4" />
      <Outlet />
    </>
  );
}
