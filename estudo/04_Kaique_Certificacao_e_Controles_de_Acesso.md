# Kaique: certificação e controles de acesso (27002)

**Slides 22 a 31 (33 min)** · Recebe a palavra do Vinicius (slide 21) · Passa a palavra para o Kawan (slide 32).

Seu bloco tem duas partes: **a certificação** (como a empresa prova que segue a norma e se vale a pena para uma empresa pequena, a pergunta-guia 1) e **os controles de acesso** (a primeira parte prática da 27002). É um bloco grande, então use as perguntas para a turma participar e respire entre as duas partes.

## Explique como para um amigo (30 segundos)

"Certificação é como a carteira de motorista da empresa. Um examinador de fora, que tem autorização para isso, confere se a empresa segue as regras da ISO 27001. Se passar, recebe um certificado que vale 3 anos. Todo ano o examinador volta para ver se continua tudo certo. Para empresa pequena, a gente recomenda começar pelo básico e só tirar o certificado quando um cliente pedir ou o negócio ganhar com isso."

Depois: "Controle de acesso é decidir quem tem a chave de cada porta, e tirar a chave quando a pessoa não precisa mais. Tem quatro ferramentas básicas: o login com senha mais código (MFA), o acesso pelo cargo (RBAC), o cuidado com as contas de administrador (PAM) e o registro de tudo que acontece (logs). A regra por trás de tudo é dar a cada pessoa só o acesso de que ela precisa."

## O que você precisa saber

### Quem certifica
Um **organismo certificador** (uma empresa independente). Ele precisa ser **acreditado**, ou seja, alguém conferiu que ele sabe auditar. No Brasil, quem faz essa acreditação é o **Inmetro**. A empresa que quer o certificado não pode se certificar sozinha.

### As etapas (slide 22)
1. **Preparação:** a empresa monta o SGSI (escopo, política, riscos, SoA).
2. **Auditoria Estágio 1:** o auditor lê os documentos e vê se a empresa está pronta.
3. **Auditoria Estágio 2:** o auditor confere se o que está escrito acontece de verdade e se funciona.
4. **Certificado:** vale por 3 anos.
5. **Vigilância:** todo ano, auditoria menor de acompanhamento. No fim dos 3 anos, recertificação.

Analogia: prova teórica (estágio 1) e prova prática (estágio 2).

### O que o auditor pede (slide 23)
Documentos e registros: escopo, política de segurança, método de avaliação de riscos, SoA, plano de tratamento de riscos, objetivos, resultados de monitoramento, auditoria interna e análise crítica da direção, mais registros de competência e de ações corretivas. A ideia: **não basta ter regra, tem que ter prova de que a regra foi usada.**

### Não conformidade (slide 24)
É quando o auditor acha algo que não cumpre a norma.
- **Maior:** problema sério (falta um requisito inteiro ou o sistema não funciona). Sem corrigir, não sai o certificado.
- **Menor:** falha pontual. A empresa faz um plano de ação e o auditor confere depois.
O caminho: achado, classificação, plano de ação (causa, correção, prazo) e verificação.

### Pergunta-guia 1 (slide 25): vale certificar uma pequena empresa?
Três opções:
- **A) Certificar agora.** Vantagens: credibilidade e acesso a contratos. Desvantagens: custo alto, muito papel, auditorias externas todo ano.
- **B) Só implementar, sem certificar.** Vantagens: custo menor e proteção real. Desvantagens: sem reconhecimento formal.
- **C) Híbrida (a que o grupo recomenda).** Começar pelos controles essenciais e certificar quando o mercado pedir.

**Resposta curta:** sim, vale, **se houver exigência ou ganho de mercado**. Se não houver, comece pelo essencial e certifique depois.

### Caminho enxuto para PME (slide 26)
1. Escopo pequeno (só o que sustenta o negócio).
2. Poucos riscos, em uma planilha.
3. Controles essenciais: MFA, backup testado, treinamento.
4. Medir 2 ou 3 indicadores com meta.
5. Decidir quando certificar.
Isso é uma recomendação do grupo, não uma regra da norma. Diga isso.

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

## Roteiro slide a slide

