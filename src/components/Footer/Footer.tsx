import {
  Footer as BarrelrollaFooter,
  DarkModeSelector,
  FooterIconsContainer,
  FooterLink,
  GitHubIcon,
  LinkedInLogo,
} from "@barrelrolla/react-components-library";

export default function Footer() {
  return (
    <BarrelrollaFooter color="main" decorations>
      <div className="flex w-full justify-between">
        <DarkModeSelector />
        <FooterIconsContainer>
          <FooterLink
            as={"a"}
            target="_blank"
            aria-label="GitHub link"
            href="https://github.com/barrelrolla"
          >
            <GitHubIcon />
          </FooterLink>
          <FooterLink
            as={"a"}
            target="_blank"
            aria-label="LinkedIn link"
            href="https://www.linkedin.com/in/julian-teofilov/"
          >
            <LinkedInLogo />
          </FooterLink>
        </FooterIconsContainer>
      </div>
    </BarrelrollaFooter>
  );
}
