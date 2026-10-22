const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in
pres.title = "ISO/IEC 27000 - Gestão de Segurança da Informação";
pres.author = "Grupo ISO/IEC 27000";

const C = {
  bg: "0A0F1F", card: "111A33", card2: "0D1630", line: "26365E",
  blue: "3B82F6", violet: "8B5CF6", cyan: "22D3EE", text: "F1F5F9",
  muted: "94A3B8", red: "F43F5E", green: "22C55E", amber: "F59E0B",
};
const F = "Calibri";
let n = 0;

// ---------- helpers ----------
function slide(section, presenter) {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  n++;
  s.addText(section, { x: 0.6, y: 0.32, w: 9, h: 0.3, fontFace: F, fontSize: 11, bold: true, color: C.cyan, charSpacing: 1, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 6.98, w: 12.13, h: 0, line: { color: C.line, width: 0.75 } });
  s.addText(presenter ? "Apresentador: " + presenter : "Apresentação do grupo", { x: 0.6, y: 7.02, w: 8, h: 0.3, fontFace: F, fontSize: 10, color: C.muted, margin: 0 });
  s.addText(String(n), { x: 11.8, y: 7.02, w: 0.93, h: 0.3, fontFace: F, fontSize: 10, color: C.muted, align: "right", margin: 0 });
  return s;
}

function title(s, runs, y = 0.62) {
  s.addText(runs.map(r => ({ text: r.t, options: { color: r.c || C.text } })), {
    x: 0.6, y, w: 12.1, h: 0.85, fontFace: F, fontSize: 32, bold: true, margin: 0, valign: "middle",
  });
}

function subtitle(s, text, y = 1.45) {
  s.addText(text, { x: 0.6, y, w: 12.1, h: 0.5, fontFace: F, fontSize: 15, color: C.muted, margin: 0 });
}

function card(s, x, y, w, h, opts = {}) {
  const color = opts.color || C.blue;
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.card }, line: { color: C.line, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h, fill: { color }, line: { color, width: 0 } });
  const items = [];
  if (opts.head) {
    items.push({ text: opts.head, options: { bold: true, color, fontSize: opts.headSize || 17, breakLine: true, paraSpaceAfter: 6 } });
  }
  if (opts.sub) {
    items.push({ text: opts.sub, options: { color: C.muted, fontSize: opts.subSize || 12.5, breakLine: true, paraSpaceAfter: 6 } });
  }
  (opts.body || []).forEach((b, i) => {
    const last = i === opts.body.length - 1;
    items.push({
      text: b,
      options: { bullet: { indent: 14 }, color: C.text, fontSize: opts.bodySize || 13, breakLine: !last, paraSpaceAfter: 4 },
    });
  });
  s.addText(items, { x: x + 0.25, y: y + 0.15, w: w - 0.4, h: h - 0.3, fontFace: F, valign: "top", margin: 0 });
}

function tagBox(s, x, y, w, h, text, color) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: color, transparency: 80 }, line: { color, width: 1 } });
  s.addText(text, { x, y, w, h, fontFace: F, fontSize: 12, bold: true, color, align: "center", valign: "middle", margin: 2 });
}

function flow(s, steps, y, opts = {}) {
  const count = steps.length;
  const gap = 0.12;
  const w = (12.13 - gap * (count - 1)) / count;
  steps.forEach((st, i) => {
    const x = 0.6 + i * (w + gap);
    const col = (opts.colors && opts.colors[i]) || C.blue;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: opts.h || 1.1, fill: { color: col, transparency: 82 }, line: { color: col, width: 1.2 } });
    s.addText([
      { text: st.t, options: { bold: true, color: col, fontSize: opts.titleSize || 16, breakLine: !!st.d, paraSpaceAfter: 4 } },
      ...(st.d ? [{ text: st.d, options: { color: C.text, fontSize: opts.descSize || 12 } }] : []),
    ], { x: x + 0.12, y: y + 0.08, w: w - 0.24, h: (opts.h || 1.1) - 0.16, fontFace: F, align: "center", valign: "middle", margin: 0 });
    if (i < count - 1) {
      s.addText("›", { x: x + w - 0.04, y: y + (opts.h || 1.1) / 2 - 0.25, w: 0.2, h: 0.5, fontFace: F, fontSize: 26, bold: true, color: C.cyan, align: "center", margin: 0 });
    }
  });
}

function glow(s, cx, cy, r, color) {
  s.addShape(pres.shapes.OVAL, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color, transparency: 88 }, line: { color, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: cx - r * 0.6, y: cy - r * 0.6, w: 1.2 * r, h: 1.2 * r, fill: { color, transparency: 80 }, line: { color, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: cx - r * 0.45, y: cy - r * 0.45, w: 0.9 * r, h: 0.9 * r, fill: { color: C.bg, transparency: 100 }, line: { color: C.cyan, width: 1.5, transparency: 35 } });
}

function table(s, rows, opts) {
  const header = rows[0].map(t => ({ text: t, options: { bold: true, color: C.text, fill: { color: "1E3A8A" }, fontSize: opts.hfs || 13 } }));
  const body = rows.slice(1).map((r, ri) => r.map((t, ci) => ({
    text: t,
    options: { color: C.text, fill: { color: ri % 2 ? C.card2 : C.card }, fontSize: opts.fs || 12.5, bold: ci === 0 && !!opts.boldFirst },
  })));
  s.addTable([header, ...body], {
    x: opts.x, y: opts.y, w: opts.w, colW: opts.colW, fontFace: F, valign: "middle",
    border: { type: "solid", color: C.line, pt: 0.75 }, margin: [4, 8, 4, 8], rowH: opts.rowH,
  });
}

