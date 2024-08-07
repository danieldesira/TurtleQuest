export type Setting = {
  label: string;
  name: SettingsKey;
  value: SettingsValue;
  type: "text" | "radio" | "number";
  options?: string[];
};

export type SettingsKey = "controlPosition";

export type SettingsValue = ControlsPositionValue;

export type ControlsPositionValue = "Left" | "Right";
