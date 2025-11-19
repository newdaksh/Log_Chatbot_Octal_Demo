import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-glass border border-brand-glassBorder mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-gray-300 font-mono">System Status: 0.5s Latency Target Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Turn Logs into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Actionable Intelligence
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop drowning in data. Ask complex questions in plain English and get real-time answers 
          backed by multi-TB scale analytics and vector-based context.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#demo" className="group px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2">
            Try Live Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#architecture" className="px-8 py-4 bg-brand-glass border border-brand-glassBorder text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            View Architecture
          </a>
        </div>

        {/* Visual Decorator */}
        <div className="mt-16 mx-auto max-w-4xl bg-brand-dark/50 backdrop-blur-md border border-brand-glassBorder rounded-t-2xl p-2 shadow-2xl shadow-brand-primary/20">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-xs text-slate-500 font-mono">LogIntel_Agent — v2.0.1</div>
          </div>
          <div className="p-6 font-mono text-left text-sm md:text-base">
            <div className="text-slate-400">$ query --last 1h --service "payment" --error-rate</div>
            <div className="text-brand-accent mt-2">{`> Analyzing 1.2M events...`}</div>
            <div className="text-brand-primary mt-1">{`> Found 3 critical anomalies in 'payment-service'.`}</div>
            <div className="text-slate-300 mt-1">{`> 14:32:01 [CRITICAL] Connection timeout upstream.`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};