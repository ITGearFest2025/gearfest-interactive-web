import { persistentAtom } from "@nanostores/persistent";

// Create a persistent Nano Store for the text input
export const userLongAnswer = persistentAtom<string>("longText", "", {
  encode: JSON.stringify,
  decode: JSON.parse,
});
