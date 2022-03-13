import { defineComponent, Transition, VNode } from "vue";
import { useStarshipStore } from "@/store/starship";
import spinnerSrc from "@/assets/spinner-dark.svg";
import StarshipHero from "./hero";
import styles from "./index.css?module";
import { useFilmStore } from "@/store/film";

export default defineComponent({
  setup() {
    const filmStore = useFilmStore();
    const starshipStore = useStarshipStore();

    return { filmStore, starshipStore };
  },

  async created(): Promise<void> {
    await this.starshipStore.fetchList();
  },

  computed: {
    renderPlaceholder(): VNode {
      return <div class={styles.content}>Empty</div>;
    },
    renderLoading(): VNode {
      return <img src={spinnerSrc} alt="" class={styles.content} />;
    },
  },

  methods: {
    async selectItem(itemUrl: string): Promise<void> {
      if (
        this.starshipStore.selectedItemUrl !== itemUrl &&
        !this.filmStore.pending
      ) {
        this.starshipStore.$patch({ selectedItemUrl: itemUrl });
      }
    },
  },

  render(): VNode {
    let content = this.renderPlaceholder;

    if (this.starshipStore.pending) {
      content = this.renderLoading;
    } else if (this.starshipStore.list) {
      content = (
        <ul
          class={{
            [styles.content]: true,
            [styles.wait]: this.filmStore.pending,
          }}
        >
          {this.starshipStore.list.map((starship) => (
            <StarshipHero
              item={starship}
              isSelected={starship.url === this.starshipStore.selectedItemUrl}
              whenClick={() => this.selectItem(starship.url)}
            />
          ))}
        </ul>
      );
    }

    return (
      <section class={styles.section}>
        <h2 class={styles.title}>Starships</h2>
        <Transition name="fade" mode="out-in">
          {content}
        </Transition>
      </section>
    );
  },
});
