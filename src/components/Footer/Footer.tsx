import {
  Anchor,
  Footer as BarrelrollaFooter,
  DarkModeSelector,
  FooterDivider,
  FooterIconsContainer,
  FooterLink,
  GitHubIcon,
  HeartFillIcon,
  LinkedInLogo,
} from "@barrelrolla/react-components-library";

export default function Footer() {
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
            <GitHubIcon strokeWidth={10} />
          </FooterLink>
          <FooterLink
            target="_blank"
            aria-label="LinkedIn link"
            href="https://www.linkedin.com/in/julian-teofilov/"
          >
            <LinkedInLogo strokeWidth={10} />
          </FooterLink>
        </FooterIconsContainer>
      </div>
      <FooterDivider />
      <div className="flex w-full flex-col items-center text-center">
        <span className="flex items-center gap-1">
          Made with <HeartFillIcon className="inline" /> and coffee
        </span>
        <span>
          Icons by:{" "}
          <Anchor href="https://phosphoricons.com/" target="_blank">
            phosphoricons
          </Anchor>
        </span>
        {/* <span>
          Background video by:{" "}
          <Anchor href="https://www.pexels.com/@rostislav/" target="_blank">
            @rostislav
          </Anchor>
        </span> */}
      </div>
    </BarrelrollaFooter>
  );
}
