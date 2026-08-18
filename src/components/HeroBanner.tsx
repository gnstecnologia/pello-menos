"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { heroSlides, type HeroSlide } from "@/lib/data";
import { BadgeTag } from "@/components/BadgeTag";

gsap.registerPlugin(useGSAP);

function PriceBlock({ slide, align = "end" }: { slide: HeroSlide; align?: "start" | "end" }) {
  return (
    <div className={`mb-5 flex items-baseline gap-1.5 text-white ${align === "end" ? "justify-end" : "justify-start"}`}>
      <span className="text-sm tracking-wide text-white/80 md:text-lg">por</span>
      <span className="font-[family-name:var(--font-display)] text-5xl leading-none text-[#e8b86d] md:text-7xl">
        R$ {slide.priceReais}
      </span>
      <span className="text-xl text-[#e8b86d] md:text-3xl">,{slide.priceCents}</span>
    </div>
  );
}

function Cta({ slide }: { slide: HeroSlide }) {
  return (
    <a
      href="#produtos"
      className="btn-lux btn-lux-gold inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 font-label-md text-label-md text-on-secondary-container uppercase"
    >
      {slide.cta}
      <Icon name="arrowRight" size={16} />
    </a>
  );
}

function HeroCopy({ slide }: { slide: HeroSlide }) {
  const title = (
    <h1 className="mb-4 max-w-xl font-[family-name:var(--font-display)] text-headline-lg-mobile text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)] md:text-headline-xl">
      {slide.title}
    </h1>
  );

  if (slide.layout === "split") {
    return (
      <div className="js-hero-copy relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-container-margin">
        <div className="max-w-sm">
          <BadgeTag label={slide.badge} size="md" className="mb-3" />
          {title}
        </div>
        <div className="flex flex-col items-end text-right">
          <PriceBlock slide={slide} />
          <Cta slide={slide} />
        </div>
      </div>
    );
  }

  if (slide.layout === "copy-left") {
    return (
      <div className="js-hero-copy relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-container-margin text-left">
        <BadgeTag label={slide.badge} size="md" className="mb-3" />
        {title}
        <PriceBlock slide={slide} align="start" />
        <Cta slide={slide} />
      </div>
    );
  }

  if (slide.layout === "copy-top") {
    return (
      <div className="js-hero-copy relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-container-margin pt-8 md:pt-12">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-lg">
            <BadgeTag label={slide.badge} size="md" className="mb-3" />
            {title}
            <Cta slide={slide} />
          </div>
          <PriceBlock slide={slide} />
        </div>
      </div>
    );
  }

  return (
    <div className="js-hero-copy relative z-10 mx-auto flex h-full max-w-7xl flex-col items-end justify-center px-container-margin text-right">
      <BadgeTag label={slide.badge} size="md" className="mb-3" />
      {title}
      <PriceBlock slide={slide} />
      <Cta slide={slide} />
    </div>
  );
}

export function HeroBanner() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".js-hero-bg", {
          scale: 1.06,
          duration: 14,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });

      const timer = window.setInterval(() => {
        setIndex((current) => (current + 1) % heroSlides.length);
      }, 6400);

      return () => window.clearInterval(timer);
    },
    { scope: root },
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".js-hero-copy",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        );
      });
    },
    { scope: root, dependencies: [index] },
  );

  const arrowClass =
    "absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8b86d]/50 bg-black/25 text-[#e8b86d] backdrop-blur-sm md:h-12 md:w-12";

  return (
    <section
      ref={root}
      id="inicio"
      className="relative h-[420px] w-full overflow-hidden bg-[#3a0628] md:h-[640px]"
    >
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${slideIndex === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority={slideIndex === 0}
            className="js-hero-bg object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
      <HeroCopy slide={slide} />
      <button
        type="button"
        aria-label="Banner anterior"
        onClick={() => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
        className={`${arrowClass} left-2 md:left-5`}
      >
        <Icon name="chevronLeft" size={22} />
      </button>
      <button
        type="button"
        aria-label="Próximo banner"
        onClick={() => setIndex((current) => (current + 1) % heroSlides.length)}
        className={`${arrowClass} right-2 md:right-5`}
      >
        <Icon name="chevronRight" size={22} />
      </button>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, slideIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ir para slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={
              slideIndex === index
                ? "h-1.5 w-8 rounded-full bg-[#e8b86d]"
                : "h-1.5 w-4 rounded-full bg-white/35"
            }
          />
        ))}
      </div>
    </section>
  );
}
