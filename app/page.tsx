import { EditorialHero } from '@/components/sections/editorial-hero'
import { ResearchBlocks } from '@/components/sections/research-blocks'
import { MinimalTimeline } from '@/components/sections/minimal-timeline'
import { VisionSection } from '@/components/sections/vision-section'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white">
        <EditorialHero />
        <ResearchBlocks />
        <MinimalTimeline />
        <VisionSection />
      </main>
      <Footer />
    </>
  )
}
