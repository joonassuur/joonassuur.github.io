import Image from 'next/image';
import Portfolio from './portfolio';
import { SparklesPreview } from './ui/sparkles/sparklesPreview';

export default function Home() {
  return (
    <main className="min-h-screen dark">
      <SparklesPreview />
      <Portfolio />
    </main>
  );
}
