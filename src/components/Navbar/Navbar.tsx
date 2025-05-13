import { Link, useLocation } from "react-router";
import {
  Navbar as BarrelrollaNavbar,
  Button,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "@barrelrolla/react-components-library";
import { navLinks } from "../../data/navLinks";
import cv from "../../assets/Julian_Teofilov_CV.pdf";

function Navbar() {
  const path = useLocation().pathname;
  return (
    <BarrelrollaNavbar collapseAt="md">
      <div className="md:w-[130px]">
        <NavbarBrand as={Link} className="w-min" to={"/"}>
          Julian
        </NavbarBrand>
      </div>
      <NavbarCollapse>
        {navLinks.map((link) => (
          <NavbarLink
            key={link.path}
            as={Link}
            to={`/${link.path}`}
            data-selected={path === `/${link.path}`}
          >
            {link.path}
          </NavbarLink>
        ))}
      </NavbarCollapse>
      <div className="flex flex-wrap items-center gap-4 md:w-[130px]">
        <Button
          variant="outline"
          as={"a"}
          href={cv}
          download
          target="_self"
          size="sm"
          color="primary"
        >
          Download CV
        </Button>
        <NavbarToggle />
      </div>
    </BarrelrollaNavbar>
  );
}

export default Navbar;
