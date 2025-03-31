"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

export const RadarChartWithCircleGrid = () => {
  const chart = useChart({
    data: [
      { windows: 120, month: "January" },
      { windows: 120, month: "February" },
      { windows: 80, month: "March" },
      { windows: 140, month: "May" },
      { windows: 60, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")} gridType="circle" />
        <PolarAngleAxis dataKey={chart.key("month")} />
        <PolarRadiusAxis />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
