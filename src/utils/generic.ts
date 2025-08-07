import store from "../store";

/**
 * Randomises true or false.
 * @returns Random boolean
 * @author Daniel Desira
 */
export const generateRandomBit = (): boolean => !!Math.round(Math.random());

/**
 * Checks if a custom dialog set from global state is open
 * @returns True when dialog state is set
 * @author Daniel Desira
 */
export const isCustomDialogOpen = (): boolean =>
  !!store.getState().dialogs.dialog.title;
