import { persistentAtom } from "@nanostores/persistent";

export const userStar = persistentAtom<string>("userStar", "");