// =====================================================================
// 1. ABERTURA
// =====================================================================
{
  const s = pres.addSlide(); s.background = { color: C.bg }; n++;
  glow(s, 10.2, 3.6, 2.6, C.blue);
  glow(s, 10.2, 3.6, 3.8, C.violet);
  s.addText("Alunos: Guilherme Nunes da Cruz · Kaua Gabriel Ricardo · Vinicius Porto Augusto · Kaique Cirqueira · Gabriel Feitosa · Kawan Kelvin · Marcelo Pina · Emilly Gabrielly · Eduardo Santana · Rômulo Gomes Cavalcante",
    { x: 0.6, y: 0.4, w: 12.1, h: 0.6, fontFace: F, fontSize: 11, color: C.muted, margin: 0 });
  s.addText([
    { text: "ISO/IEC 27000:", options: { color: C.text, breakLine: true } },
    { text: "Gestão de", options: { color: C.blue, breakLine: true } },
    { text: "Segurança da", options: { color: C.blue, breakLine: true } },
    { text: "Informação", options: { color: C.blue } },
  ], { x: 0.6, y: 1.35, w: 7.4, h: 3.4, fontFace: F, fontSize: 50, bold: true, margin: 0, valign: "middle" });
  s.addText("Uma análise prática dos controles e do monitoramento contínuo", { x: 0.6, y: 4.9, w: 7.4, h: 0.5, fontFace: F, fontSize: 18, color: C.muted, margin: 0 });
  tagBox(s, 0.6, 5.6, 2.6, 0.45, "ISO/IEC 27001 · 27002 · 27003 · 27004", C.cyan);
  s.addText("Sistemas de Informação · 2026", { x: 0.6, y: 6.6, w: 6, h: 0.3, fontFace: F, fontSize: 11, color: C.muted, margin: 0 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 1 min
Fala: "Boa tarde, professor e colegas. Somos o grupo que vai apresentar ISO/IEC 27000 - gestão de segurança da informação. A apresentação tem 2h30 de duração e está dividida em nove blocos, um por apresentador, mais abertura e fechamento."
Se esquecer: somos 9 apresentadores + abertura e fechamento; o tema é a família de normas, com foco prático nos controles e no monitoramento.`);
}

// 2. Roteiro da aula
{
  const s = slide("Abertura | Roteiro", "Rômulo");
  title(s, [{ t: "Roteiro da " }, { t: "aula", c: C.blue }, { t: " (2h30)" }]);
  subtitle(s, "Cada apresentador tem cerca de 10 minutos de fala e 3 minutos de perguntas do professor e da turma.");
  table(s, [
    ["Horário", "Bloco", "Apresentador", "Tema"],
    ["0:00 – 0:08", "Abertura", "Rômulo", "Contexto, requisitos do trabalho"],
    ["0:08 – 0:21", "1", "Guilherme Nunes da Cruz", "Fundamentos: CIA e vocabulário"],
    ["0:21 – 0:34", "2", "Kaua Gabriel Ricardo", "Família ISO/IEC 27000 e como as normas se integram"],
    ["0:34 – 0:47", "3", "Vinicius Porto Augusto", "ISO/IEC 27001: SGSI, PDCA e Anexo A"],
    ["0:47 – 1:00", "4", "Kaique Cirqueira", "ISO/IEC 27001: certificação e pergunta 1 (PMEs)"],
    ["1:00 – 1:13", "5", "Gabriel Feitosa", "ISO/IEC 27002: visão geral e gestão de acessos"],
    ["1:13 – 1:26", "6", "Kawan Kelvin", "ISO/IEC 27002: criptografia, continuidade e análise"],
    ["1:26 – 1:39", "7", "Marcelo Pina", "ISO/IEC 27003 e pergunta 2 (controles no papel)"],
    ["1:39 – 1:52", "8", "Emilly Gabrielly", "ISO/IEC 27004 e pergunta 3 (métricas)"],
    ["1:52 – 2:07", "9", "Eduardo Santana", "Estudo de caso e análise: eficazes, falhas, melhorias"],
    ["2:07 – 2:17", "Fechamento", "Rômulo", "Conclusão e respostas-guia"],
    ["2:17 – 2:30", "Buffer", "Todos", "Perguntas gerais e folga de tempo"],
  ], { x: 0.6, y: 2.05, w: 12.13, colW: [1.9, 1.5, 3.3, 5.43], fs: 12, hfs: 12.5, rowH: 0.36 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 1 min
Fala: "Vamos seguir este roteiro. Cada um apresenta em cerca de 10 minutos, e depois abrimos 3 minutos de perguntas. Quem não estiver apresentando pode anotar dúvidas para o fim."
Se esquecer: o horário do próprio bloco está na coluna "Horário". Se estourar o tempo, reduza o número de exemplos, não a parte teórica do slide de definição.`);
}

// 3. Mapa dos requisitos
{
  const s = slide("Abertura | Requisitos", "Rômulo");
  title(s, [{ t: "Mapa dos " }, { t: "requisitos", c: C.blue }, { t: " do trabalho" }]);
  subtitle(s, "Cada requisito exigido pela atividade aparece em pelo menos um bloco da apresentação.");
  table(s, [
    ["Requisito exigido", "Onde está", "Responsável"],
    ["Teoria: ISO/IEC 27000, 27001, 27002, 27003 e 27004", "Blocos 1 a 4 e 5 a 8", "Guilherme, Kaua, Vinicius, Kaique, Gabriel, Kawan, Marcelo, Emilly"],
    ["Estudo de caso de empresa certificada ISO/IEC 27001", "Blocos 9 (Banco do Brasil)", "Eduardo"],
    ["ISO/IEC 27002: exemplos de controles em casos reais", "Acessos, criptografia e continuidade", "Gabriel e Kawan"],
    ["Análise: controles eficazes, com falhas e a melhorar", "Análise em operação e análise consolidada", "Kawan e Eduardo"],
    ["Certificação ISO/IEC 27001 para pequenas empresas?", "Pergunta-guia 1", "Kaique"],
    ["Como garantir que os controles não fiquem só no papel?", "Pergunta-guia 2", "Marcelo"],
    ["Quais métricas avaliam a eficácia do SGSI (27004)?", "Pergunta-guia 3", "Emilly"],
  ], { x: 0.6, y: 2.05, w: 12.13, colW: [5.4, 3.6, 3.13], fs: 13, hfs: 13.5, rowH: 0.5 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 1 min
Fala: "A atividade pede a teoria das cinco normas, um estudo de caso, exemplos de controles da 27002, uma análise do que funcionou, falhou e pode melhorar, e três perguntas sobre certificação e monitoramento. Esta tabela mostra onde cada item está."
Se esquecer: o trabalho tem 3 perguntas-guia obrigatórias: certificação em PMEs, controles no papel e métricas da 27004.`);
}

// 4. Contexto
{
  const s = slide("Abertura | Contexto", "Rômulo");
  title(s, [{ t: "Por que " }, { t: "segurança", c: C.blue }, { t: " importa agora?" }]);
  subtitle(s, "As ameaças cibernéticas afetam dados, operação, finanças e reputação. Não é um problema só de grandes empresas.");
  const cards = [
    ["Vazamento de dados", "Dados pessoais de clientes expostos.", "Consequência: multas da LGPD e perda de confiança", C.red],
    ["Ransomware", "Sistemas criptografados e bloqueados por criminosos.", "Consequência: operação parada e pedido de resgate", C.amber],
    ["Acesso indevido", "Contas comprometidas ou permissões excessivas.", "Consequência: fraude e alteração de dados", C.violet],
    ["Roubo de propriedade intelectual", "Projetos, código e segredos comerciais copiados.", "Consequência: perda de vantagem competitiva", C.cyan],
  ];
  cards.forEach((c, i) => {
    const x = 0.6 + i * 3.08;
    card(s, x, 2.35, 2.9, 3.6, { head: c[0], headSize: 18, color: c[3], body: [c[1], c[2]], bodySize: 14 });
  });
  s.addText("Pergunta para a turma: alguém já teve uma conta invadida ou um arquivo bloqueado? O que aconteceu?", { x: 0.6, y: 6.2, w: 12.1, h: 0.5, fontFace: F, fontSize: 14, italic: true, color: C.cyan, margin: 0 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 2 min
Fala: "Os riscos são de vazamento de dados, ransomware, acesso indevido e roubo de propriedade intelectual. Cada um tem uma consequência direta no negócio. A pergunta da turma serve para engajar."
Se esquecer: os quatro riscos são os da coluna da esquerda; a consequência de cada um está na última linha do card.
Pergunta provável: "Isso é só para empresas grandes?" Resposta: não, pequenas empresas são alvo frequente porque costumam ter controles mais fracos.`);
}

// =====================================================================
// BLOCO 1 - Guilherme: Fundamentos
// =====================================================================
{
  const s = slide("Bloco 1 | Fundamentos", "Guilherme Nunes da Cruz");
  title(s, [{ t: "Os três pilares: " }, { t: "CIA", c: C.blue }]);
  subtitle(s, "Confidencialidade, integridade e disponibilidade sustentam toda a segurança da informação.");
  const cols = [
    ["CONFIDENCIALIDADE", "Quem pode ver?", "Só pessoas autorizadas acessam a informação.", "Exemplos: MFA, controle de acesso, criptografia.", C.blue],
    ["INTEGRIDADE", "Pode ser alterado?", "A informação permanece exata e completa.", "Exemplos: hash SHA-256, assinatura digital, trilha de auditoria.", C.violet],
    ["DISPONIBILIDADE", "Está acessível quando preciso?", "Sistemas e dados estão disponíveis na hora certa.", "Exemplos: backup, redundância, plano de continuidade.", C.cyan],
  ];
  cols.forEach((c, i) => {
    const x = 0.6 + i * 4.1;
    card(s, x, 2.25, 3.9, 3.9, { head: c[0], headSize: 18, color: c[4], sub: c[1], subSize: 14, body: [c[2], c[3]], bodySize: 14 });
  });
  s.addText("Se um controle não protege um desses três pilares, ele provavelmente não está resolvendo o problema certo.", { x: 0.6, y: 6.35, w: 12.1, h: 0.45, fontFace: F, fontSize: 14, color: C.muted, margin: 0 });
  s.addNotes(
`QUEM: Guilherme | TEMPO: 4 min
Fala: "A segurança da informação se apoia em três pilares. Confidencialidade é quem pode ver a informação. Integridade é garantir que ela não foi alterada indevidamente. Disponibilidade é garantir que ela esteja acessível quando precisamos."
Exemplo para lembrar: um banco de dados criptografado e com MFA protege a confidencialidade; um hash confere a integridade de um arquivo; um backup testado protege a disponibilidade.
Se esquecer: CIA = Confidentiality, Integrity, Availability. Os três cards são nessa ordem.
Pergunta provável: "A criptografia garante integridade?" Resposta: não diretamente. Ela protege a confidencialidade. Para integridade, usamos hash, assinatura digital e controle de alterações.`);
}

{
  const s = slide("Bloco 1 | Vocabulário", "Guilherme Nunes da Cruz");
  title(s, [{ t: "Vocabulário ", }, { t: "essencial", c: C.blue }]);
  subtitle(s, "Termos que aparecem em todo o trabalho. Use-os com precisão na fala e nas respostas.");
  const terms = [
    ["Ativo", "Qualquer coisa que tenha valor para a organização: dados, sistemas, pessoas, processos."],
    ["Ameaça", "Causa potencial de incidente, como um atacante, uma falha ou um desastre."],
    ["Vulnerabilidade", "Fraqueza que pode ser explorada por uma ameaça, como senha fraca ou software sem atualização."],
    ["Risco", "Combinação de probabilidade e impacto de um evento. Risco = probabilidade × impacto."],
    ["Controle", "Medida que modifica o risco: política, processo, procedimento ou solução técnica."],
    ["SGSI", "Sistema de Gestão de Segurança da Informação: a estrutura que gerencia a segurança de forma contínua."],
    ["Evidência", "Registro que comprova que um controle foi executado, como log, relatório ou ata."],
    ["Não conformidade", "Descumprimento de um requisito da norma ou do próprio SGSI, que exige correção."],
  ];
  terms.forEach((t, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 0.6 + col * 3.07, y = 2.1 + row * 2.35;
    card(s, x, y, 2.9, 2.15, { head: t[0], headSize: 16, color: [C.blue, C.violet, C.cyan, C.amber][col], sub: t[1], subSize: 12.5 });
  });
  s.addNotes(
`QUEM: Guilherme | TEMPO: 3 min (dentro do bloco 1)
Fala: "Estes termos aparecem o tempo todo. Ativo é tudo que tem valor. Ameaça é a causa; vulnerabilidade é a fraqueza; risco é a combinação de probabilidade e impacto. Controle é o que reduz o risco."
Se esquecer: Risco = Probabilidade × Impacto. Controle reduz o risco; ele não elimina o risco por completo.
Pergunta provável: "Qual a diferença entre ameaça e vulnerabilidade?" Resposta: ameaça é quem ou o que pode causar dano; vulnerabilidade é a fraqueza que ela explora.`);
}

// =====================================================================
// BLOCO 2 - Kaua: Familia
// =====================================================================
{
  const s = slide("Bloco 2 | Família de normas", "Kaua Gabriel Ricardo");
  title(s, [{ t: "Família " }, { t: "ISO/IEC 27000", c: C.blue }]);
  subtitle(s, "Cinco normas complementares. Só a ISO/IEC 27001 é certificável; as demais orientam.");
  const fam = [
    ["27000", "Vocabulário e visão geral", "Define termos e conceitos da família.", "Não certificável", C.cyan],
    ["27001", "Requisitos do SGSI", "O que o sistema de gestão precisa ter para ser certificado.", "Certificável", C.green],
    ["27002", "Código de prática: controles", "Diretrizes para escolher e implementar controles.", "Orientativa", C.violet],
    ["27003", "Orientações de implementação", "Como planejar e conduzir a implantação do SGSI.", "Orientativa", C.blue],
    ["27004", "Medição e monitoramento", "Como medir se o SGSI e os controles funcionam.", "Orientativa", C.amber],
  ];
  fam.forEach((f, i) => {
    const x = 0.6 + i * 2.47;
    card(s, x, 2.2, 2.3, 4.2, { head: "ISO/IEC " + f[0], headSize: 16, color: f[4], sub: f[1], subSize: 13, body: [f[2], f[3]], bodySize: 13 });
  });
  s.addNotes(
`QUEM: Kaua | TEMPO: 4 min
Fala: "A família ISO/IEC 27000 reúne normas que se complementam. A 27000 traz o vocabulário. A 27001 define os requisitos do sistema de gestão e é a única certificável. A 27002 lista controles, a 27003 orienta a implementação e a 27004 mostra como medir."
Se esquecer: 0 = vocabulário, 1 = requisitos (certifica), 2 = controles, 3 = implementação, 4 = medição.
Pergunta provável: "Por que a 27002 não é certificável?" Resposta: ela é um código de prática com diretrizes. Certificação é feita sobre requisitos (27001), e a organização escolhe quais controles aplicar.`);
}

{
  const s = slide("Bloco 2 | Integração", "Kaua Gabriel Ricardo");
  title(s, [{ t: "Como as normas " }, { t: "trabalham juntas", c: C.blue }]);
  subtitle(s, "Da linguagem comum até a medição. Cada norma responde a uma pergunta diferente.");
  flow(s, [
    { t: "27000", d: "O que significam os termos?" },
    { t: "27001", d: "O que o SGSI precisa ter?" },
    { t: "27002", d: "Quais controles aplicar?" },
    { t: "27003", d: "Como implementar na prática?" },
    { t: "27004", d: "Como medir se funciona?" },
  ], 2.4, { h: 1.7, colors: [C.cyan, C.green, C.violet, C.blue, C.amber], titleSize: 20, descSize: 14 });
  card(s, 0.6, 4.6, 12.13, 1.95, { head: "Ideia central", headSize: 17, color: C.blue, body: [
    "A 27001 exige que a organização escolha controles e justifique a escolha. A 27002 ajuda nessa escolha.",
    "A 27003 mostra como colocar tudo em operação. A 27004 comprova, com indicadores, que os controles realmente funcionam.",
  ], bodySize: 14 });
  s.addNotes(
`QUEM: Kaua | TEMPO: 2 min
Fala: "Pense assim: a 27000 dá o vocabulário, a 27001 define o que o sistema precisa ter, a 27002 mostra os controles, a 27003 mostra como implantar e a 27004 mede. Sem medição, não há como saber se o controle funciona."
Se esquecer: a seta da esquerda para a direita é a ordem lógica de um projeto de SGSI.`);
}

// =====================================================================
// BLOCO 3 - Vinicius: 27001 SGSI
// =====================================================================
{
  const s = slide("Bloco 3 | ISO/IEC 27001", "Vinicius Porto Augusto");
  title(s, [{ t: "ISO/IEC 27001: o " }, { t: "SGSI", c: C.blue }, { t: " em ciclo" }]);
  subtitle(s, "A norma usa o ciclo PDCA (Plan-Do-Check-Act): planejar, executar, verificar e agir.");
  const steps = [
    ["PLANEJAR", "Plan", "Contexto, escopo, política, análise de riscos e objetivos.", C.blue],
    ["EXECUTAR", "Do", "Implementar controles, treinar pessoas e operar o sistema.", C.violet],
    ["VERIFICAR", "Check", "Monitorar, medir, auditar internamente e revisar pela direção.", C.cyan],
    ["AGIR", "Act", "Corrigir falhas, tratar não conformidades e melhorar.", C.green],
  ];
  steps.forEach((st, i) => {
    const x = 0.6 + i * 3.08;
    card(s, x, 2.3, 2.9, 3.2, { head: st[0], headSize: 18, color: st[3], sub: st[1], subSize: 13, body: [st[2]], bodySize: 14 });
    if (i < 3) s.addText("›", { x: x + 2.88, y: 3.6, w: 0.25, h: 0.5, fontFace: F, fontSize: 28, bold: true, color: C.cyan, align: "center", margin: 0 });
  });
  s.addText("O ciclo não termina. Cada volta alimenta a próxima: é isso que se chama melhoria contínua.", { x: 0.6, y: 5.8, w: 12.1, h: 0.5, fontFace: F, fontSize: 15, italic: true, color: C.cyan, margin: 0 });
  s.addNotes(
`QUEM: Vinicius | TEMPO: 4 min
Fala: "A 27001 descreve o SGSI em um ciclo. Planejar é definir contexto, escopo, política e riscos. Executar é implantar os controles. Verificar é medir e auditar. Agir é corrigir e melhorar. Esse ciclo não termina."
Se esquecer: PDCA = Plan, Do, Check, Act. Em português: Planejar, Executar, Verificar, Agir.
Pergunta provável: "O PDCA é obrigatório?" Resposta: a norma adota esse modelo como base; o que é exigido são as atividades de planejamento, operação, avaliação e melhoria.`);
}

{
  const s = slide("Bloco 3 | ISO/IEC 27001", "Vinicius Porto Augusto");
  title(s, [{ t: "Componentes do " }, { t: "SGSI", c: C.blue }]);
  subtitle(s, "Três camadas que sustentam o sistema, da base até o topo.");
  const layers = [
    ["BASE", "Política e objetivos", "Política de segurança da informação, objetivos estratégicos e responsabilidades definidas pela direção. É a fundação do sistema.", C.blue],
    ["ESTRUTURA", "Riscos e controles", "Avaliação de riscos, tratamento e escolha de controles, com documentação na Declaração de Aplicabilidade (SoA).", C.violet],
    ["TOPO", "Verificação e melhoria", "Auditoria interna, monitoramento, análise crítica pela direção e ações corretivas.", C.cyan],
  ];
  layers.forEach((l, i) => {
    const y = 2.2 + i * 1.5;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6 + i * 0.5, y, w: 12.13 - i * 1.0, h: 1.25, fill: { color: l[3], transparency: 84 }, line: { color: l[3], width: 1.2 } });
    s.addText(l[0], { x: 0.85 + i * 0.5, y, w: 2.2, h: 1.25, fontFace: F, fontSize: 20, bold: true, color: l[3], valign: "middle", margin: 0 });
    s.addText([
      { text: l[1], options: { bold: true, color: C.text, fontSize: 16, breakLine: true } },
      { text: l[2], options: { color: C.muted, fontSize: 13 } },
    ], { x: 3.2 + i * 0.5, y, w: 8.9 - i * 1.0, h: 1.25, fontFace: F, valign: "middle", margin: 0 });
  });
  s.addNotes(
`QUEM: Vinicius | TEMPO: 3 min
Fala: "Pense em uma pirâmide. A base é a política e os objetivos. A estrutura são riscos e controles. O topo é verificação e melhoria. A Declaração de Aplicabilidade é o documento que diz quais controles foram escolhidos e por quê."
Se esquecer: SoA = Statement of Applicability. É exigida pela 27001 e lista os controles aplicáveis, com justificativa para os excluídos.`);
}

