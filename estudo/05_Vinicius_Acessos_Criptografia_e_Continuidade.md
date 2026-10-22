# Vinicius: acessos, criptografia e continuidade

**Slides 29 a 36 (25 min)** · Você faz dupla com o Kaique: ele apresenta a certificação e a visão geral da 27002 (slides 21 a 28) e você assume a prática no slide 29 · Passa a palavra para o Marcelo (slide 37).

Seu bloco tem os termos mais técnicos da aula. Por isso, este guia usa muitas analogias. Se travar, volte à analogia.

## Explique como para um amigo (30 segundos)

"Controle de acesso é decidir quem tem a chave de cada porta, e tirar a chave quando a pessoa não precisa mais. Criptografia é trancar a informação com uma chave: se alguém pegar, não consegue ler. Continuidade é ter um plano B para quando algo der errado, como backup e servidor reserva. Para saber se estamos preparados, usamos dois números: quanto dado aceitamos perder (RPO) e quanto tempo aceitamos ficar parados (RTO)."

## O que você precisa saber

### Gestão de acessos (slide 29): ciclo de vida
1. **Entrada:** cria o usuário com a permissão mínima, com aprovação do gestor.
2. **Mudança:** revisa o acesso de tempos em tempos e ajusta quando a pessoa muda de função.
3. **Saída:** tira o acesso na hora em que a pessoa sai da empresa.
Indicador: % de usuários revisados no prazo, **meta 95%**.
Destaque: atraso em tirar o acesso de quem saiu é falha crítica, porque ninguém vigia uma conta esquecida.

### Quatro ferramentas (slide 30)
- **MFA:** além da senha, pede algo a mais (código no celular, biometria). Barra o uso de senha roubada.
- **RBAC:** o acesso vem do cargo (papel), não da pessoa. Evita acumular permissão.
- **PAM:** controle das contas de administrador, com aprovação e gravação do uso.
- **Logs centralizados:** registro de quem fez o quê, guardado em lugar protegido. Vira evidência.
Princípio: **menor privilégio** (só o acesso necessário para o trabalho).

### Criptografia (slide 31)
Transforma dado legível em dado embaralhado. Só quem tem a chave certa consegue ler.
- **Em trânsito** (viajando pela rede): HTTPS/TLS. É o cadeado do navegador. Versão 1.2 ou mais nova.
- **Em repouso** (guardado): AES-256 em bancos de dados e arquivos.
- **Backups:** também criptografados, inclusive o que fica fora do local.
- **Chaves:** troca periódica (rotação), guardadas com segurança e com acesso restrito.
- **Impacto:** se o dado for roubado ou interceptado, continua ilegível.
- **LGPD, art. 46:** a lei exige medidas técnicas e administrativas de segurança. A criptografia é uma delas.

Analogia: o cadeado do navegador é uma carta dentro de um envelope lacrado no caminho. O AES-256 é o cofre onde guardamos a carta.

### Dois tipos de chave (slide 32)
- **Simétrica:** a mesma chave tranca e destranca. Rápida. Exemplo: AES-256 para dados guardados.
- **Assimétrica:** duas chaves, uma pública (para trancar) e uma privada (para destrancar). Útil para combinar a conexão sem trocar segredo antes. O TLS usa as duas: a assimétrica para começar a conversa e a simétrica para o tráfego.

### Ciclo de vida da chave (slide 32)
Gerar, guardar (em cofre ou módulo de segurança, nunca no código), usar (acesso restrito e registrado), rotacionar (trocar de tempos em tempos), revogar e destruir.
Analogia: **de nada adianta um cadeado forte com a chave pendurada na porta.** A força está na gestão das chaves.

### Continuidade (slide 33)
Três cenários:
- **Ransomware** (sequestro de dados): backup offline e regular, plano de resposta testado.
- **Falha de servidor:** redundância (ter reserva), failover (trocar automático para o reserva) e monitoramento.
- **Desastre físico** (incêndio, inundação): backup em nuvem, vários datacenters e testes do plano de recuperação.

### Regra do backup 3-2-1 (slide 34)
**3** cópias dos dados, em **2** tipos de mídia, com **1** cópia fora do local. Por quê: o que acontece com uma cópia não deve acontecer com todas. E **backup sem teste de restauração não é backup, é esperança.**
Analogia: fotos do celular. O celular, a nuvem e um HD em casa de um parente.

### RPO e RTO (slide 35)
- **RPO** (Recovery Point Objective): quanto de dado a empresa aceita perder. Mede do último backup até o incidente.
- **RTO** (Recovery Time Objective): quanto tempo a empresa aceita ficar parada. Mede do incidente até a volta.
Exemplos de definição: RPO de 1 hora significa que o backup precisa rodar pelo menos a cada hora. RTO de 4 horas significa que a restauração precisa caber em 4 horas. Os números do slide são só exemplos.
Para lembrar: **P de Ponto (de onde recomeça), T de Tempo (quanto demora a voltar).**

### Análise dos controles em operação (slide 36)
Tabela **ilustrativa** com quatro colunas: status, eficácia, falha e melhoria.
- Gestão de acessos: implementado, eficácia alta. Falha: revisões manuais e atrasadas. Melhoria: automatizar e criar alertas.
- Backup e continuidade: parcial, eficácia média. Falha: testes de restauração raros e sem registro. Melhoria: testes mensais e guardar evidência.
- Criptografia: implementada, eficácia alta. Falha: chaves sem rotação definida em sistemas antigos. Melhoria: política de rotação e cobrir tudo com AES-256.
Diga em voz alta: **são dados de exemplo para mostrar o método.** A análise com caso real é com o Eduardo.

## Roteiro slide a slide

