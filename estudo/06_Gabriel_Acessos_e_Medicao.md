# Gabriel: controles da 27002 (acessos) e medição (27004)

**Bloco 5: slides 27 a 31 (16 min)** · **Bloco 8: slides 44 a 47 (8 min)** · Bloco 5: recebe a palavra de Kaique e passa para Kawan. Bloco 8: recebe de Marcelo e passa para Kaique (slide 48).

Dois temas: **quem pode entrar onde (acessos)** e **como saber se está dando certo (medição)**. O exemplo dos 95% e 87% liga os dois.

## Explique como para um amigo (30 segundos)

"Controle de acesso é decidir quem tem a chave de cada porta, e tirar a chave quando a pessoa não precisa mais. Medição é olhar um número para saber se isso está funcionando, por exemplo: de cada 100 revisões de acesso, quantas foram feitas no prazo? Se a meta é 95 e deu 87, temos um problema para resolver."

## O que você precisa saber

### A 27002 (slide 28)
É o guia que explica **como** fazer cada controle. Não dá certificado. Três exemplos que vamos usar:
| Categoria | Exemplos | Risco que reduz |
|---|---|---|
| Acessos | MFA, RBAC, menor privilégio, revisão periódica | Acesso indevido |
| Criptografia | HTTPS/TLS, AES-256, gestão de chaves | Exposição de dados |
| Continuidade | Backup, plano de recuperação, redundância | Sistema fora do ar |
**Regra de ouro:** todo controle precisa de responsável, execução e evidência.

### Tipos de controle (slide 29)
- **Preventivo:** impede que aconteça (MFA, bloquear contas).
- **Detectivo:** percebe que aconteceu (logs, alertas de login estranho, revisão).
- **Corretivo:** resolve e recupera (revogar acesso, restaurar backup).
Exemplo para a turma: o alarme de incêndio é detectivo. O extintor ou o sprinkler é corretivo. A porta corta-fogo é preventiva.
Os 93 controles se dividem em 4 temas: 37 organizacionais, 8 de pessoas, 14 físicos, 34 tecnológicos.

### Gestão de acessos (slide 30): ciclo de vida
1. **Entrada:** cria o usuário com a permissão mínima, com aprovação do gestor.
2. **Mudança:** revisa o acesso de tempos em tempos e ajusta quando a pessoa muda de função.
3. **Saída:** tira o acesso na hora em que a pessoa sai da empresa.
Indicador: % de usuários revisados no prazo, **meta 95%**.
Destaque: atraso em tirar o acesso de quem saiu é falha crítica, porque ninguém vigia uma conta esquecida.

### Quatro ferramentas (slide 31)
- **MFA:** além da senha, pede algo a mais (código no celular, biometria). Barra o uso de senha roubada.
- **RBAC:** o acesso vem do cargo (papel), não da pessoa. Evita acumular permissão.
- **PAM:** controle das contas de administrador, com aprovação e gravação do uso.
- **Logs centralizados:** registro de quem fez o quê, guardado em lugar protegido. Vira evidência.
Princípio: **menor privilégio** (só o acesso necessário para o trabalho).

### Medição (27004) (slides 44 a 47)
- **Slide 44:** um indicador transforma opinião em número que se compara com uma meta. Exemplo: revisão de acessos, indicador "% revisado no prazo", meta 95%, resultado 87%. Gap de 8 pontos. Ação: automatizar a revisão e criar alertas.
- **Slide 45 (ciclo):** definir o que medir, coletar, analisar, comunicar, agir. Medir sem agir é burocracia.
- **Slide 46 (tipos):** resultado (o que aconteceu), processo (como foi feito), conformidade (se cumpre o requisito).
- **Slide 47 (painel):** painel com dados ilustrativos e cores: verde (meta atingida), amarelo (perto), vermelho (longe).
Métrica x indicador: métrica é só o número. Indicador é a métrica com meta, dono e interpretação.

## Roteiro slide a slide