{
  const s = slide("Bloco 3 | ISO/IEC 27001 · Anexo A", "Vinicius Porto Augusto");
  title(s, [{ t: "Anexo A: " }, { t: "93 controles", c: C.blue }, { t: " em 4 temas" }]);
  subtitle(s, "A versão 2022 da 27001 organiza os controles do Anexo A em quatro temas. A ISO/IEC 27002 detalha cada um deles.");
  const themes = [
    ["37", "Organizacionais", "Políticas, gestão de ativos, fornecedores, continuidade, gestão de acessos", C.blue],
    ["8", "Pessoas", "Triagem, conscientização, termos de confidencialidade, trabalho remoto", C.violet],
    ["14", "Físicos", "Perímetros, controle de entrada, equipamentos, mesas e telas limpas", C.amber],
    ["34", "Tecnológicos", "Autenticação, criptografia, backup, configuração segura, logs", C.cyan],
  ];
  themes.forEach((t, i) => {
    const x = 0.6 + i * 3.08;
    card(s, x, 2.5, 2.9, 3.4, { head: t[0], headSize: 44, color: t[3], sub: t[1], subSize: 17, body: [t[2]], bodySize: 13 });
  });
  s.addText("Não é preciso aplicar os 93. A organização escolhe os que se aplicam ao seu risco e documenta a decisão na SoA.", { x: 0.6, y: 6.1, w: 12.1, h: 0.5, fontFace: F, fontSize: 14, color: C.muted, margin: 0 });
  s.addNotes(
`QUEM: Vinicius | TEMPO: 2 min
Fala: "O Anexo A tem 93 controles, em 4 temas: 37 organizacionais, 8 de pessoas, 14 físicos e 34 tecnológicos. A organização escolhe os que se aplicam e justifica na SoA."
Se esquecer: 37 + 8 + 14 + 34 = 93. O tema tecnológico é o maior.
Pergunta provável: "Precisa implementar os 93?" Resposta: não. É preciso avaliar riscos e justificar a inclusão e a exclusão de cada controle.`);
}

