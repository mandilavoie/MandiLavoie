import { SERVICES } from '../constants';
import { Sparkles, Palette, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const icons = {
  Sparkles,
  Palette,
  BookOpen
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold mb-6 leading-tight">Creative <br /> <span className="text-hot-pink">Alchemy</span></h2>
            <p className="text-white/50 mb-8 max-w-md">
              Beyond my own worlds, I help other creators refine their visions through dedicated consultation and visual development.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-canary font-bold tracking-widest hover:translate-x-2 transition-transform">
              VIEW ALL SERVICES <ExternalLink size={16} />
            </a>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = icons[service.icon as keyof typeof icons] || Sparkles;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hot-pink/10 blur-[40px] -mr-16 -mt-16 group-hover:bg-hot-pink/20 transition-colors" />
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-canary mb-6 group-hover:scale-110 transition-transform border border-white/10">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <button className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    Learn More <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-white transition-all" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
