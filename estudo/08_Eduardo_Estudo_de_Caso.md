# Eduardo: estudo de caso e análise

**Slides 48 a 54 (20 min)** · Recebe a palavra do Gabriel (slide 47) · Passa a palavra para o Guilherme (slide 55).

Seu bloco amarra a aula: pega o que todos explicaram e aplica em uma empresa. É a parte em que o professor mais vai testar se o grupo entendeu.

## Aviso importante: confirme o caso antes da aula

O slide 50 traz o aviso **"Fonte a confirmar"**. A busca pública feita na preparação não confirmou que o Banco do Brasil possua certificado ISO/IEC 27001, e os números que apareciam no trabalho original (100 mil funcionários, 300 milhões de transações por dia, redução de 98% em tentativas de acesso, RTO menor que 4 horas, RPO menor que 1 hora, 99,99% de disponibilidade) **não foram verificados**. Por isso os slides usam só afirmações gerais e nenhum número do banco.

O que fazer, nesta ordem:
1. Procure em fontes do próprio banco (relatório anual, relatório de sustentabilidade, site de relações com investidores) a menção a ISO/IEC 27001 e o escopo.
2. Se confirmar: anote o escopo oficial, a data e a fonte. Troque o aviso do slide 50 pela fonte.
3. Se **não** confirmar: avise o grupo e troque o caso por uma empresa com certificado comprovado (o site da empresa e o do organismo certificador costumam listar). O requisito do trabalho é "empresa certificada". Os slides 51 a 53 foram escritos como análise de controles típicos e podem ser adaptados.
4. Regra de ouro: **só afirme o que você consegue mostrar a fonte.** O que for análise típica, diga "é um exemplo típico de controle desse tipo".

## Explique como para um amigo (30 segundos)

"Vou mostrar como se analisa uma empresa que cuida da segurança da informação. Primeiro entendo quem ela é e o que precisa proteger. Depois vejo os controles que usa. Depois pergunto: tem prova de que funciona? A resposta separa três grupos: o que está eficaz, o que apresentou falha e o que pode melhorar. O recado final é que mesmo uma empresa madura continua medindo e melhorando."

## O que você precisa saber

### Método de análise (slide 49)
1. **Contexto:** setor, porte e exigências (leis, regulação).
2. **Ativos e riscos:** o que precisa ser protegido e o que pode dar errado.
3. **Controles:** o que foi aplicado.
4. **Evidências:** o que prova o resultado.
5. **Veredito:** eficaz, falha ou pode melhorar.

### O caso (slide 50): como está no slide
- **Perfil:** setor financeiro regulado, presença nacional e internacional, grande volume de transações, dados de milhões de clientes.
- **Ativos e riscos:** dados pessoais e financeiros, multas da LGPD, fraudes e ransomware, indisponibilidade com perdas.
- **Caminho até a certificação:** mapeamento de ativos, avaliação de riscos, definição de controles, auditorias internas, certificação ISO/IEC 27001.
O trecho do caminho descreve as etapas típicas de qualquer empresa. A afirmação de que a certificação existe **depende da confirmação.**

### Controles eficazes (slide 51)
Critério: o controle **reduz o risco que deveria reduzir** e isso pode ser **verificado por evidência**.
- **MFA** nos acessos críticos: senha roubada sozinha não basta mais.
- **Criptografia** em bancos e backups: dado copiado fica ilegível sem a chave.
- **Continuidade:** operação em vários datacenters, com testes de recuperação.

### Falhas e oportunidades (slide 52)
Mesmo empresa madura tem falhas. O ponto é achar e tratar com evidência.
- Revisão manual de acessos atrasada → automatizar com PAM e alertas.
- Baixa conscientização → treinamento e campanhas com medição.
- Testes de backup esporádicos → testes mensais automáticos em ambiente isolado.
Atenção: são **falhas típicas** de controles desse tipo. Não afirme que aconteceram no caso, a menos que tenha fonte pública.

### Análise consolidada (slide 53)
Tabela por controle: o que é eficaz, falha ou limitação, e o que pode melhorar.
| Controle | Eficaz | Falha ou limitação | Pode melhorar |
|---|---|---|---|
| Gestão de acessos | MFA e menor privilégio | Revisões manuais atrasadas | Automatizar revisões e alertas |
| Criptografia | TLS e AES-256 | Chaves sem rotação em sistemas antigos | Política de rotação e cobertura total |
| Continuidade e DR | Redundância e vários datacenters | Testes pouco frequentes | Testes mensais com evidência |
| Conscientização | Treinamento básico existente | Baixa adesão | Campanhas contínuas e medição |
**Conclusão:** um controle eficaz hoje precisa de medição e revisão para continuar eficaz amanhã.

