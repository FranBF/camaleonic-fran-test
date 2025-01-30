import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-y-4 p-4 row-start-2 items-center justify-center  w-full h-full">
        <AnimatedSection></AnimatedSection>
        <div className="w-11/12 md:w-3/4 self-center h-64 md:h-[15vh] rounded-lg bg-[#04AEB7]"></div>
        <div className="w-11/12 md:w-3/4 self-center h-64 md:h-[15vh] rounded-lg bg-[#04AEB7]"></div>
        <div className="w-11/12 md:w-3/4 self-center h-64 md:h-[15vh] rounded-lg bg-[#04AEB7] flex flex-col items-center justify-center">
          <p>Hola</p>
          <p>Hola</p>
        </div>
        <div className="w-full lg:h-[60vh] bg-[#1C2639]"></div>
      </main>
    </div>
  );
}
