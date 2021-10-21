import App from "./App.svelte";

let app;

export function render(element, props) {
  if (app) app.$destroy();
  return (app = new App({
    target: element || document.body,
    props: {
      stepProps: props.stepProps,
      color: props.color,
    },
  }));
}

export function destroySvelte() {
  app.$destroy();
}

//render();
