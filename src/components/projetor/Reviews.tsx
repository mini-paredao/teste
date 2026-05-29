import { useState } from "react";
import { Star, X } from "lucide-react";
import menina1 from "@/assets/projetor/menina1.webp";
import menina2 from "@/assets/projetor/menina2.webp";
import menina3 from "@/assets/projetor/menina3.webp";
import homem1 from "@/assets/projetor/homem1.webp";
import homem2 from "@/assets/projetor/homem2.webp";
import homem3 from "@/assets/projetor/homem3.webp";
import avali1 from "@/assets/projetor/avali1.webp";
import avali2 from "@/assets/projetor/avali2.webp";
import avali3 from "@/assets/projetor/avali3.webp";
import avali4 from "@/assets/projetor/avali4.webp";
import avali5 from "@/assets/projetor/avali5.webp";
import avali6 from "@/assets/projetor/avali6.webp";
import menina5 from "@/assets/projetor/menina5.webp";
import menina6 from "@/assets/projetor/menina6.webp";
import menina7 from "@/assets/projetor/menina7.webp";
import homem4 from "@/assets/projetor/homem4.webp";
import homem5 from "@/assets/projetor/homem5.webp";
import homem6 from "@/assets/projetor/homem6.webp";

type Review = {
  name: string;
  city: string;
  avatar: string;
  text: string;
  photo?: string;
};

const reviews: Review[] = [
  {
    name: "Camila Santos",
    city: "Curitiba PR",
    avatar: menina1,
    text: "Estou apaixonada! Coloquei no quarto e virou um verdadeiro cinema. Consigo projetar direto no teto deitada na cama! A imagem é muito nítida mesmo com a luz fraca acesa. Super recomendo para assistir séries com as crianças.",
    photo: avali1,
  },
  {
    name: "Marcos Silva",
    city: "São Paulo SP",
    avatar: homem1,
    text: "Excelente projetor! O brilho de 390 ANSI Lumens é muito bom no escuro. A resolução 1080p nativa é real e a conectividade com o PS5 ficou perfeita, sem lag. Conectei o som pelo bluetooth sem problemas.",
    photo: avali2,
  },
  {
    name: "Juliana Costa",
    city: "Belo Horizonte MG",
    avatar: menina2,
    text: "Gente, ele é pequenininho mas a imagem é enorme! O Android 11 instalado facilita tudo porque não precisa de cabo, já vem com Netflix e Youtube. Meus filhos adoraram.",
    photo: avali3,
  },
  {
    name: "Ricardo Almeida",
    city: "Salvador BA",
    avatar: homem2,
    text: "O aparelho superou minhas expectativas. A correção keystone automática funciona muito bem quando mudamos o ângulo. Para quem curte games e filmes em tela gigante, o Wi-Fi 6 não trava nada.",
    photo: avali4,
  },
  {
    name: "Beatriz Oliveira",
    city: "Recife PE",
    avatar: menina3,
    text: "Produto sensacional! O design é lindo e super compacto. Caber na bolsa ajuda muito para levar para a casa das amigas. A imagem projetada na parede branca do quarto ficou perfeita.",
    photo: avali5,
  },
  {
    name: "Eduardo Pereira",
    city: "Porto Alegre RS",
    avatar: homem3,
    text: "Melhor custo-benefício do mercado hoje. O sistema roda liso, entrada HDMI funcionando perfeitamente com o notebook. O cooler faz um barulhinho normal de projetor, mas o som cobrindo nem dá para notar.",
    photo: avali6,
  },
];

function StarsYellow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < count
              ? "fill-[hsl(45_100%_50%)] text-[hsl(45_100%_50%)]"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function StarsBlack() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-foreground text-foreground"
        />
      ))}
    </div>
  );
}

const reviewsPage2: Review[] = [
  {
    name: "Larissa Mendes",
    city: "Florianópolis SC",
    avatar: menina5,
    text: "Muito prático! Comprei para assistir minhas aulas e receitas na cozinha e agora uso na casa toda. A qualidade é impressionante pelo preço.",
  },
  {
    name: "Fernando Rocha",
    city: "Foz do Iguaçu PR",
    avatar: homem4,
    text: "Fiquei surpreso com o foco manual que é bem preciso. O som interno dele é ok para um quarto, mas ligando na caixinha de som Bluetooth fica sensacional. Entrega rápida.",
  },
  {
    name: "Patrícia Lima",
    city: "Goiânia GO",
    avatar: menina6,
    text: "Maravilhoso! Chegou super bem embalado e antes do prazo. É muito fácil de configurar, conectei o Wi-Fi em 2 minutos e já estava assistindo meus filmes.",
  },
  {
    name: "Lucas Ferreira",
    city: "Fortaleza CE",
    avatar: homem5,
    text: "Gostei muito do suporte giratório dele de 180 graus. Posiciono em qualquer lugar e a imagem fica alinhada. Perfeito para assistir jogos de futebol com a galera.",
  },
  {
    name: "Aline Carvalho",
    city: "Manaus AM",
    avatar: menina7,
    text: "Excelente! Comprei de presente para o meu marido e ele amou. Assistimos filmes todo final de semana agora, parece um cinema em casa.",
  },
  {
    name: "Gabriel Souza",
    city: "Brasília DF",
    avatar: homem6,
    text: "Muito bom o processador dele, os apps abrem rápido. O brilho é excelente para a categoria de projetores portáteis. Recomendo para quem quer tela gigante sem gastar muito.",
  },
];

export function Reviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const currentReviews = page === 1 ? reviews : reviewsPage2;

  return (
    <section className="mt-2 bg-card px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-foreground">
          Avaliação do produto <span className="font-bold">(+860)</span>
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground">4.9</span>
          <StarsYellow count={5} />
          <span className="text-muted-foreground">&gt;</span>
        </div>
      </div>

      {currentReviews.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          Em breve mais avaliações...
        </p>
      ) : (
        <ul className="space-y-5">
          {currentReviews.map((r) => (
            <li
              key={r.name}
              className="border-b border-border pb-5 last:border-b-0 last:pb-0"
            >
              <div className="mb-2 flex items-center gap-2">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-foreground">
                  {r.name} - {r.city}
                </span>
              </div>
              <StarsBlack />
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {r.text}
              </p>
              {r.photo && (
                <button
                  onClick={() => setSelectedImage(r.photo!)}
                  className="mt-3 block overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={r.photo}
                    alt={`Foto da avaliação de ${r.name}`}
                    loading="lazy"
                    className="h-20 w-20 object-cover transition-transform duration-200 hover:scale-105"
                  />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(1)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
            page === 1
              ? "bg-brand text-brand-foreground"
              : "border border-border bg-card text-foreground"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
            page === 2
              ? "bg-brand text-brand-foreground"
              : "border border-border bg-card text-foreground"
          }`}
        >
          2
        </button>
        <span className="px-1 text-sm text-muted-foreground">...</span>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-brand text-sm font-semibold text-brand"
        >
          12
        </button>
      </div>


      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
