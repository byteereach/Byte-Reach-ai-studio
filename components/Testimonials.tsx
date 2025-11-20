import React from 'react';
import { TestimonialItem } from '../types';
import { Quote } from 'lucide-react';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'BrightStart',
    content: 'Bytereach completely transformed our digital presence. Their strategic approach to SEO and ads doubled our inbound leads in just 4 months.',
    avatar: 'https://picsum.photos/100/100?random=20'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder',
    company: 'TechFlow',
    content: 'Professional, transparent, and incredibly skilled. The team explained every step of the process and the results speak for themselves.',
    avatar: 'https://picsum.photos/100/100?random=21'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Director',
    company: 'Urban Style',
    content: 'The best agency investment we have made. Their creative team nailed our brand voice, and the ad performance is through the roof.',
    avatar: 'https://picsum.photos/100/100?random=22'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-deep-teal mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-neon-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-soft-white p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-deep-teal/10 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-neon-yellow" />
                <div>
                  <h4 className="font-bold text-deep-teal text-lg">{t.name}</h4>
                  <p className="text-sm text-neutral-grey">{t.role}, {t.company}</p>
                </div>
              </div>
              <p className="text-deep-teal leading-relaxed italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};