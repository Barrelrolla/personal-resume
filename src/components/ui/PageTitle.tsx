import { ComponentProps } from "react";

export default function PageTitle({ children }: ComponentProps<"h1">) {
  return <h1 className="text-5xl md:text-6xl font-medium">{children}</h1>;
}
