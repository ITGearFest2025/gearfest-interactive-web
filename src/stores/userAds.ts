import { persistentMap } from "@nanostores/persistent";

export const userAds = persistentMap<Record<string, string>>("ads", {
  register: "false",
});
