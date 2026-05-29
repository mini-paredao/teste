const features: { title: string; text: string }[] = [
  {
    title: "Cinema em Casa com Altíssima Definição:",
    text: " O novo Projetor Smart HY320 é a evolução em projeção portátil. Com resolução nativa Full HD (1920x1080p) real e decodificação que suporta conteúdo em até 4K, você terá imagens ultra-nítidas, cores vibrantes e contrastes profundos no conforto da sua casa.",
  },
  {
    title: "Sistema Smart Android 11:",
    text: " Esqueça cabos e computadores! O HY320 possui sistema Android integrado, permitindo que você acesse seus aplicativos de streaming favoritos (como Netflix, YouTube, Prime Video, Disney+ e muito mais) diretamente pelo projetor. Conecte no Wi-Fi e comece a assistir imediatamente.",
  },
  {
    title: "Tecnologia Wi-Fi 6 & Bluetooth 5.0:",
    text: " Equipado com a mais recente conectividade Wi-Fi 6 de banda dupla (2.4G e 5G), o projetor garante transmissões estáveis, sem travamentos e com carregamento instantâneo. Com o Bluetooth 5.0, você pode conectar caixas de som externas, soundbars ou fones de ouvido sem fio para uma experiência de áudio de cinema imersiva.",
  },
  {
    title: "Projeção Rotativa de 180° & Ajuste Automático:",
    text: " Seu design inovador com suporte giratório permite projetar em qualquer ângulo — de paredes ao teto. O projetor conta com correção automática de keystone (ajuste trapezoidal), garantindo uma imagem perfeitamente reta e alinhada em segundos, não importa onde ele esteja posicionado.",
  },
  {
    title: "390 ANSI Lumens & Tela de até 150\":",
    text: " Com brilho aprimorado de 390 ANSI Lumens e taxa de contraste de 10000:1, ele entrega ótima qualidade visual mesmo em ambientes com baixa luz. Ajuste o tamanho da projeção de 30 a 150 polegadas para criar o seu próprio cinema particular no quarto ou na sala.",
  },
];

const techSpecs = [
  "Modelo: Smart HY320 Portátil",
  "Resolução Nativa: 1920 x 1080p (Full HD)",
  "Brilho: 390 ANSI Lumens (Medida real de alta performance)",
  "Sistema: Android 11 com loja de aplicativos integrada",
  "Conectividade: Wi-Fi 6 (802.11ax) Dual Band + Bluetooth 5.0",
  "Projeção: Ajuste automático de keystone e foco manual preciso",
  "Distância de Projeção: 1m a 4m (Tela de 30\" a 150\" polegadas)",
  "Interfaces: HDMI 2.0, USB 2.0, Saída de Áudio P2 (3.5mm), Entrada AC Alimentação",
];

const boxItems = [
  "1x Projetor Smart HY320 Android",
  "1x Controle Remoto Inteligente",
  "1x Cabo de Alimentação Bivolt",
  "1x Manual de Instruções em Português",
];

export function Description() {
  return (
    <section className="mt-2 bg-card px-4 py-4">
      <h2 className="text-base font-bold text-foreground">Descrição do produto</h2>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
        {features.map((f) => (
          <p key={f.title}>
            <span className="font-bold">{f.title}</span>
            {f.text}
          </p>
        ))}

        <div>
          <p className="font-bold">Especificações Técnicas:</p>
          <ul className="mt-1 space-y-0.5">
            {techSpecs.map((s) => (
              <li key={s}>- {s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold">Itens Inclusos na Embalagem:</p>
          <ul className="mt-1 space-y-0.5">
            {boxItems.map((s) => (
              <li key={s}>- {s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
