import { useElement, useEffect, useLayout } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";

import {
    render,
    destroySvelte,
} from "../svelte-product-tour/build/_dist_/index.js";

export default function supernova() {
    return {
        qae: {
            properties,
            data,
        },
        component() {
            const element = useElement();
            const layout = useLayout();
            const stepProps = [
                {
                    id: "1",
                    text: "first",
                    title: "My First",
                    el: "[title='Stop editing sheet']",
                    firstAction: "exit",
                    lastAction: "next",
                },
                {
                    id: "2",
                    text: "second",
                    title: "My Second",
                    el: ".end",
                    firstAction: "back",
                    lastAction: "complete",
                },
            ];
            useEffect(() => {
                console.log(layout.myTextarea);
                render(element, {
                    stepProps: JSON.parse(layout.myTextarea) || stepProps,
                    color: layout.myColor?.color || "red",
                });
                return (
                    () => {
                        destroySvelte();
                    },
                    [render, layout]
                );
            });
        },
        ext: ext(),
    };
}
