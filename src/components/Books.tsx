import { BOOKS } from '../constants';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';

export default function Books() {
  return (
    <section id="books" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">The <span className="text-fuchsia-vibrant">Sagas</span></h2>
          <p className="text-white/50 max-w-lg mx-auto">Explore the deep reaches of space and the hidden depths of magic through my published works.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BOOKS.map((book, i) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 glass-card p-6 md:p-10"
            >
              <div className="w-full md:w-1/3 aspect-[2/3] rounded-lg overflow-hidden shrink-0 shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-500">
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 text-canary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-white/40 text-xs ml-2 uppercase font-bold tracking-widest">Bestseller</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{book.title}</h3>
                <span className="text-turquoise-glow text-sm font-bold uppercase tracking-widest mb-6 block">
                  {book.genre}
                </span>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {book.description}
                </p>
                <div className="mt-auto flex gap-4">
                  <button className="flex-1 bg-white text-indigo-deep font-bold py-3 rounded-lg hover:bg-canary transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={18} /> BUY NOW
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all">
                    SAMPLE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
