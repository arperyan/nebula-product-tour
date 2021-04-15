export const stepProps = [
    {
        id: "1",
        text: `Global menu with navigation options, and actions that you can perform in your app. For more information about tabbed browsing and the global menu`,
        title: "Menu",
        el: "[title='navigation']",
        firstAction: "exit",
        lastAction: "next",
        openAction: true,
    },
    {
        id: "2",
        text: `Menu options will be different depending on: </br>
        <ul>
        <li>Whether you are editing or analyzing (viewing) charts in an app.</li>
        <li>The chart type.</li>
        <li>The privileges that have been assigned to you by your administrator.</li>
        </ul`,
        title: "Menu Items",
        el: "#rlui-popover-1",
        firstAction: "back",
        lastAction: "next",
        openAction: false,
    },
    {
        id: "3",
        text: "Access to all bookmarks in the app, and create a new bookmark.",
        title: "Bookmarks",
        el: "[title='Bookmarks']",
        firstAction: "back",
        lastAction: "next",
        openAction: false,
    },
    {
        id: "4",
        text: "second",
        title: "My Second",
        el:
            "button[class='MuiButtonBase-root MuiTab-root MuiTab-textColorInherit']",
        firstAction: "back",
        lastAction: "next",
        openAction: true,
    },
    {
        id: "5",
        text: "second",
        title: "My Second",
        el: "noEl",
        firstAction: "back",
        lastAction: "next",
        openAction: false,
    },
    {
        id: "6",
        text: "second",
        title: "My hhhh",
        el: "[title='Edit']",
        firstAction: "back",
        lastAction: "complete",
        openAction: false,
    },
];
