import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-vibrant/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-turquoise-glow/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-canary text-xs font-bold tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Author • Artist • Visionary
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
            Crafting Worlds <br />
            <span className="text-gradient">Beyond the Event Horizon.</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Welcome to my digital enclave. Explore my sci-fi fantasy sagas, 
            extraordinary visual works, and creative services designed for the modern explorer.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-hot-pink hover:bg-hot-pink/80 text-white font-bold transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-hot-pink/20">
              EXPLORE WORKS <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold transition-all cursor-pointer">
              MY PORTFOLIO
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="relative aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-hot-pink/30 to-turquoise-glow/30 rounded-3xl blur-[40px] opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000&h=1000" 
            alt="Hero Visual"
            className="w-full h-full object-cover rounded-3xl border border-white/20 relative z-10 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          {/* Floating Element */}
          <motion.div 
            className="absolute -bottom-10 -left-10 glass-card p-6 z-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-canary/20 flex items-center justify-center text-canary">
                <Rocket size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-bold uppercase tracking-widest">New Release</p>
                <p className="font-display font-medium">Nebula Chronicles</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Rocket({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-4 5-4" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 4-5 4-5" />
    </svg>
  );
}
