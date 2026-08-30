import type { ExperienceListItemProps } from "../experienceListItem/interface";

export interface ExperienceItem extends ExperienceListItemProps {
  side: "left" | "right";
}

export const experienceItems: ExperienceItem[] = [
  {
    side: "left",
    name: "Senior React Developer",
    desc: "I provided web solutions, applying a range of technologies to address client requirements.",
    time: "2010 - 2019",
    company: "Apple",
    companyUrl: "https://www.apple.com",
  },
  {
    side: "right",
    name: "Senior React Developer",
    desc: "I provided web solutions, applying a range of technologies to address client requirements.",
    time: "2010 - 2019",
    company: "Apple",
    companyUrl: "https://www.apple.com",
  },
  {
    side: "left",
    name: "Senior React Developer",
    desc: "I provided web solutions, applying a range of technologies to address client requirements.",
    time: "2010 - 2019",
    company: "Apple",
    companyUrl: "https://www.apple.com",
  },
];
