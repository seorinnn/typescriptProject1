import { create } from "zustand";
import { Webtoon } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

//타입 지정
type Store = {
  webtoons: Webtoon[];
  add: (webtoons: Webtoon) => void;
  remove: (webtoon: Webtoon) => void;
};

export const useReadWebtoons = create<Store>()(
  persist(
    (set) => ({
      webtoons: [],
      add: (webtoon) =>
        set((state) => ({
          webtoons: [
            webtoon,
            ...state.webtoons.filter((w) => w.webtoonId !== webtoon.webtoonId),
          ],
        })),
      remove: (webtoon) =>
        set((state) => ({
          webtoons: [
            ...state.webtoons.filter((w) => w.webtoonId !== webtoon.webtoonId),
          ],
        })),
    }),
    {
      name: "read-webtoon",
      storage: createJSONStorage<Store>(() => AsyncStorage),
    }
  )
);
