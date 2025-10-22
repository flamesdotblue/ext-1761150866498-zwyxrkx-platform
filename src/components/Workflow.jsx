const steps = [
  {
    step: '01',
    title: 'Sample in',
    desc: 'Ship or upload digital QC. We support saliva, blood, tissue, and pre‑extracted DNA.'
  },
  {
    step: '02',
    title: 'Sequencing',
    desc: 'High‑throughput platforms with adaptive run planning and real‑time QC.'
  },
  {
    step: '03',
    title: 'Analysis',
    desc: 'Alignment, variant calling, annotation, and AI‑assisted interpretation.'
  },
  {
    step: '04',
    title: 'Report & APIs',
    desc: 'Interactive reports, automated summaries, and secure API delivery.'
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            From sample to insight
          </h2>
          <p className="mt-3 text-white/70">A transparent pipeline designed for speed, scale, and quality.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-sm text-white/50">{s.step}</div>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
