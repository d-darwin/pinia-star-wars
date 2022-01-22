import { defineComponent, PropType, VNode } from "vue";
import Film from "@/api/models/film";
import styles from "./index.css?module";

export default defineComponent({
  name: "FilmHero",

  props: {
    item: {
      type: Object as PropType<Film>,
      required: true,
    },
  },

  render(): VNode {
    return (
      <li class={styles.hero}>
        <div>{this.item.title}</div>
        <div class={styles.crawl}>{this.item.opening_crawl}</div>
      </li>
    );
  },
});
