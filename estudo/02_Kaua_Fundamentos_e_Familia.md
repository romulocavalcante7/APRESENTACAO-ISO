# Kaua: fundamentos e a família ISO/IEC 27000

**Slides 5 a 12 (25 min)** · Recebe a palavra do Rômulo (slide 4) · Você faz dupla com o Kawan, que continua a partir do slide 13 (requisito x orientação e ISO/IEC 27001).

Seu bloco tem duas partes: **a base** (os três pilares, o vocabulário e o risco) e **a família de normas** (quem é quem e como trabalham juntas). A primeira parte usa só ideias do dia a dia. A segunda é o mapa das normas.

## Explique como para um amigo (30 segundos)

"Proteger informação é cuidar de três coisas: que só quem deve veja (confidencialidade), que ninguém mude por engano ou de má-fé (integridade) e que esteja disponível quando precisarmos (disponibilidade). Para falar de segurança, usamos algumas palavras: o ativo é o que tem valor, a ameaça é quem pode causar dano, a vulnerabilidade é a fraqueza, o risco é a chance vezes o estrago, e o controle é a medida que diminui esse risco. Com a matriz, a gente dá uma nota ao risco para saber o que resolver primeiro."

Depois: "A ISO 27000 é uma família de cinco normas, cada uma com um papel. A 27000 é o dicionário. A 27001 é a que tem as exigências, e é a única que dá certificado. A 27002 é o catálogo de controles, ensina como fazer. A 27003 ensina a implantar. A 27004 ensina a medir. Elas funcionam juntas: primeiro as palavras, depois as exigências, depois os controles, depois a implantação e por fim a medição."

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

### As cinco normas
| Norma | Papel | Certificável? | Pergunta que responde |
|---|---|---|---|
| 27000 | Visão geral e vocabulário | Não | Que termos usamos? |
| 27001 | Requisitos do SGSI | **Sim** | O que o sistema de gestão precisa ter? |
| 27002 | Código de prática (controles) | Não | Como implementar cada controle? |
| 27003 | Orientação para implantar o SGSI | Não | Como colocar o SGSI de pé? |
| 27004 | Monitoramento e medição | Não | Como saber se está funcionando? |

Mnemônico: **0 = vocabulário, 1 = requisitos, 2 = controles, 3 = implantação, 4 = medição.**

### Como se encaixam (o fluxo do slide 12)
Termos (27000) → requisitos (27001) → controles (27002) → implantação (27003) → medição (27004). Depois a medição realimenta o sistema: é um ciclo.

Analogia da obra: 27000 é o dicionário de obra, 27001 é o projeto aprovado e a exigência da prefeitura, 27002 é o catálogo de materiais e técnicas, 27003 é o manual do mestre de obras, 27004 é a inspeção periódica.

### Linha do tempo (slide 11)
- 1995: BS 7799, norma britânica de boas práticas, origem da família.
- 2000: ISO/IEC 17799, versão internacional do código de prática.
- 2005: primeira edição da ISO/IEC 27001, com requisitos certificáveis.
- 2013: revisão da 27001 e da 27002 (Anexo A com 114 controles em 14 seções).
- 2022: edição atual (Anexo A com 93 controles em 4 temas; 27002 reorganizada).

Confira as datas na ISO e na ABNT antes da aula. A ordem e a ideia (uma evolução de boas práticas até requisitos certificáveis) é o que importa.

## Roteiro slide a slide

**Slide 5 (divisória).** Uma frase: "Antes das normas, precisamos falar a mesma língua. São três pilares e oito palavras."

**Slide 6 (CIA).** Passe pelos três cartões, um exemplo por pilar. Use a analogia da carta.
- Interação: "Qual dos três pilares vocês acham mais difícil de proteger?". Não há resposta errada. Conecte: disponibilidade costuma ser a mais sentida (sistema fora do ar), confidencialidade a mais temida (vazamento).

**Slide 7 (CIA no hospital).** Mostre os três casos e peça a identificação antes de revelar o chip.
- Prontuário vazado: confidencialidade.
- Dose alterada: integridade.
- Sistema fora do ar por ransomware: disponibilidade.
- Diga que é um exemplo hipotético.

**Slide 8 (vocabulário).** Não leia os oito cartões. Escolha a analogia da casa e percorra ativo, ameaça, vulnerabilidade, risco, controle. Nos outros três (SGSI, evidência, não conformidade), diga que voltam nos blocos seguintes.
- Interação (aparece no alto): peça um exemplo de ameaça e de vulnerabilidade do dia a dia.

**Slide 9 (matriz de risco).** Explique a conta no cartão da esquerda e depois aponte o canto superior direito da matriz (25, crítico) e o inferior esquerdo (1, baixo).
- Interação: "Onde colocariam o risco 'senha fraca'?". Resposta defensável: probabilidade alta, impacto médio a alto, então algo entre 10 e 16 (alto). Peça que justifiquem.
- Faça a ponte: "Agora que falamos a mesma língua, vamos ver a família de normas."

