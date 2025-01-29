import Image from "next/image";
import ButtonMenu from "./ButtonMenu";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-4 items-center w-full bg-[#1C2639] min-h-16">
      <div className="flex gap-x-4 items-center">
        <Image
          src="/logotop.png"
          height={35}
          width={35}
          alt="Logo Camaleonic"
        ></Image>
        <h1 className="font-bold text-[22px] hidden md:block">
          CAMALEONIC ANALYTICS
        </h1>
      </div>
      <ButtonMenu></ButtonMenu>
    </nav>
  );
}
