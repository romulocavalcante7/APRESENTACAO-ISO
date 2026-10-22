# Kawan: ISO/IEC 27001 e o SGSI

**Slides 13 a 20 (25 min)** · Você faz dupla com o Kaua: ele apresenta os fundamentos e a família (slides 5 a 12) e você assume no slide 13 · Passa a palavra para o Kaique (slide 21).

É o bloco mais longo e o coração do trabalho. Se você dominar PDCA, cláusulas, Anexo A, SoA e tratamento de riscos, domina a 27001.

## Explique como para um amigo (30 segundos)

"A ISO 27001 pede que a empresa tenha um sistema de gestão de segurança, o SGSI. Ele funciona em ciclo: planejar, fazer, conferir e melhorar, sem parar. Dentro dele tem 93 controles possíveis, mas a empresa só aplica os que o risco pede e explica a escolha em um documento chamado SoA. Para cada risco, ela escolhe uma de quatro respostas: reduzir, evitar, transferir ou aceitar. O que sobra depois disso é o risco residual."

## O que você precisa saber

### Requisito ou orientação? (slide 13)
Certificar é comparar a organização com **requisitos** (o que "deve" ser feito). A 27001 está escrita assim. As demais são **diretrizes**: orientam e recomendam ("convém"), mas não são o critério de auditoria. Nas normas ISO, "deve" indica requisito e "convém" indica recomendação.

### SGSI e o ciclo PDCA
O SGSI (Sistema de Gestão de Segurança da Informação) é o conjunto de política, processos, responsáveis e controles que a organização mantém e melhora. O modelo é o PDCA:
- **Plan (Planejar):** entender o contexto, definir escopo, avaliar riscos, fixar objetivos.
- **Do (Executar):** aplicar o plano de tratamento de riscos e os controles.
- **Check (Verificar):** monitorar, medir, auditar internamente, análise crítica da direção.
- **Act (Agir):** corrigir e melhorar.
O ciclo não termina. Cada volta parte de um patamar mais alto.

Analogia: academia. Planejar o treino, treinar, medir (peso, carga), ajustar o treino e recomeçar.

### As cláusulas 4 a 10 (slide 16)
As cláusulas 1 a 3 são introdutórias (escopo, referências normativas, termos). Os requisitos estão nas cláusulas 4 a 10:
| Cláusula | Tema | PDCA |
|---|---|---|
| 4 | Contexto da organização (partes interessadas, escopo) | Planejar |
| 5 | Liderança (direção, política, papéis) | Planejar |
| 6 | Planejamento (riscos, oportunidades, objetivos) | Planejar |
| 7 | Apoio (recursos, competência, comunicação, documentação) | Planejar |
| 8 | Operação (aplicar o tratamento de riscos) | Executar |
| 9 | Avaliação de desempenho (monitorar, auditar, análise crítica) | Verificar |
| 10 | Melhoria (não conformidade, ação corretiva, melhoria contínua) | Agir |

### Componentes do SGSI (slide 17): três camadas
- **Base:** política e objetivos, definidos pela direção. Sem apoio da direção, o SGSI não se sustenta.
- **Estrutura:** avaliação de riscos, tratamento e controles, documentados na SoA.
- **Topo:** auditoria interna, monitoramento, análise crítica e ações corretivas.

### Anexo A (slide 18)
93 controles em 4 temas na edição 2022:
- **37 organizacionais:** políticas, ativos, fornecedores, continuidade, acessos.
- **8 de pessoas:** triagem, conscientização, confidencialidade, trabalho remoto.
- **14 físicos:** perímetros, entradas, equipamentos, mesa e tela limpas.
- **34 tecnológicos:** autenticação, criptografia, backup, configuração, logs.
37 + 8 + 14 + 34 = 93. **Não é preciso aplicar os 93**: aplica-se o que o risco justifica e se documenta a decisão na SoA.

### Declaração de Aplicabilidade, SoA (slide 19)
Documento que lista os controles do Anexo A e, para cada um: se é aplicável, por quê, e qual a situação (implementado, parcial, planejado, excluído). Excluir um controle exige justificativa. É um dos documentos que o auditor mais lê.
O slide usa um exemplo ilustrativo de empresa fictícia. Controles citados: 5.15 (controle de acesso), 8.24 (uso de criptografia), 8.13 (backup), 6.3 (conscientização e treinamento), 7.4 (monitoramento da segurança física).

### Tratamento de riscos (slide 20): quatro opções
- **Mitigar (modificar):** aplicar controle. Ex.: ativar MFA.
- **Evitar:** deixar de fazer a atividade. Ex.: não coletar dado desnecessário.
- **Transferir (compartilhar):** passar parte do risco a terceiros. Ex.: seguro, provedor especializado.
- **Aceitar (reter):** aceitar formalmente. Ex.: risco baixo aprovado pela direção.
O que sobra é o **risco residual**, que deve ser aceito pelo dono do risco.

## Roteiro slide a slide

**Slide 13 (comparativo).** Tabela de requisito versus orientação. Leia só a coluna "Pergunta que responde".
- Interação: "Por que a 27002 não gera certificado?". Resposta: é diretriz, não requisito.
- Curiosidade final: "deve" é requisito e "convém" é recomendação.

**Slide 14 (divisória 27001).** "Se a 27002 é o catálogo de controles, a 27001 é o sistema que os organiza. É nela que está o requisito."

**Slide 15 (PDCA).** Mostre o anel com as quatro letras. Diga que o ciclo não termina e use a analogia da academia.
- Interação: "Onde o PDCA aparece nos estudos ou no trabalho de vocês?" (exemplo: prova, nota, revisão do estudo).