### Lições (slide 54)
1. Escopo claro. 2. Dono e evidência. 3. Medir. 4. Melhorar sempre. Elas respondem às três perguntas-guia do trabalho.

## Roteiro slide a slide

**Slide 48 (divisória).** "Agora vamos ver tudo isso aplicado em uma empresa."
**Slide 49 (método).** Mostre os 5 passos e os três vereditos. Diga a regra do grupo: só afirmamos o que tem fonte.
- Interação (no alto): "Que empresa certificada vocês conhecem?" Se alguém citar, conecte ao método.
**Slide 50 (caso).** Leia o aviso em voz alta. Descreva perfil, riscos e caminho com suas palavras. Se a certificação foi confirmada, cite escopo e fonte.
**Slide 51 (eficazes).** Um cartão por vez, com a pergunta "o que prova que funciona?".
- Interação: "Por que o MFA funciona mesmo com a senha vazada?" (porque falta o segundo fator.)
**Slide 52 (falhas).** Diga a falha, depois a melhoria. Reforce "falhas típicas".
- Interação: "Qual falha vocês corrigiriam primeiro?" Peça justificativa (impacto e facilidade).
**Slide 53 (consolidada).** Leia uma linha como exemplo e deixe o resto para consulta. Termine na conclusão.
**Slide 54 (lições).** Os quatro números sobem: fale cada lição em uma frase.
- Interação: "Qual lição vocês aplicariam hoje no seu trabalho?"
Passe a palavra: "Agora o Guilherme faz o fechamento."

## Exemplos prontos para explicar (use um por tema, não precisa de todos)

- **Método de análise com a correção de prova.** O que o aluno acertou (eficaz), o que errou (falha) e o que dá para melhorar. A diferença é que aqui cada afirmação precisa de uma fonte.
- **MFA com a porta de duas fechaduras.** Mesmo que o ladrão copie uma chave, ainda falta a outra.
- **Evidência com o teste da fechadura.** Como você sabe que a fechadura funciona? Tenta abrir e registra o resultado.
- **Lição final com a academia.** O certificado é a matrícula. O resultado vem de treinar todo dia. Até atleta profissional continua treinando.
- **Se não houver dado confirmado:** "Não vou citar números sem fonte. Prefiro uma análise qualitativa e honesta a um número que não consigo provar."

## Cola: se esquecer

- Método: contexto, ativos e riscos, controles, evidências, veredito.
- Eficaz = reduz o risco e tem evidência.
- Falhas típicas: revisão manual de acessos, pouca conscientização, teste de backup raro.
- Três colunas: eficaz, falha, melhoria.

## Perguntas do professor

**P: Qual o escopo da certificação do caso?**
R: Se confirmou: cite o escopo oficial e a fonte. Se não confirmou: "A análise é sobre o modelo de implantação e os controles. Não vou afirmar um escopo que não posso comprovar."

**P: Como vocês sabem que os controles são eficazes?**
R: Pela evidência: logs de acesso, relatórios de criptografia, resultados de testes de recuperação. Sem evidência é suposição. No caso, estamos analisando controles típicos e dizemos isso.

**P: Essas falhas aconteceram na empresa?**
R: A análise parte de falhas comuns em controles desse tipo. Não afirmo que ocorreram no caso sem fonte pública.

**P: O que um banco faz de diferente de uma empresa pequena?**
R: Escala, regulação e volume de dados. Mas o método é o mesmo: riscos, controles, evidência e medição.

**P: Por que a análise consolidada importa?**
R: Porque mostra que certificação não é o fim. Mesmo controles eficazes precisam de medição para continuarem eficazes.

**P: Por que escolheram esse caso?**
R: Porque é um setor regulado, com muito dado pessoal e risco alto, o que torna os controles bem visíveis. Se o caso for trocado, diga a razão da nova escolha.

**P: Quais controles são os mais importantes?**
R: Os que reduzem os riscos mais altos do ativo mais crítico. Em geral, acessos, criptografia e continuidade, mas a escolha vem da avaliação de riscos.

**P: O que a empresa deve fazer depois de uma falha?**
R: Registrar, achar a causa, corrigir, definir um prazo e verificar se foi resolvido. É o ciclo de não conformidade e ação corretiva.

**P: Como isso ajuda uma pequena empresa?**
R: As lições são as mesmas: escopo claro, dono e evidência, medir e melhorar. Muda a escala, não o método.

**P: Vocês têm os números da empresa?**
R: Não citamos números sem fonte. Preferimos análise qualitativa a números não verificados.

## Erros a evitar

- Dizer que a empresa é certificada sem a fonte.
- Citar números que não vieram de documento público.
- Apresentar falhas típicas como fatos do caso.
- Ler a tabela do slide 53 inteira.
