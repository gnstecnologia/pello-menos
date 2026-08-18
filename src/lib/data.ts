export type ProductCategory =
  | "axilas"
  | "virilha"
  | "pernas"
  | "rosto"
  | "bracos"
  | "corpo";

export type StoreUnit = {
  id: string;
  name: string;
  city: string;
  state: "RJ" | "SP";
  address: string;
  hours: string;
};

export type Product = {
  id: string;
  name: string;
  duration: string;
  priceCents: number;
  oldPriceCents?: number;
  badge?: string;
  highlight?: boolean;
  image: string;
  imageAlt: string;
  category: ProductCategory;
  sku: string;
  code: string;
  description: string;
};

type ProductSeed = Omit<Product, "sku" | "code" | "description">;

export type HeroLayout = "split" | "copy-right" | "copy-left" | "copy-top";

export type HeroSlide = {
  id: string;
  badge: string;
  title: string;
  priceReais: string;
  priceCents: string;
  cta: string;
  image: string;
  imageAlt: string;
  layout: HeroLayout;
};

export type Category = {
  id: string;
  label: string;
  image: string;
};

export function formatBRL(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const catalogItems: ProductSeed[] = [
  {
    id: "axilas-laser",
    name: "Axilas Laser",
    duration: "15 min • até 10 sessões",
    oldPriceCents: 89990,
    priceCents: 9490,
    badge: "Oferta",
    highlight: true,
    category: "axilas",
    image: "/images/products/axilas-laser-v3.png",
    imageAlt: "Mulher alisando a pele da axila após depilação",
  },
  {
    id: "buco-laser",
    name: "Buço Laser",
    duration: "10 min • até 10 sessões",
    priceCents: 42590,
    category: "rosto",
    image: "/images/products/buco-laser-v3.png",
    imageAlt: "Mulher alisando a pele do buço após depilação",
  },
  {
    id: "virilha-laser",
    name: "Virilha Total Laser",
    duration: "20 min • até 10 sessões",
    oldPriceCents: 209000,
    priceCents: 135850,
    badge: "Mais vendido",
    highlight: true,
    category: "virilha",
    image: "/images/products/virilha-laser-v3.png",
    imageAlt: "Mulher alisando a pele da região da virilha após depilação",
  },
  {
    id: "perna-laser",
    name: "Perna Inteira Laser",
    duration: "40 min • até 10 sessões",
    oldPriceCents: 423500,
    priceCents: 275275,
    badge: "Verão",
    category: "pernas",
    image: "/images/products/perna-laser-v3.png",
    imageAlt: "Mulher alisando a pele das pernas após depilação",
  },
  {
    id: "virilha-cera",
    name: "Virilha Total – Cera",
    duration: "25 min • Avulso",
    oldPriceCents: 8500,
    priceCents: 7650,
    category: "virilha",
    image: "/images/products/virilha-cera-v3.png",
    imageAlt: "Mulher negra com cabelo natural alisando a pele da virilha após cera",
  },
  {
    id: "perna-cera",
    name: "Perna Inteira – Cera",
    duration: "40 min • Avulso",
    oldPriceCents: 8590,
    priceCents: 7731,
    category: "pernas",
    image: "/images/products/perna-cera-v3.png",
    imageAlt: "Mulher loira com a perna inteira lisa após cera",
  },
  {
    id: "buco-cera",
    name: "Buço – Cera",
    duration: "10 min • Avulso",
    oldPriceCents: 2690,
    priceCents: 2421,
    category: "rosto",
    image: "/images/products/buco-cera-v3.png",
    imageAlt: "Mulher negra com cabelo liso tocando o buço após cera",
  },
  {
    id: "axila-cera",
    name: "Axila – Cera",
    duration: "15 min • Avulso",
    oldPriceCents: 3300,
    priceCents: 2970,
    badge: "Cera",
    category: "axilas",
    image: "/images/products/axila-cera-v3.png",
    imageAlt: "Mulher alisando a axila lisa após cera",
  },
  {
    id: "meia-perna-laser",
    name: "Meia Perna Laser",
    duration: "20 min • até 10 sessões",
    oldPriceCents: 203000,
    priceCents: 131950,
    badge: "Verão",
    highlight: true,
    category: "pernas",
    image: "/images/products/meia-perna-laser-v3.png",
    imageAlt: "Mulher com as panturrilhas lisas após laser",
  },
  {
    id: "coxas-laser",
    name: "Coxas Laser",
    duration: "25 min • até 10 sessões",
    oldPriceCents: 219990,
    priceCents: 142994,
    category: "pernas",
    image: "/images/products/coxas-laser-v3.png",
    imageAlt: "Mulher alisando as coxas após depilação a laser",
  },
  {
    id: "bracos-laser",
    name: "Braços Inteiros Laser",
    duration: "20 min • até 10 sessões",
    oldPriceCents: 144000,
    priceCents: 93600,
    badge: "Novo",
    highlight: true,
    category: "bracos",
    image: "/images/products/bracos-laser-v3.png",
    imageAlt: "Mulher mostrando os braços lisos após laser",
  },
  {
    id: "antebraco-laser",
    name: "Antebraço Laser",
    duration: "15 min • até 10 sessões",
    oldPriceCents: 108000,
    priceCents: 70200,
    category: "bracos",
    image: "/images/products/antebraco-laser-v3.png",
    imageAlt: "Mulher com o antebraço liso após laser",
  },
  {
    id: "abdomen-laser",
    name: "Abdômen Laser",
    duration: "20 min • até 10 sessões",
    oldPriceCents: 102000,
    priceCents: 66300,
    badge: "Corpo",
    category: "corpo",
    image: "/images/products/abdomen-laser-v3.png",
    imageAlt: "Mulher alisando o abdômen após laser",
  },
  {
    id: "costas-laser",
    name: "Costas Laser",
    duration: "25 min • até 10 sessões",
    oldPriceCents: 149500,
    priceCents: 97175,
    category: "corpo",
    image: "/images/products/costas-laser-v3.png",
    imageAlt: "Mulher de costas com a pele lisa após laser",
  },
  {
    id: "queixo-laser",
    name: "Queixo Laser",
    duration: "10 min • até 10 sessões",
    oldPriceCents: 73300,
    priceCents: 47645,
    category: "rosto",
    image: "/images/products/queixo-laser-v3.png",
    imageAlt: "Mulher alisando o queixo após laser",
  },
  {
    id: "pescoco-laser",
    name: "Pescoço Laser",
    duration: "10 min • até 10 sessões",
    oldPriceCents: 70300,
    priceCents: 45695,
    category: "rosto",
    image: "/images/products/pescoco-laser-v3.png",
    imageAlt: "Mulher com o pescoço liso após laser",
  },
  {
    id: "rosto-inteiro-laser",
    name: "Rosto Inteiro Laser",
    duration: "20 min • até 10 sessões",
    oldPriceCents: 144500,
    priceCents: 93925,
    badge: "Combo",
    highlight: true,
    category: "rosto",
    image: "/images/products/rosto-inteiro-laser-v3.png",
    imageAlt: "Mulher com o rosto liso após laser",
  },
  {
    id: "virilha-comum-laser",
    name: "Virilha Comum Laser",
    duration: "15 min • até 10 sessões",
    oldPriceCents: 132000,
    priceCents: 85800,
    category: "virilha",
    image: "/images/products/virilha-comum-laser-v3.png",
    imageAlt: "Mulher em spa roxo claro com shorts e top brancos",
  },
  {
    id: "meia-perna-cera",
    name: "Meia Perna – Cera",
    duration: "20 min • Avulso",
    oldPriceCents: 4990,
    priceCents: 4491,
    category: "pernas",
    image: "/images/products/meia-perna-cera-v3.png",
    imageAlt: "Mulher negra com tranças mostrando a meia perna lisa após cera",
  },
  {
    id: "coxa-cera",
    name: "Coxa – Cera",
    duration: "20 min • Avulso",
    oldPriceCents: 4990,
    priceCents: 4491,
    category: "pernas",
    image: "/images/products/coxa-cera-v3.png",
    imageAlt: "Mulher de cabelo liso alisando a coxa após cera",
  },
  {
    id: "bracos-cera",
    name: "Braços – Cera",
    duration: "20 min • Avulso",
    oldPriceCents: 6990,
    priceCents: 6291,
    category: "bracos",
    image: "/images/products/bracos-cera-v3.png",
    imageAlt: "Mulher negra com cabelo black mostrando os braços lisos após cera",
  },
  {
    id: "antebraco-cera",
    name: "Antebraço – Cera",
    duration: "15 min • Avulso",
    oldPriceCents: 4990,
    priceCents: 4491,
    category: "bracos",
    image: "/images/products/antebraco-cera-v3.png",
    imageAlt: "Mulher loira alisando o antebraço após cera",
  },
  {
    id: "abdomen-cera",
    name: "Abdômen – Cera",
    duration: "15 min • Avulso",
    oldPriceCents: 5800,
    priceCents: 5220,
    category: "corpo",
    image: "/images/products/abdomen-cera-v3.png",
    imageAlt: "Mulher de cabelo liso com o abdômen liso após cera",
  },
  {
    id: "design-sobrancelha",
    name: "Design de Sobrancelha",
    duration: "20 min • Avulso",
    oldPriceCents: 5850,
    priceCents: 5265,
    badge: "Olhar",
    highlight: true,
    category: "rosto",
    image: "/images/products/design-sobrancelha-v3.png",
    imageAlt: "Mulher com design de sobrancelha",
  },
  {
    id: "sobrancelha-henna",
    name: "Sobrancelha + Henna",
    duration: "30 min • Avulso",
    oldPriceCents: 8650,
    priceCents: 7785,
    badge: "Combo",
    category: "rosto",
    image: "/images/products/sobrancelha-henna-v3.png",
    imageAlt: "Mulher com sobrancelha realçada com henna",
  },
];

export const storeUnits: StoreUnit[] = [
  {
    id: "copacabana",
    name: "Copacabana",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. Nossa Senhora de Copacabana, 680 — loja 12",
    hours: "Seg a sáb, 9h às 20h",
  },
  {
    id: "tijuca",
    name: "Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Rua Conde de Bonfim, 318 — sala 204",
    hours: "Seg a sáb, 9h às 20h",
  },
  {
    id: "campo-grande",
    name: "Campo Grande",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Estrada do Mendanha, 555 — loja 8",
    hours: "Seg a sáb, 9h às 19h",
  },
  {
    id: "barra",
    name: "Barra da Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. das Américas, 4666 — bloco 2",
    hours: "Seg a sáb, 10h às 21h",
  },
  {
    id: "paulista",
    name: "Avenida Paulista",
    city: "São Paulo",
    state: "SP",
    address: "Av. Paulista, 2073 — conjunto 1402",
    hours: "Seg a sáb, 9h às 20h",
  },
];

const productCopy: Record<string, string> = {
  "axilas-laser":
    "Pacote de até 10 sessões de depilação a laser nas axilas, pensado para quem quer reduzir o pelo de forma duradoura sem agendamento. Cada visita dura cerca de 15 minutos: a profissional avalia a pele, aplica o protocolo e você sai no mesmo fluxo, por ordem de chegada. A pele fica mais lisa a cada sessão, com menos irritação do que a cera repetida. Atendimento 100% feminino. Escolha a unidade no pedido — o serviço só é resgatado na loja selecionada.",
  "buco-laser":
    "Até 10 sessões de laser no buço para tratar o pelo fino da região acima da boca, com cuidado específico para a pele do rosto. A sessão é curta, cerca de 10 minutos, e o protocolo respeita a sensibilidade da área para um resultado mais uniforme ao longo do pacote. Ideal para quem quer reduzir a necessidade de cera ou pinça no dia a dia. Atendimento feminino, por ordem de chegada. Informe a unidade obrigatória no pedido para usar o serviço na loja escolhida.",
  "virilha-laser":
    "Virilha total a laser em pacote de até 10 sessões, indicado para quem busca resultado duradouro na região íntima com higiene e protocolo de clínica. A sessão leva cerca de 20 minutos e cobre a área completa, não só a linha do biquíni. A pele tende a ficar mais lisa e confortável a cada visita, com menos foliculite do que a cera frequente. Ambiente exclusivo feminino, sem hora marcada. O resgate é só na unidade selecionada no carrinho.",
  "perna-laser":
    "Perna inteira a laser, da coxa ao tornozelo, em até 10 sessões. É a sessão mais longa do catálogo de pernas (cerca de 40 minutos) para garantir cobertura uniforme nas duas pernas. Indicado para quem quer pele lisa o ano todo, principalmente no verão, sem depender de cera a cada duas semanas. Atendimento feminino por ordem de chegada. Escolha a loja no pedido: o pacote só pode ser usado na unidade informada.",
  "virilha-cera":
    "Sessão avulsa de cera na virilha total, para quem quer resultado imediato sem fechar pacote de laser. A técnica é feita com produto adequado à região íntima, visando menos irritação e acabamento limpo no mesmo dia. Duração aproximada de 25 minutos, em ambiente feminino e por ordem de chegada. Não inclui sessões futuras: é um atendimento avulso. Compareça na unidade escolhida no pedido — o campo de loja é obrigatório.",
  "perna-cera":
    "Cera na perna inteira em sessão avulsa, da coxa ao tornozelo. Ideal para quem precisa da pele lisa no mesmo dia — evento, viagem ou rotina — sem compromisso de pacote. A sessão dura cerca de 40 minutos, com produto pensado para área grande e menos desconforto. Atendimento exclusivo feminino, sem agendamento. Escolha a unidade obrigatória no pedido e realize o serviço somente nessa loja.",
  "buco-cera":
    "Cera no buço em sessão rápida e avulsa, com precisão no contorno da boca. Remove o pelo da região na hora, em cerca de 10 minutos, com cuidado para não marcar a pele fina do rosto. Boa opção entre uma sessão e outra de laser ou para quem prefere só a cera. Atendimento feminino por ordem de chegada. Selecione a loja no pedido: o serviço é prestado apenas na unidade escolhida.",
  "axila-cera":
    "Cera nas axilas em sessão avulsa, para pele lisa na hora sem pacote de laser. Usamos produto adequado à região, que costuma ser mais sensível e sujeita a foliculite. A sessão leva cerca de 15 minutos: rápida, objetiva e feita em ambiente exclusivo feminino, por ordem de chegada. Perfeita para o dia a dia ou para completar outro serviço na mesma visita. Escolha a loja onde deseja ser atendida — o campo de unidade é obrigatório.",
  "meia-perna-laser":
    "Meia perna a laser, do joelho ao tornozelo, em até 10 sessões. Equilíbrio entre tempo de cadeira (cerca de 20 minutos) e resultado duradouro na parte que mais aparece no dia a dia. Indicado para quem não precisa tratar a coxa agora, mas quer panturrilha e canela mais lisas ao longo do protocolo. Atendimento feminino, sem hora marcada. O pacote é resgatado somente na unidade selecionada no pedido.",
  "coxas-laser":
    "Laser nas coxas em pacote de até 10 sessões, com foco na uniformidade da pele da parte superior das pernas. Cada visita dura cerca de 25 minutos e trata as duas coxas no mesmo protocolo. Combina bem com meia perna ou perna inteira para quem monta o tratamento por etapa. Ambiente feminino, atendimento por ordem de chegada. Informe a unidade no carrinho: o serviço só é usado na loja escolhida.",
  "bracos-laser":
    "Braços inteiros a laser, do ombro ao pulso, em até 10 sessões. Sessões ágeis (cerca de 20 minutos) com cobertura completa das duas laterais, para reduzir o pelo escuro e deixar a pele mais uniforme. Indicado para quem usa manga curta e quer resultado que dure além da cera. Atendimento 100% feminino, sem agendamento. Escolha a unidade obrigatória no pedido para resgatar o pacote na loja.",
  "antebraco-laser":
    "Laser no antebraço em até 10 sessões, para quem quer tratar só a parte inferior do braço — do cotovelo ao pulso — sem incluir o braço inteiro. A sessão dura cerca de 15 minutos e segue o mesmo protocolo de clínica das demais áreas. Atendimento feminino por ordem de chegada. Selecione a loja no pedido: o serviço fica vinculado à unidade escolhida e não pode ser usado em outra.",
  "abdomen-laser":
    "Abdômen a laser em até 10 sessões, com protocolo objetivo para a região da barriga. Cada visita leva cerca de 20 minutos e busca reduzir o pelo e deixar a pele mais lisa ao longo do pacote. Indicado para quem combina com outros tratamentos de corpo ou quer só essa área. Ambiente exclusivo feminino, sem hora marcada. O resgate é feito apenas na unidade informada no pedido.",
  "costas-laser":
    "Costas a laser em até 10 sessões, cobrindo a região posterior com protocolo de clínica. A sessão dura cerca de 25 minutos e é feita em ambiente feminino, com higiene e cuidado para a pele das costas, que costuma ser mais ampla. Indicado para quem busca menos pelo e pele mais uniforme nessa área. Atendimento por ordem de chegada. Escolha a loja no carrinho — o pacote só vale na unidade selecionada.",
  "queixo-laser":
    "Laser no queixo em até 10 sessões curtas, com cuidado específico para pelos da face inferior. Cada atendimento dura cerca de 10 minutos e respeita a pele mais fina do rosto. Boa opção isolada ou em conjunto com buço e rosto inteiro. Atendimento exclusivo feminino, por ordem de chegada. Informe a unidade obrigatória no pedido para usar o serviço na loja escolhida.",
  "pescoco-laser":
    "Pescoço a laser em até 10 sessões rápidas, tratando a linha do pescoço e a transição com o queixo. A sessão leva cerca de 10 minutos e usa protocolo adequado a uma área visível e sensível. Ideal para quem quer o contorno do pescoço mais limpo, sozinho ou junto com o rosto. Atendimento feminino, sem agendamento. O pacote é resgatado somente na unidade selecionada.",
  "rosto-inteiro-laser":
    "Rosto inteiro a laser em até 10 sessões: buço, queixo e laterais no mesmo protocolo, para um resultado mais uniforme em toda a face. A sessão dura cerca de 20 minutos e evita tratar só um ponto enquanto o restante do rosto fica com pelo aparente. Combo indicado para quem quer reduzir pinça e cera no dia a dia. Ambiente feminino, por ordem de chegada. Escolha a loja no pedido — o uso é só nessa unidade.",
  "virilha-comum-laser":
    "Virilha comum a laser (não total) em até 10 sessões. Trata uma área menor que a virilha total, com sessão mais curta (cerca de 15 minutos) e preço mais acessível. Indicado para quem quer a linha do biquíni mais limpa sem cobrir a região completa. Atendimento feminino, higiene de clínica, sem hora marcada. Unidade obrigatória no pedido: o serviço só pode ser realizado na loja escolhida.",
  "meia-perna-cera":
    "Cera na meia perna em sessão avulsa, do joelho para baixo. Resultado no mesmo dia, em cerca de 20 minutos, para panturrilha e canela lisas sem fechar pacote. Boa escolha para o verão, um evento ou para manter entre sessões de laser. Atendimento exclusivo feminino, por ordem de chegada. Selecione a unidade no pedido e compareça apenas nessa loja para o serviço.",
  "coxa-cera":
    "Cera na coxa em sessão avulsa, com pele lisa na hora na parte superior da perna. A sessão dura cerca de 20 minutos e usa produto adequado a uma área maior e mais sensível. Pode ser combinada com meia perna no mesmo dia, se você quiser montar o atendimento. Ambiente feminino, sem agendamento. Escolha a loja obrigatória no carrinho — o serviço vale só na unidade selecionada.",
  "bracos-cera":
    "Cera nos braços inteiros em sessão avulsa, do ombro ao pulso, sem pacote de laser. Resultado imediato em cerca de 20 minutos, para quem quer os braços lisos no mesmo dia. Indicada para rotina, viagem ou para complementar outro serviço avulso. Atendimento 100% feminino, por ordem de chegada. Informe a unidade no pedido: o atendimento acontece somente na loja escolhida.",
  "antebraco-cera":
    "Cera no antebraço em sessão avulsa, opção rápida para a parte inferior do braço — do cotovelo ao pulso. Dura cerca de 15 minutos e entrega pele lisa na hora, sem compromisso de pacote. Ideal para quem não precisa tratar o braço inteiro. Atendimento feminino, sem hora marcada. Selecione a unidade obrigatória no pedido para ser atendida na loja informada.",
  "abdomen-cera":
    "Cera no abdômen em sessão avulsa, com resultado imediato na barriga e sem pacote de laser. A sessão leva cerca de 15 minutos, com produto adequado à região. Boa para o dia a dia ou para unir a outro avulso na mesma visita. Ambiente exclusivo feminino, atendimento por ordem de chegada. Escolha a loja no pedido — o serviço só é prestado na unidade selecionada.",
  "design-sobrancelha":
    "Design de sobrancelha com cera e pinça para desenhar o olhar com simetria e acabamento limpo. Sessão avulsa de cerca de 20 minutos: a profissional avalia o formato do seu rosto, remove o excesso e finaliza o traço. Não inclui henna. Atendimento feminino, por ordem de chegada, sem agendamento. Selecione a unidade no pedido — o serviço é realizado apenas na loja escolhida.",
  "sobrancelha-henna":
    "Design de sobrancelha com henna para preencher falhas, intensificar o traço e valorizar o olhar por alguns dias. A sessão avulsa dura cerca de 30 minutos: desenho, cera ou pinça e aplicação da henna com o tom combinado na hora. Indicado para quem quer mais definição do que o design sozinho. Ambiente feminino, por ordem de chegada. O atendimento acontece somente na unidade obrigatória informada no pedido.",
};

function catalogSku(index: number) {
  return `PM-${String(index + 1).padStart(4, "0")}`;
}

function catalogCode(id: string) {
  return `PEL-${id.replace(/-/g, "").toUpperCase()}`;
}

export const products: Product[] = catalogItems.map((item, index) => ({
  ...item,
  sku: catalogSku(index),
  code: catalogCode(item.id),
  description:
    productCopy[item.id] ??
    `${item.name} na Pello Menos. Atendimento feminino por ordem de chegada na unidade escolhida.`,
}));

export function getProductById(id: string) {
  return products.find((item) => item.id === id);
}

export function getStoreUnitById(id: string) {
  return storeUnits.find((item) => item.id === id);
}

export function relatedProducts(product: Product, limit = 4) {
  const sameCategory = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const extras = products.filter(
    (item) =>
      item.id !== product.id &&
      !sameCategory.some((related) => related.id === item.id),
  );
  return [...sameCategory, ...extras].slice(0, limit);
}

export const heroSlides: HeroSlide[] = [
  {
    id: "laser-10",
    badge: "Oferta especial",
    title: "10 sessões de laser nas axilas",
    priceReais: "94",
    priceCents: "90",
    cta: "Ver serviços",
    image: "/images/hero/hero-campaign-center.png",
    imageAlt: "Mulher no centro da campanha de laser nas axilas Pello Menos",
    layout: "split",
  },
  {
    id: "virilha",
    badge: "Mais vendido",
    title: "Virilha total a laser",
    priceReais: "1.358",
    priceCents: "50",
    cta: "Ver serviços",
    image: "/images/hero/hero-campaign-left.png",
    imageAlt: "Mulher à esquerda na campanha de virilha a laser Pello Menos",
    layout: "copy-right",
  },
  {
    id: "bracos",
    badge: "Novo no laser",
    title: "Braços inteiros a laser",
    priceReais: "936",
    priceCents: "00",
    cta: "Ver braços",
    image: "/images/hero/hero-campaign-right.png",
    imageAlt: "Mulher à direita na campanha de braços a laser Pello Menos",
    layout: "copy-left",
  },
  {
    id: "verao",
    badge: "Verão 2026",
    title: "Pernas prontas pra viver",
    priceReais: "77",
    priceCents: "31",
    cta: "Ver cera",
    image: "/images/hero/hero-campaign-low.png",
    imageAlt: "Mulher na metade inferior da campanha de pernas Pello Menos",
    layout: "copy-top",
  },
];

export const categories: Category[] = [
  { id: "axilas", label: "Axilas", image: "/images/categories/cat-axilas-v2.png" },
  { id: "virilha", label: "Virilha", image: "/images/categories/cat-virilha-v2.png" },
  { id: "pernas", label: "Pernas", image: "/images/categories/cat-pernas-v2.png" },
  { id: "rosto", label: "Rosto", image: "/images/categories/cat-rosto-v2.png" },
  { id: "bracos", label: "Braços", image: "/images/categories/cat-bracos-v2.png" },
  { id: "corpo", label: "Corpo", image: "/images/categories/cat-corpo-v2.png" },
];

export const productRails = {
  maisBuscados: products.filter((item) =>
    [
      "axilas-laser",
      "virilha-laser",
      "perna-laser",
      "meia-perna-laser",
      "bracos-laser",
      "rosto-inteiro-laser",
      "design-sobrancelha",
      "buco-laser",
    ].includes(item.id),
  ),
  areas: products.filter((item) =>
    [
      "buco-laser",
      "queixo-laser",
      "rosto-inteiro-laser",
      "pescoco-laser",
      "design-sobrancelha",
      "sobrancelha-henna",
    ].includes(item.id),
  ),
  corpo: products.filter((item) =>
    [
      "abdomen-laser",
      "costas-laser",
      "coxas-laser",
      "bracos-laser",
      "antebraco-laser",
      "meia-perna-laser",
    ].includes(item.id),
  ),
  avulsos: products.filter(
    (item) => item.id.endsWith("-cera") || item.id.includes("sobrancelha"),
  ),
};

export const rectangularBanners = [
  {
    id: "semana",
    badge: "Novidade",
    title: "Semana da Beleza",
    subtitle: "Ofertas nos serviços mais pedidos da casa.",
    image: "/images/hero/promo-semana-v2.png",
    imageAlt: "Mulher com axilas lisas na Semana da Beleza",
  },
  {
    id: "laser",
    badge: "Tecnologia",
    title: "Laser de última geração",
    subtitle: "Sessões mais rápidas e resultado duradouro.",
    image: "/images/hero/promo-laser-v3.png",
    imageAlt: "Mulher em sessão de laser em clínica com luz natural",
    textSide: "right" as const,
    overlay: "purple" as const,
  },
  {
    id: "olhar",
    badge: "Olhar",
    title: "Design de sobrancelha",
    subtitle: "Cera, henna e realce para valorizar o olhar.",
    image: "/images/hero/promo-olhar-v2.png",
    imageAlt: "Mulher com design de sobrancelha em spa com luz e textura",
    overlay: "purple" as const,
  },
];

export const squareBanners = [
  {
    id: "kits",
    title: "Kits Home Care",
    subtitle: "Cuide-se em casa",
    badge: "Lançamento",
    image: "/images/hero/destaque-kits.png",
    imageAlt: "Mulher cuidando da pele em casa após depilação",
  },
  {
    id: "verao",
    title: "Pacotes Verão",
    subtitle: "Até 40% OFF",
    image: "/images/hero/destaque-verao.png",
    imageAlt: "Mulher alisando as pernas para o verão",
  },
  {
    id: "presente",
    title: "Cartão Presente",
    subtitle: "Surpreenda quem você ama",
    image: "/images/hero/destaque-presente.png",
    imageAlt: "Mulher com cartão presente Pello Menos",
  },
  {
    id: "combo",
    title: "Combos de laser",
    subtitle: "Rosto, braços e corpo",
    badge: "Pacote",
    image: "/images/hero/destaque-combo.png",
    imageAlt: "Mulher cuidando da pele após sessão de laser",
  },
  {
    id: "olhar",
    title: "Sobrancelhas",
    subtitle: "Design e henna",
    image: "/images/hero/destaque-olhar.png",
    imageAlt: "Mulher com design de sobrancelha",
  },
];

export const googleReviews = [
  {
    id: "r1",
    name: "Camila R.",
    rating: 5,
    text: "Fiz axilas a laser e o resultado veio rápido. Atendimento impecável.",
    time: "há 2 semanas",
  },
  {
    id: "r2",
    name: "Juliana M.",
    rating: 5,
    text: "Ambiente lindo e profissional. Volto sempre para as sessões.",
    time: "há 1 mês",
  },
  {
    id: "r3",
    name: "Patrícia S.",
    rating: 4,
    text: "Gostei muito da virilha a laser. Recomendo o pacote de 10 sessões.",
    time: "há 3 semanas",
  },
  {
    id: "r4",
    name: "Fernanda L.",
    rating: 5,
    text: "Buço a cera perfeito. Já indiquei para as amigas.",
    time: "há 5 dias",
  },
  {
    id: "r5",
    name: "Bianca T.",
    rating: 5,
    text: "Fiz meia perna e braços a laser. Sai lisa e o atendimento é rápido.",
    time: "há 4 dias",
  },
  {
    id: "r6",
    name: "Larissa P.",
    rating: 5,
    text: "Design de sobrancelha ficou impecável. Virou meu ritual.",
    time: "há 1 semana",
  },
];

export const googleBusiness = {
  name: "Pello Menos",
  rating: 4.9,
  count: "2.148",
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#produtos", label: "Serviços" },
  { href: "/carrinho", label: "Carrinho" },
  { href: "/checkout", label: "Checkout" },
];