**Slide 29 (acessos).** Percorra entrada, mudança, saída. Destaque a saída.
- Interação: "Quem já ficou com acesso a um sistema que não precisava mais?"
**Slide 30 (ferramentas).** Uma frase por ferramenta e o que ela barra.
- Interação: "Quem aqui usa MFA no e-mail? Levantem a mão." Comente o resultado.
**Slide 31 (criptografia).** Mostre os quatro cartões. Use as analogias do envelope e do cofre. Cite a LGPD em uma frase.
- Interação: "O cadeado do navegador (HTTPS) protege o quê?" (os dados enquanto viajam entre você e o site.)
**Slide 32 (chaves).** Percorra o ciclo e use a analogia do cadeado com a chave na porta. Explique simétrica e assimétrica em uma frase cada.
- Interação (no slide): "Onde uma chave nunca deve ficar guardada?" (no código, em e-mail, em planilha compartilhada.)
**Slide 33 (continuidade).** Um cenário por cartão. Mostre RTO e RPO no rodapé do slide e diga que o próximo slide explica melhor.
- Interação: "Quando foi a última vez que vocês testaram um backup?"
**Slide 34 (3-2-1).** Os números sobem na tela. Fale durante a contagem. Use a analogia das fotos.
- Interação: "As fotos do seu celular seguem a regra 3-2-1?"
**Slide 35 (RTO e RPO).** Aponte as barras na linha do tempo: amarela é o dado perdido (RPO), vermelha é o tempo parado (RTO).
- Interação: "Se o sistema de matrícula cair, quanto tempo a faculdade aguenta?" Conecte à resposta: esse tempo é o RTO.
**Slide 36 (operação).** Leia uma linha por vez e diga o que é falha e o que é melhoria. Lembre: são dados ilustrativos.
- Interação com o professor (no alto): "Esses status parecem adequados para a análise?"
Passe a palavra: "Agora o Marcelo mostra como colocar tudo isso em prática sem ficar só no papel."

## Exemplos prontos para explicar (use um por tema, não precisa de todos)

- **Acessos com o crachá do prédio.** Entrada: o crachá nasce com acesso só ao seu andar. Mudança: se você troca de setor, o crachá é ajustado. Saída: no desligamento, o crachá é devolvido e desativado na hora.
- **MFA com o cartão do banco.** Só a senha não basta: é preciso ter o cartão também (ou o código no celular).
- **RBAC com as chaves por cargo.** O porteiro tem a chave da portaria, não a do cofre. O acesso vem do cargo, não da pessoa.
- **Criptografia com a carta lacrada.** Mesmo que alguém pegue a carta no caminho, não consegue ler. A chave é a única forma de abrir.
- **Chave com o tapete.** Cadeado forte com a chave embaixo do tapete é o mesmo que não ter cadeado.
- **Backup 3-2-1 com as fotos do celular.** No celular, na nuvem e em um HD em outro lugar.
- **RPO e RTO com o trabalho da faculdade.** Se o editor salva a cada 10 minutos, você aceita perder até 10 minutos de texto (RPO). Se você precisa entregar em 2 horas, o prazo máximo de recuperação é esse (RTO).
- **Ransomware com o caderno trancado.** Alguém tranca seu caderno de provas e pede dinheiro para devolver. Se você tem a cópia em casa, não precisa pagar.

## Cola: se esquecer

- Trânsito = TLS. Repouso = AES-256. Chaves = rotação. Lei = LGPD art. 46.
- Backup 3-2-1: 3 cópias, 2 mídias, 1 fora do local. Teste a restauração.
- RPO = quanto dado posso perder. RTO = quanto tempo posso ficar parado.
- Ransomware, falha de servidor, desastre físico.

## Perguntas do professor

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

**P: Qual a diferença entre criptografia simétrica e assimétrica?**
R: Na simétrica, uma mesma chave tranca e destranca (AES). Na assimétrica há um par: pública e privada. O TLS usa as duas: a assimétrica para combinar a conexão e a simétrica para trafegar os dados.

**P: Backup é suficiente?**
R: Não. Sem teste de restauração, não há garantia de recuperação. A 27002 recomenda testes periódicos com registro.

**P: Por que AES-256 e não AES-128?**
R: Os dois são considerados seguros hoje. O 256 tem mais margem. Na prática, o que mais pesa é a gestão das chaves.

**P: O que é ransomware?**
R: Um programa que criptografa os dados da vítima e pede resgate para liberar. O melhor preparo é um backup offline testado e um plano de resposta.

**P: O que é failover?**
R: A troca automática para um sistema reserva quando o principal falha.

**P: Qual a diferença entre RTO e RPO?**
R: RTO é o tempo máximo de parada. RPO é a perda máxima de dados aceitável. Um fala de tempo, o outro de dado.

**P: Esses números de RTO e RPO são reais?**
R: São exemplos para explicar o conceito. A empresa define os seus conforme o impacto no negócio.

**P: O que é DR?**
R: Disaster Recovery, recuperação de desastres: o plano e os recursos para voltar a operar depois de um desastre.

**P: A criptografia resolve a LGPD?**
R: Ajuda a cumprir o dever de adotar medidas de segurança, mas não resolve sozinha. A lei também exige outras medidas, administrativas e técnicas.

**P: Esses dados da análise (slide 36) são reais?**
R: São ilustrativos, para mostrar o método. A análise de caso real está no bloco do Eduardo.

**P: O que é HSM?**
R: Módulo de segurança de hardware: um equipamento próprio para guardar chaves com segurança.

## Erros a evitar

- Dizer que backup sem teste "basta".
- Confundir RTO com RPO (use P de Ponto e T de Tempo).
- Apresentar a tabela do slide 36 como se fosse de uma empresa real.
- Dizer que criptografia garante integridade.
