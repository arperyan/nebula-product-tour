export default {
  definition: {
    type: "items",
    component: "accordion",
    items: {
      settings: {
        uses: "settings",
        items: {
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
                  color: "#1087ef",
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
