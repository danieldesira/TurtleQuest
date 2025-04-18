export type Input = {
  label: string;
  name: string;
  value?: string;
  type: "text" | "radio" | "number";
  options?: string[];
};