**Slide 16 (cláusulas).** Mostre que as cláusulas 4 a 7 são o planejar, 8 o executar, 9 o verificar, 10 o agir. Não leia cada uma: cite "contexto, liderança, planejamento, apoio, operação, desempenho, melhoria" e deixe os cartões para consulta.

**Slide 17 (componentes).** Percorra de baixo para cima: base, estrutura, topo. Frase-chave: "sem a direção na base, o resto desmorona."

**Slide 18 (Anexo A).** Os números sobem na tela (contadores): aproveite para falar. Mostre os quatro temas e a soma 93.
- Interação: "Uma pequena empresa precisa aplicar os 93 controles?". Resposta: não; depende do risco e da justificativa na SoA.

**Slide 19 (SoA).** Leia uma linha aplicável (por exemplo, controle de acesso) e a linha excluída (monitoramento físico, porque o provedor de nuvem cuida disso). Diga que é fictício.
- Interação com o professor (no slide): "Essa justificativa para excluir o controle seria aceita em uma auditoria?". Resposta sugerida, se pedirem: "Seria aceita se o contrato com o provedor e a certificação dele (relatórios ou certificados) estiverem registrados como evidência."

**Slide 20 (tratamento de riscos).** Um exemplo por cartão. Feche com risco residual.
- Interação: "Que tratamento dariam ao risco 'senha fraca'?". Resposta esperada: mitigar (MFA, política de senha, gerenciador).
- Passe a palavra: "Agora o Kaique explica como se conquista o certificado."

## Exemplos prontos para explicar (use um por tema, não precisa de todos)

- **Requisito x orientação com o esporte.** O regulamento do campeonato diz o que é obrigatório (requisito). O manual de treino diz como melhorar (orientação). Só o regulamento permite eliminar o time.
- **PDCA com a prova.** Planejar é montar o cronograma de estudo. Executar é estudar. Verificar é fazer o simulado. Agir é ajustar o que errou. E recomeça.
- **Escopo com o condomínio.** Você pode proteger o condomínio inteiro ou só o seu apartamento. Quanto maior o escopo, mais difícil de manter.
- **SoA com a lista de compras.** Você não compra o mercado inteiro: leva só o que precisa e anota por que deixou o resto.
- **Anexo A com o cardápio.** São 93 pratos. A empresa escolhe os que combinam com os seus riscos e explica por que não pediu os outros.
- **Tratamento de risco com a chuva no casamento.** Mitigar: colocar uma tenda. Evitar: fazer a festa no salão. Transferir: contratar o seguro do evento. Aceitar: se for só garoa, seguir em frente.

## Cola: se esquecer

- PDCA = Plan, Do, Check, Act.
- Cláusulas: 4 contexto, 5 liderança, 6 planejamento, 7 apoio, 8 operação, 9 desempenho, 10 melhoria.
- 37 + 8 + 14 + 34 = 93.
- SoA = Declaração de Aplicabilidade.
- Tratamento: mitigar, evitar, transferir, aceitar.

## Perguntas do professor

**P: Por que a 27002 não é certificável?**
R: Porque é um código de prática com diretrizes. A certificação é feita sobre requisitos, que estão na 27001. A organização escolhe os controles com base nos riscos e justifica a escolha.

**P: Precisa implementar os 93 controles?**
R: Não. É preciso avaliar os riscos e justificar, na SoA, a inclusão e a exclusão de cada controle. Quem exclui precisa explicar por quê.

**P: O que é a SoA?**
R: Declaração de Aplicabilidade: lista os controles do Anexo A, diz quais se aplicam, por quê, e a situação de cada um.

**P: Qual a diferença entre a 27001:2013 e a 27001:2022 nos controles?**
R: Em 2022, o Anexo A foi reorganizado em 4 temas e 93 controles. A edição de 2013 tinha 14 seções e 114 controles. Confirme números se o professor pedir detalhe.

**P: O PDCA é obrigatório?**
R: A norma o adota como modelo, mas o que ela exige são as atividades: planejar, operar, avaliar e melhorar. O nome do ciclo é menos importante que a prática.

**P: Qual o papel da direção?**
R: Definir a política, os objetivos, garantir recursos e fazer a análise crítica periódica. Sem a direção, não há SGSI.

**P: O que é escopo e por que importa?**
R: É o que está dentro do SGSI (unidades, processos, sistemas). Um escopo enxuto e mantível é melhor que um escopo grande e mal sustentado.

**P: Qual a diferença entre aceitar e ignorar um risco?**
R: Aceitar é uma decisão registrada, com aprovação do dono do risco, com base em critérios. Ignorar é não avaliar.

**P: Controle do Anexo A é obrigatório se for excluído da SoA?**
R: Não, desde que a exclusão esteja justificada.

**P: Como o SGSI se liga à LGPD?**
R: Os controles de segurança e a gestão de incidentes ajudam a demonstrar as medidas exigidas pela lei, mas a ISO 27001 sozinha não garante conformidade com a LGPD.

**P: Como saber se o SGSI está funcionando?**
R: Pelo monitoramento, pelas auditorias internas e pela análise crítica da direção (cláusula 9), com indicadores e evidências.

## Erros a evitar

- Dizer que "tem que ter os 93 controles".
- Confundir SoA com plano de tratamento de riscos (a SoA lista controles, o plano diz o que fazer com cada risco).
- Dizer que cláusulas 1 a 3 têm requisitos.
- Tratar o exemplo de SoA como de empresa real.

## Para estudar mais

- Estrutura de alto nível da ISO/IEC 27001 e a tabela do Anexo A (2022).
- Leia o vocabulário de "informação documentada" para entender o que o auditor pede.
