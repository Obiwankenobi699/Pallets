import { SectionProvider } from '@/components/section-provider';
import Section from '@/components/section';
import Frame from '@/components/frame';
import { Metadata } from 'next';
import { FuzzyOverlay } from '@/components/ui/fuzzy-overlay';
import Cursor from '@/components/ui/cursor';

export default function Page() {
 return (
  <main
   id="portfolio"
   className="h-full touch-none w-full relative overflow-hidden overscroll-none"
   style={{
    WebkitOverflowScrolling: 'auto',
   }}
  >
   <SectionProvider>
    <Frame />
    <Section />
    <FuzzyOverlay />
    <Cursor />
   </SectionProvider>
  </main>
 );
}

export const metadata: Metadata = {
 title: 'Pallets LLC',
 description:
  "Pallets LLC - Let's create cool stuff together. We provide tech solutions and media services.",
 openGraph: {
  title: 'Pallets LLC',
  description:
   "Pallets LLC - Let's create cool stuff together. We provide tech solutions and media services.",
  images: [
   {
    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`,
    width: 1200,
    height: 630,
    alt: 'Pallets LLC Thumbnail',
   },
  ],
  locale: 'en_IND',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Pallets LLC',
  description:
   "Pallets LLC - Let's create cool stuff together. We provide tech solutions and media services.",
  images: [`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`],
 },
};
