import { defineComponent, PropType, VNode } from "vue";
import Starship from "@/api/models/starship";
import styles from "./index.css?module";

export default defineComponent({
  name: "StarshipHero",

  props: {
    item: {
      type: Object as PropType<Starship>,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    whenClick: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },

  render(): VNode {
    return (
      <li
        class={{ [styles.hero]: true, [styles.selected]: this.isSelected }}
        onClick={this.whenClick}
      >
        {this.item.name}
      </li>
    );
  },
});
