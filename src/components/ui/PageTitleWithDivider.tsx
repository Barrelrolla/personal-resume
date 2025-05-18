import { ComponentProps } from "react";
import PageTitle from "./PageTitle";
import { Divider } from "@barrelrolla/react-components-library";

export default function PageTitleWithDivider({
  children,
}: ComponentProps<"h1">) {
  return (
    <>
      <PageTitle>{children}</PageTitle>
      <Divider width={2} />
    </>
  );
}
