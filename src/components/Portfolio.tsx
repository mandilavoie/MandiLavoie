import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'art' | 'writing'>('all');

  const filteredItems = filter === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-4">Digital <span className="text-turquoise-glow">Gallery</span></h2>
            <p className="text-white/50 max-w-md">An curated selection of my visual art and speculative fiction portfolios.</p>
          </div>

          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-full">
            {(['all', 'art', 'writing'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  filter === type 
                    ? 'bg-hot-pink text-white shadow-lg shadow-hot-pink/20' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="px-3 py-1 bg-hot-pink rounded text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-medium mb-2 group-hover:text-canary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
