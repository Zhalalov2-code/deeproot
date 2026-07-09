import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Home,
  Mail,
  Network,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { siteContent } from "@/src/data/siteContent";

export const navigation = [
  { label: siteContent.navigation[0], href: "/", icon: Home },
  { label: siteContent.navigation[1], href: "/software-development", icon: Code2 },
  { label: siteContent.navigation[2], href: "/system-integration", icon: Network },
  { label: siteContent.navigation[3], href: "/cloud-solutions", icon: Cloud },
  { label: siteContent.navigation[4], href: "/ai-data-engineering", icon: BrainCircuit },
  { label: siteContent.navigation[5], href: "/cybersecurity-protection", icon: ShieldCheck },
  { label: siteContent.navigation[6], href: "/case-studies", icon: BriefcaseBusiness },
  { label: siteContent.navigation[7], href: "/about", icon: UserRound },
  { label: siteContent.navigation[8], href: "/contact", icon: Mail }
] as const;

export type NavItem = (typeof navigation)[number];