// =====================================================================
// BLOCO 4 - Kaique: Certificacao + Pergunta 1
// =====================================================================
{
  const s = slide("Bloco 4 | Certificação ISO/IEC 27001", "Kaique Cirqueira");
  title(s, [{ t: "Como funciona a " }, { t: "certificação", c: C.blue }]);
  subtitle(s, "Quem certifica é um organismo independente e acreditado. No Brasil, a acreditação é feita pelo Inmetro.");
  flow(s, [
    { t: "1. Preparação", d: "SGSI implantado: escopo, política, riscos e SoA" },
    { t: "2. Auditoria Estágio 1", d: "Análise documental e prontidão" },
    { t: "3. Auditoria Estágio 2", d: "Verificação de implementação e eficácia" },
    { t: "4. Certificado", d: "Válido por 3 anos" },
    { t: "5. Vigilância", d: "Auditorias anuais de acompanhamento" },
  ], 2.45, { h: 1.9, colors: [C.blue, C.violet, C.violet, C.green, C.cyan], titleSize: 15, descSize: 12.5 });
  card(s, 0.6, 4.75, 12.13, 1.8, { head: "Ponto de atenção", headSize: 17, color: C.amber, body: [
    "A certificação não é o fim do trabalho. Ela exige manutenção contínua, auditorias anuais e recertificação a cada ciclo de 3 anos.",
  ], bodySize: 15 });
  s.addNotes(
`QUEM: Kaique | TEMPO: 4 min
Fala: "Para certificar, a organização contrata um organismo certificador acreditado. Primeiro vem a implantação do SGSI. Depois, a auditoria de Estágio 1, que é documental, e a de Estágio 2, que verifica se o sistema funciona na prática. Se aprovado, o certificado vale por 3 anos, com auditorias de vigilância todo ano."
Se esquecer: Estágio 1 = documentos e prontidão; Estágio 2 = implementação e eficácia; certificado = 3 anos; vigilância = anual.
Pergunta provável: "Quem dá o certificado?" Resposta: um organismo certificador acreditado, não a própria empresa nem a ABNT diretamente.`);
}

{
  const s = slide("Bloco 4 | Pergunta-guia 1", "Kaique Cirqueira");
  title(s, [{ t: "Vale a pena certificar uma " }, { t: "pequena empresa", c: C.blue }, { t: "?" }], 0.55);
  s.addText("“Vale a pena buscar certificação ISO/IEC 27001 mesmo para pequenas empresas?”", { x: 0.6, y: 1.45, w: 12.1, h: 0.5, fontFace: F, fontSize: 16, italic: true, color: C.cyan, margin: 0 });
  const opts = [
    ["A) Certificar agora", C.green, ["+ Credibilidade e acesso a contratos", "+ Confiança de clientes", "- Custo alto e esforço documental", "- Auditorias externas recorrentes"]],
    ["B) Implementar sem certificar", C.amber, ["+ Menor custo inicial", "+ Redução real de riscos", "- Sem reconhecimento formal", "- Sem vantagem em licitações e contratos"]],
    ["C) Abordagem híbrida (recomendada)", C.blue, ["+ Controles essenciais agora", "+ Certificação quando o mercado exigir", "+ Crescimento gradual, sem gasto antecipado", "Decisão: perfil de clientes, orçamento, setor e exigências contratuais"]],
  ];
  opts.forEach((o, i) => {
    const x = 0.6 + i * 4.1;
    card(s, x, 2.15, 3.9, 3.6, { head: o[0], headSize: 15, color: o[1], body: o[2], bodySize: 13 });
  });
  card(s, 0.6, 5.95, 12.13, 0.85, { head: "Resposta curta: sim, se houver exigência de mercado. Para a maioria das PMEs, o melhor caminho é começar pelos controles essenciais e certificar quando houver retorno comercial.", headSize: 14, color: C.green, body: [] });
  s.addNotes(
`QUEM: Kaique | TEMPO: 4 min (inclui a pergunta-guia 1)
Fala: "Para uma pequena empresa, certificar agora custa caro e demanda muita documentação. Implementar sem certificar reduz riscos, mas não dá credibilidade formal. Nossa recomendação é a abordagem híbrida: começar pelos controles essenciais e certificar quando o mercado exigir."
Se esquecer: custo, mercado e risco são os três critérios. Resposta curta: "Depende de exigência de mercado; se não houver, implemente primeiro os controles essenciais."
Pergunta provável: "Qual o custo aproximado?" Resposta: varia muito com o escopo e com o organismo certificador. Não citar valores sem fonte; dizer que depende do escopo e do porte.`);
}

// =====================================================================
// BLOCO 5 - Gabriel: 27002 visao geral + Acessos
// =====================================================================
{
  const s = slide("Bloco 5 | ISO/IEC 27002", "Gabriel Feitosa");
  title(s, [{ t: "ISO/IEC 27002: " }, { t: "controles práticos", c: C.blue }]);
  subtitle(s, "A 27002 não é certificável. Ela descreve como cada controle deve ser feito e quais riscos reduz.");
  table(s, [
    ["Categoria", "Exemplos de controle", "Risco reduzido"],
    ["Gestão de acessos", "MFA, RBAC, menor privilégio, revisão periódica", "Acesso indevido"],
    ["Criptografia", "HTTPS/TLS, AES-256, gestão de chaves", "Exposição de dados"],
    ["Continuidade", "Backup, plano de recuperação de desastres (DR), redundância", "Indisponibilidade"],
  ], { x: 0.6, y: 2.25, w: 12.13, colW: [3.2, 6.13, 2.8], fs: 15, hfs: 15, rowH: 0.6, boldFirst: true });
  card(s, 0.6, 5.0, 12.13, 1.6, { head: "Regra de ouro", headSize: 16, color: C.blue, body: [
    "Todo controle precisa de um responsável, de uma forma de execução e de uma evidência. Sem isso, ele fica só no documento.",
  ], bodySize: 15 });
  s.addNotes(
`QUEM: Gabriel | TEMPO: 3 min
Fala: "A 27002 organiza os controles em categorias. Vou focar em três: gestão de acessos, criptografia e continuidade. Cada uma reduz um risco específico."
Se esquecer: Acessos reduz acesso indevido; Criptografia reduz exposição; Continuidade reduz indisponibilidade.
Pergunta provável: "Qual a diferença entre 27001 e 27002?" Resposta: a 27001 exige que você gerencie riscos e escolha controles; a 27002 orienta como implementar cada controle.`);
}

{
  const s = slide("Bloco 5 | Controle 1 · Gestão de acessos", "Gabriel Feitosa");
  title(s, [{ t: "Gestão de acessos: " }, { t: "ciclo de vida", c: C.blue }]);
  subtitle(s, "Garantir que o acesso certo esteja com as pessoas certas, no momento certo.");
  flow(s, [
    { t: "ENTRADA", d: "Criação do usuário, permissões mínimas e aprovação formal do gestor" },
    { t: "MUDANÇA", d: "Revisão periódica, ajuste ao mudar de função e registro de alterações" },
    { t: "SAÍDA", d: "Revogação imediata de acessos e desativação de contas no desligamento" },
  ], 2.25, { h: 1.6, colors: [C.green, C.amber, C.red], titleSize: 17, descSize: 13.5 });
  card(s, 0.6, 4.2, 5.95, 2.4, { head: "Controles de apoio", headSize: 16, color: C.blue, body: [
    "MFA em sistemas críticos",
    "RBAC: permissões por papel",
    "PAM para contas privilegiadas",
    "Logs de acesso centralizados",
  ], bodySize: 14 });
  card(s, 6.78, 4.2, 5.95, 2.4, { head: "Indicador (27004)", headSize: 16, color: C.amber, sub: "% de usuários revisados no prazo. Meta: 95%.", body: [
    "Atraso na revogação de acesso de desligados é falha crítica.",
    "Automatizar alertas reduz o risco de esquecimento.",
  ], bodySize: 14 });
  s.addNotes(
`QUEM: Gabriel | TEMPO: 4 min
Fala: "O ciclo tem três fases: entrada, mudança e saída. A saída é a mais perigosa: uma conta de ex-funcionário ativa é uma porta aberta. Por isso medimos o percentual de revisões no prazo."
Se esquecer: Entrada, Mudança, Saída. Controles de apoio: MFA, RBAC, PAM. O indicador é percentual de revisões no prazo.
Pergunta provável: "O que é menor privilégio?" Resposta: cada usuário recebe apenas o acesso necessário para a função dele, nada além.
Pergunta provável: "O que é PAM?" Resposta: Privileged Access Management, gestão de contas com acesso administrativo, com aprovação, registro e rotação de senhas.`);
}

