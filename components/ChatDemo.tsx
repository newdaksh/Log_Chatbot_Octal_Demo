import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChatMessage, Sender, MessageType } from '../types';
import { DEMO_SCENARIOS } from '../constants';

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: Sender.BOT,
      type: MessageType.TEXT,
      content: "Hi! I'm LogIntel. I can query TBs of logs in milliseconds. Try asking about error rates or specific logs.",
      timestamp: Date.now()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Use a ref for the scrollable container instead of a dummy element
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(scrollToBottom, [messages, isTyping, isFullscreen]);

  const handleScenarioClick = (scenarioIndex: number) => {
    if (isTyping) return;

    const scenario = DEMO_SCENARIOS[scenarioIndex];
    
    // Add User Message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: Sender.USER,
      type: MessageType.TEXT,
      content: scenario.query,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate Network Delay
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: Sender.BOT,
        type: scenario.responseType as MessageType,
        content: scenario.responseText,
        data: scenario.data,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200); // 1.2s delay for realism
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const containerClass = isFullscreen 
    ? "fixed inset-0 z-[100] w-full h-full bg-slate-950 flex flex-col"
    : "bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col relative";

  return (
    <section id="demo" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Real-Time Intelligence</h2>
          <p className="text-slate-400">Click a scenario below to see the RAG + Tool-based architecture in action.</p>
        </div>

        {/* Chat Interface Container */}
        <div className={containerClass}>
          
          {/* Header */}
          <div className="bg-slate-950 border-b border-slate-800 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white">LogIntel Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-slate-400">Connected to Hot Tier</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMessages([messages[0]])}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                title="Reset Chat"
              >
                <RefreshCw size={18} />
              </button>
              <button 
                onClick={toggleFullscreen}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                title={isFullscreen ? "Minimize View" : "Enlarge View"}
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.sender === Sender.USER ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.sender === Sender.USER ? 'bg-indigo-600' : 'bg-brand-primary/20 text-brand-primary'
                }`}>
                  {msg.sender === Sender.USER ? <User size={16} /> : <Bot size={16} />}
                </div>
                
                <div className={`flex flex-col max-w-[85%] sm:max-w-[70%] ${msg.sender === Sender.USER ? 'items-end' : 'items-start'}`}>
                  <div className={`p-4 rounded-2xl ${
                    msg.sender === Sender.USER 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-none'
                  }`}>
                    <p className="leading-relaxed whitespace-pre-line">{msg.content}</p>
                  </div>

                  {/* Rich Content: Line Chart */}
                  {msg.type === MessageType.CHART_LINE && msg.data && (
                    <div className="mt-4 w-full h-64 bg-slate-950 rounded-xl border border-slate-800 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={msg.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} 
                          />
                          <Line type="monotone" dataKey="count" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                   {/* Rich Content: Bar Chart */}
                   {msg.type === MessageType.CHART_BAR && msg.data && (
                    <div className="mt-4 w-full h-64 bg-slate-950 rounded-xl border border-slate-800 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={msg.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} 
                            cursor={{fill: 'rgba(255,255,255,0.05)'}}
                          />
                          <Bar dataKey="count" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Rich Content: Table */}
                  {msg.type === MessageType.LOG_TABLE && msg.data && (
                    <div className="mt-4 w-full overflow-x-auto bg-slate-950 rounded-xl border border-slate-800">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                          <tr>
                            <th className="p-3">Time</th>
                            <th className="p-3">Level</th>
                            <th className="p-3">Message</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {msg.data.map((log: any) => (
                            <tr key={log.id} className="hover:bg-slate-900/50 transition-colors">
                              <td className="p-3 text-slate-500 whitespace-nowrap">{log.time}</td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  log.level === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 
                                  log.level === 'ERROR' ? 'bg-orange-500/20 text-orange-400' : 
                                  log.level === 'WARN' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {log.level}
                                </span>
                              </td>
                              <td className="p-3 text-slate-300">{log.msg}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  <span className="text-xs text-slate-600 mt-2 px-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex-shrink-0 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-slate-950 p-4 border-t border-slate-800 shrink-0">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
              {DEMO_SCENARIOS.map((scenario, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScenarioClick(idx)}
                  disabled={isTyping}
                  className="whitespace-nowrap px-4 py-2 bg-slate-900 border border-slate-700 hover:border-brand-primary/50 hover:bg-slate-800 rounded-full text-sm text-slate-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {scenario.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Ask a question about your logs..."
                disabled={isTyping}
                className="w-full bg-slate-900 text-white rounded-xl pl-4 pr-12 py-4 border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all disabled:opacity-50"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-white rounded-lg hover:bg-sky-400 transition-colors disabled:opacity-50"
                disabled={isTyping}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};