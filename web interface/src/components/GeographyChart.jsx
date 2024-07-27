// src/components/GeographyChart.jsx
import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { madhyaPradeshGeoFeatures } from "../data/mockGeoFeatures"; // Ensure the path is correct
import { tokens } from "../theme";
import { madhyaPradeshData as data } from "../data/mockData"; // Ensure the path is correct

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={madhyaPradeshGeoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]} // Adjust based on your data
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 100 : 150} // Adjust for better zoom
      projectionTranslation={isDashboard ? [0.5, 0.5] : [0.5, 0.5]} // Center on Madhya Pradesh
      projectionRotation={[0, 0, 0]} // Adjust if needed
      borderWidth={1.5}
      borderColor="#ffffff"
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
