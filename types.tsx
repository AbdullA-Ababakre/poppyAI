export type ChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export type CreatorDetail = {
  id: string;
  name: string;
  email: string;
  website: string;
  avatar: string;
  twitter_link: string;
  instagram: string;
  tiktok: string;
  instagram_followers: string;
  tiktok_followers: string;
  location?: string;
  language?: string;
  gender?: string;
  industry?: string;
  description: string;
  similarity: number;
};

export type FilterOption = {
  value: string;
  label: string;
  disable: boolean; //if an option is disabled. default false
  selected: boolean; // if an option is selected. default false
  id: number;
};
