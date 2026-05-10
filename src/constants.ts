export interface Book {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  genre: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: 'writing' | 'art';
  imageUrl: string;
  description: string;
}

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Nebula Chronicles: The First Light',
    description: 'A deep-space odyssey where ancient magic meets cold technology in the heart of a dying star.',
    coverUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600&h=900',
    genre: 'Sci-Fi Fantasy'
  },
  {
    id: '2',
    title: 'Echoes of the Turquoise Realm',
    description: 'A portal fantasy following a linguist who discovers a world made of light and indigo shadows.',
    coverUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=900',
    genre: 'Epic Fantasy'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Indigo Guardian',
    type: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=1000',
    description: 'A digital painting exploring the fusion of bioluminescent nature and robotic architecture.'
  },
  {
    id: 'p2',
    title: 'Cyber-Fae of the Fuchsia District',
    type: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800&h=1000',
    description: 'Character design for a sci-fi fantasy hybrid underworld.'
  },
  {
    id: 'p3',
    title: 'Fractures in the Grid',
    type: 'writing',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800&h=1000',
    description: 'A short story collection centered on memory-thieves in a neon-drenched future.'
  },
  {
    id: 'p4',
    title: 'The Turquoise Gate',
    type: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=800&h=1000',
    description: 'Environment study of an interdimensional entryway.'
  }
];

export const SERVICES = [
  {
    title: 'Creative Consultation',
    description: 'World-building and narrative structure for sci-fi and fantasy writers.',
    icon: 'Sparkles'
  },
  {
    title: 'Concept Art',
    description: 'Visual development for characters and environments.',
    icon: 'Palette'
  },
  {
    title: 'Manuscript Critique',
    description: 'Deep dives into pacing, tone, and genre-specific tropes.',
    icon: 'BookOpen'
  }
];
