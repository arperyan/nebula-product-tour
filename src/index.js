import { useElement, useEffect, useLayout } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";
import stepProps from "./stepdata";

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
