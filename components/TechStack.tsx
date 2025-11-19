import React from 'react';
import { TECH_STACK } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Powered by Modern Tech</h2>
            <p className="text-slate-500">Best-in-class open source tools for reliability and speed.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, index) => (
            <div key={index} className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center hover:border-slate-700 transition-colors group">
              <div className="text-sm font-mono text-brand-primary mb-1 opacity-70 group-hover:opacity-100">{tech.category}</div>
              <div className="font-bold text-white mb-1">{tech.name}</div>
              <div className="text-[10px] text-slate-500 leading-tight">{tech.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};