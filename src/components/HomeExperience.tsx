"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef, useState } from "react";
import { CategoryCircles } from "@/components/CategoryCircles";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { SquareBannerRail } from "@/components/SquareBannerRail";
import {
  categories,
  categoriesMasculino,
  googleReviews,
  googleReviewsMasculino,
  heroSlides,
  heroSlidesMasculino,
  productRails,
  productsHref,
  rectangularBanners,
  rectangularBannersMasculino,
  squareBanners,
  squareBannersMasculino,
  type ProductAudience,
  type ProductMethod,
} from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const femaleFilters: { id: "todos" | ProductMethod; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cera", label: "Cera" },
  { id: "laser", label: "Laser" },
  { id: "linha", label: "Linha" },
  { id: "esfoliacao", label: "Esfoliação" },
  { id: "produto", label: "Produtos" },
];

const maleFilters: { id: "todos" | ProductMethod; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "laser", label: "Laser" },
  { id: "produto", label: "Produtos" },
];

type Props = {
  audience?: ProductAudience;
};

export function HomeExperience({ audience = "feminino" }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const isMale = audience === "masculino";
  const filters = isMale ? maleFilters : femaleFilters;
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todos");
  const catalogHref = productsHref(audience);

  const show = useMemo(
    () => ({
      cera: !isMale && (filter === "todos" || filter === "cera"),
      laser: filter === "todos" || filter === "laser",
      linha: !isMale && (filter === "todos" || filter === "linha"),
      esfoliacao: !isMale && (filter === "todos" || filter === "esfoliacao"),
      produto: filter === "todos" || filter === "produto",
      extra: filter === "todos",
    }),
    [filter, isMale],
  );

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
      <HeroBanner slides={isMale ? heroSlidesMasculino : heroSlides} />
      <CategoryCircles items={isMale ? categoriesMasculino : categories} />
      <div
        id="produtos"
        className="mx-auto flex max-w-7xl scroll-mt-28 flex-wrap gap-2 px-container-margin pb-2"
      >
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={
              filter === item.id
                ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary"
                : "rounded-full border border-primary/25 px-4 py-2 text-sm text-primary"
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      {show.cera ? (
        <ProductGrid
          id="cera"
          eyebrow="Cera 5% OFF"
          title="Cera em destaque"
          subtitle="Preço da tabela com 5% de desconto no e-commerce"
          items={productRails.ceraOfertas}
          muted
        />
      ) : null}
      {show.extra ? (
        <section className="js-reveal mx-auto max-w-7xl px-container-margin py-8">
          <div className="rounded-3xl bg-primary px-6 py-8 text-on-primary md:px-10">
            <p className="font-label-md text-label-md text-[#e8b86d] uppercase">
              {isMale ? "E-commerce masculino" : "Clube Pello Menos"}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-headline-md md:text-headline-lg">
              {isMale ? "5% OFF em todo o catálogo" : "5% OFF no e-commerce"}
            </h2>
            <p className="mt-2 max-w-2xl text-on-primary/80">
              {isMale
                ? "Laser para peito, costas, barba e corpo com o preço original da tabela e 5% de desconto na compra pelo site."
                : "Compre pelo site e pague 5% a menos que o preço original da tabela. Cera e esfoliação continuam exclusivas do público feminino."}
            </p>
          </div>
        </section>
      ) : null}
      {show.cera ? (
        <ProductGrid
          eyebrow="Áreas mais pedidas"
          title="Cera por região"
          subtitle="Virilha, axila, pernas, corpo e olhar — todos os serviços da tabela"
          items={productRails.ceraAreas}
        />
      ) : null}
      {show.laser ? (
        <PromoBanner
          banner={
            isMale ? rectangularBannersMasculino[0]! : rectangularBanners[1]!
          }
        />
      ) : null}
      {show.laser ? (
        <ProductGrid
          id="laser"
          eyebrow="Laser"
          title={isMale ? "Laser no rosto" : "Laser no rosto"}
          subtitle={
            isMale
              ? "Barba, nuca, pescoço, orelhas e nariz"
              : "Pacotes nas áreas do rosto, depois da cera"
          }
          items={isMale ? productRails.laserRostoMasc : productRails.laserRosto}
        />
      ) : null}
      {show.laser ? (
        <ProductGrid
          eyebrow="Laser"
          title={isMale ? "Laser no corpo" : "Laser no corpo"}
          subtitle={
            isMale
              ? "Peito, costas, axilas, braços, pernas e virilha"
              : "Braços, pernas e corpo em carrossel próprio"
          }
          items={isMale ? productRails.laserCorpoMasc : productRails.laserCorpo}
          muted
        />
      ) : null}
      {show.extra ? (
        <SquareBannerRail
          banners={isMale ? squareBannersMasculino : squareBanners}
          productsHref={catalogHref}
        />
      ) : null}
      {show.esfoliacao ? (
        <ProductGrid
          id="esfoliacao"
          eyebrow="Esfoliação"
          title="Pele pronta para a cera"
          subtitle="Todas as áreas da tabela — só no catálogo feminino"
          items={productRails.esfoliacao}
        />
      ) : null}
      {show.linha ? (
        <ProductGrid
          id="linha"
          eyebrow="Linha"
          title="Depilação com linha"
          subtitle="Buço, queixo e faixa — valores da tabela com 5% OFF"
          items={productRails.linha}
          muted
        />
      ) : null}
      {show.produto ? (
        <ProductGrid
          id="produtos-loja"
          eyebrow="Produtos"
          title="Produto oficial"
          subtitle="Body Splash Pello Menos para usar em casa"
          items={productRails.produtos}
        />
      ) : null}
      {show.extra ? (
        <PromoBanner
          banner={
            isMale ? rectangularBannersMasculino[1]! : rectangularBanners[2]!
          }
        />
      ) : null}
      <GoogleReviews reviews={isMale ? googleReviewsMasculino : googleReviews} />
    </div>
  );
}
