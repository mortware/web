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

export type CollectionResponse<T> = {
  value: T[];
  count: number;
  totalCount: number;
}

export type Track = {
  id: string;
  artist: string;
  title: string;
  slug?: string;
  duration?: string;
  tempo?: Tempo;
  songKey?: string;
}

export type Tempo = {
  bpm?: number;
  variable?: boolean;
}

export type TrackDetails = {
  sourceUrl: string;
  stems: Stem[];
  mixes: Mix[];
  fullMix?: Mix;
  lyrics: string;
} & Track;

export type TrackFile = {
  name: string;
  slug: string;
  type: "Stem" | "Mix";
}

export type Stem = {
  color: string;
  order: number;
} & TrackFile;

export type Mix = {
} & TrackFile