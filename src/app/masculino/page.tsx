import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "Masculino | Pello Menos",
  description:
    "Depilação a laser masculina com 5% de desconto no e-commerce. Peito, costas, barba e corpo.",
};

export default function MaleHomePage() {
  return <HomeExperience audience="masculino" />;
}
