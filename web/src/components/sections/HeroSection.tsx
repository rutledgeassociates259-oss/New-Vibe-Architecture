import Navbar from "@/components/Navbar";
import CTAButton from "@/components/CTAButton";

export default function HeroSection() {
  return (
    <section
      className="relative px-2 sm:py-16 md:py-20 overflow-hidden bg-top bg-no-repeat min-h-[720px]"
      id="hero"
      style={{ backgroundImage: "url(/hero/bg.png)", backgroundSize: "cover", backgroundPosition: "bottom center" }}
    >
      <Navbar />
      <div className="relative h-[80vh] mt-10 sm:mt-16 md:mt-20 z-10  mx-auto text-center  flex flex-col justify-center item-center font-hero">
        <h1 className="mx-auto max-w-4xl text-white text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
          Take Control Of Your
          <br className="hidden sm:block" />
          AI Builds
        </h1>
        <p className="mx-auto mt-4 text-xl leading-relaxed max-w-2xl text-zinc-300">
          Vibe Architect captures every decision — every prompt, stack, and safeguard — so when your project pivots, you can rebuild the exact same app in hours, not weeks.  No chaos. No drift. Just reliable, repeatable creation.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton href="#contact" className="text-lg px-6 pl-4 pr-4">Start Architecting Today</CTAButton>
        </div>
      </div>
    </section>
  );
}
