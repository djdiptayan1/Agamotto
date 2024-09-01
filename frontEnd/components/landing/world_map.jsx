// world_map.js

// Sample GeoJSON data for a simple world map
export const world_map = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "United States" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-101.6015625, 39.36827914916011],
              [-100.6015625, 38.685509760012],
              [-98.61328125, 38.788345355085625],
              [-97.734375, 40.17887331434696],
              [-96.328125, 41.178653972331674],
              [-101.6015625, 39.36827914916011]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: { name: "Canada" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-110.7421875, 60.930432202923335],
              [-109.1015625, 61.60639637138628],
              [-105.46875, 62.47172366519234],
              [-107.2265625, 63.23362741232569],
              [-110.7421875, 60.930432202923335]
            ]
          ]
        }
      },
      // Add more countries or regions here
    ]
  };
  