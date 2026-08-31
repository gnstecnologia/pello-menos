"use client";

import Image from "next/image";
import { useRef } from "react";
import { BadgeTag } from "@/components/BadgeTag";
import { CarouselArrows } from "@/components/CarouselArrows";
import type { SquareBannerData } from "@/lib/data";

type Props = {
  banners: SquareBannerData[];
  productsHref: string;
};

export function SquareBannerRail({ banners, productsHref }: Props) {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-square-banner]");
    const step = card ? card.offsetWidth + 16 : node.clientWidth * 0.8;
    node.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="js-reveal relative py-6">
      <div className="mx-auto mb-5 max-w-7xl px-container-margin">
        <h2 className="font-[family-name:var(--font-display)] text-headline-md text-primary">
          Em destaque
        </h2>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <CarouselArrows
          prevLabel="Anterior"
          nextLabel="Próximo"
          onPrev={() => scroll(-1)}
          onNext={() => scroll(1)}
        />
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-12 pb-2 hide-scrollbar sm:px-14 md:px-16"
        >
          {banners.map((banner) => (
            <a
              key={banner.id}
              href={productsHref}
              data-carousel-card
              data-square-banner
              className="group relative aspect-square w-[min(72vw,300px)] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[calc((100%-4.5rem-16px)/2)] lg:w-[calc((100%-5rem-32px)/3)]"
            >
              <div data-carousel-media className="absolute inset-0">
                <Image
                  src={banner.image}
                  alt={banner.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-on-primary">
                {banner.badge ? (
                  <BadgeTag label={banner.badge} className="mb-2" />
                ) : null}
                <h3 className="font-[family-name:var(--font-display)] text-2xl">
                  {banner.title}
                </h3>
                <p className="mt-1 text-sm text-on-primary/80">{banner.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