// =====================================================================
// BLOCO 6 - Kawan: Criptografia + Continuidade + Analise em operacao
// =====================================================================
{
  const s = slide("Bloco 6 | Controle 2 · Criptografia", "Kawan Kelvin");
  title(s, [{ t: "Criptografia: " }, { t: "proteção de dados", c: C.blue }]);
  subtitle(s, "Transforma dados legíveis em dados ilegíveis sem a chave correta.");
  const items = [
    ["Em trânsito", "HTTPS/TLS 1.2 ou superior para navegação e APIs.", C.blue],
    ["Em repouso", "AES-256 para bancos de dados e arquivos.", C.violet],
    ["Backups", "Cópias criptografadas e protegidas, inclusive fora do local.", C.cyan],
    ["Chaves", "Gestão com rotação periódica, armazenamento seguro e acesso restrito.", C.amber],
  ];
  items.forEach((it, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    card(s, 0.6 + col * 4.2, 2.2 + row * 1.85, 4.0, 1.65, { head: it[0], headSize: 16, color: it[2], sub: it[1], subSize: 14 });
  });
  card(s, 9.2, 2.2, 3.53, 3.5, { head: "Impacto", headSize: 16, color: C.green, body: [
    "Dados interceptados permanecem ilegíveis.",
    "Reduz a exposição em caso de vazamento.",
    "Apoia a conformidade com a LGPD (art. 46, medidas de segurança).",
  ], bodySize: 13.5 });
  s.addText("Sem gestão de chaves, a criptografia perde efeito: quem tem a chave tem o dado.", { x: 0.6, y: 6.05, w: 12.1, h: 0.45, fontFace: F, fontSize: 14, italic: true, color: C.cyan, margin: 0 });
  s.addNotes(
`QUEM: Kawan | TEMPO: 3 min
Fala: "A criptografia tem dois momentos: em trânsito, quando o dado viaja pela rede, e em repouso, quando está guardado. Também cobrimos backups e chaves. A chave é o ponto mais fraco: se ela vaza, a criptografia não serve de nada."
Se esquecer: trânsito = TLS/HTTPS; repouso = AES-256; chaves = rotação.
Pergunta provável: "Qual a diferença entre criptografia simétrica e assimétrica?" Resposta: simétrica usa a mesma chave para cifrar e decifrar (AES); assimétrica usa par de chaves pública e privada (TLS usa as duas no início da conexão).`);
}

{
  const s = slide("Bloco 6 | Controle 3 · Continuidade", "Kawan Kelvin");
  title(s, [{ t: "Continuidade e " }, { t: "recuperação de desastres", c: C.blue }]);
  subtitle(s, "Garantir que sistemas e dados críticos sejam restaurados com rapidez e segurança.");
  const sc = [
    ["Ransomware", "Sistemas bloqueados por ataque malicioso.", "Backups offline, regulares, e plano de resposta a incidentes testado.", C.red],
    ["Falha de servidor", "Indisponibilidade por hardware ou software.", "Redundância, failover automático e monitoramento 24/7.", C.amber],
    ["Desastre físico", "Incêndio, inundação ou falha do datacenter.", "Backups em nuvem, múltiplos datacenters e testes periódicos de DR.", C.violet],
  ];
  sc.forEach((c, i) => {
    card(s, 0.6 + i * 4.1, 2.15, 3.9, 2.55, { head: c[0], headSize: 16, color: c[3], sub: c[1], subSize: 13, body: [c[2]], bodySize: 13 });
  });
  table(s, [
    ["Termo", "Pergunta que responde", "Exemplo"],
    ["RTO", "Quanto tempo posso ficar fora do ar?", "RTO de 4 horas"],
    ["RPO", "Quantos dados posso perder?", "RPO de 1 hora"],
  ], { x: 0.6, y: 5.0, w: 12.13, colW: [1.8, 5.6, 4.73], fs: 14, hfs: 14, rowH: 0.5, boldFirst: true });
  s.addNotes(
`QUEM: Kawan | TEMPO: 3 min
Fala: "Continuidade trata de três cenários: ransomware, falha de servidor e desastre físico. Dois termos são essenciais: RTO é o tempo máximo fora do ar, e RPO é a perda máxima de dados aceitável."
Se esquecer: RTO = tempo de recuperação (Recovery Time Objective). RPO = ponto de recuperação, ou seja, quanto dado pode ser perdido (Recovery Point Objective).
Pergunta provável: "Backup é suficiente?" Resposta: não. Backup sem teste de restauração não garante nada. Por isso a 27002 fala de testes periódicos.
Dica: a regra 3-2-1 (3 cópias, em 2 mídias diferentes, 1 fora do local) é uma boa referência prática.`);
}

{
  const s = slide("Bloco 6 | Análise em operação", "Kawan Kelvin");
  title(s, [{ t: "Análise de controles " }, { t: "em operação", c: C.blue }]);
  subtitle(s, "Exemplo ilustrativo de como o grupo avalia cada controle: status, eficácia, falha e melhoria.");
  const an = [
    ["Gestão de acessos", "Implementado", "Alta", "Revisões manuais atrasadas e inconsistentes nos ciclos de auditoria.", "Automatizar revisões com alertas e relatórios de acesso.", C.green],
    ["Backup e continuidade", "Parcialmente implementado", "Média", "Testes de restauração pouco frequentes e sem registro formal.", "Testes mensais e evidência documentada de cada ciclo.", C.amber],
    ["Criptografia", "Implementado", "Alta", "Chaves sem rotação definida em alguns sistemas legados.", "Política de rotação de chaves e ampliação do AES-256.", C.blue],
  ];
  table(s, [
    ["Controle", "Status", "Eficácia", "Falha identificada", "Melhoria proposta"],
    ...an.map(a => [a[0], a[1], a[2], a[3], a[4]]),
  ], { x: 0.6, y: 2.15, w: 12.13, colW: [2.4, 2.2, 1.3, 3.3, 2.93], fs: 12.5, hfs: 13, rowH: 0.95, boldFirst: true });
  s.addText("Os dados são ilustrativos e servem para demonstrar o método de análise. Substitua por dados reais, se houver.", { x: 0.6, y: 6.2, w: 12.1, h: 0.45, fontFace: F, fontSize: 12.5, italic: true, color: C.muted, margin: 0 });
  s.addNotes(
`QUEM: Kawan | TEMPO: 2 min (dentro do bloco 6)
Fala: "Aqui aplicamos o método: para cada controle, dizemos o status, a eficácia, a falha e a melhoria. Gestão de acessos funciona bem, mas a revisão é manual. Backup é o mais fraco, porque o teste de restauração é esporádico. Criptografia é forte, mas as chaves dos sistemas legados precisam de rotação."
Se esquecer: eficácia = o controle reduz o risco? falha = onde ele não reduz; melhoria = o que fazer.
Pergunta provável: "Esses dados são reais?" Resposta: são exemplos para ilustrar o método; a análise de caso real está no bloco 9.`);
}

// =====================================================================
// BLOCO 7 - Marcelo: 27003 + accountability + Pergunta 2
// =====================================================================
{
  const s = slide("Bloco 7 | ISO/IEC 27003", "Marcelo Pina");
  title(s, [{ t: "ISO/IEC 27003: do " }, { t: "conceito à realidade", c: C.blue }]);
  subtitle(s, "A 27003 orienta a implantação do SGSI em três etapas, sempre ligadas aos objetivos da organização.");
  flow(s, [
    { t: "PREPARAÇÃO", d: "Identificar ativos críticos, mapear partes interessadas e definir o escopo do SGSI." },
    { t: "AVALIAÇÃO DE RISCOS", d: "Levantar ameaças e vulnerabilidades por ativo. Classificar por probabilidade e impacto." },
    { t: "TRATAMENTO", d: "Definir controle, responsável, evidência e indicador para cada risco." },
  ], 2.4, { h: 2.0, colors: [C.blue, C.violet, C.cyan], titleSize: 16, descSize: 14 });
  card(s, 0.6, 4.75, 12.13, 1.8, { head: "Na prática", headSize: 16, color: C.cyan, body: [
    "Uma tabela simples de risco (probabilidade × impacto) já basta para começar. Não é preciso uma ferramenta complexa.",
  ], bodySize: 15 });
  s.addNotes(
`QUEM: Marcelo | TEMPO: 3 min
Fala: "A 27003 não cria controles novos. Ela mostra como implantar o SGSI na prática. Começa pela preparação: escopo, ativos e partes interessadas. Depois avalia os riscos e, por fim, trata: cada risco recebe um controle, um responsável, uma evidência e um indicador."
Se esquecer: Preparação, Avaliação, Tratamento. O tratamento exige quatro itens: controle, responsável, evidência e indicador.
Pergunta provável: "A 27003 é certificável?" Resposta: não. É uma diretriz de implementação.`);
}

{
  const s = slide("Bloco 7 | Accountability", "Marcelo Pina");
  title(s, [{ t: "Ciclo de " }, { t: "accountability", c: C.blue }, { t: ": da política à melhoria" }]);
  subtitle(s, "Um controle só é real quando cada etapa deixa uma evidência que pode ser verificada.");
  flow(s, [
    { t: "POLÍTICA", d: "O controle existe no documento" },
    { t: "RESPONSÁVEL", d: "Um dono é designado" },
    { t: "EXECUÇÃO", d: "A ação é feita de fato" },
    { t: "EVIDÊNCIA", d: "Logs, registros, tickets" },
    { t: "INDICADOR", d: "Mede o desempenho" },
    { t: "AUDITORIA", d: "Verifica a conformidade" },
  ], 2.3, { h: 1.6, colors: [C.blue, C.violet, C.cyan, C.green, C.amber, C.red], titleSize: 13, descSize: 11.5 });
  card(s, 0.6, 4.3, 12.13, 2.25, { head: "Fechamento do ciclo", headSize: 16, color: C.green, body: [
    "Os resultados da auditoria alimentam melhorias, e a melhoria volta para a política.",
    "Sem evidência e sem medição, o ciclo fica incompleto: o controle existe apenas no papel.",
  ], bodySize: 15 });
  s.addNotes(
`QUEM: Marcelo | TEMPO: 3 min
Fala: "Este é o ciclo que liga política à melhoria. Escrever a política não basta. Precisamos de um responsável, de uma execução concreta, de uma evidência, de um indicador e de uma auditoria. O resultado volta para a política como melhoria."
Se esquecer: sequência fixa: Política, Responsável, Execução, Evidência, Indicador, Auditoria, Melhoria.`);
}

