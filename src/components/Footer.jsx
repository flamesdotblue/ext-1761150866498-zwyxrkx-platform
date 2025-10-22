export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-400 via-sky-400 to-emerald-300" />
          <div>
            <p className="font-semibold">GATC</p>
            <p className="text-xs text-white/60">Genomics at the speed of insight</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#workflow">Workflow</a>
          <a className="hover:text-white" href="#">Security</a>
          <a className="hover:text-white" href="#">Contact</a>
        </nav>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} GATC Genomics, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
