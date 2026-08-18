"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { SearchPanel } from "@/components/SearchPanel";
import { useStore } from "@/components/StoreProvider";
import { TrustBar } from "@/components/TrustBar";
import { navLinks } from "@/lib/data";

const iconBtn =
  "btn-lux btn-lux-ghost relative flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary hover:text-[#8a5a12]";

type Props = {
  onOpenAuth: () => void;
};

export function Header({ onOpenAuth }: Props) {
  const pathname = usePathname();
  const { cartCount, user } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-[80] w-full border-b border-outline/40 bg-white/95 backdrop-blur-md">
        <TrustBar />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-container-margin py-2.5">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/logo.png"
              alt="pello menos"
              width={498}
              height={190}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "font-label-md text-label-md text-primary"
                      : "font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={iconBtn}
              aria-label="Buscar serviços"
              onClick={() => setSearchOpen((open) => !open)}
            >
              <Icon name="search" size={20} />
            </button>
            <button
              type="button"
              className={iconBtn}
              aria-label={user ? "Minha conta" : "Entrar ou criar conta"}
              onClick={() => {
                setSearchOpen(false);
                onOpenAuth();
              }}
            >
              <Icon name="user" size={20} />
            </button>
            <Link
              href="/carrinho"
              className={iconBtn}
              aria-label={`Carrinho com ${cartCount} itens`}
            >
              <Icon name="shoppingCart" size={20} />
              {cartCount > 0 ? (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
