import Image from 'next/image';
import Portfolio from './portfolio';
import AboutSection from './aboutSection';
import { SparklesPreview } from './ui/sparkles/sparklesPreview';

export default function Home() {
  return (
    <main className="min-h-screen dark">
      <SparklesPreview />
      <AboutSection />
      <Portfolio />
    </main>
  );
}
