import { educationData, experienceData, projectsData } from "../data/bio";

export function getBioData(id: string) {
  const exp = experienceData.filter((data) => data.id === id);
  if (exp.length > 0) {
    return exp[0];
  }
  const edu = educationData.filter((data) => data.id === id);
  if (edu.length > 0) {
    return edu[0];
  }
  const pro = projectsData.filter((data) => data.id === id);
  if (pro.length > 0) {
    return pro[0];
  }
  return null;
}
