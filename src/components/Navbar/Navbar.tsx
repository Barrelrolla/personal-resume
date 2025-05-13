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

function Navbar() {
  const path = useLocation().pathname;
  return (
    <BarrelrollaNavbar collapseAt="md">
      <div>
        <NavbarBrand as={Link} to={"/"}>
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
        <Button size="sm" color="primary">
          Download CV
        </Button>
        <NavbarToggle />
      </div>
    </BarrelrollaNavbar>
  );
}

export default Navbar;
