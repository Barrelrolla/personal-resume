import { Anchor } from "@barrelrolla/react-components-library";
import PageContent from "../Page/PageContent";
import { contacts } from "../../data/bio";

export default function Contacts() {
  return (
    <PageContent>
      <div className="mt-6 space-y-2">
        <div className="md:grid-left grid-cols-2 md:grid md:gap-2">
          {contacts.map((contact) => (
            <Contact
              key={contact.title}
              title={contact.title}
              text={contact.text}
              url={contact.url}
            />
          ))}
        </div>
      </div>
    </PageContent>
  );
}

type ContactProps = {
  title: string;
  url: string;
  text: string;
};
function Contact({ title, url, text }: ContactProps) {
  return (
    <>
      <p className="max-md:mt-4">{title + ": "}</p>
      <Anchor className="w-fit" href={url} target="_blank">
        {text}
      </Anchor>
    </>
  );
}
