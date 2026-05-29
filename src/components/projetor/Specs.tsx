const specs: { label: string; value: string }[] = [
  { label: "Modelo", value: "Smart HY320 Android" },
  { label: "Resolução Nativa", value: "Full HD (1920x1080p)" },
  { label: "Sistema Operacional", value: "Android 11 Integrado" },
  { label: "Brilho", value: "390 ANSI Lumens" },
  { label: "Conectividade", value: "Wi-Fi 6 Dual Band & Bluetooth 5.0" },
  { label: "Ângulo de Projeção", value: "180° Rotativo Flexivel" },
  { label: "Tamanho da Tela", value: "Até 150 polegadas" },
];

export function Specs() {
  return (
    <section className="mt-2 bg-card px-4 py-4">
      <h2 className="text-base font-bold text-foreground">
        Características do produto
      </h2>
      <h3 className="mt-3 text-sm font-bold text-foreground">
        Especificações Gerais
      </h3>

      <dl className="mt-3">
        {specs.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center justify-between px-3 py-3 text-sm ${
              i % 2 === 0 ? "bg-muted/50" : "bg-card"
            }`}
          >
            <dt className="text-muted-foreground">{s.label}</dt>
            <dd className="font-semibold text-foreground">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
