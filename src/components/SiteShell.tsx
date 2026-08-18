"use client";

import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toast } from "@/components/Toast";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background pt-[118px] pb-24 font-sans text-on-background md:pt-[128px] md:pb-0">
      <Header onOpenAuth={() => setAuthOpen(true)} />
      <div className="flex-1">{children}</div>
      <Footer onOpenAuth={() => setAuthOpen(true)} />
      <BottomNav />
      <Toast />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
