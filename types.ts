export enum Sender {
  USER = 'user',
  BOT = 'bot'
}

export enum MessageType {
  TEXT = 'text',
  CHART_BAR = 'chart_bar',
  CHART_LINE = 'chart_line',
  LOG_TABLE = 'log_table',
  ARCH_DIAGRAM = 'arch_diagram'
}

export interface ChatMessage {
  id: string;
  sender: Sender;
  type: MessageType;
  content: string;
  data?: any; // For charts/tables
  timestamp: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
}

export interface PhaseItem {
  phase: string;
  title: string;
  timeline: string;
  items: string[];
}