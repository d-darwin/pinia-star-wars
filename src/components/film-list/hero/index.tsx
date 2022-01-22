import { defineComponent, PropType, VNode } from "vue";
import Film from "@/api/models/film";
import styles from "./index.css?module";

export default defineComponent({
  name: "StarshipHero",

  props: {
    item: {
      type: Object as PropType<Film>,
      required: true,
    },
  },

  render(): VNode {
    return <li>{this.item.title}</li>;
  },
});
