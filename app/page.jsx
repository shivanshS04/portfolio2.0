import HomeActions from "@/components/HomeActions";
import IntroSection from "@/components/IntroSection";

export default function page() {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 w-full h-full p-10`} >
      <IntroSection />
      <HomeActions />
    </div>
  )
}