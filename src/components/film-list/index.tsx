import { defineComponent, Transition, VNode } from "vue";
import { useFilmStore } from "@/store/film";
import { useStarshipStore } from "@/store/starship";
import spinnerSrc from "@/assets/spinner-light.svg";
import styles from "./index.css?module";

export default defineComponent({
  setup() {
    const filmStore = useFilmStore();
    const starshipStore = useStarshipStore();

    starshipStore.$subscribe(async (_, state) => {
      if (state.selectedItemUrl) {
        await filmStore.fetchList(starshipStore.selectedItemFilmUrlList);
      }
    });

    return { filmStore };
  },
  computed: {
    renderPlaceholder(): VNode {
      return (
        <div class={styles.content}>
          Select a starship above to get a list of movies
        </div>
      );
    },
    renderLoading(): VNode {
      return <img src={spinnerSrc} class={styles.content} />;
    },
  },
  render(): VNode {
    let content = this.renderPlaceholder;

    if (this.filmStore.pending) {
      content = this.renderLoading;
    } else if (this.filmStore.list.length) {
      content = (
        <ul class={styles.content}>
          {this.filmStore.list.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      );
    }

    return (
      <section class={styles.section}>
        <h2 class={styles.title}>Movies</h2>
        <Transition name="fade" mode="out-in">
          {content}
        </Transition>
      </section>
    );
  },
});
