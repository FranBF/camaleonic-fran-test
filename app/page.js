import AnimatedSection from "./components/AnimatedSection";
import ButtonLink from "./components/ButtonLink";
import AnimatedLogos from "./components/AnimatedLogos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-y-4 p-4 row-start-2 items-center justify-center  w-full h-full">
        <AnimatedSection></AnimatedSection>
        <div className="w-11/12 xl:w-3/4 self-center h-auto xl:h-[15vh] mt-12 p-12 rounded-lg bg-[#04AEB7] gap-y-8 text-center flex flex-col xl:flex-row items-center justify-between">
          <h2 className="w-full xl:w-1/3 font-bold text-white text-[25px] xl:text-[30px] text-start">
            The best Dashboard
          </h2>
          <div className="w-full xl:w-1/3 flex flex-col text-start justify-center text-white">
            <p>What will you see?</p>
            <p>✅ Wonderful dashboard</p>
            <p>✅ All of your data organized</p>
            <p>✅ Custom design</p>
            <p>✅ Real time refreshing</p>
          </div>
          <div className="w-full xl:w-1/3 flex justify-center text-center">
            <ButtonLink route="/dashboard" title="Go to Dashboard"></ButtonLink>
          </div>
        </div>
        <div className="w-11/12 xl:w-3/4 self-center h-auto gap-y-8 xl:h-[15vh] p-12 rounded-lg bg-[#04AEB7] flex flex-col xl:flex-row items-center justify-center text-center xl:justify-between">
          <h2 className="w-full xl:w-1/3 font-bold text-white text-[25px] xl:text-[30px] xl:text-start">
            The best Data Table
          </h2>
          <div className="w-full xl:w-1/3 flex flex-col xl:text-start self-center justify-items-center text-white">
            <p>What will you see?</p>
            <p>✅ Wonderful tables</p>
            <p>✅ All of your data organized in tables</p>
            <p>✅ Custom forms</p>
            <p>✅ Custom filtering</p>
          </div>
          <div className="flex w-full xl:w-1/3 justify-center">
            <ButtonLink route="/tables" title="Go to Tables"></ButtonLink>
          </div>
        </div>
        <div className="w-11/12 xl:w-3/4 self-center h-64 xl:h-[20vh] gap-y-8  rounded-lg p-8 flex flex-col items-center justify-center">
          <p className="h-1/4 w-full text-center font-bold text-[30px] xl:text-[40px]">
            Trusted by:
          </p>
          <div className="w-full flex items-center justify-center h-1/2 xl:h-3/4">
            <AnimatedLogos></AnimatedLogos>
          </div>
        </div>
        <div className="w-full py-12  h-auto px-4 bg-[#1C2639] text-center items-center justify-center flex flex-col gap-y-4">
          <h2 className="font-bold text-[30px] xl:text-[40px]">
            Play around with the most advanced Dashboard Tool
          </h2>
          <p className="mt-[-5px]">
            With a fast registration, you will be able to take advantage of this
            tool
          </p>
          <Image
            src="/image.png"
            alt="Dashboard photo"
            width={800}
            height={600}
            className="mt-12"
          ></Image>
          <ButtonLink
            route="/dashboard"
            title="Play Around"
            className="mt-8"
          ></ButtonLink>
        </div>
      </main>
    </div>
  );
}