**Slide 22 (certificação).** Use a analogia da prova teórica e prática. Percorra as cinco etapas com o dedo. Termine com o aviso: certificar não é o fim.
**Slide 23 (documentos).** Escolha três cartões e explique. Frase: "documento sem registro de uso não convence o auditor."
- Interação (no alto): "Qual desses documentos um projeto de vocês já teria?"
**Slide 24 (não conformidade).** Explique o caminho em 4 passos e as duas classes. Pergunta da turma: "O que é pior: uma falha maior ou várias menores?" (Resposta aceita: a maior, porque barra o certificado. Mas várias menores podem mostrar que o sistema é fraco.)
**Slide 25 (pergunta-guia 1).** Leia a pergunta, mostre as três opções e vá direto à resposta curta.
**Slide 26 (caminho para PME).** Percorra os cinco passos e as duas caixas (vale se... / esperar se...).
- Interação (no alto): "Se fosse a sua empresa, certificaria agora ou esperaria? Levantem a mão." Conte os votos em voz alta e comente.
Faça a ponte: "Agora vamos ver os controles da 27002 na prática."

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

## Cola: se esquecer

- Estágio 1 = documentos. Estágio 2 = funciona de verdade. Certificado = 3 anos. Vigilância = todo ano.
- Quem certifica: organismo certificador acreditado (Inmetro acredita).
- Decisão da PME: perfil dos clientes, orçamento, exigências de contrato.
- Métricas: poucas, com meta, responsável e frequência.

- Entrada, mudança, saída.
- Preventivo evita, detectivo percebe, corretivo resolve.
- MFA = mais de um fator. RBAC = por papel. PAM = contas de administrador.
- Menor privilégio = só o acesso necessário.
- Meta de revisão de acessos: 95%.

## Perguntas do professor

**P: Quem dá o certificado?**
R: Um organismo certificador acreditado, não a própria empresa nem a ISO. A acreditação mostra que o certificador é competente.

**P: Quanto custa certificar?**
R: Depende do tamanho, do escopo e do certificador. Não cito valores sem fonte. O caminho é pedir cotação a mais de um organismo.

**P: Uma pequena empresa consegue manter a certificação?**
R: Consegue, se o escopo for pequeno e os controles forem simples e bem registrados. O erro é certificar um escopo maior do que a empresa consegue manter.

**P: O que acontece se não passar no Estágio 2?**
R: Registram-se as não conformidades. A empresa corrige e pode ser auditada de novo. Sem a correção não sai o certificado.

**P: Quanto tempo leva para se certificar?**
R: Depende do ponto de partida da empresa. Não vou citar prazo sem fonte. Dá para dizer que quem já tem controles e registros leva menos.

**P: Se a empresa tem o certificado, está segura?**
R: Não necessariamente. O certificado mostra que o sistema de gestão cumpria os requisitos na época da auditoria. Segurança é manter isso funcionando todos os dias.

**P: Por que a auditoria de vigilância existe?**
R: Para ver se a empresa continua cumprindo as regras depois de ganhar o certificado, em vez de relaxar.

**P: Qual a diferença entre auditoria interna e externa?**
R: A interna é feita pela própria empresa (ou alguém contratado) para se preparar e se corrigir. A externa é do organismo certificador e dá o certificado.


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

**P: Por que a meta é 95% e não 100%?**
R: Metas realistas e graduais são mais úteis. Cem por cento costuma ser impossível e esconde o que realmente importa. A meta pode subir com o tempo.

**P: Como saber se o controle de acesso é eficaz?**
R: Pela evidência: relatório da revisão, com data e responsável, e pelo indicador de revisões no prazo, além de contas de ex-funcionários encontradas ativas.

**P: O que é log?**
R: Um registro automático de eventos: quem entrou, quando e o que fez.

**P: Qual a diferença entre controle preventivo e detectivo?**
R: O preventivo impede o problema. O detectivo percebe que ele aconteceu. Os dois são necessários, porque nenhum controle preventivo é perfeito.

**P: Por que misturar os três tipos?**
R: Porque se o preventivo falhar, o detectivo avisa e o corretivo resolve. Um só tipo deixa buracos.

## Erros a evitar

- Dizer que o Inmetro "dá o certificado" (ele acredita o certificador).
- Dar preço ou prazo sem fonte.
- Dizer que certificar é obrigatório por lei.
- Tratar o caminho da PME como regra da norma: é recomendação do grupo.

- Dizer que MFA "garante" segurança.
- Ler a tabela inteira do slide 28.
- Esquecer de dar um exemplo de cada tipo de controle.