**Slide 27 (divisória).** "Conhecemos a base e a certificação. Agora vamos ver os controles na prática."
**Slide 28 (controles).** Passe pela tabela: uma linha por categoria. Termine na regra de ouro.
- Interação (no alto): "Qual desses controles vocês já veem na faculdade ou no trabalho?"
**Slide 29 (tipos).** Use o alarme de incêndio.
- Interação: "Um alarme de incêndio é preventivo, detectivo ou corretivo?" (detectivo.)
**Slide 30 (acessos).** Percorra entrada, mudança, saída. Destaque a saída.
- Interação: "Quem já ficou com acesso a um sistema que não precisava mais?"
**Slide 31 (ferramentas).** Uma frase por ferramenta e o que ela barra.
- Interação: "Quem aqui usa MFA no e-mail? Levantem a mão." Comente o resultado.
Passe a palavra: "Agora o Kawan mostra criptografia e continuidade."

**Slide 44 (medição).** Espere o anel desenhar até 87%. Explique o gap de 8 pontos.
- Interação: "A meta não foi atingida. O que vocês fariam primeiro?" Resposta esperada: descobrir a causa e automatizar.
**Slide 45 (ciclo).** Cinco passos, uma frase cada. Frase final: "medir sem agir é só burocracia."
- Interação (no alto): "Qual etapa as empresas mais esquecem?" (agir.)
**Slide 46 (tipos de indicador).** Dê um exemplo por tipo.
- Interação: "'Revisão de acesso no prazo' é de resultado, processo ou conformidade?" (processo.)
**Slide 47 (painel).** Avise que os números são de exemplo.
- Interação: "Qual barra pede ação primeiro?" (treinamento, a mais distante da meta.)
Passe a palavra: "A pergunta-guia 3, sobre as melhores métricas, é com o Kaique."

## Cola: se esquecer

- Entrada, mudança, saída.
- Preventivo evita, detectivo percebe, corretivo resolve.
- MFA = mais de um fator. RBAC = por papel. PAM = contas de administrador.
- 95% de meta e 87% de resultado = gap de 8 pontos.
- Resultado = o que aconteceu. Processo = como foi feito. Conformidade = cumpre a regra?

## Perguntas do professor

**P: Qual a diferença entre a 27001 e a 27002?**
R: A 27001 pede que a empresa gerencie riscos e escolha controles. A 27002 explica como implementar cada controle.

**P: O que é menor privilégio?**
R: Dar a cada pessoa só o acesso necessário para a função dela, nem mais, nem menos.

**P: O que é RBAC?**
R: Controle de acesso por papéis: as permissões ficam no papel (por exemplo, "financeiro") e as pessoas recebem papéis.

**P: O que é PAM?**
R: Gestão de acessos privilegiados: contas de administrador com aprovação, registro do que foi feito e troca de senha.

**P: Por que a saída é o ponto mais crítico?**
R: Porque uma conta de ex-funcionário ativa é um acesso que ninguém vigia. É a porta aberta que ninguém lembra.

**P: MFA resolve tudo?**
R: Não. Reduz muito o risco de senha roubada, mas ainda existem riscos como roubo de sessão ou engenharia social. Sempre sobra um risco residual.

**P: Por que 95% e não 100%?**
R: Metas realistas e graduais são mais úteis. Cem por cento costuma ser impossível e esconde o que realmente importa. A meta pode subir com o tempo.

**P: Qual a diferença entre métrica e indicador?**
R: Métrica é o número. Indicador é o número com meta, interpretação e responsável.

**P: Como saber se o controle de acesso é eficaz?**
R: Pela evidência: relatório da revisão, com data e responsável, e pelo indicador de revisões no prazo, além de contas de ex-funcionários encontradas ativas.

**P: Quantas métricas um SGSI deve ter?**
R: Poucas e bem escolhidas. O excesso gera ruído.

**P: O que é log?**
R: Um registro automático de eventos: quem entrou, quando e o que fez.

**P: O painel do slide 47 é real?**
R: Não, é ilustrativo, só para mostrar como ler as cores e agir no gap.

## Erros a evitar

- Dizer que MFA "garante" segurança.
- Confundir indicador de processo com indicador de resultado.
- Tratar o painel como dado real.
- Ler tabelas inteiras: escolha exemplos.