**Slide 10 (família).** Apresente as cinco normas em uma frase cada, usando o mnemônico 0-1-2-3-4. Destaque o selo "certificável" da 27001.
- Interação: "Qual dessas normas é a única certificável?". Resposta: 27001.

**Slide 11 (linha do tempo).** Conte como história: começou como boas práticas no Reino Unido, virou padrão internacional, passou a ter requisitos certificáveis e foi revisada. Aponte a barra crescendo.
- Interação (no alto): "Alguém já viu uma empresa citar a ISO 27001?". Se alguém citar, pergunte em que contexto.
- Fale dos números 114 (2013) e 93 (2022) sem se prender: o Kawan detalha.

**Slide 12 (como trabalham juntas).** Percorra o fluxo. Use a analogia da obra.
- Diga que o ciclo fecha: o que a 27004 mede volta para a gestão do SGSI.

Passe a palavra: "O Kawan continua com a diferença entre requisito e orientação e abre a 27001."

## Exemplos prontos para explicar (use um por tema, não precisa de todos)

- **CIA com o boletim de notas.** Confidencialidade: só você e a coordenação veem a sua nota. Integridade: ninguém troca a nota sem deixar rastro. Disponibilidade: o portal abre no dia do resultado.
- **Risco com o guarda-chuva.** Probabilidade é a chance de chover. Impacto é o quanto você se molha e estraga o dia. Se a chance é alta e o estrago é grande, você leva o guarda-chuva. O guarda-chuva é o controle.
- **Palavras com a casa.** A casa e o que tem dentro é o ativo. O ladrão é a ameaça. A janela aberta é a vulnerabilidade. A fechadura e o alarme são os controles.
- **Família de normas com o trânsito.** A 27000 é o dicionário de trânsito. A 27001 é o que a lei exige para tirar a carteira. A 27002 é o manual de direção defensiva. A 27003 é a autoescola. A 27004 é a revisão do carro.
- **Para abrir o bloco:** "E se o aplicativo do banco fica fora do ar no dia de pagar as contas? Qual dos três pilares falhou?" (disponibilidade).

## Cola: se esquecer

- CIA = Confidentiality, Integrity, Availability.
- Risco = probabilidade × impacto.
- Controle reduz o risco, não elimina.
- Dica: casa, ladrão, janela aberta, fechadura.


- 0, 1, 2, 3, 4: vocabulário, requisitos, controles, implantação, medição.
- Só a 27001 é certificável.
- 2013: 114 controles em 14 seções. 2022: 93 controles em 4 temas.

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


**P: A ISO 27001 substitui a 27002?**
R: Não. A 27001 diz o que o sistema precisa ter. A 27002 ajuda a escolher e implementar os controles do Anexo A.

**P: A ISO 27001 é obrigatória?**
R: Não é obrigatória por lei. Pode ser exigida por contrato, por cliente ou por regulação setorial.

**P: Quantas normas existem na família 27000?**
R: Mais de cinco. O trabalho foca nas cinco principais (27000 a 27004). Existem outras específicas, por exemplo sobre privacidade e nuvem. Se perguntarem qual, diga que não vai citar números sem confirmar.

**P: Qual a diferença entre a edição 2013 e a 2022?**
R: Na edição de 2022, o Anexo A foi reorganizado em 4 temas e 93 controles. A de 2013 tinha 14 seções e 114 controles. Alguns controles foram fundidos e outros criados. Confirme os detalhes se o professor pedir mais.

**P: Se a 27001 é a certificável, por que estudar as outras?**
R: Porque a 27001 diz o que fazer, mas não ensina como. A 27002 traz os controles, a 27003 orienta a implantação e a 27004 ensina a medir. Sem elas, a organização teria o requisito sem o caminho.

**P: A ABNT é a mesma coisa que a ISO?**
R: Não. A ISO publica a norma internacional. A ABNT é o órgão brasileiro que publica a versão nacional (NBR ISO/IEC).

**P: Quem muda a norma?**
R: A ISO e a IEC, por comitê técnico, em revisões periódicas.

## Erros a evitar

- Confundir **ameaça** com **vulnerabilidade** (o erro mais comum).
- Dizer que o controle "elimina" o risco.
- Ler todos os oito cartões do vocabulário.
- Apresentar o hospital como caso real: é hipotético.

- Dizer que a 27002 é certificável.
- Dizer que a 27001 "é uma lista de controles": a lista (Anexo A) é parte dela, mas ela é um sistema de gestão.
- Citar datas sem conferir.
- Ler a tabela inteira: use só a coluna da pergunta.

## Para estudar mais

- Resumo do vocabulário na ISO/IEC 27000 (visão geral e vocabulário).
- Pesquise "tríade CIA" e "matriz de risco" para ter outros exemplos além dos do slide.
