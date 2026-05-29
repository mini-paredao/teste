# Projetor HY320 — Landing

Site React + Vite pronto para deploy na Vercel.

## Como usar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (gera /dist)
```

## Deploy na Vercel

1. Suba este repositório no GitHub.
2. Importe o projeto em https://vercel.com/new
3. Framework Preset: **Vite** (detectado automaticamente).
4. Build Command: `npm run build` — Output: `dist`
5. Clique em Deploy.

O arquivo `vercel.json` já configura SPA rewrites para evitar tela branca em rotas.
