import {
  Anchor,
  Footer as BarrelrollaFooter,
  DarkModeSelector,
  FooterDivider,
  FooterIconsContainer,
  FooterLink,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@barrelrolla/react-components-library";
import { contacts } from "../../data/bio";
import { Link } from "react-router";
import { PiCoffeeFill, PiHeartFill } from "react-icons/pi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <BarrelrollaFooter color="main" decorations>
      <div className="flex w-full flex-wrap items-center justify-between pt-2">
        <DarkModeSelector />

        <FooterIconsContainer>
          {contacts.map((contact) => (
            <Tooltip isLabel key={contact.title}>
              <TooltipTrigger>
                <FooterLink
                  target="_blank"
                  aria-label={`${contact.title} link`}
                  href={contact.url}
                >
                  <contact.icon strokeWidth={10} />
                </FooterLink>
              </TooltipTrigger>
              <TooltipContent>{contact.title}</TooltipContent>
            </Tooltip>
          ))}
        </FooterIconsContainer>
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <p className="flex items-center gap-1">
          Made with <PiHeartFill className="inline" /> and
          <PiCoffeeFill className="inline" />
        </p>
        <p>
          Icons by:{" "}
          <Anchor href="https://phosphoricons.com/" target="_blank">
            phosphoricons
          </Anchor>
        </p>
        <p>© {year} Julian Teofilov. All rights reserved.</p>
      </div>
      <FooterDivider />
      <div>
        <h2 className="text-lg font-semibold">Privacy Policy</h2>
        <p>This is a personal portfolio website hosted on Vercel.</p>
      </div>
      <ul>
        <li>
          <strong>Analytics:</strong> I use Vercel Web Analytics to track
          aggregated, anonymous page views. It does not use cookies, does not
          collect personal identifying information, and does not track you
          across other websites.
        </li>
        <li>
          <strong>Cookies:</strong> This site does not store tracking cookies on
          your browser.
        </li>
        <li>
          <strong>Contact:</strong> If you have any questions, you can reach out
          at any of the listed{" "}
          <Anchor as={Link} to={"/contacts"}>
            contacts
          </Anchor>
          .
        </li>
      </ul>
    </BarrelrollaFooter>
  );
}
