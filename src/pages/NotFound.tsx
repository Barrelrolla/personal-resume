import { Anchor } from "@barrelrolla/react-components-library";
import { Link } from "react-router";
import PageTitle from "../components/ui/PageTitle";

export default function NotFound() {
  return (
    <main className="text-center px-4 pt-40">
      <PageTitle>Page not found!</PageTitle>
      <p className="mt-8">
        Please verify the URL you're trying to access or go back to the{" "}
        <Anchor as={Link} to={"/"}>
          Home Page
        </Anchor>
      </p>
    </main>
  );
}
