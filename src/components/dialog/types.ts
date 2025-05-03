export type Input = {
  label: string;
  name: string;
  value?: string;
  type: "text" | "radio" | "number" | "email" | "date";
  options?: string[];
};
