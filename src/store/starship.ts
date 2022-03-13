import { defineStore } from "pinia";
import Starship from "@/api/models/starship";
import { fetchStarshipList } from "@/api/handlers/starship";

export const useStarshipStore = defineStore("starship", {
  state: () => ({
    list: [] as Starship[],
    selectedItemUrl: "",
    pending: false,
  }),
  getters: {
    selectedItemFilmUrlList(): string[] {
      const selectedItem: Starship | null =
        this.list.find((item) => item.url === this.selectedItemUrl) || null;

      return selectedItem?.films || [];
    },
  },
  actions: {
    async fetchList(): Promise<void> {
      try {
        this.$patch({ pending: true });
        this.$patch({ list: [] });

        const list = await fetchStarshipList();

        this.$patch({ list });
      } catch (error) {
        console.error(error);
      } finally {
        this.$patch({ pending: false });
      }
    },
  },
});
