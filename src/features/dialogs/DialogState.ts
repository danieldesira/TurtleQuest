interface DialogState {
  dialog: {
    title: string;
    text: string[];
    type?: "default" | "error";
    buttons?: { label: string; action: () => void }[];
  };
}

export default DialogState;
