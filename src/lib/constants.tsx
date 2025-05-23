import { Section, SectionColors, Sections } from './types';
import Home from '@/components/home';
import Works from '@/components/works';
import vakeel from '@/assets/images/vakeel-cover.webp';
import vgroww from '@/assets/images/vgroww-cover.webp';
import threepointonefour from '@/assets/images/threepointonefour-cover.webp';
import Experiences from '@/components/experiences';
import Contact from '@/components/contact';

export const ANIMATION_DURATION = {
 SHORT: 0.2,
 MEDIUM: 0.4,
 LONG: 0.8,
};

export const SECTIONS: Section[] = [
 { content: <Home />, title: 'Home' },
 { content: <Works />, title: 'Projects' },
 {
  content: <Experiences />,
  title: 'Achievements',
 },
 {
  content: <Contact />,
  title: 'Contact',
 },
];

export const THEMES: Record<string, SectionColors> = {
 main: {
  background: 'var(--theme-1-background)',
  primary: 'var(--theme-1-primary)',
  secondary: 'var(--theme-1-secondary)',
  accent: 'var(--theme-1-accent)',
 },
 Aitriplanner: {
  background: 'var(--theme-2-background)',
  primary: 'var(--theme-2-primary)',
  secondary: 'var(--theme-2-secondary)',
  accent: 'var(--theme-2-accent)',
 },
 thewaitercompany: {
  background: 'var(--theme-3-background)',
  primary: 'var(--theme-3-primary)',
  secondary: 'var(--theme-3-secondary)',
  accent: 'var(--theme-3-accent)',
 },
 threepointonefour: {
  background: 'var(--theme-4-background)',
  primary: 'var(--theme-4-primary)',
  secondary: 'var(--theme-4-secondary)',
  accent: 'var(--theme-4-accent)',
 },
 experiences: {
  background: 'var(--theme-5-background)',
  primary: 'var(--theme-5-primary)',
  secondary: 'var(--theme-5-secondary)',
  accent: 'var(--theme-5-accent)',
 },
};

export const SECTION_THEME_MAP: {
 [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
 [Sections.Home]: THEMES.main,
 [Sections.Works]: {
  0: THEMES.Aitriplanner,
  1: THEMES.thewaitercompany,
  2: THEMES.threepointonefour,
 },
 [Sections.Experience]: THEMES.experiences,
 [Sections.Contact]: THEMES.main,
};

export const WORKS_ITEMS = [
 {
  cover: vakeel,
  title: 'Vakeel AI',
  subject: 'Design and Implementation',
  description:
   "AI-powered legal research assistant that simplifies Indian legal research with instant case summaries and citation-ready notes.",
  link: 'https://vakeel-ai.vercel.app/',
  techStack: ['Next.js', 'TypeScript', 'Open AI'],
 },
 {
  cover: vgroww,
  title: 'vgroww',
  subject: 'Prototyping and Implementation',
  description:
   "vgroww is a powerful tool for modeling a startup's growth trajectory based on inputs like marketing spend, user acquisition rates, and churn.",
  link: 'https://vgrowwww.vercel.app/login',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
 },
 {
  cover: threepointonefour,
  title: 'ThreePointOneFour',
  subject: 'Prototyping and Implementation',
  description:
   "Threepointonefour is a platform that helps to make education accessible to students of all backgrounds.",
  link:
   'https://threepointonefour.in/',
  techStack: ['HTML', 'CSS', 'Javascript'],
 },
];

export const WORK_SUBSECTIONS = WORKS_ITEMS.length;

export const experiences = [
 { date: 'Nov 2024', title: 'AITripPlanner', role: 'Full-Stack Developer' },
 { date: 'Oct 2024', title: 'TheWaiterCompany', role: 'Frontend Developer' },
 { date: 'Nov 2023', title: 'Threepointonefour', role: 'Website Developer' },
];
