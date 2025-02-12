import { persistentMap } from "@nanostores/persistent";

export const userAnswer = persistentMap<Record<string, string>>("answer", {
  type1: "0",
  type2: "0",
  type3: "0",
  type4: "0",
  type5: "0",
  type6: "0",
  type7: "0",
  type8: "0",
  type9: "0",
});
