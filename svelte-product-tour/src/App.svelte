<script>
  import Shepherds from "./shepherd.svelte";
  import "shepherd.js/dist/css/shepherd.css";
  import "./index.css";

  export let stepProps;
  export let color;

  // const stepProps = [
  //   { el: ".test", firstAction: "back", lastAction: "next" },
  //   { el: ".end", firstAction: "back", lastAction: "complete" },
  // ];
</script>

<main>
  <Shepherds {stepProps} --color={color} />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
