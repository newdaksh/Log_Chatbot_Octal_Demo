import React from 'react';
import { Github, Book, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">LogIntel AI</h3>
            <p className="text-slate-500 text-sm">Turning logs into answers since 2025.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Book size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
          © 2025 LogIntel AI Internal Tool. Proposal Draft v1.0.
        </div>
      </div>
    </footer>
  );
};