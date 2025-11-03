---
title: Moonlink.js | A Biblioteca Definitiva para Bots de Música do Discord com Node.js
navigation: false
description: Construa poderosos bots de música do Discord com Moonlink.js, uma biblioteca rica em recursos e flexível para Node.js e Lavalink. Oferece gerenciamento avançado de fila, filtros de áudio e integração com Spotify, Deezer e muito mais.
---
<div style="display: flex; justify-content: center;">

![Moonlink](https://moonlink.js.org/moonlink_banner.png){lifted}

</div>

::alert{type="note" icon="lucide:pencil"}
**Atenção:** Use apenas com `nodejs` versão `v18.x.x` ou superior.
::

::hero
---
announcement:
  title: 'Novo Lançamento v4.60.18'
  icon: '🎉'
  to: https://github.com/Ecliptia/moonlink.js/releases/tag/v4.60.4
  target: _blank
actions:
- name: Começar
  to: /getting-started/introduction
  leftIcon: lucide:arrow-up-right
- name: GitHub
  variant: outline
  to: https://github.com/Ecliptia/moonlink.js/
  leftIcon: 'lucide:github'
  mobileRight: 'top'
---

#title
Imagine o Bot de Música Perfeito...

#description
**Moonlink.js (Versão Reimaginada)** — Uma aventura sonora onde sua imaginação é o único limite. Projetado para ser poderoso, flexível e intuitivo, Moonlink.js é a ferramenta ideal para criar bots de música inesquecíveis no Discord.
::

::hero-alt
---
announcement:
  title: 'NodeLink'
  icon: 'lucide:rocket'
  to: https://github.com/PerformanC/NodeLink
actions:
  - name: Saiba Mais
    to: https://github.com/PerformanC/NodeLink
  - name: GitHub
    variant: ghost
    to: https://github.com/PerformanC/NodeLink
mobileRight: 'top'
---

#title
NodeLink — Uma alternativa Lavalink

#description
Super rápido, totalmente feito em Node.js. Leve, modular e otimizado pra áudio em tempo real. ⚡ Mais simples. Mais rápido. Potência Node.js.

#right
<p align="center">
  <img
    src="https://moonlink.js.org/nodelink_banner.png"
    alt="Banner NodeLink"
    width="400"
    style="border-radius: 12px;"
  />
</p>
::

# Recursos
> - `Gerenciamento de Fila`: A fila é integrada a um banco de dados local, para recuperar dados se necessário.
> - `Filtros de Áudio`: Aplique vários filtros de áudio.
> - `Auto Resume`: Retoma automaticamente a reprodução após uma desconexão.
> - `Registro`: Opções de registro com suporte a arquivo de log.
> - `Gerenciamento de Node`: Gerenciamento de diferentes nodes Lavalink.
> - `Gerenciamento de Filtros`: Vários filtros de áudio como Equalizer, Karaoke, Timescale, Tremolo, Vibrato, Rotation, Distortion, Channel Mix e LowPass.
> - `Gerenciamento de Player`: Gerencie configurações e estados do player.
> - `Gerenciamento de Plugins`: Suporte a plugins Lavalink.
> - `Estrutura`: Permite estender classes complementando com suas próprias funcionalidades.

## O que há de Novo ✨

De `v4.6.18` a `v4.44.04`, Moonlink.js evoluiu. Adicionamos recursos, melhorias e refatorações para impulsionar o desenvolvimento do seu bot de música.

### Novas Funcionalidades 🚀
::card-group
  ::card
  --- 
  title: Integração de Letras
  icon: lucide:file-text
  description: Gerenciamento completo de letras com plugins (LavaLyrics, JavaLyrics) e métodos para buscar, exibir e sincronizar letras em tempo real.
  ---
  ::

  ::card
  --- 
  title: Filtros de Áudio Avançados (LavaDSPX)
  icon: lucide:sliders
  description: Explore novas dimensões sonoras com filtros DSP como HighPass, Normalization e Echo, alimentados pelo plugin LavaDSPX.
  ---
  ::

  ::card
  --- 
  title: Pesquisa Poderosa com LavaSearch
  icon: lucide:search
  description: Leve a pesquisa do seu bot para o próximo nível. Encontre álbuns, artistas, playlists e faixas com precisão usando o LavaSearchPlugin.
  ---
  ::

  ::card
  --- 
  title: Integração SponsorBlock
  icon: lucide:shield-check
  description: Pula automaticamente segmentos patrocinados em vídeos do YouTube, garantindo uma experiência de audição ininterrupta para seus usuários.
  ---
  ::

  ::card
  --- 
  title: Texto-para-Fala (TTS)
  icon: lucide:megaphone
  description: Dê voz ao seu bot! Use o método `Player.speak` com vários provedores para converter texto em áudio para interações inovadoras.
  ---
  ::

  ::card
  --- 
  title: Histórico de Faixas
  icon: lucide:history
  description: Permita que os usuários naveguem pelas músicas tocadas anteriormente com o novo método `Player.back()`, acessando o histórico do player.
  ---
  ::

  ::card
  --- 
  title: Controle Total da Fila
  icon: lucide:list-ordered
  description: Novos métodos para gerenciamento impecável da fila, incluindo remoção de duplicatas, ordenação, movimentação e muito mais.
  ---
  ::

  ::card
  --- 
  title: Verificações de Saúde do Node
  icon: lucide:heart-pulse
  description: O `NodeManager` agora realiza verificações de saúde periódicas e migra automaticamente players de nodes instáveis, garantindo estabilidade.
  ---
  ::

  ::card
  --- 
  title: Lista Negra de Fontes
  icon: lucide:ban
  description: Obtenha controle total sobre as fontes de música permitidas, bloqueando aquelas que você não deseja com a opção `blacklistedSources`.
  ---
  ::

  ::card
  --- 
  title: Sistema de Plugins Modular
  icon: lucide:puzzle
  description: Uma arquitetura de plugin flexível e extensível com `PluginManager` e `AbstractPlugin` para você personalizar o Moonlink como desejar.
  ---
  ::

  ::card
  --- 
  title: Cliente WebSocket Personalizado
  icon: lucide:message-circle
  description: Uma nova implementação de cliente WebSocket para maior controle e confiabilidade na comunicação com o Lavalink.
  ---
  ::

  ::card
  --- 
  title: Capítulos de Faixa
  icon: lucide:book-open
  description: Suporte completo para capítulos em faixas longas, com o método `player.skipChapter()` para navegação fácil e intuitiva.
  ---
  ::

  ::card
  --- 
  title: Fontes Spotify e Deezer Aprimoradas
  icon: lucide:music
  description: Integração nativa aprimorada, autenticação e tratamento de erros para uma experiência mais robusta com Spotify e Deezer.
  ---
  ::

  ::card
  --- 
  title: Utilitários Gerais
  icon: lucide:tool
  description: Novas funções como `makeRequest` com lógica de repetição e `isSourceBlacklisted` para melhor controle e depuração do seu bot.
  ---
  ::
::

### Refatorações e Melhorias 🛠️
::card-group
  ::card
  --- 
  title: Refatoração do Banco de Dados
  icon: lucide:database
  description: Uma reescrita completa do banco de dados para usar Write-Ahead Logging (WAL), resultando em maior persistência e desempenho de dados.
  ---
  ::

  ::card
  --- 
  title: Métodos de Player Depreciados
  icon: lucide:alert-triangle
  description: Métodos diretos do Manager foram depreciados em favor de `manager.players`, promovendo uma API mais limpa e organizada.
  ---
  ::

  ::card
  --- 
  title: Geração de UUID
  icon: lucide:key
  description: A função `generateShortUUID` foi renomeada para `generateUUID` para maior clareza e consistência em toda a base de código.
  ---
  ::

  ::card
  --- 
  title: Gerenciamento de Estado do Player
  icon: lucide:activity
  description: Tratamento mais robusto do estado do player, com tentativas de reconexão aprimoradas e pulo de faixas na lista negra.
  ---
  ::

  ::card
  --- 
  title: Gerenciamento de Estado do Node
  icon: lucide:server
  description: Introdução do enum `NodeState` para rastreamento de status de node mais claro, explícito e confiável.
  ---
  ::
::

## Aproveitando o Poder dos Plugins Lavalink
Moonlink.js aproveita o poder do extenso ecossistema de plugins Lavalink para oferecer recursos avançados e de ponta. Esses plugins permitem uma imensa personalização e extensão das capacidades do seu bot de música. Muitos dos recursos de destaque no Moonlink.js são possíveis graças a essas poderosas adições.

::alert{type="info" icon="lucide:book-marked"}
  Você pode explorar a lista completa de plugins e seus recursos na [documentação oficial do Lavalink](https://lavalink.dev/plugins.html).
::

::card-group
  ::card
  ---
  title: Plugin LavaSrc
  icon: lucide:radio
  description: Adiciona suporte **do lado do Lavalink** para Spotify, Apple Music e Deezer, permitindo que seu bot toque música dos serviços de streaming mais populares através do seu servidor Lavalink.
  ---
  ::

  ::card
  ---
  title: Plugin LavaSearch
  icon: lucide:search-check
  description: Fornece pesquisa avançada para encontrar álbuns, artistas, playlists e faixas com precisão, aprimorando a experiência do usuário.
  ---
  ::

  ::card
  ---
  title: Plugin LavaDSPX
  icon: lucide:equalizer
  description: Libere novas dimensões sonoras com um conjunto de filtros DSP adicionais como HighPass e Normalization, oferecendo ferramentas de audição exclusivas.
  ---
  ::

  ::card
  ---
  title: Plugin SponsorBlock
  icon: lucide:skip-forward
  description: Pula automaticamente segmentos patrocinados em vídeos do YouTube, proporcionando uma experiência de audição contínua e ininterrupta.
  ---
  ::

  ::card
  ---
  title: Plugins de Letras
  icon: lucide:mic-vocal
  description: Moonlink.js suporta vários plugins de letras como LavaLyrics, Lyrics.kt, e outros, permitindo que você busque e exiba letras sincronizadas em tempo real.
  ---
  ::

  ::card
  ---
  title: Plugins de Texto-para-Fala (TTS)
  icon: lucide:audio-lines
  description: Dê voz ao seu bot! Através de plugins como Google Cloud TTS, TTS gratuito do DuncteBot e Flowery TTS (via LavaSrc), seu bot pode converter texto em áudio.
  ---
  ::
::

## Exemplo Prático

::alert{type="example" icon="lucide:test-tube"}
  Confira um exemplo de bot simples e funcional em nosso repositório: [testBot](https://github.com/Ecliptia/moonlink.js/tree/v4/testBot)
::

## Precisa de Ajuda?
::hero-alt
---
announcement:
  title: 'Suporte'
  icon: 'lucide:pie-chart'
actions:
  - name: 
    to: https://discord.gg/q8HzGuHuDY
    leftIcon: logos:discord
    variant: outline
---

#title
Dúvidas ou Problemas?

#description
Entre em contato conosco! A melhor maneira de obter ajuda é entrando em nosso servidor de suporte no Discord.
::

## Encontrou um Bug?

<p>Se você encontrou um bug e deseja relatá-lo, crie uma "Issue" em nosso GitHub. Analisaremos o mais rápido possível para corrigir o problema.</p>
<br>

::button-link{left-icon="lucide:github" to="https://github.com/Ecliptia/moonlink.js/issues" target="_blank"}
  Relatar Bug no GitHub
::

<p>Quer contribuir corrigindo o problema ou adicionando um novo recurso? Envie um "Pull Request"! Seu nome será para sempre registrado no código do projeto.</p>
<br>

::button-link{left-icon="lucide:github" to="https://github.com/Ecliptia/moonlink.js/pulls" target="_blank"}
  Enviar um Pull Request
::

## Usado Por
::card
---
icon: 'lucide:bot-message-square'
icon-size: 26
horizontal: true
---
#title
Bots do Discord que Usam e Confiam no Moonlink.js

#description
Uma vitrine para nossa incrível comunidade

#content
::team-card-group
  ::team-card
  ---
  avatar: https://s3.galaxybot.app/media/brand/GalaxyBot.png
  center: false
  name: GalaxyBot
  title: "Usado por mais de 48 mil servidores; Equipe: galaxybot.app"
  links:
    - icon: lucide:bot
      to: https://galaxybot.app/go/invite
    - icon: line-md:discord
      to: https://galaxybot.app/go/support
    - icon: lucide:unlink-2
      to: https://galaxybot.app
    - icon: lucide:users-round
      to: https://galaxybot.app/en/team
  ---
  ::
  ::team-card
  ---
  avatar: 
  center: false
  name: YADB (Yet Another Discord Bot)
  title: por Xotak
  links:
    - icon: line-md:github-loop
      to: https://framagit.org/xotak/yadb
    - icon: line-md:discord
      to: https://discord.com/oauth2/authorize?client_id=1174614219560341586&permissions=2033703774278&scope=bot+applications.commands
    - icon: material-symbols:docs-outline
      to: https://xotak.frama.io/yadb-docs/
  ---
  ::
  ::team-card
  ---
  avatar: https://camo.githubusercontent.com/1108dccb9fc7b98242def6ba2a98f76832dec5050f1384bcf2a6e94aa37e1bae/68747470733a2f2f692e696d6775722e636f6d2f39396d6e776a672e706e67
  center: false
  name: ComicallyBot
  title: por Comicallybad
  links:
    - icon: line-md:github-loop
      to: https://github.com/comicallybad/ComicallyBot
  ---
  ::
  ::team-card
  ---
  avatar: https://github.com/khouwdevin/stalker-discord/raw/master/images/spy.png
  center: false
  name: stalker-discord
  title: por khouwdevin
  links:
    - icon: line-md:github-loop
      to: https://github.com/khouwdevin/stalker-discord
  ---
  ::
::

#footer
  ::alert{type="note" icon="lucide:pencil"}
  Quer adicionar seu bot à lista? Junte-se ao nosso Discord ou abra um Pull Request em `docs/content/index.md`.
  ::
::

## Conheça a Equipe

### Equipe de Desenvolvimento e Colaboradores
::team-card-group
  ::team-card
  ---
  center: false
  avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
  name: Lucas Morais (1Lucas1apk)
  title: Mantenedor do Projeto
  links:
    - icon: lucide:github
      to: https://github.com/1Lucas1apk
    - icon: lucide:coffee
      to: https://github.com/sponsors/1Lucas1apk
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://cdn.discordapp.com/avatars/882757043142950974/652c890e45a0c01b8daec3510b51596a.png?size=2048
  name: MotoG
  title: Criador e Designer
  links:
    - icon: lucide:github
      to: https://github.com/Moto65075
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/50148901?s=60&v=4
  name: Comicallybad
  title: Colaborador e Desenvolvedor
  links:
    - icon: lucide:github
      to: https://github.com/comicallybad
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/76094069?v=4
  name: UnschooledGamer
  title: Colaborador
  links:
    - icon: lucide:github
      to: https://github.com/UnschooledGamer
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://cdn.discordapp.com/avatars/336885637934481409/371faca58eb88781b922d4967b91fab4.png?size=2048
  name: xotakfr
  title: Colaborador
  links:
    - icon: lucide:github
      to: https://github.com/xotakfr
  ---
  ::
::

### Nossos Incríveis Contribuidores
::team-card-group
  ::team-card
  ---
  center: false
  avatar: https://images-ext-1.discordapp.net/external/EzD_6L_K28EMUN8RwQhssNUaZEyVN1H3dG6VIHczPvc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/389709853511122944/cd8fa0420ae13e16f5bfd87340da35d8.png?format=webp&quality=lossless&width=810&height=810
  name: iamforster
  title: Testador e Caçador de Bugs
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/88549470?s=60&v=4
  name: PiscesXD
  title: Ideias, Recursos, Correções e Patrocinador
  links:
    - icon: lucide:github
      to: https://github.com/PiscesXD
  ---
  ::
::

::alert{type="note" icon="lucide:pencil"}
  Junte-se a nós e contribua para a versão v4 do moonlink.js!
::
::alert{type="success" icon="lucide:lightbulb"}
  Agradecemos a todos que se juntam ao servidor e relatam bugs, ajudando assim a tornar o projeto cada vez mais estável e incrível para a comunidade de desenvolvedores.
::

## em meio à colmeia 🐝
<div style="font-style: italic; text-align: center; margin-top: 2rem; margin-bottom: 2rem; padding: 1rem; border-left: 3px solid #ccc;">
<p>me sinto deslocado<br>
em meio à colmeia…<br>
eles me olham<br>
com desaprovação nos olhos —<br>
como se pudessem ver<br>
os segredos do meu coração.</p>

<p>dizem que sou um rebelde<br>
por não servir —<br>
com devoção —<br>
a abelha rainha.</p>

<p>mas se eu servir,<br>
que bem isso fará,<br>
se não for o que minha alma<br>
escolheu amar?</p>

<p>eu queria poder voar,<br>
livre entre as flores do jardim,<br>
sem me preocupar em voltar —<br>
para o lugar que já não sei mais habitar.</p>

<p>mas acredito que um dia,<br>
eu quebrarei essa prisão,<br>
e finalmente poderei voar<br>
para onde eu quiser —<br>
com minhas próprias asas e<br>
minha própria direção.</p>
</div>
<p style="text-align: right; margin-right: 1rem;">
  <strong>— <a href="https://www.instagram.com/geovanazlw" target="_blank" rel="noopener noreferrer">Geo</a></strong>
</p>

<div style="text-align: center; margin-top: 3rem; margin-bottom: 3rem;">
<p style="font-size: 1.1rem; font-style: italic;">Com Amor, 💕</p>
<p style="font-size: 1.3rem; font-weight: bold;">A Equipe Ecliptia 😊</p>
</div>