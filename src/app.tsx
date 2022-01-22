import { defineComponent, VNode } from "vue";
import StarshipList from "@/components/starship-list";
import FilmList from "@/components/film-list";
import styles from "./app.css?module";

export default defineComponent({
  render(): VNode {
    return (
      <main class={styles.main}>
        <StarshipList class={styles.list} />
        <FilmList class={styles.list} />
      </main>
    );
  },
});
