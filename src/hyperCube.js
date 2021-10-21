export let datas = {
  qInfo: {
    qType: "list",
  },
  qHyperCubeDef: {
    qDimensions: [
      {
        qDef: {
          qFieldDefs: ["_tour-id"],
          qSortCriterias: [
            {
              qSortByAscii: 1,
            },
          ],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-text"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-title"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-el"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-firstAction"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-lastAction"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-openAction"],
        },
      },
      {
        qDef: {
          qFieldDefs: ["_tour-disabled"],
        },
      },

      {
        qDef: {
          qFieldDefs: ["_tour-isMouse"],
        },
      },
    ],
    qInitialDataFetch: [
      {
        qLeft: 0,
        qTop: 0,
        qHeight: 100,
        qWidth: 9,
      },
    ],
  },
};
