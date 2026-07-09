import {
  Activity,
  ArrowUpDown,
  Bot,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  CloudUpload,
  Code2,
  Database,
  Gauge,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  MonitorCog,
  Radar,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";
import { siteContent } from "@/src/data/siteContent";

export type ServiceSlug =
  | "software-development"
  | "cloud-solutions"
  | "ai-data-engineering"
  | "cybersecurity-protection"
  | "system-integration";

export const services = {
  "software-development": {
    eyebrow: siteContent.servicePages["software-development"].eyebrow,
    title: siteContent.servicePages["software-development"].title,
    text: siteContent.servicePages["software-development"].text,
    icons: [
      { label: siteContent.servicePages["software-development"].icons[0], icon: MonitorCog },
      { label: siteContent.servicePages["software-development"].icons[1], icon: Smartphone },
      { label: siteContent.servicePages["software-development"].icons[2], icon: GitBranch },
      { label: siteContent.servicePages["software-development"].icons[3], icon: Rocket }
    ],
    tech: [
      { title: "Frontend", items: ["React", "Vue", "Angular"] },
      { title: "Backend", items: ["Node.js", "Python", ".NET"] },
      { title: "Database", items: ["PostgreSQL", "MongoDB", "MySQL"] },
      { title: "DevOps", items: ["Docker", "Kubernetes", "AWS"] },
      { title: "Security", items: ["Secure Code", "Data Protection", "Best Practices"] }
    ]
  },
  "cloud-solutions": {
    eyebrow: siteContent.servicePages["cloud-solutions"].eyebrow,
    title: siteContent.servicePages["cloud-solutions"].title,
    text: siteContent.servicePages["cloud-solutions"].text,
    icons: [
      { label: siteContent.servicePages["cloud-solutions"].icons[0], icon: CloudUpload },
      { label: siteContent.servicePages["cloud-solutions"].icons[1], icon: ServerCog },
      { label: siteContent.servicePages["cloud-solutions"].icons[2], icon: Boxes },
      { label: siteContent.servicePages["cloud-solutions"].icons[3], icon: Gauge }
    ],
    hud: ["Deployment Successfully Deployed", "Cost Optimization -32%", "System Health 98%", "Global Network 24 Regions Active"]
  },
  "ai-data-engineering": {
    eyebrow: siteContent.servicePages["ai-data-engineering"].eyebrow,
    title: siteContent.servicePages["ai-data-engineering"].title,
    text: siteContent.servicePages["ai-data-engineering"].text,
    icons: [
      { label: siteContent.servicePages["ai-data-engineering"].icons[0], icon: BrainCircuit },
      { label: siteContent.servicePages["ai-data-engineering"].icons[1], icon: ChartNoAxesCombined },
      { label: siteContent.servicePages["ai-data-engineering"].icons[2], icon: Database },
      { label: siteContent.servicePages["ai-data-engineering"].icons[3], icon: Bot }
    ],
    hud: ["Model Training Accuracy 98.7%", "Data Pipeline", "Predictions", "AI Code Panel"]
  },
  "cybersecurity-protection": {
    eyebrow: siteContent.servicePages["cybersecurity-protection"].eyebrow,
    title: siteContent.servicePages["cybersecurity-protection"].title,
    text: siteContent.servicePages["cybersecurity-protection"].text,
    icons: [
      { label: siteContent.servicePages["cybersecurity-protection"].icons[0], icon: Radar },
      { label: siteContent.servicePages["cybersecurity-protection"].icons[1], icon: ShieldCheck },
      { label: siteContent.servicePages["cybersecurity-protection"].icons[2], icon: KeyRound },
      { label: siteContent.servicePages["cybersecurity-protection"].icons[3], icon: Activity }
    ],
    compliance: ["ISO 27001", "GDPR", "NIST", "SOC 2"]
  },
  "system-integration": {
    eyebrow: siteContent.servicePages["system-integration"].eyebrow,
    title: siteContent.servicePages["system-integration"].title,
    text: siteContent.servicePages["system-integration"].text,
    icons: [
      { label: siteContent.servicePages["system-integration"].icons[0], icon: GitBranch },
      { label: siteContent.servicePages["system-integration"].icons[1], icon: Layers3 },
      { label: siteContent.servicePages["system-integration"].icons[2], icon: Workflow },
      { label: siteContent.servicePages["system-integration"].icons[3], icon: ArrowUpDown }
    ],
    hud: ["Live API Mesh", "ERP Sync Active", "Automation Flow", "Secure Data Exchange"]
  }
} as const;

export const homeServices = [
  {
    title: siteContent.heroCards[0].title,
    href: "/software-development",
    text: siteContent.heroCards[0].text,
    icon: Code2
  },
  {
    title: siteContent.heroCards[1].title,
    href: "/system-integration",
    text: siteContent.heroCards[1].text,
    icon: CloudCog
  },
  {
    title: siteContent.heroCards[2].title,
    href: "/cloud-solutions",
    text: siteContent.heroCards[2].text,
    icon: LockKeyhole
  },
  {
    title: siteContent.heroCards[3].title,
    href: "/ai-data-engineering",
    text: siteContent.heroCards[3].text,
    icon: BrainCircuit
  }
] as const;

export const caseStudies = siteContent.cases;

export const values = siteContent.why.items.slice(0, 5);
