import React from 'react';
import { Target, Eye, BarChart3 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-yellow rounded-tl-3xl z-0"></div>
              <img
                src="https://picsum.photos/800/600?grayscale"
                alt="Team working on strategy"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-teal p-8 rounded-br-3xl shadow-xl z-20 max-w-xs hidden md:block">
                <p className="text-neon-yellow font-bold text-4xl mb-2">100%</p>
                <p className="text-white font-medium">Commitment to ROI and transparent reporting.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-neon-yellow bg-deep-teal px-4 py-1 rounded-full inline-block text-sm font-bold uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-4xl font-display font-bold text-deep-teal mb-6">
                Data-Driven. <br />
                ROI-Focused. <br />
                <span className="text-neutral-grey">Transparent.</span>
              </h3>
              <p className="text-neutral-grey text-lg leading-relaxed">
                Bytereach Marketing Media isn't just another agency. We are your growth engine.
                We believe that marketing should be an investment, not an expense. Our team blends creative storytelling
                with rigorous data analysis to ensure every campaign delivers measurable impact.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Target className="w-6 h-6 text-deep-teal" />, title: "Strategic Precision", desc: "We don't guess. We analyze, plan, and execute with pinpoint accuracy." },
                { icon: <Eye className="w-6 h-6 text-deep-teal" />, title: "Complete Transparency", desc: "No hidden fees or confusing metrics. Just clear, honest results." },
                { icon: <BarChart3 className="w-6 h-6 text-deep-teal" />, title: "Long-Term Growth", desc: "We build sustainable systems that scale with your business." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-neon-yellow p-3 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-teal text-lg">{item.title}</h4>
                    <p className="text-neutral-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};