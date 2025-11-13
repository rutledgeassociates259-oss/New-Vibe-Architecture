import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function BlueprintSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      id="blueprint"
      style={{
        backgroundImage: "url(/anchor/right.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "360px",
      }}
    >
      {/* Ghost heading on the right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 right-6 text-right select-none"></div>
        {/* Decorative background image on the right side */}
        <div className=" md:top-16 opacity-80">
          <Image
            src="/anchor/right.png"
            alt="Decorative anchor background"
           fill
            className="select-none"
            priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid items-center gap-10 md:grid-cols-2">
        {/* Left UI stack image */}
        <div className="relative z-10 flex justify-center md:justify-start">
          <Image src="/anchor/leftimage.png" alt="Blueprint UI" width={560} height={420} className="rounded-xl" />
        </div>

        {/* Right copy and CTA */}
        <div className="relative z-10 text-center">
          {/* Ghost heading above, outlined style */}
          <div className="mb-2 leading-none">
            <span
              className="font-hero text-transparent text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
            >
              ANCHOR
            </span>
          
          </div>

          <h2 className="font-hero text-white text-[36px] sm:text-[44px] md:text-[52px] font-extrabold leading-tight">Get Your Blueprint</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-zinc-300">
            Vibe Architect gives you mastery, not guesswork. Structure your brilliance,
            protect your process, and rebuild on demand.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <CTAButton href="#pricing">Get My Blueprint</CTAButton>
            {/* Soft elliptical glow under the button */}
            <div className="mt-2 h-2 w-56 rounded-full bg-[#6A56D9]/30 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}