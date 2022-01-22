import { defineComponent, VNode } from "vue";
import { useStarshipStore } from "@/store/starship";
import { useFilmStore } from "@/store/film";

export default defineComponent({
  // TODO: return type
  setup() {
    const starshipStore = useStarshipStore();
    const filmStore = useFilmStore();
    return { starshipStore, filmStore };
  },

  async created(): Promise<void> {
    await this.starshipStore.fetchList();
  },

  methods: {
    async fetchItemFilmList(itemUrl: string): Promise<void> {
      this.starshipStore.$patch({ selectedItemUrl: itemUrl });
      const filmUrlList = this.starshipStore.selectedItemFilmUrlList;
      await this.filmStore.fetchList(filmUrlList);
    },
  },

  render(): VNode {
    return (
      <ul>
        {this.starshipStore.list.map((starship) => (
          <li onClick={() => this.fetchItemFilmList(starship.url)}>
            {starship.name}
          </li>
        ))}
      </ul>
    );
  },
});
