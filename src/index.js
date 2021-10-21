import { useElement, useEffect, useLayout, useApp } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";
// import {
//   stepProps
// } from './stepdata';
import { datas } from "./hyperCube";

import {
  render,
  destroySvelte,
} from "../svelte-product-tour/build/_dist_/index";

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const layout = useLayout();
      const app = useApp();
      let stepProps = [];

      const StepValue = async () => {
        let result = await app.createSessionObject(datas);
        let stepLayout = await result.getLayout();
        return stepLayout.qHyperCube.qDataPages[0].qMatrix;
      };

      useEffect(async () => {
        let hyperCube = await StepValue();

        stepProps = hyperCube.map((a) => {
          return {
            id: a[0].qNum,
            text: a[1].qText,
            title: a[2].qText,
            el: a[3].qText,
            firstAction: a[4].qText,
            lastAction: a[5].qText,
            openAction: a[6].qNum,
            disabled: a[7].qNum,
            isMouse: a[8].qNum,
          };
        });

        render(element, {
          stepProps: stepProps.length > 0 ? stepProps : [],
          color: layout.myColor?.color || "#1087ef",
        });

        return (
          () => {
            destroySvelte();
          },
          [render, layout]
        );
      });
    },
    // legecy its not a function
    ext,
  };
}
