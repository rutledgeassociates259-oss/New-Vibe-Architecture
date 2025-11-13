import CTAButton from "@/components/CTAButton";

export default function SolutionSection() {
  const steps = [
    { label: "Design", title: "Blueprint Every Build", desc: "Capture requirements, logic, and design checkpoints in one unified template." },
    { label: "Define", title: "Guardrails & Governance", desc: "Define ethical, functional, and creative boundaries for consistent results." },
    { label: "Document", title: "Prompt Vault", desc: "Store, tag, and reuse prompts with full metadata." },
    { label: "Deploy", title: "Design Tokens", desc: "Save aesthetic systems for exact visual reproduction." },
    { label: "Rebuild", title: "Rebuild on Demand", desc: "Feed the framework back into your AI agent and recreate your entire app instantly." },
  ];

  return (
    <section
      className="relative min-h-[100vh] pb-12 sm:pb-16 md:pb-20 overflow-hidden"
      id="solution"
      style={{ backgroundImage: "url(/solution/bg.png)", backgroundSize: "70%", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-[#070C20]/40" />
      <div className="relative flex flex-col justify-center items-center gap-6 z-10 max-w-7xl mx-auto text-center">
        <div className="mb-2 leading-none">
          <span
            className="font-hero text-transparent text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
          >
            The
          </span>

          <span
            className="ml-4 font-hero text-white/20 text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
          >
            Solution
          </span>
        </div>
        <h2 className="font-hero text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          The Framework That Makes AI
          <br className="hidden sm:block" />
          Reproducible
        </h2>
        {/* <div className="mx-auto m h-6 w-px bg-white/25" /> */}
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-8 max-w-6xl right-4 top-12 h-px bg-white/15 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(({ label, title, desc }) => (
              <div key={label} className="text-center">
                <div className="mx-auto h-6 w-px bg-white/20" />
                <div className="mx-auto w-44 rounded-full bg-gradient-to-b from-white/25 to-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm ring-1 ring-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_20px_rgba(7,12,32,0.45)]">
                  {label}
                </div>
                <div className="mx-auto h-10 w-px bg-white/20" />
                <div className=" mx-auto p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-md shadow-[0_0_24px_rgba(139,92,246,0.35)]">
                  <div className="h-[100px] rounded-[18px] bg-white/95 text-[#1A1F2E] p-2 shadow-[0_6px_20px_rgba(7,12,32,0.25)] ring-1 ring-white/60">
                    <h3 className="font-hero  text-[14px] font-bold text-[#0B1020]">{title}</h3>
                    <p className="mt-2 text-[12px] text-[#3A4056]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-10 flex justify-center">
          <CTAButton href="#blueprint">Get Started For Free</CTAButton>
        </div>
      </div>
    </section>
  );
}