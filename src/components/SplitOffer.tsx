"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  price?: string;
  oldPrice?: string;
};

export function SplitOffer({
  id,
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  ctaHref,
  ctaLabel,
  price,
  oldPrice,
}: Props) {
  return (
    <section id={id} className="js-reveal mx-auto max-w-7xl scroll-mt-24 px-container-margin py-8">
      <div className="grid overflow-hidden rounded-3xl bg-primary text-on-primary md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
          <p className="font-label-md text-label-md text-[#e8b86d] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-headline-md md:text-headline-lg">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-on-primary/80">{subtitle}</p>
          {price ? (
            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-3xl text-[#e8b86d]">
                {price}
              </span>
              {oldPrice ? (
                <span className="text-sm text-on-primary/55 line-through">
                  {oldPrice}
                </span>
              ) : null}
            </div>
          ) : null}
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="btn-lux btn-lux-gold mt-6 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 font-label-md text-label-md text-on-secondary-container uppercase"
            >
              {ctaLabel}
              <Icon name="arrowRight" size={16} />
            </Link>
          ) : null}
        </div>
        <div className="relative min-h-[220px] md:min-h-[320px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}
