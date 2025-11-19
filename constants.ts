import { FeatureItem, PhaseItem, TechItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    title: "Ultra-Low Latency",
    description: "Retrieve the most recent log entries in under 0.5 seconds using in-memory ring buffers and direct routing.",
    icon: "Zap"
  },
  {
    title: "Massive Scale Ingestion",
    description: "Handle multi-TB/day with reliable delivery, schema evolution, and concurrent user support via Kafka & Flink.",
    icon: "Database"
  },
  {
    title: "Semantic Search",
    description: "Go beyond keywords. Vector embeddings allow you to ask 'Why did the auth service fail?' and get context-aware answers.",
    icon: "Brain"
  },
  {
    title: "Grounded in Fact",
    description: "RAG + Tool-based system prevents hallucinations. Every answer is cited with specific log IDs and timestamps.",
    icon: "ShieldCheck"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "Kafka", category: "Ingest", description: "Durable buffering & partitioning" },
  { name: "Redis / Aerospike", category: "Hot Tier", description: "In-memory sub-second reads" },
  { name: "Apache Flink", category: "Streaming", description: "Real-time rollups & aggregation" },
  { name: "ClickHouse", category: "Warm/Cold", description: "Columnar OLAP for analytics" },
  { name: "Vector DB", category: "AI Context", description: "Semantic search embeddings" },
  { name: "FastAPI + React", category: "App Layer", description: "Orchestrator & UI" }
];

export const PHASES: PhaseItem[] = [
  {
    phase: "Phase 0",
    title: "Preparation",
    timeline: "1-2 Weeks",
    items: ["Infra Setup (Kafka, Redis, IAM)", "VPC Configuration", "Basic Pipeline Provisioning"]
  },
  {
    phase: "MVP",
    title: "Core Functionality",
    timeline: "4-6 Weeks",
    items: ["Hot Tier Ring Buffers", "Simple Ingest Gateway", "Recent Logs Query API", "0.5s Latency Target"]
  },
  {
    phase: "Version 1",
    title: "Analytics & Scale",
    timeline: "8-12 Weeks",
    items: ["Stream Processing (Flink)", "ClickHouse Rollups", "Retention Lifecycle", "Autoscaling"]
  },
  {
    phase: "Version 2",
    title: "Full AI Intelligence",
    timeline: "12+ Weeks",
    items: ["Full NL Interface", "Advanced Anomaly Detection", "Multi-region DR", "Grounded Provenance UI"]
  }
];

export const DEMO_SCENARIOS = [
  {
    label: "Analyze Errors",
    query: "Show me error rates for the auth-service over the last hour.",
    responseType: "chart_line",
    responseText: "Here is the error rate trend for `auth-service`. I detected a spike starting at 14:32 UTC.",
    data: [
      { time: '14:00', count: 2 },
      { time: '14:10', count: 5 },
      { time: '14:20', count: 3 },
      { time: '14:30', count: 120 },
      { time: '14:40', count: 85 },
      { time: '14:50', count: 10 },
    ]
  },
  {
    label: "Recent Logs",
    query: "Get the last 5 critical logs from payment-gateway.",
    responseType: "log_table",
    responseText: "Retrieved 5 critical events from `hot-tier` storage (Latency: 45ms).",
    data: [
      { id: 'evt-102', time: '14:32:01', level: 'CRITICAL', msg: 'Connection timeout to BankAPI' },
      { id: 'evt-103', time: '14:32:05', level: 'CRITICAL', msg: 'Retry limit exceeded for txn-99' },
      { id: 'evt-104', time: '14:33:12', level: 'ERROR', msg: 'Circuit breaker open' },
      { id: 'evt-105', time: '14:34:00', level: 'CRITICAL', msg: 'Payment processor 503' },
      { id: 'evt-106', time: '14:34:15', level: 'WARN', msg: 'Latency high: 2000ms' },
    ]
  },
  {
    label: "Slow Endpoints",
    query: "Which endpoints had the highest latency in the last 15 mins?",
    responseType: "log_table",
    responseText: "Identified 3 endpoints exceeding p99 latency thresholds in `checkout-service`.",
    data: [
      { id: 'slow-1', time: '14:45:10', level: 'WARN', msg: 'POST /checkout - 2500ms' },
      { id: 'slow-2', time: '14:46:22', level: 'WARN', msg: 'GET /inventory/sync - 1800ms' },
      { id: 'slow-3', time: '14:48:05', level: 'WARN', msg: 'PUT /user/profile - 1200ms' },
    ]
  },
  {
    label: "CPU Anomaly",
    query: "Detect CPU usage spikes in payment-service pods > 80%.",
    responseType: "chart_line",
    responseText: "Alert: Detected CPU spike reaching 92% at 14:45 UTC correlating with batch job execution.",
    data: [
      { time: '14:30', count: 45 },
      { time: '14:35', count: 48 },
      { time: '14:40', count: 50 },
      { time: '14:45', count: 92 },
      { time: '14:50', count: 60 },
      { time: '14:55', count: 55 }
    ]
  },
  {
    label: "Memory Usage",
    query: "Show top 5 pods by memory consumption.",
    responseType: "chart_bar",
    responseText: "Here are the most memory-intensive pods. `analytics-worker-02` is approaching OOM limits.",
    data: [
      { time: 'worker-02', count: 1024 },
      { time: 'api-05', count: 850 },
      { time: 'web-12', count: 600 },
      { time: 'redis-01', count: 400 },
      { time: 'cache-03', count: 350 }
    ]
  },
  {
    label: "Threat Detect",
    query: "Scan for SQL injection patterns in query parameters.",
    responseType: "log_table",
    responseText: "Found 3 potential SQL injection attempts blocked by WAF in `frontend-proxy`.",
    data: [
      {id: 'sec-1', time: '14:05:22', level: 'WARN', msg: 'Blocked: /login?user=\' OR 1=1 --'},
      {id: 'sec-2', time: '14:05:24', level: 'WARN', msg: 'Blocked: /search?q=UNION SELECT...'},
      {id: 'sec-3', time: '14:15:01', level: 'WARN', msg: 'Blocked: /admin?id=1; DROP TABLE...'}
    ]
  },
  {
    label: "Security Audit",
    query: "List failed login attempts by country for the last hour.",
    responseType: "chart_bar",
    responseText: "Detected suspicious activity from specific regions. Total failed attempts: 432.",
    data: [
      { time: 'US', count: 45 },
      { time: 'CN', count: 120 },
      { time: 'RU', count: 85 },
      { time: 'BR', count: 30 },
      { time: 'DE', count: 15 },
    ]
  },
  {
    label: "Uptime Check",
    query: "What is the uptime for payment-gateway today?",
    responseType: "text",
    responseText: "The `payment-gateway` service is currently **99.98% available** over the last 24 hours. \n\n- Total Requests: 1.5M\n- Successful: 1.49M\n- Downtime: 2m 10s (Incident #402 resolved)",
    data: null
  },
  {
    label: "Architecture",
    query: "How does the system handle low latency?",
    responseType: "text",
    responseText: "We use a Streaming-First Hybrid approach. Logs are ingested via Kafka. Recent data (last N hours) is routed to a Hot Tier (Redis/Aerospike) using per-shard ring buffers for <0.5s retrieval. Historical data is processed by Flink and stored in ClickHouse for analytics.",
    data: null
  }
];