import ButtonTestFetch from "../components/ButtonTestFetch";
import ChartLine from "../components/ChartLine";
import ChartOne from "../components/ChartOne";
import ChartScatter from "../components/ChartScatter";
import PieCharts from "../components/PieChart";

export default function Dashboard() {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-2 p-2">
      <div className="w-full h-1/2 flex flex-col xl:flex-row gap-2 items-center justify-center">
        <div className="w-full xl:w-1/2 h-[50vh] bg-[#2B2B2C] rounded-sm flex items-center justify-center flex-col">
          <h2 className="mt-12 text-[20px] xl:text-[30px]">
            How many todos has each user
          </h2>
          <ChartScatter></ChartScatter>
        </div>
        <div className="w-full xl:w-1/2 h-[50vh] flex flex-col items-center justify-center bg-[#2B2B2C] rounded-sm">
          <h2 className="mt-12 text-[20px] xl:text-[30px]">
            How many todos has each user
          </h2>
          <ChartOne></ChartOne>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col xl:flex-row gap-2 items-center justify-center">
        <div className="w-full xl:w-1/2 h-[50vh] flex flex-col items-center justify-center bg-[#2B2B2C] rounded-sm">
          <h2 className="mt-12 text-[20px] xl:text-[30px]">
            How many todos has each user
          </h2>
          <ChartLine></ChartLine>
        </div>
        <div className="w-full xl:w-1/2 h-[50vh] text-center flex flex-col items-center justify-center bg-[#2B2B2C] rounded-sm">
          <h2 className="mt-12 text-[20px] xl:text-[30px]">
            How many todos has each user {`(Pie Chart)`}
          </h2>
          <PieCharts></PieCharts>
        </div>
      </div>
    </main>
  );
}
