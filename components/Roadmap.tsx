import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { PHASES } from '../constants';

export const Roadmap: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Roadmap</h2>
          <p className="text-slate-400">A structured approach from MVP to Enterprise Scale.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {PHASES.map((phase, index) => (
            <div key={index} className="flex gap-6 mb-12 relative last:mb-0">
              {/* Connecting Line */}
              {index !== PHASES.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-[-48px] w-0.5 bg-slate-800"></div>
              )}
              
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center z-10">
                {index < 2 ? (
                  <CheckCircle2 className="text-brand-accent" size={20} />
                ) : index === 2 ? (
                   <Clock className="text-brand-primary animate-pulse" size={20} />
                ) : (
                  <Circle className="text-slate-600" size={20} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <span className="text-xs font-mono text-brand-primary uppercase tracking-wider">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-xs text-slate-400 font-mono whitespace-nowrap">
                    {phase.timeline}
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};