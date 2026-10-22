# Kawan: criptografia e continuidade

**Slides 32 a 37 (18 min)** · Recebe a palavra de: Gabriel · Passa a palavra para: Marcelo.

Seu bloco tem os termos mais técnicos da aula. Por isso, este guia usa muitas analogias. Se travar, volte à analogia.

## Explique como para um amigo (30 segundos)

"Criptografia é trancar a informação com uma chave: se alguém pegar, não consegue ler. Continuidade é ter um plano para quando algo der errado, como backup e servidor reserva, para a empresa voltar a funcionar rápido e sem perder muita coisa. Para saber se a empresa está preparada, usamos dois números: quanto dado ela aceita perder (RPO) e quanto tempo aceita ficar parada (RTO)."

## O que você precisa saber

### Criptografia (slide 32)
Transforma dado legível em dado embaralhado. Só quem tem a chave certa consegue ler.
- **Em trânsito** (viajando pela rede): HTTPS/TLS. É o cadeado do navegador. Versão 1.2 ou mais nova.
- **Em repouso** (guardado): AES-256 em bancos de dados e arquivos.
- **Backups:** também criptografados, inclusive o que fica fora do local.
- **Chaves:** troca periódica (rotação), guardadas com segurança e com acesso restrito.
- **Impacto:** se o dado for roubado ou interceptado, continua ilegível.
- **LGPD, art. 46:** a lei exige medidas técnicas e administrativas de segurança. A criptografia é uma delas.

Analogia: o cadeado do navegador é uma carta dentro de um envelope lacrado no caminho. O AES-256 é o cofre onde guardamos a carta.

### Dois tipos de chave (slide 33)
- **Simétrica:** a mesma chave tranca e destranca. Rápida. Exemplo: AES-256 para dados guardados.
- **Assimétrica:** duas chaves, uma pública (para trancar) e uma privada (para destrancar). Útil para combinar a conexão sem trocar segredo antes. O TLS usa as duas: a assimétrica para começar a conversa e a simétrica para o tráfego.

### Ciclo de vida da chave (slide 33)
Gerar, guardar (em cofre ou módulo de segurança, nunca no código), usar (acesso restrito e registrado), rotacionar (trocar de tempos em tempos), revogar e destruir.
Analogia: **de nada adianta um cadeado forte com a chave pendurada na porta.** A força está na gestão das chaves.

### Continuidade (slide 34)
Três cenários:
- **Ransomware** (sequestro de dados): backup offline e regular, plano de resposta testado.
- **Falha de servidor:** redundância (ter reserva), failover (trocar automático para o reserva) e monitoramento.
- **Desastre físico** (incêndio, inundação): backup em nuvem, vários datacenters e testes do plano de recuperação.

### Regra do backup 3-2-1 (slide 35)
**3** cópias dos dados, em **2** tipos de mídia, com **1** cópia fora do local. Por quê: o que acontece com uma cópia não deve acontecer com todas. E **backup sem teste de restauração não é backup, é esperança.**
Analogia: fotos do celular. O celular, a nuvem e um HD em casa de um parente.

### RPO e RTO (slide 36)
- **RPO** (Recovery Point Objective): quanto de dado a empresa aceita perder. Mede do último backup até o incidente.
- **RTO** (Recovery Time Objective): quanto tempo a empresa aceita ficar parada. Mede do incidente até a volta.
Exemplos de definição: RPO de 1 hora significa que o backup precisa rodar pelo menos a cada hora. RTO de 4 horas significa que a restauração precisa caber em 4 horas. Os números do slide são só exemplos.
Para lembrar: **P de Ponto (de onde recomeça), T de Tempo (quanto demora a voltar).**

### Análise dos controles em operação (slide 37)
Tabela **ilustrativa** com quatro colunas: status, eficácia, falha e melhoria.
- Gestão de acessos: implementado, eficácia alta. Falha: revisões manuais e atrasadas. Melhoria: automatizar e criar alertas.
- Backup e continuidade: parcial, eficácia média. Falha: testes de restauração raros e sem registro. Melhoria: testes mensais e guardar evidência.
- Criptografia: implementada, eficácia alta. Falha: chaves sem rotação definida em sistemas antigos. Melhoria: política de rotação e cobrir tudo com AES-256.
Diga em voz alta: **são dados de exemplo para mostrar o método.** A análise com caso real é com o Eduardo.

## Roteiro slide a slide

**Slide 32 (criptografia).** Mostre os quatro cartões. Use as analogias do envelope e do cofre. Cite a LGPD em uma frase.
- Interação: "O cadeado do navegador (HTTPS) protege o quê?" (os dados enquanto viajam entre você e o site.)
**Slide 33 (chaves).** Percorra o ciclo e use a analogia do cadeado com a chave na porta. Explique simétrica e assimétrica em uma frase cada.
- Interação (no slide): "Onde uma chave nunca deve ficar guardada?" (no código, em e-mail, em planilha compartilhada.)
**Slide 34 (continuidade).** Um cenário por cartão. Mostre RTO e RPO no rodapé do slide e diga que o próximo slide explica melhor.
- Interação: "Quando foi a última vez que vocês testaram um backup?"
**Slide 35 (3-2-1).** Os números sobem na tela. Fale durante a contagem. Use a analogia das fotos.
- Interação: "As fotos do seu celular seguem a regra 3-2-1?"
**Slide 36 (RTO e RPO).** Aponte as barras na linha do tempo: amarela é o dado perdido (RPO), vermelha é o tempo parado (RTO).
- Interação: "Se o sistema de matrícula cair, quanto tempo a faculdade aguenta?" Conecte à resposta: esse tempo é o RTO.
**Slide 37 (operação).** Leia uma linha por vez e diga o que é falha e o que é melhoria. Lembre: são dados ilustrativos.
- Interação com o professor (no alto): "Esses status parecem adequados para a análise?"
Passe a palavra: "Agora o Marcelo mostra como colocar tudo isso em prática sem ficar só no papel."

## Cola: se esquecer

- Trânsito = TLS. Repouso = AES-256. Chaves = rotação. Lei = LGPD art. 46.
- Backup 3-2-1: 3 cópias, 2 mídias, 1 fora do local. Teste a restauração.
- RPO = quanto dado posso perder. RTO = quanto tempo posso ficar parado.
- Ransomware, falha de servidor, desastre físico.

## Perguntas do professor

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

**P: Esses dados da análise (slide 37) são reais?**
R: São ilustrativos, para mostrar o método. A análise de caso real está no bloco do Eduardo.

**P: O que é HSM?**
R: Módulo de segurança de hardware: um equipamento próprio para guardar chaves com segurança.

## Erros a evitar

- Dizer que backup sem teste "basta".
- Confundir RTO com RPO (use P de Ponto e T de Tempo).
- Apresentar a tabela do slide 37 como se fosse de uma empresa real.
- Dizer que criptografia garante integridade.
