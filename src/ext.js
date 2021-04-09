export default function ext() {
    return {
        definition: {
            type: "items",
            component: "accordion",
            items: {
                settings: {
                    uses: "settings",
                    items: {
                        MyTextarea: {
                            label: "Add object",
                            component: "textarea",
                            //the amount of rows in the textarea component (default is 3)
                            maxlength: 200, //will not allow more than 100 characters
                            ref: "myTextarea",
                        },
                        Button: {
                            ref: "button",
                            label: "Button",
                            type: "items",
                            items: {
                                MyColorPicker: {
                                    label: "Button Color",
                                    component: "color-picker",
                                    ref: "myColor",
                                    type: "object",
                                    defaultValue: {
                                        color: "#ff5866",
                                        index: "-1",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    };
}
