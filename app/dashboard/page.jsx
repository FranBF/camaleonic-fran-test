import ButtonTestFetch from "../components/ButtonTestFetch";
import ChartOne from "../components/ChartOne";
import ChartPie from "../components/ChartPie";

export default function Dashboard() {
  return (
    <main className="flex flex-col w-full h-[calc(100vh-10vh)] items-center justify-center gap-2 p-2">
      <div className="w-full h-1/2 flex flex-row gap-x-2">
        <div className="w-1/2 h-full bg-[#2B2B2C] rounded-sm flex items-center justify-center">
          {/* <ChartPie></ChartPie> */}
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-[#2B2B2C] rounded-sm">
          <h2 className="mt-12 text-[30px]">How many todos has each user</h2>
          <ChartOne></ChartOne>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row gap-x-2">
        <div className="w-1/2 h-full bg-[#2B2B2C] rounded-sm"></div>
        <div className="w-1/2 h-full bg-[#2B2B2C] rounded-sm"></div>
      </div>
    </main>
  );
}
