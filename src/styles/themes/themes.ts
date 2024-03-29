import { DefaultTheme } from "styled-components";
import { dark } from "./dark";
import { light } from "./light";

type ThemesType = {
  [key: string]: DefaultTheme;
};

export const themes: ThemesType = {
  dark,
  light,
};
