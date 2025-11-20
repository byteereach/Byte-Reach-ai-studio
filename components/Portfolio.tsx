import React from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems: PortfolioItem[] = [
  { id: '1', category: 'Web Design', title: 'E-Commerce Redesign', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: '2', category: 'Social Media', title: 'Fashion Brand Launch', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: '3', category: 'Ad Campaign', title: 'Tech SaaS Growth', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: '4', category: 'Branding', title: 'Real Estate Identity', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: '5', category: 'SEO', title: 'Organic Traffic Boost', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: '6', category: 'Video', title: 'Viral Reels Strategy', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-deep-teal text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-neon-yellow font-bold text-sm uppercase tracking-widest mb-2">Our Portfolio</h2>
            <h3 className="text-4xl font-display font-bold">Recent Work</h3>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border border-neon-yellow text-neon-yellow rounded-full hover:bg-neon-yellow hover:text-deep-teal transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-card">
              {/* Image Background with Zoom Effect */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient Overlay - darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal via-deep-teal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              
              {/* Text Reveal Content - Slides up and fades in */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-deep-teal bg-neon-yellow rounded-full shadow-sm">
                    {item.category}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <h4 className="text-2xl font-bold text-white leading-tight">{item.title}</h4>
                    <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm text-neon-yellow shrink-0 hover:bg-white/20 transition-colors">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};