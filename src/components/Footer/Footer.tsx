import {
  Anchor,
  Footer as BarrelrollaFooter,
  CoffeeFillIcon,
  DarkModeSelector,
  FooterDivider,
  FooterIconsContainer,
  FooterLink,
  GitHubIcon,
  HeartFillIcon,
  LetterIcon,
  LinkedInIcon,
  PhoneIcon,
} from "@barrelrolla/react-components-library";

export default function Footer() {
  const iconsWidth = 10;
  return (
    <BarrelrollaFooter color="main" decorations>
      <div className="flex w-full items-center justify-between pt-2">
        <DarkModeSelector />
        <FooterIconsContainer>
          <FooterLink
            target="_blank"
            aria-label="GitHub link"
            href="https://github.com/barrelrolla"
          >
            <GitHubIcon strokeWidth={iconsWidth} />
          </FooterLink>
          <FooterLink
            target="_blank"
            aria-label="LinkedIn link"
            href="https://www.linkedin.com/in/julian-teofilov/"
          >
            <LinkedInIcon strokeWidth={iconsWidth} />
          </FooterLink>
          <FooterLink
            target="_blank"
            aria-label="email link"
            href="mailto:julian.teofilov@gmail.com"
          >
            <LetterIcon strokeWidth={iconsWidth} />
          </FooterLink>
          <FooterLink
            target="_blank"
            aria-label="phone number link"
            href="tel:+359888971167"
          >
            <PhoneIcon strokeWidth={iconsWidth} />
          </FooterLink>
        </FooterIconsContainer>
      </div>
      <FooterDivider />
      <div className="flex w-full flex-col items-center text-center">
        <span className="flex items-center gap-1">
          Made with <HeartFillIcon className="inline" /> and{" "}
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
