"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CategoryCircles } from "@/components/CategoryCircles";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroBanner } from "@/components/HeroBanner";
import { Icon } from "@/components/Icon";
import { ProductGrid } from "@/components/ProductGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { SquareBannerRail } from "@/components/SquareBannerRail";
import { productRails, rectangularBanners, type ProductMethod } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const filters: { id: "todos" | ProductMethod; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cera", label: "Cera" },
  { id: "laser", label: "Laser" },
  { id: "linha", label: "Linha" },
  { id: "produto", label: "Produtos" },
];

export function HomeExperience() {
  const root = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todos");

  const show = useMemo(
    () => ({
      cera: filter === "todos" || filter === "cera",
      laser: filter === "todos" || filter === "laser",
      linha: filter === "todos" || filter === "linha",
      produto: filter === "todos" || filter === "produto",
      extra: filter === "todos",
    }),
    [filter],
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
      <HeroBanner />
      <CategoryCircles />
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
          subtitle="O que mais vende na rede, com desconto de 5%"
          items={productRails.ceraOfertas}
          muted
        />
      ) : null}
      {show.extra ? (
        <section className="js-reveal mx-auto max-w-7xl px-container-margin py-8">
          <div className="rounded-3xl bg-primary px-6 py-8 text-on-primary md:px-10">
            <p className="font-label-md text-label-md text-[#e8b86d] uppercase">
              Clube Pello Menos
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-headline-md md:text-headline-lg">
              Planos de assinatura
            </h2>
            <p className="mt-2 max-w-2xl text-on-primary/80">
              Recorrência para a cliente voltar todo mês. O clube entra no
              pagamento na etapa seguinte — aqui o destaque já fica na home.
            </p>
          </div>
        </section>
      ) : null}
      {show.cera ? (
        <ProductGrid
          eyebrow="Áreas mais pedidas"
          title="Cera por região"
          subtitle="Virilha, axila, pernas e olhar — sempre separados do laser"
          items={productRails.ceraAreas}
        />
      ) : null}
      {show.laser ? <PromoBanner banner={rectangularBanners[1]} /> : null}
      {show.laser ? (
        <ProductGrid
          id="laser"
          eyebrow="Laser"
          title="Laser no rosto"
          subtitle="Pacotes nas áreas do rosto, depois da cera"
          items={productRails.laserRosto}
        />
      ) : null}
      {show.laser ? (
        <ProductGrid
          eyebrow="Laser"
          title="Laser no corpo"
          subtitle="Braços, pernas e corpo em carrossel próprio"
          items={productRails.laserCorpo}
          muted
        />
      ) : null}
      {show.extra ? <SquareBannerRail /> : null}
      {show.extra && productRails.esfoliacao.length > 0 ? (
        <ProductGrid
          eyebrow="Esfoliação"
          title="Pele pronta para a cera"
          subtitle="Serviço de esfoliação para completar o atendimento"
          items={productRails.esfoliacao}
        />
      ) : null}
      {show.linha ? (
        <ProductGrid
          id="linha"
          eyebrow="Linha"
          title="Depilação com linha"
          subtitle="Buço e sobrancelha com precisão"
          items={productRails.linha}
          muted
        />
      ) : null}
      {show.produto ? (
        <ProductGrid
          id="produtos-loja"
          eyebrow="Produtos"
          title="Body Splash"
          subtitle="Linha para casa — foto oficial em produção"
          items={productRails.produtos}
        />
      ) : null}
      {show.extra ? <PromoBanner banner={rectangularBanners[2]} /> : null}
      {show.extra ? (
        <section className="js-reveal mx-auto max-w-7xl px-container-margin py-8">
          <Link
            href="/masculino"
            className="flex items-center justify-between rounded-3xl border border-primary/20 bg-surface px-6 py-6 shadow-[0_18px_40px_rgba(58,10,60,0.08)]"
          >
            <div>
              <p className="font-label-md text-label-md text-secondary uppercase">
                Masculino
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-headline-md text-primary">
                Catálogo masculino
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Serviços de teste para o público masculino, como na apresentação.
              </p>
            </div>
            <Icon name="arrowRight" size={22} className="text-primary" />
          </Link>
        </section>
      ) : null}
      <GoogleReviews />
    </div>
  );
}
