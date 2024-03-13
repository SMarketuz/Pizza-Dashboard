import Main from "@/components/main";
import Menu from "@/components/menu";
import Sidebar from "@/components/sidebars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%] flex ">
      <div className="w-[19%] base:hidden 3xl:flex">
        <Sidebar />
      </div>
      <div className="2xl:w-[70%] base:w-[100%]">
        <Main />
      </div>
      <div className="2xl:w-[30%] 3xl:w-[25%] base:hidden 2xl:flex">
        <Menu />
      </div>
    </main>
  );
}
