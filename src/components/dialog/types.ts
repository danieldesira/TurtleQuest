export type Input = {
  label: string;
  name: string;
  value?: string;
  type: "text" | "radio" | "number" | "email" | "date" | "imageUpload";
  options?: string[];
  required?: boolean;
  maxLength?: number;
  readonly?: boolean;
};
