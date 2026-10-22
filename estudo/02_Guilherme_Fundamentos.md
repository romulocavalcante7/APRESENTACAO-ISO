# Guilherme: fundamentos da segurança

**Slides 6 a 10 (12 min) e slides 59 a 61 (6 min, no fechamento)** · No bloco 1: recebe a palavra de Rômulo e passa para Kaua. No fechamento: recebe a palavra de Rômulo (slide 58) e encerra a aula.

São cinco slides e todos usam ideias intuitivas. É um bloco curto e rápido: foque em exemplos do dia a dia.

## Explique como para um amigo (30 segundos)

"Proteger informação é cuidar de três coisas: que só quem deve veja (confidencialidade), que ninguém mude por engano ou de má-fé (integridade) e que esteja disponível quando precisarmos (disponibilidade). Para falar de segurança, usamos algumas palavras: o ativo é o que tem valor, a ameaça é quem pode causar dano, a vulnerabilidade é a fraqueza, o risco é a chance vezes o estrago, e o controle é a medida que diminui esse risco. Com a matriz, a gente dá uma nota ao risco para saber o que resolver primeiro."

## O que você precisa saber

### Os três pilares (CIA)
- **Confidencialidade:** só quem está autorizado vê a informação. Exemplos de controle: MFA, controle de acesso, criptografia.
- **Integridade:** a informação continua exata e completa. Exemplos: hash (como o SHA-256), assinatura digital, trilha de auditoria.
- **Disponibilidade:** a informação está acessível quando se precisa dela. Exemplos: backup testado, redundância, plano de continuidade.

Analogia: uma carta. Confidencialidade é o envelope fechado. Integridade é saber que ninguém trocou a folha dentro. Disponibilidade é a carta chegar a tempo.

### Vocabulário (use com precisão)
| Termo | Em uma frase | Exemplo |
|---|---|---|
| Ativo | Algo que tem valor para a organização | Banco de clientes, servidor, pessoas |
| Ameaça | Causa potencial de um incidente | Hacker, falha elétrica, incêndio |
| Vulnerabilidade | Fraqueza que a ameaça pode explorar | Senha fraca, sistema sem atualização |
| Risco | Probabilidade × impacto | Chance de vazamento × dano ao negócio |
| Controle | Medida que modifica o risco | MFA, backup, política |
| SGSI | Sistema de gestão que mantém tudo funcionando | Políticas, responsáveis, auditoria |
| Evidência | Registro que prova que o controle foi executado | Log, relatório, ata |
| Não conformidade | Descumprimento de um requisito | Revisão de acessos não feita |

Analogia da casa: o **ativo** é o que tem dentro, a **ameaça** é o ladrão, a **vulnerabilidade** é a janela aberta, o **risco** é a chance de roubo vezes o prejuízo, o **controle** é a fechadura.

### Matriz de risco
Probabilidade de 1 a 5 e impacto de 1 a 5. O risco é o produto (1 a 25).
- 1 a 4: baixo. 5 a 9: médio. 10 a 16: alto. 17 a 25: crítico.
- Por que multiplicar? Um evento raro e gravíssimo (1 × 5 = 5) e um evento comum e leve (5 × 1 = 5) têm o mesmo valor, mas pedem decisões diferentes. O número ajuda a priorizar, não a decidir sozinho.

## Roteiro slide a slide

**Slide 6 (divisória).** Uma frase: "Antes das normas, precisamos falar a mesma língua. São três pilares e oito palavras."

**Slide 7 (CIA).** Passe pelos três cartões, um exemplo por pilar. Use a analogia da carta.
- Interação: "Qual dos três pilares vocês acham mais difícil de proteger?". Não há resposta errada. Conecte: disponibilidade costuma ser a mais sentida (sistema fora do ar), confidencialidade a mais temida (vazamento).

**Slide 8 (CIA no hospital).** Mostre os três casos e peça a identificação antes de revelar o chip.
- Prontuário vazado: confidencialidade.
- Dose alterada: integridade.
- Sistema fora do ar por ransomware: disponibilidade.
- Diga que é um exemplo hipotético.

