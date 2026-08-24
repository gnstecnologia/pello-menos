import { ProductGrid } from "@/components/ProductGrid";
import { productRails } from "@/lib/data";

export default function MaleCatalogPage() {
  return (
    <ProductGrid
      id="masculino"
      eyebrow="Masculino"
      title="Catálogo masculino"
      subtitle="Serviços de teste para o público masculino, como na apresentação."
      items={productRails.masculino}
    />
  );
}
