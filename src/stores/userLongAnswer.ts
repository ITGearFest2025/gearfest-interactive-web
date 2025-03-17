import { persistentMap } from "@nanostores/persistent";

export const userLongAnswer = persistentMap<Record<string, string>>(
  "longText",
  {},
);
