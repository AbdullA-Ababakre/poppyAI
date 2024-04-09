import { FilterOption } from "./types";

export const genderOptions: FilterOption[] = [
  { value: "default", label: "Gender", disable: true, selected: false, id: 0 },
  { value: "male", label: "Male", disable: false, selected: false, id: 1 },
  { value: "female", label: "Female", disable: false, selected: false, id: 2 },
];

export const languageOptions: FilterOption[] = [
  {
    value: "default",
    label: "Language",
    disable: true,
    selected: false,
    id: 0,
  },
  {
    value: "english",
    label: "English",
    disable: false,
    selected: false,
    id: 1,
  },
  {
    value: "spanish",
    label: "Spanish",
    disable: false,
    selected: false,
    id: 2,
  },
];

export const countryOptions: FilterOption[] = [
  {
    value: "default",
    label: "Country",
    disable: true,
    selected: false,
    id: 0,
  },
  { value: "us", label: "US", disable: false, selected: false, id: 1 },
  { value: "uk", label: "UK", disable: false, selected: false, id: 2 },
];
