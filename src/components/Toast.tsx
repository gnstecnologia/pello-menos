"use client";

import { Icon } from "@/components/Icon";
import { useStore } from "@/components/StoreProvider";

export function Toast() {
  const { toast } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed top-40 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary shadow-lg">
      <Icon name="shoppingCart" size={16} />
      {toast.message}
    </div>
  );
}
