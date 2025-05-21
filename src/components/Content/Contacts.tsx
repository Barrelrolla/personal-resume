import { motion } from "motion/react";
import { Anchor } from "@barrelrolla/react-components-library";
import PageContent from "../Page/PageContent";
import { contacts } from "../../data/bio";

export default function Contacts() {
  return (
    <PageContent>
      <motion.div className="mt-6 space-y-2">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          initial={"hidden"}
          animate={"visible"}
          className="md:grid-left grid-cols-2 md:grid md:gap-2"
        >
          {contacts.map((contact) => (
            <Contact
              key={contact.title}
              title={contact.title}
              text={contact.text}
              url={contact.url}
            />
          ))}
        </motion.div>
      </motion.div>
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
      <motion.p
        variants={{
          hidden: { opacity: 0, translateY: 20 },
          visible: { opacity: 1, translateY: 0 },
        }}
        className="max-md:mt-4"
      >
        {title + ": "}
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 20 },
          visible: { opacity: 1, translateY: 0 },
        }}
      >
        <Anchor href={url} target="_blank">
          {text}
        </Anchor>
      </motion.div>
    </>
  );
}
