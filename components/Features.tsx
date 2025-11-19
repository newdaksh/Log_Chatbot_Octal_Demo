import React from 'react';
import { Zap, Database, Brain, ShieldCheck, Clock, BarChart3 } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  "Zap": <Zap className="text-yellow-400" size={28} />,
  "Database": <Database className="text-blue-400" size={28} />,
  "Brain": <Brain className="text-purple-400" size={28} />,
  "ShieldCheck": <ShieldCheck className="text-emerald-400" size={28} />,
  "Clock": <Clock className="text-orange-400" size={28} />,
  "BarChart3": <BarChart3 className="text-pink-400" size={28} />
};

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 group">
              <div className="mb-4 p-3 bg-slate-950 rounded-xl w-fit border border-slate-800 group-hover:scale-110 transition-transform">
                {iconMap[feature.icon] || <Zap size={28} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};