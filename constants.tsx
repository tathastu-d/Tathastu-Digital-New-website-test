
import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  Globe,
  PieChart,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { Service, Testimonial, GrowthStep } from './types';

export const COLORS = {
  bg: '#0B0F14',
  accent: '#8F62AA',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Growth Strategy',
    description: 'We architect precision-engineered roadmaps to scale your brand with surgical accuracy.',
    icon: <Target className="w-8 h-8 text-[#8F62AA]" />,
  },
  {
    id: '2',
    title: 'Social Media Domination',
    description: 'Establish authority and capture mindshare through strategic content ecosystems.',
    icon: <Users className="w-8 h-8 text-[#8F62AA]" />,
  },
  {
    id: '3',
    title: 'Performance Marketing',
    description: 'High-conversion campaigns optimized by data intelligence for maximum ROI.',
    icon: <TrendingUp className="w-8 h-8 text-[#8F62AA]" />,
  },
  {
    id: '4',
    title: 'Influencer Growth Engine',
    description: 'Leverage hyper-relevant creator networks to accelerate brand trust and velocity.',
    icon: <Zap className="w-8 h-8 text-[#8F62AA]" />,
  },
  {
    id: '5',
    title: 'Personal Branding',
    description: 'Transforming founders into industry thought-leaders and digital icons.',
    icon: <ShieldCheck className="w-8 h-8 text-[#8F62AA]" />,
  },
  {
    id: '6',
    title: 'Scale & Automation',
    description: 'Implementing growth systems that run independently of human bottlenecks.',
    icon: <Cpu className="w-8 h-8 text-[#8F62AA]" />,
  },
];

export const GROWTH_STEPS: GrowthStep[] = [
  {
    title: 'Deep Growth Audit',
    description: 'Analyzing your current ecosystem to identify friction points and hidden opportunities.',
  },
  {
    title: 'Growth Blueprint',
    description: 'Developing a custom-tailored strategy designed for aggressive but sustainable scaling.',
  },
  {
    title: 'Execution Engine',
    description: 'Deploying our tactical teams to activate the blueprint across all digital channels.',
  },
  {
    title: 'Scale & Dominate',
    description: 'Continuous optimization and vertical expansion to secure market leadership.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Mehta',
    role: 'CEO, TechNexus',
    content: "Tathastu didn't just run ads; they built a revenue engine that grew our ARR by 300% in six months.",
    avatar: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    id: '2',
    name: 'Sarah Driskel',
    role: 'Founder, Aurora Beauty',
    content: "The futuristic approach they take to content is unmatched. Our brand presence feels 10 years ahead of competitors.",
    avatar: 'https://picsum.photos/seed/p2/100/100',
  },
  {
    id: '3',
    name: 'Rajiv Khanna',
    role: 'Marketing Dir, Fintech Global',
    content: "Minimal, powerful, and effective. The team at Tathastu understands growth systems like no one else.",
    avatar: 'https://picsum.photos/seed/p3/100/100',
  },
];

export const SOCIALS = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#' },
  { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: '#' },
];
