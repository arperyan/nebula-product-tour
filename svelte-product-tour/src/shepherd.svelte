<script>
  import Shepherd from "Shepherd.js";
  import { steps } from "./steps";

  export let stepProps;
  export let color = "red";
  let size = "14px";

  const shepherd = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      classes: "shepherd-modal-is-visible",
      scrollTo: {
        behavior: "smooth",
        block: "center",
      },
    },
    useModalOverlay: true,
  });

  const result = steps(stepProps, shepherd);
  const startTour = () => {
    setTimeout(function () {
      shepherd.start();
    }, 400);
  };

  shepherd.addSteps(result);

  function cssVariables(node, variables) {
    setCssVariables(node, variables);

    return {
      update(variables) {
        setCssVariables(node, variables);
      },
    };
  }
  function setCssVariables(node, variables) {
    for (const name in variables) {
      node.style.setProperty(`--${name}`, variables[name]);
    }
  }
</script>

<button
  type="button"
  class="tour ripple"
  on:click={startTour}
  use:cssVariables={{ size, color }}>Start Tour</button
>

<style>
  .tour {
    background-color: var(--color);
    border-radius: 8px;
    padding: 10px 20px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: var(--size);
    margin: 4px 2px;
    cursor: pointer;
  }

  .ripple {
    background-position: center;
    transition: background 0.6s;
  }
  .ripple:hover {
    background: var(--color)
      radial-gradient(circle, transparent 1%, var(--color) 1%) center/15000%;
    opacity: 0.7;
  }
  .ripple:active {
    background-color: rgb(105, 105, 105);
    background-size: 100%;
    border: none;
    transition: background 0s;
  }
</style>
