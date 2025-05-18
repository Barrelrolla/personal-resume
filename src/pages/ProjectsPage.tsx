import Projects from "../components/Content/Projects";
import BasePage from "../components/Page/BasePage";

export default function ProjectsPage() {
  document.title = "Julian Teofilov | Projects";

  return (
    <BasePage>
      <Projects />
    </BasePage>
  );
}
