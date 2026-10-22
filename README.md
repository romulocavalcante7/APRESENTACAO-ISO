# ISO/IEC 27000 - Apresentação

Apresentação em 40 slides (16:9, 1440x810) em HTML/CSS/JS puro, com ícones SVG, ilustrações e gráficos. Sem dependências e sem CDN.

## Estrutura
- index.html: marcação dos 40 slides e o sprite SVG (ícones e gradientes) no topo.
- css/styles.css: todo o CSS (variáveis em :root, .slide, .card, .badge, .flow, .layer etc.), o modo apresentação e o @media print.
- js/app.js: navegação, contador, tela cheia, notas e cronômetro.
- js/notas.js: notas do apresentador por slide ({ 1: "...", ... }). O app.js copia cada nota para o atributo data-notas da sua section ao carregar. Notas marcadas com [REVISAR] não existem no guia.
- assets/bg/: artes de fundo das capas e divisórias.
- notas/: guia dos apresentadores (texto puro).
- fonte-pptx/: script que gera a versão PowerPoint.
- scripts/render_pdf.py: exporta o PDF de 40 páginas.

## Atalhos
| Tecla | Ação |
|---|---|
| Seta direita, PageDown, espaço, clique (2/3 direitos) | próximo slide (os slides deslizam para o lado) |
| Seta esquerda, PageUp, Shift+espaço, clique (1/3 esquerdo) | slide anterior |
| Home / End | primeiro / último |
| F | tela cheia (Esc sai) |
| N | mostra/esconde as notas do slide |
| S / P / R | inicia / pausa / zera o cronômetro (tempo acumulado por bloco) |

Também há botões de seta nas laterais e deslize no toque. O endereço #12 abre direto no slide 12.
O slide é escalado para caber na janela (PC ou celular), sem scroll horizontal.

## Sprite SVG: por que inline
Os ícones ficam em um bloco no topo do index.html em vez de assets/icons.svg. Um sprite externo com `<use href="assets/icons.svg#...">` não funciona ao abrir o arquivo direto (file://) no Chrome e complica o PDF, e os gradientes (url(#gBlue) etc.) são referenciados pelo documento. Inline funciona em qualquer cenário.

## Rodar localmente
Abra index.html no navegador, ou: npx serve .

## PDF
pip install playwright && playwright install chromium, depois: python scripts/render_pdf.py
(no modo impressão os slides voltam a empilhar, 1440x810 por página).

## Deploy na Vercel
Sem build step. Em vercel.com: Add New > Project > Import Git Repository, escolha o repositório, Framework Preset: Other, Build Command vazio, Output Directory: `.` (raiz) e Deploy.
