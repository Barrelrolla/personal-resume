import { Anchor } from "@barrelrolla/react-components-library";
import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <main className="text-center px-4 pt-40">
      <h1 className="text-6xl font-normal">Oooops! Something went wrong!</h1>
      <p className="mt-8">{error instanceof Error ? error.message : ""}</p>
      <p className="mt-8">
        Please try again later or go back to the{" "}
        <Anchor as={Link} to="/">
          Home Page
        </Anchor>
      </p>
    </main>
  );
}
