import { Anchor } from "@barrelrolla/react-components-library";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="text-center w-full px-4 pt-40">
      <h1 className="text-6xl font-normal">Page not found!</h1>
      <p className="mt-8">
        Please verify the URL you're trying to access or go back to the{" "}
        <Anchor as={Link} to={"/"}>
          Home Page
        </Anchor>
      </p>
    </main>
  );
}
