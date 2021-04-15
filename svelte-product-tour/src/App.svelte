<script>
    import Shepherds from "./shepherd.svelte";
    import "shepherd.js/dist/css/shepherd.css";
    import "./index.css";

    export let stepProps;
    export let color;
    //$: console.log(stepProps);
    //   const stepProps = [
    //     { el: ".test", firstAction: "back", lastAction: "next" },
    //     { el: ".end", firstAction: "back", lastAction: "complete" },
    //   ];
</script>

<main>
    <Shepherds {stepProps} {color} />
</main>

<style>
    main {
        text-align: center;
        /* padding: 1em; */
        max-width: 240px;
        width: auto;
        margin: 0 auto;
    }

    h1 {
        color: green;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
