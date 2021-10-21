const createMouseEvent = (query) => {
  let downEvent = document.createEvent("MouseEvents");
  downEvent.initEvent("mousedown", true, true);
  let upEvent = document.createEvent("MouseEvents");
  upEvent.initEvent("mouseup", true, true);

  let element = document.querySelector(query);

  element.dispatchEvent(downEvent);
  element.dispatchEvent(upEvent);
};

export const steps = (stepProps, shepherd) => {
  return stepProps.map((s, index) => {
    return {
      id: s.id,
      arrow: true,
      text: s.text,
      attachTo: {
        element: s.el,
        on: "auto",
      },
      title: s.title ? s.title : null,
      buttons: [
        {
          text: s.firstAction.charAt(0).toUpperCase() + s.firstAction.slice(1),
          classes: s.disabled ? "disabled" : "",
          action() {
            if (index === 0) {
              shepherd.complete();
            } else {
              shepherd.back();
            }
          },
        },
        !s.openAction
          ? {
              text:
                s.lastAction.charAt(0).toUpperCase() + s.lastAction.slice(1),
              action() {
                if (index === shepherd.steps.length - 1) {
                  shepherd.complete();
                } else {
                  shepherd.next();
                }
              },
            }
          : {
              classes: "displNone",
              text: "none",
            },
        s.openAction
          ? {
              text:
                s.lastAction.charAt(0).toUpperCase() + s.lastAction.slice(1),
              action() {
                if (!s.isMouse) {
                  document
                    .querySelector(".shepherd-enabled, .shepherd-target")
                    .click();
                  shepherd.next();
                } else {
                  createMouseEvent(".shepherd-enabled, .shepherd-target");
                  setTimeout(() => shepherd.next(), 1500);
                }
              },
            }
          : {
              classes: "displNone",
              text: "none",
            },
      ],
      modalOverlayOpeningPadding: "5",
      popperOptions: {
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 17],
            },
          },
        ],
      },
      when: {
        show() {
          const currentStep = shepherd.getCurrentStep();
          if (
            !currentStep.target &&
            currentStep.options.attachTo.element != "noEl"
          ) {
            shepherd.next();
          } else {
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
          }
        },
      },
    };
  });
};