**Slide 9 (vocabulário).** Não leia os oito cartões. Escolha a analogia da casa e percorra ativo, ameaça, vulnerabilidade, risco, controle. Nos outros três (SGSI, evidência, não conformidade), diga que voltam nos blocos seguintes.
- Interação (aparece no alto): peça um exemplo de ameaça e de vulnerabilidade do dia a dia.

**Slide 10 (matriz de risco).** Explique a conta no cartão da esquerda e depois aponte o canto superior direito da matriz (25, crítico) e o inferior esquerdo (1, baixo).
- Interação: "Onde colocariam o risco 'senha fraca'?". Resposta defensável: probabilidade alta, impacto médio a alto, então algo entre 10 e 16 (alto). Peça que justifiquem.
- Passe a palavra: "Agora o Kaua apresenta a família de normas."

## Fechamento: quiz, referências e perguntas (slides 59 a 61)

Depois do Rômulo apresentar as respostas às três perguntas, você encerra. São três slides leves.

**Slide 59 (quiz relâmpago).** Leia uma pergunta por vez e espere a turma responder em voz alta. Se ninguém arriscar, escolha alguém e peça um palpite. Respostas:
1. ISO/IEC 27001 (a única certificável).
2. 93 controles na edição 2022.
3. O RPO mostra quanto dado a empresa aceita perder, do último backup até o incidente.
4. Só documento, um controle sem evidência recente.
5. Um organismo certificador acreditado (no Brasil, a acreditação é do Inmetro).
Elogie quem acertou e explique rápido os erros.

**Slide 60 (referências).** Não leia a lista. Diga: "As normas, a ABNT, o Inmetro, a ANPD e a LGPD estão aqui para quem quiser estudar."

**Slide 61 (perguntas).** Agradeça e abra para perguntas gerais do professor e da turma. Direcione cada pergunta ao colega do bloco certo: "Esse ponto é do bloco do Kawan, ele explica melhor."
Se não souber: "Não tenho essa informação com segurança, mas posso verificar e enviar depois."

## Cola: se esquecer

- CIA = Confidentiality, Integrity, Availability.
- Risco = probabilidade × impacto.
- Controle reduz o risco, não elimina.
- Dica: casa, ladrão, janela aberta, fechadura.

## Perguntas do professor

**P: A criptografia garante a integridade?**
R: Não diretamente. Ela protege a confidencialidade. Para integridade usamos hash, assinatura digital e controle de alterações. Há casos em que a criptografia autenticada protege os dois, mas o objetivo principal é a confidencialidade.

**P: Qual a diferença entre ameaça e vulnerabilidade?**
R: Ameaça é quem ou o que pode causar dano. Vulnerabilidade é a fraqueza que a ameaça explora. Sem vulnerabilidade, a ameaça não encontra caminho.

**P: Dê um exemplo de risco residual.**
R: Depois de ativar o MFA, ainda resta o risco de alguém roubar uma sessão já autenticada. Esse risco que sobra é o residual.

**P: Por que multiplicar probabilidade e impacto, e não somar?**
R: Porque a combinação define a prioridade. Um evento raro e gravíssimo pode merecer atenção, e um evento frequente e irrelevante pode não merecer. A multiplicação preserva essa relação.

**P: Segurança da informação é o mesmo que segurança de TI?**
R: Não. A informação pode estar em papel, na cabeça das pessoas e em sistemas. TI é parte do assunto, mas a norma cobre processos, pessoas e instalações.

**P: Um risco pode ser zerado?**
R: Em geral não. O objetivo é levar o risco a um nível aceitável pela organização, depois de avaliar custo e benefício.

**P: O que é não conformidade?**
R: O não atendimento de um requisito. Gera ação corretiva. Em auditoria, pode ser maior ou menor (o Kaique explica no bloco dele).

**P: Todo ativo é igualmente importante?**
R: Não. Por isso se classificam os ativos e se priorizam os controles nos mais críticos.

## Erros a evitar

- Confundir **ameaça** com **vulnerabilidade** (o erro mais comum).
- Dizer que o controle "elimina" o risco.
- Ler todos os oito cartões do vocabulário.
- Apresentar o hospital como caso real: é hipotético.

## Para estudar mais

- Resumo do vocabulário na ISO/IEC 27000 (visão geral e vocabulário).
- Pesquise "tríade CIA" e "matriz de risco" para ter outros exemplos além dos do slide.
