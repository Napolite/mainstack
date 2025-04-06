import { ChartContainer } from "@mui/x-charts/ChartContainer";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function GraphComponent() {
  return (
    <>
      <ChartContainer
        width={765.21}
        height={300}
        series={[{ type: "line", data: pData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: "#8884d8",
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: "#8884d8",
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        {/* <MarkPlot /> */}
      </ChartContainer>
      <div className="w-[47.826rem] mt-[-40px]">
        <div className="w-full h-[1px] bg-[#56616B]"></div>
        <div className="flex justify-between w-full h-[2.5rem] items-center w-full text-[#56616B] text-[16px] font-[500]">
          <div>April 01</div>
          <div>April 30</div>
        </div>
      </div>
    </>
  );
}