{
  const s = slide("Bloco 7 | Pergunta-guia 2", "Marcelo Pina");
  title(s, [{ t: "Como evitar que os controles fiquem " }, { t: "só no papel", c: C.blue }, { t: "?" }], 0.55);
  s.addText("“Como garantir que os controles da 27002 não fiquem apenas no papel?”", { x: 0.6, y: 1.45, w: 12.1, h: 0.5, fontFace: F, fontSize: 16, italic: true, color: C.cyan, margin: 0 });
  const m = [
    ["1. Dono nomeado", "Cada controle tem um responsável com prazo e autoridade para cumprir."],
    ["2. Evidência automática", "Logs, tickets e relatórios gerados pelo próprio sistema, e não preenchidos à mão."],
    ["3. Teste periódico", "Restauração de backup em ambiente isolado, com registro do resultado."],
    ["4. Indicador com meta", "Um número que mostra se o controle funciona, comparado a uma meta."],
    ["5. Auditoria e análise crítica", "Auditoria interna e revisão pela direção verificam a execução real."],
  ];
  m.forEach((it, i) => {
    const y = 2.15 + i * 0.8;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 7.4, h: 0.68, fill: { color: C.card }, line: { color: C.line, width: 1 } });
    s.addText([
      { text: it[0] + "  ", options: { bold: true, color: C.blue } },
      { text: it[1], options: { color: C.text } },
    ], { x: 0.8, y, w: 7.1, h: 0.68, fontFace: F, fontSize: 13.5, valign: "middle", margin: 0 });
  });
  card(s, 8.3, 2.15, 4.43, 4.0, { head: "Regra prática", headSize: 17, color: C.amber, body: [
    "Se o controle não tem evidência recente e datada, ele é só documento.",
    "Pergunte sempre: quem fez, quando, e onde está o registro?",
  ], bodySize: 15 });
  s.addNotes(
`QUEM: Marcelo | TEMPO: 3 min (inclui a pergunta-guia 2)
Fala: "Para não ficar só no papel, cada controle precisa de cinco coisas: dono nomeado, evidência automática, teste periódico, indicador com meta e auditoria. A regra prática é: sem evidência recente e datada, o controle não existe de fato."
Se esquecer: os cinco itens são: dono, evidência, teste, indicador, auditoria.
Pergunta provável: "Qual a diferença entre política e procedimento?" Resposta: a política diz o que deve ser feito e por quê; o procedimento diz como fazer, passo a passo.`);
}

