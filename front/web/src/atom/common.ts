import { atom } from "recoil";

export interface ICoord {
  lat: number | null;
  long: number | null;
}

export const coordState = atom<ICoord>({
  key: "coordState",
  default: {
    lat: null,
    long: null,
  },
});
