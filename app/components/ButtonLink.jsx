import Link from "next/link";

export default function ButtonLink({ title, route, ...className }) {
  return (
    <Link
      href={route}
      className={`w-auto h-12 p-4 flex items-center justify-center  bg-inherit font-bold text-white text-[20px] hover:shadow-2xl border-[1px] border-[#03FFCC] hover:bg-[#005ED0] 
      hover:ease-in-out hover:transition-all ${className}`}
    >
      {title}
    </Link>
  );
}
