import ImageSlider from "@/components/ImageSlider";
import { Experience } from "@/components/virtualAssitant/Experience";
import MainIncomeSources from "@/view/MainIncomeSources";

export default function Home() {
  return (
    <main className="h-screen min-h-screen">
      <Experience />
      {/* <div >
        <MainIncomeSources />
      </div> */}
    </main>
  );
}