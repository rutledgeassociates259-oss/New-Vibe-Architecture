import Image from "next/image";

export default function UseCasesSection() {
  const cases = [
    {
      role: "Role 1",
      title: "Freelancers & Agencies",
      desc: "Deliver repeatable AI builds — stop losing money on rework.",
      img: "/useCases/usecase1.png",
    },
    {
      role: "Role 2",
      title: "Educators & Trainers",
      desc: "Teach structured, ethical AI collaboration.",
      img: "/useCases/usecase2.png",
    },
    {
      role: "Role 3",
      title: "Product Teams & Innovators",
      desc: "Align developers, designers, and AI agents under one reproducible system.",
      img: "/useCases/usecase3.png",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden isolate" id="use-cases">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-[#070C20]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Large ghost heading behind */}
        <div className="relative mb-2">
          <div className=" top-10 left-0 right-0 text-center select-none">
              <span
              className="font-hero text-transparent text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
            >
              Case <span className="text-white/20 text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px]">Study</span>
            </span>
          </div>
          <h2 className="font-hero text-white text-3xl md:text-5xl font-extrabold leading-tight text-center">Who It’s For</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center">
          {cases.map((c) => (
            <div
              key={c.title}
              className="relative flex flex-col items-start px-[22.41px] py-[24.65px] gap-[44.82px] md:w-[396.58px] w-full h-[330.47px] rounded-[20.1688px] bg-gradient-to-b from-[rgba(7,12,32,0.07)] to-[rgba(167,139,250,0.5)] backdrop-blur-md"
            >
              {/* Icon inside card, top-left */}
              <div className="h-16 w-16 rounded-xl bg-white/10 ring-1 ring-white/20 shadow-[0_0_24px_rgba(139,92,246,0.45)] backdrop-blur-md flex items-center justify-center">
                <Image src={c.img} alt={c.title} width={44} height={44} />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-[#9F8CF7]">{c.role}</p>
                <h3 className="font-hero text-base sm:text-lg text-white">{c.title}</h3>
                <p className="text-sm text-zinc-300">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}