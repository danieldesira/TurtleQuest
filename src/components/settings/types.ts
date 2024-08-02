export type Setting = {
  label: string;
  name: string;
  value: string;
  type: "text" | "select" | "number";
  options?: string[];
};
