import Image from "next/image";
import { navItems } from "@/data";
import Hero from "../../components/com/Hero";
import Grid from "@/components/com/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/com/RecentProjects";
export default function Home() {
  return (
   <main className="relative flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div className="max-w-7xl w-full " >
      <FloatingNav navItems={navItems} />
      <Hero></Hero>
      <Grid />
      <RecentProjects></RecentProjects>
    </div>
   </main>
  );
}
