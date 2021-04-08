export const steps = (stepProps, shepherd) => {
  return stepProps.map((s) => {
    return {
      id: s.id,
      arrow: true,
      text: s.text,
      attachTo: {
        element: s.el,
        on: "auto",
      },
      title: s.title,
      buttons: [
        {
          text: s.firstAction.charAt(0).toUpperCase() + s.firstAction.slice(1),
          action:
            s.firstAction == "exit" ? shepherd.cancel : shepherd[s.firstAction],
        },
        {
          text: s.lastAction.charAt(0).toUpperCase() + s.lastAction.slice(1),
          action: shepherd[s.lastAction],
        },
      ],
      modalOverlayOpeningPadding: "5",
      showOn: false,
      popperOptions: {
        modifiers: [{ name: "offset", options: { offset: [0, 17] } }],
      },
      when: {
        show() {
          const currentStepElement = shepherd.currentStep.el;
          const header = currentStepElement.querySelector(".shepherd-header");
          const progress = document.createElement("span");
          progress.style["margin-right"] = "15px";
          progress.innerText = `${
            shepherd.steps.indexOf(shepherd.currentStep) + 1
          }/${shepherd.steps.length}`;
          header.insertBefore(
            progress,
            currentStepElement.querySelector(".shepherd-cancel-icon")
          );
        },
      },
    };
  });
};
