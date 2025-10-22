import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto h-full px-6">
        <div className="flex h-full flex-col items-start justify-center max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            GATC • Next‑Gen DNA Sequencing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Decode life with
            <span className="block bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              precision genomics
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            GATC delivers clinical‑grade sequencing, analytics, and secure reporting to accelerate discovery and personalized medicine.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-black font-medium">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#workflow" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
