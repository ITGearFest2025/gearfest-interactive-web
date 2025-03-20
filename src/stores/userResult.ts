import { persistentMap } from "@nanostores/persistent";

export const userResult = persistentMap<Record<string, string>>("result", {});
