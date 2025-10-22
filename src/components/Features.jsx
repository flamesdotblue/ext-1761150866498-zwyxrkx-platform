import { FlaskConical, Microscope, ShieldCheck, Cpu } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Clinical‑grade accuracy',
    desc: 'Validated pipelines, high coverage depth, and rigorous QC for confident calls.'
  },
  {
    icon: Cpu,
    title: 'AI‑powered insights',
    desc: 'Variant prioritization and phenotype matching to accelerate interpretation.'
  },
  {
    icon: FlaskConical,
    title: 'Flexible workflows',
    desc: 'WGS, WES, targeted panels, RNA‑seq, and methylation with rapid turnaround.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise‑grade security',
    desc: 'End‑to‑end encryption, role‑based access, and compliant data governance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#07070A]">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why choose <span className="bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">GATC</span>
          </h2>
          <p className="mt-4 text-white/75">
            An end‑to‑end sequencing platform designed for researchers, diagnostics labs, and biotech teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20 transition-colors">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-5 w-5 text-fuchsia-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
