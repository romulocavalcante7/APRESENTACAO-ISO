# Marcelo: ISO/IEC 27003, accountability e pergunta-guia 2

**Slides 38 a 43 (17 min)** · Recebe a palavra do Kawan (slide 37) · Passa a palavra para o Gabriel (slide 44).

Seu tema em uma frase: **como tirar a segurança do papel e provar que ela funciona.** A pergunta-guia 2 é a sua.

## Explique como para um amigo (30 segundos)

"Ter uma regra escrita não é o mesmo que ter segurança. Para o controle ser de verdade, alguém precisa ser dono dele, ele precisa ser executado e precisa deixar uma prova, como um registro com data. Se o auditor perguntar 'como você sabe?' e a resposta for 'a gente sempre fez assim', o controle está só no papel."

## O que você precisa saber

### ISO/IEC 27003 (slide 39)
É um guia para **implantar** o SGSI. Não dá certificado. Três etapas:
1. **Preparação:** descobrir quais são os ativos importantes, quem são as partes interessadas (clientes, funcionários, órgãos) e definir o escopo.
2. **Avaliação de riscos:** listar ameaças e vulnerabilidades por ativo e dar nota de probabilidade e impacto.
3. **Tratamento:** para cada risco, definir **controle, responsável, evidência e indicador.**
Na prática, uma tabela simples de risco (probabilidade × impacto) já serve para começar.

### Um risco do começo ao fim (slide 40) - exemplo ilustrativo
Ativo: banco de dados de clientes. Ameaça: ransomware. Vulnerabilidade: backup nunca testado. Risco: probabilidade 3 × impacto 5 = 15 (alto). Tratamento: mitigar com cópia offline e teste de restauração. Responsável: gerente de infraestrutura. Evidência: relatório mensal de restauração. Indicador: % de restaurações bem-sucedidas. Diga que é exemplo montado pelo grupo.

### Ciclo de accountability (slide 41)
"Accountability" é **prestar contas**: ter quem responda pelo controle e prova de que ele foi feito. O ciclo: política (existe no documento), responsável (tem dono), execução (a ação é feita), evidência (logs, registros, tickets), indicador (mede o desempenho), auditoria (confere) e melhoria (volta para a política).
- Política x procedimento: a política diz **o que** e **por quê**. O procedimento diz **como**, passo a passo.

### O que vale como evidência (slide 42)
- **Vale:** log com data e usuário; relatório de teste de restauração; ticket de revisão de acessos aprovado; ata da análise crítica da direção; lista de presença do treinamento.
- **Não vale:** política que ninguém aplica; planilha sem data e sem autor; "a gente sempre fez assim"; print antigo de outro período; declaração sem registro.
Pergunta que vale ouro: **"como você sabe que o controle funciona?" A resposta é sempre a evidência.**

### Pergunta-guia 2 (slide 43): como evitar que os controles fiquem só no papel?
Cinco mecanismos:
1. **Dono nomeado:** responsável com prazo e autoridade.
2. **Evidência automática:** logs, tickets e relatórios gerados pelo sistema, sem depender de memória.
3. **Teste periódico:** por exemplo, restaurar um backup em ambiente separado e registrar.
4. **Indicador com meta:** um número que mostra se funciona.
5. **Auditoria e análise crítica:** conferem a execução real, de tempos em tempos.
**Regra prática:** se o controle não tem evidência recente e datada, ele é só documento. Pergunte sempre: quem fez, quando, e onde está o registro?

## Roteiro slide a slide

**Slide 38 (divisória).** "A teoria acabou. Agora é como fazer isso acontecer de verdade."
**Slide 39 (27003).** Três etapas, uma frase cada. Diga que uma planilha já ajuda a começar.
- Interação (no alto): "Quem é o dono do risco em uma empresa pequena?" (quem responde pelo processo ou ativo; em empresa pequena pode ser o próprio dono do negócio.)
**Slide 40 (risco do começo ao fim).** Conte como história: tem um dado valioso, uma ameaça, uma fraqueza, um risco com nota, um tratamento, um dono, uma prova e um número.
- Interação: "Que indicador vocês escolheriam para esse risco?" (% de restaurações bem-sucedidas.)
**Slide 41 (accountability).** Percorra o ciclo e depois a frase final do slide: "sem evidência e medição, o controle existe apenas no papel."
- Interação (no alto): "O que acontece quando todo mundo é responsável por um controle?" (ninguém é.)
**Slide 42 (evidência).** Compare as duas colunas e escolha dois itens de cada para comentar.
- Interação: "Um print de dois anos atrás serve como evidência?" (não, porque não prova o que acontece hoje.)
**Slide 43 (pergunta-guia 2).** Leia a pergunta, passe pelos cinco mecanismos em uma frase e termine na regra prática.
Passe a palavra: "Agora o Gabriel mostra como medir se os controles funcionam."

## Cola: se esquecer

- 27003 = preparação, avaliação de riscos, tratamento.
- Tratamento = controle, responsável, evidência, indicador.
- Cinco mecanismos: **dono, evidência, teste, indicador, auditoria.**
- Sem evidência recente e datada, é só documento.

## Perguntas do professor

**P: A 27003 é certificável?**
R: Não. É uma diretriz de implementação.

**P: Qual a diferença entre política e procedimento?**
R: A política diz o que e por quê. O procedimento diz como fazer, passo a passo.

**P: Como saber se um controle está só no papel?**
R: Peça a evidência mais recente. Se não existe, ou se é antiga, o controle não está em operação.

**P: Quem deve ser o responsável por um controle?**
R: Alguém com autoridade e conhecimento para executá-lo, em geral o dono do processo ou do ativo, não necessariamente o pessoal de TI.

**P: Uma planilha de riscos é suficiente?**
R: Para começar, sim. A norma não exige ferramenta específica. O importante é repetir e documentar a análise.

**P: O que é accountability?**
R: Prestar contas: ter um responsável identificado e provas de que o controle foi executado.

**P: Evidência pode ser gerada automaticamente?**
R: Pode e deve, sempre que possível. Logs e relatórios do sistema dependem menos de memória e de boa vontade.

**P: Quem são as partes interessadas?**
R: Quem é afetado pela segurança da organização ou a afeta: clientes, funcionários, fornecedores, órgãos reguladores, acionistas.

**P: Com que frequência se avalia o risco?**
R: A cada mudança importante e de forma periódica. A frequência é definida pela organização e registrada no método de riscos.

**P: O exemplo do slide 40 é real?**
R: Não. É um exemplo ilustrativo do grupo para mostrar a lógica da ficha.

**P: Como ligar isso à auditoria?**
R: O auditor pede evidências. Um controle com dono, registro e indicador passa na auditoria com muito menos esforço.

## Erros a evitar

- Dizer que "documentar" é igual a "estar seguro".
- Aceitar "sempre fizemos assim" como evidência.
- Tratar a 27003 como certificável.
- Dizer que o responsável é sempre a TI.
