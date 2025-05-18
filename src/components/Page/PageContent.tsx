import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Divider } from "@barrelrolla/react-components-library";
import PageTitle from "../ui/PageTitle";

export type PageContentProps = {
  title?: string;
} & ComponentProps<"div">;

export default function PageContent({
  title,
  className,
  children,
  ...rest
}: PageContentProps) {
  return (
    <div className={twMerge("w-full", className)} {...rest}>
      {title && (
        <>
          <PageTitle as="h3">{title}</PageTitle>
          <Divider width={2} className="w-3/4" />
        </>
      )}
      {children}
    </div>
  );
}
