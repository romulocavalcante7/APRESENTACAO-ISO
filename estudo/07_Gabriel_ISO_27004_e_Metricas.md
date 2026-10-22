# Gabriel: ISO/IEC 27004 e métricas (pergunta-guia 3)

**Slides 44 a 48 (13 min)** · Recebe a palavra do Marcelo (slide 43) · Passa a palavra para o Eduardo (slide 49).

Seu tema em uma frase: **como saber se os controles estão funcionando, usando números.** No fim, você responde a pergunta-guia 3: quais métricas são mais úteis.

## Explique como para um amigo (30 segundos)

"Medir é olhar um número para saber se algo está funcionando. Por exemplo: de cada 100 revisões de acesso, quantas foram feitas no prazo? Se a meta é 95 e deu 87, a gente descobre que tem um problema e age. Medir sem agir é só burocracia. Por isso a 27004 ensina o caminho: definir o que medir, coletar, analisar, comunicar e agir."

## O que você precisa saber

### Como saber se o controle funciona (slide 44)
Um **indicador** transforma opinião em número que se compara com uma **meta**. Exemplo do slide: controle de revisão de acessos; indicador "% de usuários revisados no prazo"; meta 95%; resultado 87%. É um **gap de 8 pontos**. A ação é automatizar a revisão e criar alertas. Sem medir, esse gap seria invisível.
Sequência para lembrar: **controle, indicador, meta, resultado, ação.**

### Ciclo de medição (slide 45)
1. **Definir** o que medir e por quê.
2. **Coletar** os dados (de onde vêm).
3. **Analisar** comparando com a meta.
4. **Comunicar** a quem decide.
5. **Agir** (corrigir e melhorar).
Para cada indicador, registre: definição e fórmula, meta, responsável e frequência. Frase: **medir sem agir é só burocracia.**
Analogia: balança e dieta. De nada adianta se pesar todo dia se não mudar nada na alimentação.

### Tipos de indicador (slide 46)
- **Resultado:** o que aconteceu (incidentes resolvidos no prazo, vazamentos, tempo médio de resposta).
- **Processo:** como foi feito (revisões de acesso no prazo, testes de backup, auditorias concluídas).
- **Conformidade:** se cumpre o requisito (pessoas treinadas, não conformidades tratadas no prazo, políticas revisadas, evidências auditáveis).
Usamos os três para ter uma visão completa.
Métrica x indicador: métrica é só o número. Indicador é a métrica com meta, dono e interpretação.

### Painel (slide 47) - dados ilustrativos
Quatro indicadores com meta e cor: verde (meta atingida), amarelo (perto), vermelho (longe). No exemplo: treinamento é o gap mais urgente, revisão de acessos pede ajuste, backup e correções de não conformidade estão em dia. **Avise que os números são de exemplo.**

### Pergunta-guia 3 (slide 48): quais métricas são mais úteis?
Seis boas métricas:
1. % de revisões de acesso no prazo (mostra se a gestão de acessos funciona).
2. % de testes de restauração de backup bem-sucedidos (prova que o backup serve).
3. Tempo médio de detecção e de resposta, MTTD e MTTR (mostra a capacidade de reagir).
4. Incidentes por trimestre e o impacto (mostra a tendência do risco).
5. % de controles com evidência válida (separa o controle real do controle de papel).
6. Não conformidades e prazo para tratar (mostra se a melhoria acontece).
Critérios para escolher: definição clara, fórmula, meta, responsável e frequência. **Poucas métricas bem escolhidas valem mais do que muitas.**

## Roteiro slide a slide

**Slide 44 (medição).** Use o exemplo do 87% contra 95%. Espere o anel terminar de desenhar antes de falar do gap.
- Interação: "A meta não foi atingida. O que vocês fariam primeiro?" (descobrir a causa e automatizar.)
**Slide 45 (ciclo de medição).** Cinco passos, uma frase cada. Termine em "medir sem agir é só burocracia".
- Interação (no alto): "Qual etapa as empresas mais esquecem?" (agir.)
**Slide 46 (tipos de indicador).** Um exemplo por tipo.
- Interação: "'Revisão de acesso no prazo' é de resultado, processo ou conformidade?" (processo.)
**Slide 47 (painel).** Avise que os números são de exemplo. Leia a cor, não o número.
- Interação: "Qual barra pede ação primeiro?" (treinamento, a mais longe da meta.)
**Slide 48 (pergunta-guia 3).** Leia a pergunta, mostre a tabela, escolha três métricas para explicar e termine com os critérios de escolha.
Passe a palavra: "Agora o Eduardo aplica tudo em um caso real."

## Cola: se esquecer

- Controle, indicador, meta, resultado, ação (95% de meta, 87% de resultado, gap de 8 pontos).
- Ciclo: definir, coletar, analisar, comunicar, agir.
- Resultado = o que aconteceu. Processo = como foi feito. Conformidade = cumpre a regra?
- Métricas: acessos no prazo, restauração de backup, detecção e resposta, incidentes, evidência válida, não conformidades.
- Critérios: definição, fórmula, meta, responsável, frequência.

## Perguntas do professor

**P: Qual a diferença entre métrica e indicador?**
R: Métrica é o número. Indicador é a métrica com meta, interpretação e responsável.

**P: Por que a meta é 95% e não 100%?**
R: Metas realistas e graduais são mais úteis. Cem por cento costuma ser impossível e esconde o que realmente importa. A meta pode subir com o tempo.

**P: Quantas métricas um SGSI deve ter?**
R: Poucas e bem escolhidas. Muitas métricas geram ruído e ninguém acompanha. Cada uma deve ter dono e uma decisão associada.

**P: Qual indicador é o mais importante?**
R: Depende do risco. Em geral, um indicador de processo que mostra uma falha antes de virar incidente, como revisões de acesso no prazo.

**P: Por que medir tempo de detecção e de resposta?**
R: Porque mostram a capacidade de reagir. Detectar cedo e resolver rápido reduz o impacto de um incidente.

**P: Quem define a meta?**
R: A organização, com base no risco e na capacidade. A meta tem dono e é revisada.

**P: A 27004 é certificável?**
R: Não. É uma diretriz de monitoramento e medição. A certificação é sobre a 27001.

**P: O painel do slide 47 é real?**
R: Não, é ilustrativo, para mostrar como ler as cores e agir no gap.

**P: O que fazer se o indicador está no vermelho?**
R: Descobrir a causa, definir uma ação com dono e prazo, e medir de novo no próximo ciclo.

**P: Qual a diferença entre MTTD e MTTR?**
R: MTTD é o tempo médio para detectar um incidente. MTTR é o tempo médio para responder ou resolver.

## Erros a evitar

- Confundir indicador de processo com indicador de resultado.
- Tratar o painel como dado real.
- Dizer que medir basta: sem ação não adianta.
- Ler a tabela inteira do slide 48: escolha exemplos.
