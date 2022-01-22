import { defineComponent, VNode } from "vue";
import StarshipList from "@/components/starship-list";

export default defineComponent({
  render(): VNode {
    return <StarshipList />;
  },
});
