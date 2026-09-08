import type { Metadata } from "next";
import { CatalogPageView } from "@/components/CatalogPageView";
import { planProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Planos de Assinatura | Pello Menos",
  description: "Planos VIP Silver e Gold. A compra no site é a primeira parcela da assinatura.",
};

export default function PlanosMasculinoPage() {
  return (
    <CatalogPageView
      audience="masculino"
      eyebrow="Assinatura"
      title="Planos de Assinatura"
      subtitle="Silver e Gold: a compra no e-commerce é a primeira parcela. Depois cadastre a recorrência na loja."
      items={planProducts()}
    />
  );
}
