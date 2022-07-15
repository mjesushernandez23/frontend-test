import { ScreenSizeType } from "@interfaces/uiProps";
import { atom } from "recoil";

export const screenSizeAtom = atom<ScreenSizeType | null>({
  key: "screenSizeAtom",
  default: null,
});
