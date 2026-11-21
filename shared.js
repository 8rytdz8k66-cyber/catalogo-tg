/* Dados padrão, temas e ilustrações compartilhados pelo site e pelo painel. */
(function () {
  const THEMES = {
    "pv-neon":   { name: "Preto e verde PV",  dark: "#0a0b09", dark2: "#121510", light: "#eeeadf", light2: "#e3ddcd", accent: "#a3ff6b", accentInk: "#0a0b09", accentOnLight: "#2f6d16", inkDark: "#f3f1e8", inkLight: "#16180f", muted: "#9aa293" },
    "bordo":     { name: "Bordô editorial",   dark: "#2a0a10", dark2: "#3b0f17", light: "#f2ebe0", light2: "#e6dccb", accent: "#e9c79a", accentInk: "#2a0a10", accentOnLight: "#7a1a28", inkDark: "#f6efe4", inkLight: "#2a0a10", muted: "#c7aea1" },
    "grafite":   { name: "Grafite e dourado", dark: "#111214", dark2: "#1b1d20", light: "#f1efea", light2: "#e4e0d6", accent: "#d8b56a", accentInk: "#111214", accentOnLight: "#7d5f1f", inkDark: "#f4f2ec", inkLight: "#141518", muted: "#a3a29c" },
    "oceano":    { name: "Azul profundo",     dark: "#07131f", dark2: "#0d1e2f", light: "#eef1f2", light2: "#dde4e7", accent: "#7fd6ff", accentInk: "#07131f", accentOnLight: "#0d5b80", inkDark: "#eef6fb", inkLight: "#0b1a26", muted: "#97a9b6" }
  };

  const CATS = ["Celulares", "iPad e tablets", "Mac e notebooks", "Fones e áudio", "Acessórios", "Perfumes", "Outros"];

  const DEFAULT = {
    slug: "pv-vendas",
    published: true,
    brand: { name: "PV Vendas", short: "PV", tagline: "Realizando seus objetivos", logo: "logo.webp", theme: "pv-neon", custom: null },
    contacts: { whatsapp: "5585986812394", whatsappPy: "5585992731514", instagram: "_pv_vendas_", city: "Fortaleza e região", hours: "Atendimento em qualquer horário" },
    hero: {
      kicker: "Consultoria de vendas · Fortaleza",
      title: "O carro certo chega até você.",
      text: "Compra, venda e troca de carros e motos, busca sob medida e produtos do Paraguai. Tudo com quem entende de negócio.",
      cta: "Explorar",
      image: "hero-showroom.webp"
    },
    banner: { image: "", caption: "" },
    trade: {
      title: ["Compre.", "Venda.", "Troque."],
      text: "Você diz o que quer, a gente cuida da negociação. Avaliação justa, troca na conversa e todo tipo de pagamento.",
      points: ["Avaliação do seu veículo", "Troca como parte do pagamento", "Todo tipo de pagamento", "Negociação do começo ao fim"],
      image: "", imageBg: "cutout", imageAlt: ""
    },
    vehicles: [],
    vehiclesNote: "Estoque atualizado no WhatsApp.",
    search: {
      title: "Encontramos o seu.",
      text: "Diga marca, modelo, ano e quanto quer investir. A gente procura, filtra e te manda só o que vale a pena."
    },
    products: [],
    catalog: {
      title: "Sua empresa merece um site assim.",
      text: "Criamos sites e catálogos digitais com a mesma qualidade desta página, com a sua marca, as suas cores e o seu WhatsApp.",
      segments: ["Restaurantes", "Lojas", "Barbearias", "Clínicas", "Imobiliárias", "Oficinas", "Serviços", "Eletrônicos"]
    },
    contact: { title: "Vamos fechar negócio.", text: "Me chama no WhatsApp e diz o que você procura. A resposta vem rápido." },
    sections: { banner: true, trade: true, vehicles: true, search: true, products: true, catalog: true, contact: true }
  };

  /* Exemplos ilustrativos, usados só quando a empresa ainda não cadastrou itens. */
  const SAMPLE_VEHICLES = [
    { id: "ex1", kind: "car", model: "Sedã executivo", year: "Exemplo", price: "Consulte", km: "", desc: "Espaço de exemplo para um veículo do estoque.", info: ["Automático", "Completo"] },
    { id: "ex2", kind: "moto", model: "Moto urbana", year: "Exemplo", price: "Consulte", km: "", desc: "Cadastre fotos, ano, preço e detalhes pelo painel.", info: ["Econômica", "Revisada"] },
    { id: "ex3", kind: "car", model: "SUV familiar", year: "Exemplo", price: "Consulte", km: "", desc: "Cada veículo ganha sua própria página nesta vitrine.", info: ["7 lugares", "Câmera de ré"] }
  ];
  const SAMPLE_PRODUCTS = [
    { id: "p1", cat: "Celulares", name: "Smartphones", desc: "Diga o modelo, a cor e a capacidade.", price: "Consulte" },
    { id: "p2", cat: "Perfumes", name: "Perfumes importados", desc: "Masculinos e femininos, das marcas que você pedir.", price: "Consulte" },
    { id: "p3", cat: "Fones e áudio", name: "Fones e caixas de som", desc: "Áudio, games e o que mais você procurar.", price: "Consulte" },
    { id: "p4", cat: "Acessórios", name: "Relógios e acessórios", desc: "Capinhas, películas, carregadores e relógios.", price: "Consulte" },
    { id: "p5", cat: "Outros", name: "Sob encomenda", desc: "Não achou? Me diz o que é que eu trago.", price: "Consulte" }
  ];

  /* Ilustrações em SVG (usam a cor de destaque do tema via currentColor). */
  const ILLUS = {
    car: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="cb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3f3a"/><stop offset=".45" stop-color="#1b1e1a"/><stop offset="1" stop-color="#0b0c0a"/></linearGradient>
        <linearGradient id="cw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5b6a6f" stop-opacity=".9"/><stop offset=".6" stop-color="#151a1c"/><stop offset="1" stop-color="#0a0c0d"/></linearGradient>
        <radialGradient id="cg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="currentColor" stop-opacity=".9"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
        <radialGradient id="cs" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
        <radialGradient id="rim" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#cfd3cc"/><stop offset=".55" stop-color="#6d736b"/><stop offset="1" stop-color="#2a2e29"/></radialGradient>
      </defs>
      <ellipse cx="410" cy="282" rx="380" ry="26" fill="url(#cs)"/>
      <path d="M40 214c0-20 20-33 52-39l112-24c50-40 122-64 222-66 82-1 140 16 200 56l78 16c42 8 70 22 72 46v14c0 9-6 14-15 14h-55a60 60 0 0 0-120 0H264a60 60 0 0 0-120 0H58c-11 0-18-6-18-17z" fill="url(#cb)"/>
      <path d="M92 175l112-24c50-40 122-64 222-66 82-1 140 16 200 56l78 16" fill="none" stroke="currentColor" stroke-width="2.4" opacity=".85"/>
      <path d="M232 152c48-34 110-50 192-51 52 0 98 9 142 34l-12 13H250z" fill="url(#cw)"/>
      <path d="M404 101v47" stroke="#0a0c0d" stroke-width="5"/>
      <path d="M70 200h690" stroke="#ffffff" stroke-opacity=".08" stroke-width="2"/>
      <path d="M300 186h120M470 186h70" stroke="#000" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="764" cy="190" rx="70" ry="26" fill="url(#cg)"/>
      <path d="M742 182l26 4-4 10-24-3z" fill="currentColor"/>
      <path d="M46 196l20-6v14l-20 2z" fill="#ff3b30" opacity=".9"/>
      <g><circle cx="204" cy="230" r="54" fill="#070807"/><circle cx="204" cy="230" r="36" fill="url(#rim)"/><circle cx="204" cy="230" r="9" fill="#141613"/>
        <g stroke="#1d201c" stroke-width="5">${[0,72,144,216,288].map(a=>`<line x1="204" y1="230" x2="${(204+34*Math.cos(a*Math.PI/180)).toFixed(1)}" y2="${(230+34*Math.sin(a*Math.PI/180)).toFixed(1)}"/>`).join("")}</g></g>
      <g><circle cx="644" cy="230" r="54" fill="#070807"/><circle cx="644" cy="230" r="36" fill="url(#rim)"/><circle cx="644" cy="230" r="9" fill="#141613"/>
        <g stroke="#1d201c" stroke-width="5">${[0,72,144,216,288].map(a=>`<line x1="644" y1="230" x2="${(644+34*Math.cos(a*Math.PI/180)).toFixed(1)}" y2="${(230+34*Math.sin(a*Math.PI/180)).toFixed(1)}"/>`).join("")}</g></g>
    </svg>`,
    moto: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><radialGradient id="ms" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".7"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      <linearGradient id="mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#474d46"/><stop offset="1" stop-color="#121411"/></linearGradient></defs>
      <ellipse cx="300" cy="322" rx="270" ry="18" fill="url(#ms)"/>
      <circle cx="140" cy="250" r="72" fill="none" stroke="#0b0c0a" stroke-width="22"/><circle cx="140" cy="250" r="44" fill="none" stroke="#5c625a" stroke-width="4"/>
      <circle cx="462" cy="250" r="72" fill="none" stroke="#0b0c0a" stroke-width="22"/><circle cx="462" cy="250" r="44" fill="none" stroke="#5c625a" stroke-width="4"/>
      <path d="M140 250l90-80h120l112 80" fill="none" stroke="#2a2e29" stroke-width="16" stroke-linejoin="round"/>
      <path d="M220 168c20-36 70-52 130-46l40 34-60 22H230z" fill="url(#mt)"/>
      <path d="M220 168c20-36 70-52 130-46" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M150 160l70 6 8 22-80-8z" fill="#171a16"/>
      <path d="M390 150l52-58 22 6" fill="none" stroke="#2a2e29" stroke-width="12" stroke-linecap="round"/>
      <circle cx="470" cy="104" r="14" fill="currentColor"/>
      <path d="M300 210h70" stroke="#0b0c0a" stroke-width="18" stroke-linecap="round"/>
    </svg>`,
    phone: `<svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="ps" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".9"/><stop offset=".55" stop-color="#14301a"/><stop offset="1" stop-color="#07090a"/></linearGradient>
      <radialGradient id="pg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="150" cy="400" rx="110" ry="12" fill="url(#pg)"/>
      <rect x="62" y="20" width="176" height="370" rx="34" fill="#1c1f1b" stroke="#454b43" stroke-width="3"/>
      <rect x="72" y="30" width="156" height="350" rx="26" fill="url(#ps)"/>
      <rect x="122" y="40" width="56" height="16" rx="8" fill="#050605"/>
      <path d="M72 250c50-40 110-30 156-80v210H72z" fill="#000" opacity=".25"/>
    </svg>`,
    perfume: `<svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="fb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f1e6" stop-opacity=".35"/><stop offset=".5" stop-color="currentColor" stop-opacity=".35"/><stop offset="1" stop-color="#0b0d0a" stop-opacity=".6"/></linearGradient>
      <radialGradient id="fg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="150" cy="400" rx="110" ry="12" fill="url(#fg)"/>
      <rect x="118" y="40" width="64" height="70" rx="8" fill="#141613" stroke="#5a6058" stroke-width="2"/>
      <rect x="134" y="108" width="32" height="26" fill="#2a2e29"/>
      <rect x="58" y="132" width="184" height="258" rx="30" fill="url(#fb)" stroke="#e9e6da" stroke-opacity=".5" stroke-width="2"/>
      <rect x="92" y="226" width="116" height="64" rx="4" fill="#0b0d0a" opacity=".55"/>
      <path d="M76 160c10 60 6 150 2 210" stroke="#fff" stroke-opacity=".35" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
    eletronico: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><radialGradient id="eg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="180" cy="336" rx="130" ry="12" fill="url(#eg)"/>
      <path d="M70 200a110 110 0 0 1 220 0" fill="none" stroke="#2a2e29" stroke-width="22" stroke-linecap="round"/>
      <path d="M70 200a110 110 0 0 1 220 0" fill="none" stroke="currentColor" stroke-width="3" opacity=".8"/>
      <rect x="40" y="190" width="70" height="120" rx="30" fill="#161915" stroke="#4a5048" stroke-width="3"/>
      <rect x="250" y="190" width="70" height="120" rx="30" fill="#161915" stroke="#4a5048" stroke-width="3"/>
      <circle cx="75" cy="250" r="16" fill="currentColor" opacity=".9"/><circle cx="285" cy="250" r="16" fill="currentColor" opacity=".9"/>
    </svg>`,
    acessorio: `<svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><radialGradient id="ag" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="150" cy="402" rx="100" ry="12" fill="url(#ag)"/>
      <rect x="112" y="20" width="76" height="120" rx="14" fill="#1a1d19"/><rect x="112" y="280" width="76" height="120" rx="14" fill="#1a1d19"/>
      <circle cx="150" cy="210" r="96" fill="#20241f" stroke="#6b7168" stroke-width="6"/>
      <circle cx="150" cy="210" r="80" fill="#0b0d0a"/>
      <circle cx="150" cy="210" r="80" fill="none" stroke="currentColor" stroke-width="2" opacity=".6"/>
      <path d="M150 210V160M150 210l34 18" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
      <rect x="246" y="196" width="16" height="28" rx="4" fill="#6b7168"/>
    </svg>`,
    outro: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><radialGradient id="og" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="180" cy="330" rx="130" ry="14" fill="url(#og)"/>
      <path d="M60 120l120-56 120 56v150l-120 56-120-56z" fill="#1b1e1a" stroke="#4a5048" stroke-width="3"/>
      <path d="M60 120l120 56 120-56M180 176v150" fill="none" stroke="#4a5048" stroke-width="3"/>
      <path d="M120 92l120 56v40" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
    </svg>`
  };
  const KIND_BY_CAT = { "Celulares": "phone", "iPad e tablets": "phone", "Mac e notebooks": "eletronico", "Fones e áudio": "eletronico", "Eletrônicos": "eletronico", "Perfumes": "perfume", "Acessórios": "acessorio", "Outros": "outro" };

  function themeOf(site) {
    const base = THEMES[(site.brand && site.brand.theme) || "pv-neon"] || THEMES["pv-neon"];
    return Object.assign({}, base, (site.brand && site.brand.custom) || {});
  }
  function merge(def, val) {
    if (Array.isArray(def)) return Array.isArray(val) ? val : def;
    if (def && typeof def === "object") {
      const out = {};
      Object.keys(def).forEach(k => { out[k] = merge(def[k], val ? val[k] : undefined); });
      if (val && typeof val === "object") Object.keys(val).forEach(k => { if (!(k in out)) out[k] = val[k]; });
      return out;
    }
    return (val === undefined || val === null || val === "") ? def : val;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function imgUrl(v) { return (!v || v === "none") ? "" : (/^(https?:|data:|\/|blob:)/.test(v) || /\.(webp|png|jpe?g|svg)$/i.test(v)) ? v : "/_blob/" + v; }

  window.PV = { THEMES, CATS, DEFAULT, SAMPLE_VEHICLES, SAMPLE_PRODUCTS, ILLUS, KIND_BY_CAT, themeOf, merge, esc, imgUrl };
})();

/* Conteúdo publicado no GitHub (cópia do painel). */
(function(){var D={"banner": {"caption": "", "image": "none"}, "brand": {"custom": null, "logo": "logo.webp", "name": "PV Vendas", "short": "PV", "tagline": "Realizando seus objetivos", "theme": "pv-neon"}, "catalog": {"segments": ["Restaurantes", "Lojas", "Barbearias", "Clínicas", "Imobiliárias", "Oficinas", "Serviços", "Eletrônicos"], "text": "Criamos sites e catálogos digitais com a mesma qualidade desta página, com a sua marca, as suas cores e o seu WhatsApp.", "title": "Sua empresa merece um site assim."}, "contact": {"text": "Me chama no WhatsApp e diz o que você procura. A resposta vem rápido.", "title": "Vamos fechar negócio."}, "contacts": {"city": "Fortaleza e região", "hours": "Atendimento em qualquer horário", "instagram": "_pv_vendas_", "whatsapp": "5585986812394", "whatsappPy": "5585992731514"}, "hero": {"cta": "Explorar", "image": "hero-showroom.webp", "kicker": "Consultoria de vendas · Fortaleza", "text": "Compra, venda e troca de carros e motos, busca sob medida e produtos do Paraguai. Tudo com quem entende de negócio.", "title": "O carro certo chega até você."}, "published": true, "search": {"text": "Diga marca, modelo, ano e quanto quer investir. A gente procura, filtra e te manda só o que vale a pena.", "title": "Encontramos o seu."}, "sections": {"banner": false, "catalog": true, "contact": true, "products": true, "search": true, "trade": true, "vehicles": true}, "slug": "pv-vendas", "trade": {"image": "v-moto-vermelha.webp", "imageAlt": "Moto vermelha", "imageBg": "photo", "points": ["Avaliação do seu veículo", "Troca como parte do pagamento", "Todo tipo de pagamento", "Negociação do começo ao fim"], "text": "Você diz o que quer, a gente cuida da negociação. Avaliação justa, troca na conversa e todo tipo de pagamento.", "title": ["Compre.", "Venda.", "Troque."]}, "vehiclesNote": "Estoque atualizado no WhatsApp.", "vehicles": [{"id": "onix", "kind": "car", "model": "Chevrolet Onix", "year": "", "km": "", "price": "Consulte", "desc": "Hatch econômico e completo. Consulte ano, versão e condições no WhatsApp.", "info": ["Hatch", "Econômico"], "photo": "v-onix.webp", "bg": "light"}, {"id": "mobi", "kind": "car", "model": "Fiat Mobi", "year": "", "km": "", "price": "Consulte", "desc": "Compacto, fácil de estacionar e barato de manter. Consulte condições.", "info": ["Compacto", "Econômico"], "photo": "v-mobi.webp", "bg": "light"}, {"id": "gol", "kind": "car", "model": "Volkswagen Gol", "year": "", "km": "", "price": "Consulte", "desc": "Clássico de revenda fácil. Consulte ano, versão e condições.", "info": ["Hatch", "Revenda fácil"], "photo": "v-gol.webp", "bg": "light"}, {"id": "corolla", "kind": "car", "model": "Toyota Corolla", "year": "", "km": "", "price": "Consulte", "desc": "Sedã. Consulte ano, versão e condições no WhatsApp.", "info": ["Sedã"], "photo": "v-corolla.webp", "bg": "photo"}, {"id": "titan", "kind": "moto", "model": "Honda CG 160 Titan", "year": "", "km": "", "price": "Consulte", "desc": "A moto mais vendida do Brasil. Consulte ano e condições.", "info": ["160 cc", "Econômica"], "photo": "v-titan.webp", "bg": "light"}, {"id": "factor", "kind": "moto", "model": "Yamaha Factor 150", "year": "", "km": "", "price": "Consulte", "desc": "Econômica e resistente pro dia a dia. Consulte condições.", "info": ["150 cc"], "photo": "v-factor.webp", "bg": "light"}, {"id": "fan", "kind": "moto", "model": "Honda CG 160 Fan", "year": "", "km": "", "price": "Consulte", "desc": "Versátil e econômica. Consulte ano e condições.", "info": ["160 cc"], "photo": "v-fan.webp", "bg": "light"}], "products": [{"id": "ip1", "cat": "Celulares", "name": "iPhone Pro (titânio)", "desc": "Diga o modelo, a capacidade e a cor que você quer.", "price": "Consulte", "photo": "p-iphone-titanio.webp", "bg": "cutout"}, {"id": "ip2", "cat": "Celulares", "name": "iPhone Pro (vinho)", "desc": "Consulte as cores e capacidades disponíveis.", "price": "Consulte", "photo": "p-iphone-vinho.webp", "bg": "light"}, {"id": "fold", "cat": "Celulares", "name": "Celular dobrável", "desc": "Consulte modelos e disponibilidade.", "price": "Consulte", "photo": "p-dobravel.webp", "bg": "cutout"}, {"id": "and", "cat": "Celulares", "name": "Celulares Android", "desc": "Samsung, Xiaomi, Motorola e outras marcas.", "price": "Consulte", "photo": "p-celular.webp", "bg": "light"}, {"id": "perf", "cat": "Perfumes", "name": "Perfumes importados", "desc": "Masculinos e femininos, das marcas que você pedir.", "price": "Consulte"}, {"id": "note", "cat": "Mac e notebooks", "name": "Notebooks", "desc": "Pra estudo, trabalho ou jogos. Diga o que você precisa.", "price": "Consulte", "photo": "p-notebook.webp", "bg": "light"}, {"id": "fone", "cat": "Fones e áudio", "name": "Fones de ouvido", "desc": "Com fio, sem fio e com cancelamento de ruído.", "price": "Consulte", "photo": "p-fone.webp", "bg": "light"}, {"id": "tab", "cat": "iPad e tablets", "name": "Tablets", "desc": "Consulte modelos e capacidades.", "price": "Consulte", "photo": "p-tablet.webp", "bg": "light"}, {"id": "acc", "cat": "Acessórios", "name": "Relógios e acessórios", "desc": "Capinhas, películas, carregadores e relógios.", "price": "Consulte"}, {"id": "out", "cat": "Outros", "name": "Sob encomenda", "desc": "Não achou? Me diz o que é que eu trago.", "price": "Consulte"}]};Object.keys(D).forEach(function(k){window.PV.DEFAULT[k]=D[k];});})();
