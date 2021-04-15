import { useElement, useEffect, useLayout, useApp } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";
import { stepProps } from "./stepdata";

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
            const app = useApp();

            // app.getTablesAndKeys(
            //     {
            //         qcx: 1000,
            //         qcy: 1000,
            //     },
            //     {
            //         qcx: 0,
            //         qcy: 0,
            //     },
            //     30,
            //     true,
            //     false
            // ).then((result) => {
            //     console.log(result);
            // });

            //app.createHyperCube();
            // app.getLibraryContent("default").then((content) => {
            //     console.log(content);
            // });
            useEffect(() => {
                render(element, {
                    stepProps: layout.myTextarea
                        ? JSON.parse(layout.myTextarea)
                        : stepProps,
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
