import ContactsPage from "../pages/ContactsPage";
import EducationPage from "../pages/EducationPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";

export const navLinks = [
  { path: "experience", element: ExperiencePage },
  { path: "education", element: EducationPage },
  { path: "projects", element: ProjectsPage },
  { path: "contacts", element: ContactsPage },
];

export const rootPath = "/personal-resume/";
