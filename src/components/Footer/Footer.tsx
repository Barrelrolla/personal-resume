import {
  Anchor,
  Footer as BarrelrollaFooter,
  CoffeeFillIcon,
  DarkModeSelector,
  FooterDivider,
  FooterIconsContainer,
  FooterLink,
  HeartFillIcon,
} from "@barrelrolla/react-components-library";
import { contacts } from "../../data/bio";

export default function Footer() {
  return (
    <BarrelrollaFooter color="main" decorations>
      <div className="flex w-full items-center justify-between pt-2">
        <DarkModeSelector />
        <FooterIconsContainer>
          {contacts.map((contact) => (
            <FooterLink
              key={contact.title}
              target="_blank"
              aria-label={`${contact.title} link`}
              href={contact.url}
            >
              <contact.icon strokeWidth={10} />
            </FooterLink>
          ))}
        </FooterIconsContainer>
      </div>
      <FooterDivider />
      <div className="flex w-full flex-col items-center text-center">
        <span className="flex items-center gap-1">
          Made with <HeartFillIcon className="inline" /> and
          <CoffeeFillIcon className="inline" />
        </span>
        <span>
          Icons by:{" "}
          <Anchor href="https://phosphoricons.com/" target="_blank">
            phosphoricons
          </Anchor>
        </span>
      </div>
    </BarrelrollaFooter>
  );
}
