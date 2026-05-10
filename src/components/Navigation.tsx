import { motion } from 'motion/react';
import { Menu, X, Rocket, Palette, BookOpen, User } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Books', href: '#books', icon: Rocket },
    { name: 'Portfolio', href: '#portfolio', icon: Palette },
    { name: 'Services', href: '#services', icon: BookOpen },
    { name: 'About', href: '#about', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-indigo-deep/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#"
          className="text-2xl font-display font-bold text-white tracking-widest flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-hot-pink via-fuchsia-vibrant to-turquoise-glow group-hover:rotate-180 transition-transform duration-700" />
          NEBULA<span className="text-canary">PATH</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-canary transition-colors flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <item.icon size={16} />
              {item.name}
            </motion.a>
          ))}
          <motion.button 
            className="px-5 py-2 rounded-full border border-hot-pink text-hot-pink text-sm font-bold hover:bg-hot-pink hover:text-white transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden absolute top-20 left-0 w-full bg-indigo-deep border-b border-white/10 p-6 flex flex-col gap-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white flex items-center gap-4"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="text-turquoise-glow" />
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
