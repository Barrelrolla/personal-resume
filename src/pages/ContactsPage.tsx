import { Anchor, Divider } from "@barrelrolla/react-components-library";
import PageTitle from "../components/ui/PageTitle";

export default function ContactsPage() {
  window.scrollTo(0, 0);

  return (
    <div className="w-full">
      <PageTitle>Contacts</PageTitle>
      <Divider className="w-3/4" width={2} />
      <div className="space-y-2 mt-6">
        <div className="grid-cols-2 md:grid-left md:grid md:gap-2">
          <p className="max-md:mt-4">Github: </p>
          <Anchor href={"https://github.com/barrelrolla"} target="_blank">
            github.com/barrelrolla
          </Anchor>
          <p className="max-md:mt-4"> LinkedIn: </p>
          <Anchor
            href={"https://www.linkedin.com/in/julian-teofilov/"}
            target="_blank"
          >
            linkedin.com/in/julian-teofilov/
          </Anchor>
          <p className="max-md:mt-4"> Email: </p>
          <Anchor href={"mailto:julian.teofilov@gmail.com"} target="_blank">
            julian.teofilov@gmail.com
          </Anchor>
          <p className="max-md:mt-4"> Phone: </p>
          <Anchor href="tel:+359888971167" target="_blank">
            +359 888 971167
          </Anchor>
        </div>
      </div>
    </div>
  );
}
