// src/data/madhyaPradeshGeoFeatures.js
export const madhyaPradeshGeoFeatures = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Bhopal" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.4064, 23.2599],
            [77.4114, 23.2520],
            [77.4200, 23.2650],
            [77.4090, 23.2750],
            [77.4064, 23.2599]
          ],
        ],
      },
      id: "BHOPAL",
    },
    {
      type: "Feature",
      properties: { name: "Indore" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [75.747451, 22.717668],
            [75.757475, 22.708528],
            [75.767467, 22.715798],
            [75.774517, 22.723012],
            [75.768348, 22.730535],
            [75.759668, 22.734569],
            [75.747451, 22.717668]
          ],
        ],
      },
      id: "INDORE",
    },
    // Add more districts or cities here
  ],
};
