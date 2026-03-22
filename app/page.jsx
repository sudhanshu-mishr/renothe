import { CatalogSection } from '@/components/sections/catalog';
import { DashboardPreviewSection } from '@/components/sections/dashboard-preview';
import { ExperienceGridSection } from '@/components/sections/experience-grid';
import { FooterCta } from '@/components/sections/footer-cta';
import { HeroSection } from '@/components/sections/hero';
import { PlatformOverviewSection } from '@/components/sections/platform-overview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CatalogSection />
      <PlatformOverviewSection />
      <ExperienceGridSection />
      <DashboardPreviewSection />
      <FooterCta />
    </>
  );
}
