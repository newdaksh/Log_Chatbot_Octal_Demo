import React from 'react';
import { Database, Server, Layers, Cpu, Search, FileText, ArrowRight } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streaming-First Hybrid Architecture</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combining the speed of in-memory structures with the depth of columnar OLAP.
            Designed for 0.5s latency on recent data and massive scalability for history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Column 1: Ingest */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center h-full flex flex-col items-center justify-center relative group hover:border-brand-primary/50 transition-colors">
              <Layers className="w-10 h-10 text-indigo-400 mb-3" />
              <h3 className="font-bold text-white mb-1">Collectors</h3>
              <p className="text-xs text-slate-500">FluentBit / SDKs</p>
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="text-slate-600" size={20} />
              </div>
            </div>
          </div>

          {/* Column 2: Streaming Core */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center h-full flex flex-col items-center justify-center relative group hover:border-brand-primary/50 transition-colors">
              <Server className="w-10 h-10 text-brand-primary mb-3" />
              <h3 className="font-bold text-white mb-1">Streaming Bus</h3>
              <p className="text-xs text-slate-500">Kafka / Kinesis</p>
              <p className="text-[10px] text-slate-600 mt-2">Reliable Partitioning</p>
            </div>
          </div>

          {/* Column 3: Processing & Storage Split */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Hot Path */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-brand-accent/30 text-center relative hover:bg-slate-900 transition-colors">
               <div className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
               <Cpu className="w-8 h-8 text-brand-accent mx-auto mb-2" />
               <h3 className="font-bold text-white text-sm">Hot Tier (RAM)</h3>
               <p className="text-[10px] text-slate-400">Redis Ring Buffers (Last 6h)</p>
            </div>

            {/* Stream Processor */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
               <Layers className="w-8 h-8 text-orange-400 mx-auto mb-2" />
               <h3 className="font-bold text-white text-sm">Stream Proc</h3>
               <p className="text-[10px] text-slate-400">Flink Rollups</p>
            </div>

            {/* Warm Path */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
               <Database className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
               <h3 className="font-bold text-white text-sm">Warm OLAP</h3>
               <p className="text-[10px] text-slate-400">ClickHouse (30d)</p>
            </div>
          </div>

          {/* Column 4: Intelligence & Orchestration */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-brand-secondary/20 to-slate-900 p-6 rounded-xl border border-brand-secondary/30 text-center h-full flex flex-col items-center justify-center relative">
              <Search className="w-10 h-10 text-brand-secondary mb-3" />
              <h3 className="font-bold text-white mb-1">AI Orchestrator</h3>
              <p className="text-xs text-slate-400 mb-4">FastAPI + LangChain</p>
              
              <div className="w-full bg-black/40 rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={12} className="text-gray-400"/>
                  <span className="text-[10px] text-gray-300">Vector DB (Context)</span>
                </div>
                <div className="flex items-center gap-2">
                   <Database size={12} className="text-gray-400"/>
                   <span className="text-[10px] text-gray-300">SQL Generator</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};