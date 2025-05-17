import { educationData, experienceData, projectsData } from "../data/bio";

export function getBioData(name: string) {
  const exp = experienceData.filter((data) => data.title === name);
  if (exp.length > 0) {
    return exp[0];
  }
  const edu = educationData.filter((data) => data.title === name);
  if (edu.length > 0) {
    return edu[0];
  }
  const pro = projectsData.filter((data) => data.title === name);
  if (pro.length > 0) {
    return pro[0];
  }
}
