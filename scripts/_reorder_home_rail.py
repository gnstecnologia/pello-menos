# -*- coding: utf-8 -*-
"""Reordena os cards do carrossel "Áreas mais pedidas" da home feminina.

O carrossel e HTML estatico gerado pelo Next; o re-export completo regride
ajustes feitos a mao (banners e link do SAC), entao aqui so os blocos
<article data-carousel-card> sao movidos, nada mais e tocado.

Ordem = ranking real de itens vendidos (relatorio de vendas, nov/2026).

Uso: python scripts/_reorder_home_rail.py [--write]
"""
from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = ROOT / "wordpress-loja" / "pm-home" / "home.html"

# ancora que identifica o painel do carrossel de cera
ANCHOR = "Áreas mais pedidas"
RANKING = [
    "virilha-cera",  # 81 itens · R$ 5.348,35
    "perna-cera",  # 32 · R$ 2.163,69
    "buco-cera",  # 28 · R$ 608,30
    "axila-cera",  # 25 · R$ 660,12
    "meia-nadega-cera",
    "design-sobrancelha",
    "meia-perna-cera",
    "coxa-cera",
    "bracos-cera",
    "virilha-comum-cera",
    "nadegas-cera",
    "queixo-cera",
    "costas-cera",
    "virilha-cavada-cera",
]

ART = re.compile(r'<article data-carousel-card="true"[\s\S]*?</article>')
SLUG = re.compile(r'href="/produto/([a-z0-9\-]+)')


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()

    html = HOME.read_text(encoding="utf-8")
    i = html.find(ANCHOR)
    if i < 0:
        raise SystemExit("ainda nao encontrado")

    # o painel termina antes do proximo <section data-home-panel>
    fim = html.find('<section data-home-panel="', i)
    if fim < 0:
        raise SystemExit("limite do painel nao encontrado")

    trecho = html[i:fim]
    arts = list(ART.finditer(trecho))
    print(f"cards no carrossel: {len(arts)}")

    blocos = []
    for m in arts:
        s = SLUG.search(m.group(0))
        if not s:
            raise SystemExit("card sem slug")
        blocos.append({"slug": s.group(1), "texto": m.group(0), "ini": m.start(), "fim": m.end()})

    atuais = [b["slug"] for b in blocos]
    print("ordem atual :", atuais)

    por_slug = {b["slug"]: b for b in blocos}
    faltando = [s for s in RANKING if s not in por_slug]
    extras = [s for s in atuais if s not in RANKING]
    if faltando:
        raise SystemExit(f"cards do ranking ausentes no HTML: {faltando}")
    if extras:
        raise SystemExit(f"cards fora do ranking: {extras}")

    # so entram no carrossel os que estao no ranking, na ordem dele
    nova = [por_slug[s] for s in RANKING]
    print("ordem nova  :", [b["slug"] for b in nova])

    # os cards no HTML sao contiguos: substitui o bloco inteiro
    primeiro, ultimo = blocos[0], blocos[-1]
    antes = trecho[: primeiro["ini"]]
    depois = trecho[ultimo["fim"] :]
    novo_trecho = antes + "".join(b["texto"] for b in nova) + depois
    novo_html = html[:i] + novo_trecho + html[fim:]

    if novo_html == html:
        print("\nnada a mudar")
        return

    print(f"\ntamanho: {len(html)} -> {len(novo_html)} bytes")
    if not args.write:
        print("(dry-run; use --write)")
        return

    bak = HOME.with_suffix(".html.bak-rail")
    if not bak.exists():
        shutil.copy2(HOME, bak)
    HOME.write_text(novo_html, encoding="utf-8")
    print("gravado. backup:", bak.name)


if __name__ == "__main__":
    main()
