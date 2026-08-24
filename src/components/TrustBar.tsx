import { Icon, type IconName } from "@/components/Icon";

const items: { icon: IconName; label: string; detail: string }[] = [
  { icon: "badgePercent", label: "Até 10x", detail: "Sem juros no cartão" },
  { icon: "sparkles", label: "Cera em primeiro", detail: "O carro-chefe da marca" },
  { icon: "clock", label: "Sem agendamento", detail: "Atendimento por ordem de chegada" },
  { icon: "shieldCheck", label: "Compra segura", detail: "Cartão protegido" },
  { icon: "heart", label: "Cortesia de primeira vez", detail: "Na unidade escolhida" },
  { icon: "scanFace", label: "Atendimento feminino", detail: "Ambiente exclusivo" },
  { icon: "star", label: "Laser e cera", detail: "Tudo na mesma loja" },
  { icon: "house", label: "Unidades no RJ e SP", detail: "Loja perto de você" },
  { icon: "check", label: "Avaliação com especialista", detail: "Pacotes a laser" },
];

function Row({ suffix }: { suffix: string }) {
  return (
    <ul className="flex shrink-0 items-center gap-8 px-4" aria-hidden={suffix !== "a"}>
      {items.map((item) => (
        <li
          key={`${suffix}-${item.label}`}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap"
        >
          <Icon name={item.icon} size={15} className="text-[#e8b86d]" />
          <span className="text-[12px] font-semibold tracking-wide text-white uppercase">
            {item.label}
          </span>
          <span className="text-[12px] text-white/70">{item.detail}</span>
          <span className="ml-6 text-[#e8b86d]" aria-hidden>
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TrustBar() {
  return (
    <div className="overflow-hidden border-b border-white/10 bg-primary py-2.5">
      <div className="benefits-marquee flex w-max">
        <Row suffix="a" />
        <Row suffix="b" />
      </div>
    </div>
  );
}
