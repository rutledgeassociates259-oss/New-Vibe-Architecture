import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="relative" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Ghost heading */}
        <div className="text-center mb-8 leading-none">
          <span
            className="font-hero text-transparent text-[52px] md:text-[88px] font-black tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
          >
            PRICING
          </span>
          <span
            className="font-hero text-white/20 text-[52px] md:text-[88px] font-black tracking-tight"
           
          >
            {" / OFFER"}
          </span>
        </div>

        {/* Start Free — Become A Founding Architect */}
        <div
          className="relative mx-auto rounded-[28px] px-6 py-12 text-center min-h-[420px] sm:min-h-[480px] flex flex-col items-center justify-center bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{
            backgroundImage: "url(/pricing/pricingbg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-hero text-white text-[28px] sm:text-[34px] md:text-[40px] font-black">
            Become A Founding Architect
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-300">
            Be among the first 100 Founding Architects to experience the full framework.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] text-zinc-300">
           <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              7-Day Free Trial
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              Bonus: "Rebuild-Ready AI" Live Workshop
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              Founding Member Pricing — <span className=" text-decoration-line line-through">$29/month</span>  $19/month (locked for life)
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <CTAButton href="#contact">Claim Founding Access</CTAButton>
          </div>
        </div>

        {/* Join The Movement */}
        <div
          className="relative mx-auto rounded-[28px] px-6 text-center pt-20 pb-10 flex flex-col items-center justify-center bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{
            backgroundImage: "url(/pricing/jointhemovementbg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-hero text-white text-[28px] sm:text-[34px] md:text-[40px] font-black">
            Join The Movement
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-300">
            The next generation of AI builders won’t just prompt — they’ll architect.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="#contact">Sign Up Now</CTAButton>
          </div>
          <div className="mt-6 relative mx-auto w-full h-[10px] max-w-6xl">
            <Image
              src="/pricing/Line 4.png"
              alt="Section divider line"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <p className="text-[11px] text-zinc-400">
              Design and Developed by
              {" "}
              <a
                href="https://marqnetworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                MarqNetworks.com
              </a>
            </p>
          </div>
        </div>
        {/* Divider line image below the section */}



      </div>
    </section>
  );
}