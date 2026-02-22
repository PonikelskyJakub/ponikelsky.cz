import { Hero } from "@/components/hero";
import { AboutAndGallery } from "@/components/about-and-gallery";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutAndGallery />
        <Services />
      </main>
      <SiteFooter />
    </>
  );
}
