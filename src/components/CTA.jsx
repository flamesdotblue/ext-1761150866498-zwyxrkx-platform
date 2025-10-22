export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-sky-500/10 to-emerald-400/20 p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Ready to sequence with GATC?
            </h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Talk to our team about study design, clinical validation, or enterprise deployment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded-full bg-white px-5 py-3 text-black font-medium">Request a quote</a>
              <a href="#" className="rounded-full border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