// =====================================================================
// BLOCO 8 - Emilly: 27004 + Pergunta 3
// =====================================================================
{
  const s = slide("Bloco 8 | ISO/IEC 27004", "Emilly Gabrielly");
  title(s, [{ t: "Como saber se o controle " }, { t: "funciona?", c: C.blue }]);
  subtitle(s, "A 27004 orienta a medir. Um indicador transforma uma opinião em um número comparável com uma meta.");
  card(s, 0.6, 2.15, 4.2, 4.2, { head: "Exemplo", headSize: 16, color: C.blue, body: [
    "Controle: revisão de acessos",
    "Indicador: % de usuários revisados no prazo",
    "Meta: 95%",
    "Resultado: 87%",
    "Ação: automatizar e criar alertas",
  ], bodySize: 14 });
  // progress bar
  s.addText("Resultado vs. meta", { x: 5.2, y: 2.2, w: 7.5, h: 0.4, fontFace: F, fontSize: 15, bold: true, color: C.text, margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.8, w: 7.5, h: 0.6, fill: { color: C.card2 }, line: { color: C.line, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.8, w: 7.5 * 0.87, h: 0.6, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2 + 7.5 * 0.95 - 0.02, y: 2.6, w: 0.04, h: 1.0, fill: { color: C.amber }, line: { color: C.amber, width: 0 } });
  s.addText("87% atual", { x: 5.2, y: 3.5, w: 3, h: 0.35, fontFace: F, fontSize: 13, color: C.blue, bold: true, margin: 0 });
  s.addText("Meta 95%", { x: 9.7, y: 3.5, w: 3, h: 0.35, fontFace: F, fontSize: 13, color: C.amber, bold: true, align: "right", margin: 0 });
  card(s, 5.2, 4.3, 7.53, 2.05, { head: "Leitura", headSize: 16, color: C.amber, body: [
    "Gap de 8 pontos percentuais: o controle existe e funciona, mas não atinge a meta.",
    "Sem medição, esse gap seria invisível. Com medição, vira uma ação com prazo.",
  ], bodySize: 14 });
  s.addNotes(
`QUEM: Emilly | TEMPO: 3 min
Fala: "Pegamos um controle real, a revisão de acessos, e medimos. A meta é 95% e o resultado é 87%. O gap é de 8 pontos percentuais. Isso mostra que o controle existe, mas falta atingir a meta, e a ação é automatizar."
Se esquecer: Controle, Indicador, Meta, Resultado, Ação. A barra mostra o resultado (azul) e a meta (linha amarela).
Pergunta provável: "Por que 95%, e não 100%?" Resposta: metas realistas e graduais são mais úteis; 100% costuma ser inatingível e pouco informativo.`);
}

{
  const s = slide("Bloco 8 | Tipos de indicadores", "Emilly Gabrielly");
  title(s, [{ t: "Indicadores " }, { t: "essenciais", c: C.blue }, { t: " por tipo" }]);
  subtitle(s, "A 27004 separa indicadores de resultado, de processo e de conformidade. Usamos os três para ter uma visão completa.");
  const ind = [
    ["A) Resultado", "O que aconteceu", C.blue, ["Incidentes resolvidos no prazo", "Vazamentos de dados: zero", "Tempo médio de resposta a incidentes", "Redução de vulnerabilidades críticas"]],
    ["B) Processo", "Como foi feito", C.violet, ["Revisões de acesso no prazo", "Testes de backup executados mensalmente", "Auditorias internas concluídas", "Controles implementados conforme o plano"]],
    ["C) Conformidade", "Se cumpre o requisito", C.green, ["Funcionários treinados em segurança", "Não conformidades tratadas no prazo", "Políticas revisadas anualmente", "Evidências de controles auditáveis"]],
  ];
  ind.forEach((c, i) => {
    card(s, 0.6 + i * 4.1, 2.25, 3.9, 4.4, { head: c[0], headSize: 18, color: c[2], sub: c[1], subSize: 13, body: c[3], bodySize: 14 });
  });
  s.addNotes(
`QUEM: Emilly | TEMPO: 3 min
Fala: "Indicador de resultado mostra o efeito final, como vazamentos. Indicador de processo mostra se a atividade foi feita no prazo. Indicador de conformidade mostra se cumprimos o requisito. Um indicador de resultado ruim pode ser causado por um processo mal feito, por isso precisamos dos três."
Se esquecer: Resultado = o que aconteceu; Processo = como foi feito; Conformidade = se cumpre a norma.
Pergunta provável: "Qual indicador é o mais importante?" Resposta: depende do risco. O mais útil é o que mostra a falha antes do incidente, geralmente um de processo.`);
}

{
  const s = slide("Bloco 8 | Pergunta-guia 3", "Emilly Gabrielly");
  title(s, [{ t: "Quais métricas são mais " }, { t: "úteis", c: C.blue }, { t: "?" }], 0.55);
  s.addText("“Quais métricas são mais úteis para avaliar a eficácia do SGSI (27004)?”", { x: 0.6, y: 1.45, w: 12.1, h: 0.5, fontFace: F, fontSize: 16, italic: true, color: C.cyan, margin: 0 });
  table(s, [
    ["Métrica", "Por que é útil"],
    ["% de revisões de acesso no prazo", "Mostra se a gestão de acessos funciona"],
    ["% de testes de restauração bem-sucedidos", "Prova que o backup realmente serve"],
    ["Tempo médio de detecção e de resposta a incidentes", "Mede a capacidade de reagir, não só de prevenir"],
    ["Nº de incidentes por trimestre e seu impacto", "Mostra a tendência do risco"],
    ["% de controles com evidência válida no período", "Separa o controle real do controle no papel"],
    ["Não conformidades abertas e prazo médio de tratamento", "Mostra se a melhoria acontece"],
  ], { x: 0.6, y: 2.1, w: 8.4, colW: [4.4, 4.0], fs: 12.5, hfs: 13, rowH: 0.5 });
  card(s, 9.3, 2.1, 3.43, 4.5, { head: "Critério de escolha", headSize: 16, color: C.amber, body: [
    "Definição clara",
    "Fórmula",
    "Meta",
    "Responsável",
    "Frequência de medição",
    "Poucas métricas, bem escolhidas, valem mais que muitas.",
  ], bodySize: 14 });
  s.addNotes(
`QUEM: Emilly | TEMPO: 3 min (inclui a pergunta-guia 3)
Fala: "As métricas mais úteis são as que mostram se o controle funciona e se a falha é corrigida. Escolhemos seis, mas o ponto principal é o critério: cada métrica precisa de definição, fórmula, meta, responsável e frequência."
Se esquecer: os cinco critérios são: definição, fórmula, meta, responsável, frequência.
Pergunta provável: "Quantas métricas devo ter?" Resposta: poucas e relevantes. Muitas métricas geram ruído e ninguém acompanha.
Pergunta provável: "Por que MTTD e MTTR?" Resposta: MTTD é o tempo médio para detectar um incidente, e MTTR, o tempo médio para responder e resolver. Juntas, mostram a capacidade de reação.`);
}

// =====================================================================
// BLOCO 9 - Eduardo: Estudo de caso e analise
// =====================================================================
{
  const s = slide("Bloco 9 | Estudo de caso ISO/IEC 27001", "Eduardo Santana");
  title(s, [{ t: "Estudo de caso: " }, { t: "Banco do Brasil", c: C.blue }]);
  subtitle(s, "Instituição financeira regulada, com dados pessoais de milhões de clientes e operação crítica 24/7.");
  card(s, 0.6, 2.15, 3.9, 3.9, { head: "Perfil", headSize: 16, color: C.blue, body: [
    "Setor financeiro regulado",
    "Presença nacional e internacional",
    "Grande volume de transações diárias",
    "Dados pessoais de milhões de clientes",
  ], bodySize: 14 });
  card(s, 4.72, 2.15, 3.9, 3.9, { head: "Ativos e riscos", headSize: 16, color: C.red, body: [
    "Dados pessoais e financeiros",
    "Multas por descumprimento da LGPD",
    "Fraudes e ransomware",
    "Indisponibilidade com perdas financeiras relevantes",
  ], bodySize: 14 });
  card(s, 8.84, 2.15, 3.89, 3.9, { head: "Caminho até a certificação", headSize: 16, color: C.green, body: [
    "Mapeamento de ativos",
    "Avaliação de riscos",
    "Definição de controles",
    "Auditorias internas",
    "Certificação ISO/IEC 27001",
  ], bodySize: 14 });
  s.addText("Fonte a confirmar: certificação e números devem ser checados em relatórios públicos do Banco do Brasil antes da apresentação.", { x: 0.6, y: 6.2, w: 12.1, h: 0.45, fontFace: F, fontSize: 12, italic: true, color: C.amber, margin: 0 });
  s.addNotes(
`QUEM: Eduardo | TEMPO: 4 min (bloco 9 tem 12 min de fala)
Fala: "O Banco do Brasil é um caso adequado porque combina dados pessoais em larga escala, regulação e operação crítica. O caminho para a certificação segue as etapas de mapeamento de ativos, avaliação de riscos, definição de controles e auditorias internas."
ATENÇÃO ANTES DA AULA: confirme em fontes oficiais (site de relação com investidores, relatórios de sustentabilidade, comunicados) que o BB possui certificação ISO/IEC 27001 e de qual escopo. Se não for possível confirmar, avise o professor e use um caso verificável. Não apresente números que não possam ser citados.
Se esquecer: perfil, riscos, caminho até a certificação.
Pergunta provável: "Qual o escopo da certificação?" Resposta: se confirmado, o escopo está na declaração pública do certificado; caso contrário, diga que a análise é sobre o modelo de implantação.`);
}

{
  const s = slide("Bloco 9 | Estudo de caso · Controles eficazes", "Eduardo Santana");
  title(s, [{ t: "Controles " }, { t: "eficazes", c: C.blue }, { t: " e por quê" }]);
  subtitle(s, "Controles que reduzem risco de forma comprovável quando bem operados.");
  const eff = [
    ["Autenticação multifator (MFA)", "Aplicada aos acessos críticos. Uma senha roubada, sozinha, deixa de ser suficiente para entrar.", C.blue],
    ["Criptografia", "Aplicada a bancos de dados e backups. Um dado copiado indevidamente permanece ilegível sem a chave.", C.violet],
    ["Plano de continuidade", "Operação em múltiplos datacenters, com testes de recuperação. Reduz o impacto de falhas e desastres.", C.cyan],
  ];
  eff.forEach((e, i) => {
    card(s, 0.6 + i * 4.1, 2.2, 3.9, 3.6, { head: e[0], headSize: 17, color: e[2], body: [e[1]], bodySize: 14.5 });
  });
  card(s, 0.6, 6.0, 12.13, 0.7, { head: "Critério de eficácia: o controle reduz o risco que deveria reduzir, e isso pode ser verificado por evidência.", headSize: 14, color: C.green, body: [] });
  s.addNotes(
`QUEM: Eduardo | TEMPO: 3 min (dentro do bloco 9)
Fala: "Os três controles mais eficazes em um banco são MFA, criptografia e continuidade. Cada um é avaliado pelo risco que reduz: MFA reduz uso de senha roubada, criptografia reduz exposição, continuidade reduz indisponibilidade."
Se esquecer: MFA = senha roubada não basta; criptografia = dado ilegível; continuidade = múltiplos datacenters e testes.
Pergunta provável: "Como você sabe que são eficazes?" Resposta: pela evidência, como logs de acesso, relatórios de criptografia e resultados de testes de recuperação. Sem evidência, a eficácia é suposição.`);
}

{
  const s = slide("Bloco 9 | Estudo de caso · Falhas e melhorias", "Eduardo Santana");
  title(s, [{ t: "Falhas " }, { t: "e oportunidades", c: C.blue }]);
  subtitle(s, "Mesmo organizações maduras têm falhas. O ponto é identificá-las e tratá-las com evidência.");
  const ff = [
    ["Revisão manual de acessos atrasada", "Automatizar com PAM e alertas de revisão, com relatórios periódicos.", C.red],
    ["Baixa conscientização dos colaboradores", "Treinamento intensivo, campanhas regulares e medição de participação.", C.amber],
    ["Testes de backup insuficientes e sem periodicidade", "Testes mensais automatizados e validação de recuperação em ambiente isolado.", C.violet],
  ];
  ff.forEach((f, i) => {
    const y = 2.2 + i * 1.45;
    card(s, 0.6, y, 12.13, 1.25, { head: f[0], headSize: 16, color: f[2], body: [f[1]], bodySize: 14 });
  });
  s.addText("Falhas típicas identificadas pelo grupo a partir de análise de controles semelhantes. Ajuste ao caso específico se houver dados oficiais.", { x: 0.6, y: 6.6, w: 12.1, h: 0.35, fontFace: F, fontSize: 11, italic: true, color: C.muted, margin: 0 });
  s.addNotes(
`QUEM: Eduardo | TEMPO: 3 min (dentro do bloco 9)
Fala: "Três falhas comuns: revisão manual de acessos que atrasa, baixa conscientização e testes de backup esporádicos. Para cada uma, a melhoria é concreta: automatizar, treinar com medição e testar com periodicidade."
Se esquecer: cada falha tem uma melhoria no mesmo cartão. Relacione sempre falha, melhoria e indicador.
Pergunta provável: "Essas falhas foram reais no BB?" Resposta: a análise é baseada em falhas típicas de controles semelhantes. Só afirme que ocorreram no caso específico se houver fonte pública.`);
}

{
  const s = slide("Bloco 9 | Análise consolidada", "Eduardo Santana");
  title(s, [{ t: "Análise " }, { t: "consolidada", c: C.blue }, { t: ": eficazes, falhas e melhorias" }], 0.55);
  subtitle(s, "Resposta direta ao requisito de análise dos dois tópicos: estudo de caso e controles da 27002.", 1.3);
  table(s, [
    ["Controle (27002)", "Eficaz", "Falha ou limitação", "Pode melhorar"],
    ["Gestão de acessos", "MFA e menor privilégio", "Revisões manuais atrasadas", "Automatizar revisões e alertas"],
    ["Criptografia", "TLS e AES-256", "Chaves sem rotação em legados", "Política de rotação e cobertura total"],
    ["Continuidade e DR", "Redundância e múltiplos datacenters", "Testes pouco frequentes", "Testes mensais com evidência"],
    ["Conscientização", "Treinamento básico existente", "Baixa adesão", "Campanhas contínuas e medição"],
  ], { x: 0.6, y: 2.0, w: 12.13, colW: [2.6, 3.1, 3.3, 3.13], fs: 13, hfs: 13.5, rowH: 0.7, boldFirst: true });
  card(s, 0.6, 5.7, 12.13, 0.95, { head: "Conclusão: um controle eficaz hoje precisa de medição e revisão para continuar eficaz amanhã.", headSize: 15, color: C.green, body: [] });
  s.addNotes(
`QUEM: Eduardo | TEMPO: 2 min (dentro do bloco 9)
Fala: "Esta tabela resume o requisito de análise: o que funcionou, o que falhou e o que pode melhorar, para os controles da 27002 e para o caso. A conclusão é que controle eficaz precisa de medição contínua."
Se esquecer: três colunas de análise: eficaz, falha, melhoria. Repita a conclusão no fim.`);
}

// =====================================================================
// FECHAMENTO - Rômulo
// =====================================================================
{
  const s = slide("Fechamento | Mentalidade", "Rômulo");
  title(s, [{ t: "Segurança é " }, { t: "processo", c: C.blue }, { t: ", não destino" }]);
  subtitle(s, "A segurança não é um produto que se compra. É um processo que se constrói controle por controle.");
  card(s, 0.6, 2.2, 3.9, 3.2, { head: "Mindset estático", headSize: 17, color: C.red, body: ["“Instalamos o antivírus, estamos seguros.”", "Sem revisão, sem medição, sem dono."], bodySize: 14 });
  card(s, 4.72, 2.2, 3.9, 3.2, { head: "Ciclo contínuo", headSize: 17, color: C.blue, body: ["Avaliar", "Implementar", "Monitorar", "Auditar", "Melhorar, e repetir"], bodySize: 14 });
  card(s, 8.84, 2.2, 3.89, 3.2, { head: "Mindset dinâmico", headSize: 17, color: C.green, body: ["Segurança é revisada, medida e aprimorada continuamente."], bodySize: 14 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 2 min
Fala: "A ideia que queremos deixar: segurança não é comprar uma ferramenta e esquecer. É um ciclo: avaliar, implementar, monitorar, auditar e melhorar, de novo e de novo."
Se esquecer: a frase de síntese é "Processo, não destino".`);
}

{
  const s = slide("Fechamento | Resumo", "Rômulo");
  title(s, [{ t: "O que " }, { t: "levar", c: C.blue }, { t: " desta aula" }]);
  const cols = [
    ["Conceitos", C.blue, ["Segurança = confidencialidade, integridade e disponibilidade", "ISO 27001 é o sistema de gestão, certificável", "ISO 27002 traz os controles práticos"]],
    ["Gestão", C.violet, ["SGSI exige responsáveis, execução, evidência e auditoria", "Indicadores medem se os controles realmente funcionam", "Controle sem evidência é só documento"]],
    ["Prática", C.cyan, ["Certificação é importante, mas a prática diária é essencial", "Para PMEs, a abordagem híbrida costuma ser a mais segura", "Melhoria contínua é o coração da segurança"]],
  ];
  cols.forEach((c, i) => {
    card(s, 0.6 + i * 4.1, 2.0, 3.9, 4.5, { head: c[0], headSize: 19, color: c[1], body: c[2], bodySize: 15 });
  });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 2 min
Fala: "Três ideias para levar: conceitos, gestão e prática. Se lembrarem de uma só, que seja: sem evidência e medição, não há controle de verdade."
Se esquecer: uma coluna para cada tema da aula: conceitos, gestão e prática.`);
}

{
  const s = slide("Fechamento | Respostas-guia", "Rômulo");
  title(s, [{ t: "Respostas às " }, { t: "três perguntas", c: C.blue }, { t: "-guia" }]);
  const rq = [
    ["Vale a pena certificar uma PME?", "Depende do mercado. Se há exigência contratual ou concorrência por credibilidade, sim. Caso contrário, implementar os controles essenciais primeiro e certificar depois (abordagem híbrida).", C.blue],
    ["Como evitar controles só no papel?", "Dono nomeado, evidência automática, testes periódicos, indicador com meta e auditoria. Sem evidência recente, não há controle.", C.violet],
    ["Quais métricas da 27004 são mais úteis?", "Poucas e bem definidas: revisões de acesso no prazo, testes de restauração, tempo de detecção e resposta, controles com evidência e tratamento de não conformidades.", C.cyan],
  ];
  rq.forEach((r, i) => {
    card(s, 0.6, 2.0 + i * 1.6, 12.13, 1.4, { head: r[0], headSize: 16, color: r[2], body: [r[1]], bodySize: 14 });
  });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 2 min
Fala: "Vamos fechar com as três perguntas do trabalho. Certificar depende do mercado. Evitar o papel exige evidência e teste. Métricas úteis são poucas, com meta, responsável e frequência."
Se esquecer: uma resposta por pergunta. Use a frase de cada cartão como ponto de partida.`);
}

{
  const s = slide("Referências", "Rômulo");
  title(s, [{ t: "Referências" }]);
  card(s, 0.6, 1.95, 6.0, 4.8, { head: "Normas ISO/IEC", headSize: 17, color: C.blue, body: [
    "ISO/IEC 27000:2018 – Vocabulário e visão geral",
    "ISO/IEC 27001:2022 – Requisitos do SGSI",
    "ISO/IEC 27002:2022 – Controles de segurança da informação",
    "ISO/IEC 27003:2017 – Orientações para implementação do SGSI",
    "ISO/IEC 27004:2016 – Monitoramento, medição, análise e avaliação",
    "ABNT NBR ISO/IEC 27001 e 27002 – versões nacionais (conferir a edição vigente)",
  ], bodySize: 13 });
  card(s, 6.8, 1.95, 5.93, 4.8, { head: "Órgãos e legislação", headSize: 17, color: C.cyan, body: [
    "ABNT – Associação Brasileira de Normas Técnicas: www.abnt.org.br",
    "Inmetro – acreditação de organismos certificadores: www.inmetro.gov.br",
    "ANPD – Autoridade Nacional de Proteção de Dados: www.gov.br/anpd",
    "Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD)",
    "Banco do Brasil – relatórios públicos (validar o caso antes da aula)",
  ], bodySize: 13 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 1 min
Fala: "As referências estão no slide. As normas são pagas, mas o vocabulário e os requisitos principais estão em fontes oficiais."
Se esquecer: versões: 27000:2018, 27001:2022, 27002:2022, 27003:2017, 27004:2016.`);
}

{
  const s = pres.addSlide(); s.background = { color: C.bg }; n++;
  glow(s, 10.4, 3.7, 2.4, C.blue);
  glow(s, 10.4, 3.7, 3.4, C.violet);
  s.addText("Perguntas?", { x: 0.6, y: 2.3, w: 8, h: 1.4, fontFace: F, fontSize: 60, bold: true, color: C.text, margin: 0 });
  s.addText("Obrigado. Dúvidas sobre qualquer bloco podem ser respondidas pelo apresentador responsável, indicado no rodapé de cada slide.", { x: 0.6, y: 3.85, w: 7.4, h: 0.9, fontFace: F, fontSize: 17, color: C.muted, margin: 0 });
  s.addText("ISO/IEC 27000 · 2026", { x: 0.6, y: 6.6, w: 6, h: 0.3, fontFace: F, fontSize: 11, color: C.blue, margin: 0 });
  s.addNotes(
`QUEM: Rômulo | TEMPO: 2 min (e perguntas da turma)
Fala: "Obrigado. Estamos abertos a perguntas. Se a dúvida for de um bloco específico, o apresentador responsável responde."
Se esquecer: o rodapé de cada slide mostra quem apresentou.`);
}

// =====================================================================
// APENDICE
// =====================================================================
{
  const s = slide("Apêndice A | Glossário (para consulta)", "Grupo");
  title(s, [{ t: "Glossário " }, { t: "rápido", c: C.blue }]);
  table(s, [
    ["Sigla", "Significado", "Sigla", "Significado"],
    ["SGSI", "Sistema de Gestão de Segurança da Informação", "MFA", "Autenticação multifator"],
    ["SoA", "Declaração de Aplicabilidade (Statement of Applicability)", "RBAC", "Controle de acesso baseado em papéis"],
    ["PDCA", "Planejar, Executar (Do), Verificar (Check), Agir (Act)", "PAM", "Gestão de acessos privilegiados"],
    ["RTO", "Tempo máximo aceitável fora do ar", "TLS", "Protocolo de comunicação segura"],
    ["RPO", "Perda máxima de dados aceitável", "AES", "Algoritmo de criptografia simétrica"],
    ["DR", "Recuperação de desastres (Disaster Recovery)", "MTTD / MTTR", "Tempo médio de detecção / de resposta"],
    ["LGPD", "Lei Geral de Proteção de Dados", "ANPD", "Autoridade Nacional de Proteção de Dados"],
  ], { x: 0.6, y: 1.9, w: 12.13, colW: [1.4, 4.66, 1.8, 4.27], fs: 12.5, hfs: 13, rowH: 0.56, boldFirst: true });
  s.addNotes("Apêndice para consulta durante as perguntas. Não é necessário apresentar este slide.");
}

{
  const s = slide("Apêndice B | Números para memorizar", "Grupo");
  title(s, [{ t: "Números para " }, { t: "memorizar", c: C.blue }]);
  const nums = [
    ["3", "pilares: confidencialidade, integridade e disponibilidade"],
    ["5", "normas da família: 27000, 27001, 27002, 27003 e 27004"],
    ["93", "controles no Anexo A da ISO/IEC 27001:2022"],
    ["4", "temas do Anexo A: organizacionais, pessoas, físicos e tecnológicos"],
    ["2", "estágios de auditoria de certificação (1: documental, 2: implementação)"],
    ["3 anos", "validade do certificado, com auditorias de vigilância anuais"],
    ["95% x 87%", "exemplo de meta x resultado de um indicador"],
    ["3-2-1", "regra prática de backup: 3 cópias, 2 mídias, 1 fora do local"],
  ];
  nums.forEach((nm, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.6 + col * 6.1, y = 1.95 + row * 1.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 5.95, h: 1.05, fill: { color: C.card }, line: { color: C.line, width: 1 } });
    s.addText(nm[0], { x: x + 0.2, y, w: 2.1, h: 1.05, fontFace: F, fontSize: 26, bold: true, color: C.blue, valign: "middle", margin: 0 });
    s.addText(nm[1], { x: x + 2.4, y, w: 3.4, h: 1.05, fontFace: F, fontSize: 13.5, color: C.text, valign: "middle", margin: 0 });
  });
  s.addNotes("Apêndice para consulta. Resume os números que costumam ser cobrados em perguntas.");
}

pres.writeFile({ fileName: "/home/claude/outputs/ISO27000_Apresentacao_Final.pptx" }).then(f => console.log("written", f, "slides:", n));
