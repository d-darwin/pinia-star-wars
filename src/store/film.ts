import { defineStore } from "pinia";
import Film from "@/api/models/film";
import { fetchFilmList } from "@/api/handlers/film";

export const useFilmStore = defineStore("film", {
  state: () => ({
    list: [] as Film[],
    pending: false,
  }),
  actions: {
    async fetchList(urlList: string[]): Promise<void> {
      try {
        this.$patch({ pending: true });
        this.$patch({ list: [] });

        const list = await fetchFilmList(urlList);

        this.$patch({ list });
      } catch (error) {
        console.error(error);
      } finally {
        this.$patch({ pending: false });
      }
    },
  },
});
