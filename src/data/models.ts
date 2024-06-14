import { Icons } from "lib/icons";

export type WorkHistoryItem = {
  title: string;
  employer: string;
  from: string;
  to?: string;
  description: string;
  keyNotes: string[];
  tags: string[];
}

export type EducationHistoryItem = {
  name: string;
  provider: string;
  completed: string;
}

export type SkillsItem = {
  name: string;
  skills: string[];
}

export type SocialLink = {
  icon: keyof typeof Icons;
  iconSource: string;
  display: string;
  url: string;
}