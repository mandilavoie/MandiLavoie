import { motion, useScroll, useSpring } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Books from './components/Books';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Mail, Github, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Custom Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-hot-pink via-canary to-turquoise-glow z-[60] origin-left" style={{ scaleX }} />
      
      <Navigation />
      
      <main>
        <Hero />
        <Books />
        <Portfolio />
        <Services />

        {/* About Section */}
        <section id="about" className="py-32 px-6 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-hot-pink/20 blur-[100px] -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000&h=1000" 
                alt="The Author"
                className="w-full aspect-square object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/20"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-bold mb-8 italic">The <span className="text-canary">Weaver</span> of Shadows</h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  I am a world-builder and narrative explorer obsessed with the fine line between the arcane and the advanced. 
                  My work lives in the static between dimensions, where neon lights illuminate ancient scrolls.
                </p>
                <p>
                  With ten years in speculative fiction and digital art, I bring a unique hybrid perspective to every project I undertake. 
                  I believe that the best sci-fi is grounded in human emotion, and the best fantasy is elevated by structural depth.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-display font-bold text-white">12+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-turquoise-glow">Novels Published</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-white">50k+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-vibrant">Global Readers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-hot-pink/20 via-transparent to-turquoise-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Start Your Journey <br /> <span className="text-gradient">With Me Today.</span></h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto relative z-10">
              Whether you're looking for a new read, a creative collaborator, or a bespoke art piece, my portal is always open.
            </p>
            <button className="px-10 py-5 rounded-full bg-white text-indigo-deep font-bold tracking-widest hover:scale-110 transition-transform flex items-center gap-3 mx-auto relative z-10">
               SEND A TRANSMISSION <ArrowUpRight />
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-xl tracking-widest">
            NEBULA<span className="text-canary">PATH</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-hot-pink/20 hover:text-hot-pink transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-fuchsia-vibrant/20 hover:text-fuchsia-vibrant transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-turquoise-glow/20 hover:text-turquoise-glow transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-canary/20 hover:text-canary transition-all">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-white/30 text-xs font-bold tracking-widest uppercase">
            © 2026 Nebula Path • All Dimensions Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
