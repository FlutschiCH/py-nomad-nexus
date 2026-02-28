import React from 'react';
import { Globe, DollarSign, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-emerald-950/10 border-emerald-900/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 flex flex-col items-start text-left">
    <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-zinc-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-white tracking-tight font-semibold mb-4">
          Explore My Journey
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Delving into the worlds of Python development, financial markets, and global exploration.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Code}
          title="Python Development"
          description="Crafting robust and efficient software solutions with a focus on backend systems, data analysis, and automation."
        />
        <FeatureCard
          icon={DollarSign}
          title="Algorithmic Trading"
          description="Leveraging quantitative analysis and Python to develop automated trading strategies and manage financial portfolios."
        />
        <FeatureCard
          icon={Globe}
          title="Global Traveler"
          description="Documenting adventures and insights from around the world, blending technology with cultural exploration."
        />
      </div>
    </section>
  );
};
