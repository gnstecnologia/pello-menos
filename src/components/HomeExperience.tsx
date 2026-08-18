"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CategoryCircles } from "@/components/CategoryCircles";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { SquareBannerRail } from "@/components/SquareBannerRail";
import { productRails, rectangularBanners } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeExperience() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((section) => {
          gsap.from(section, {
            y: 36,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
            },
          });
        });
        gsap.from(".js-cat", {
          y: 18,
          opacity: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".js-cats",
            start: "top 90%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <HeroBanner />
      <CategoryCircles />
      <ProductGrid
        id="produtos"
        eyebrow="Mais buscados"
        title="Serviços em destaque"
        subtitle="Os pedidos da semana"
        items={productRails.maisBuscados}
        muted
      />
      <PromoBanner banner={rectangularBanners[0]} />
      <ProductGrid
        eyebrow="Rosto"
        title="Rosto e olhar"
        subtitle="Buço, queixo, pescoço e sobrancelha"
        items={productRails.areas}
      />
      <SquareBannerRail />
      <PromoBanner banner={rectangularBanners[1]} />
      <ProductGrid
        eyebrow="Corpo"
        title="Braços, pernas e corpo"
        subtitle="Laser nas áreas que mais pedem"
        items={productRails.corpo}
      />
      <PromoBanner banner={rectangularBanners[2]} />
      <ProductGrid
        eyebrow="Cera"
        title="Avulsos, cera e olhar"
        subtitle="Sessões rápidas sem pacote"
        items={productRails.avulsos}
        muted
      />
      <GoogleReviews />
    </div>
  );
}
