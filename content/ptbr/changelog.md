---
title: Changelog
description: "Changelog para Moonlink.js"
icon: 'lucide:code-2'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

## Versão v4.44.04 (Atual)

### Problemas Corrigidos
- `fix: atualizar lógica de estado do player durante o gatilho de reprodução`
- `fix: melhorar a reconstrução do player e as atualizações de estado`
- `fix: atualizar a reconstrução do player e o tratamento de estado`
- `fix: refinar o agendamento de letras ao vivo e o registro de depuração`
- `fix: melhorar a lógica de agendamento de letras ao vivo`
- `fix: atualizar a lista de capacidades do plugin YouTube`
- `fix: corrigir o identificador de pesquisa do YouTube no LavaSrcPlugin`
- `fix: remover ponto e vírgula desnecessário no SponsorBlockPlugin`
- `fix: atualizar a configuração do node do bot`
- `fix: Atualizar a validação de propriedade para garantir verificações de tipo corretas para guildId, voiceChannelId e textChannelId no PlayerManager`
- `fix: melhorar a lógica de validação para a posição nos métodos skip e seek`
- `fix: atualizar a lógica de validação nos métodos da classe Player`

### Refatorações
- `refactor: atualizar a compressão do mapa de origem do JavaLyricsPlugin`
- `refactor: remover `originNodeIdentifier` dos tipos`
- `refactor: otimizar o mapeamento da estrutura e a geração de sourcemap`
- `refactor: simplificar os métodos de ciclo de vida do YouTubePlugin`
- `refactor: melhorar o registro de depuração no PluginManager`
- `refactor: simplificar os métodos de ciclo de vida do LavaSrcPlugin`
- `refactor: remover a classe Database depreciada`

### Novas Funcionalidades
- `feat: adicionar LavaDSPXPlugin para estender o suporte a plugins`
- `feat: estender as capacidades do plugin YouTube`
- `feat: adicionar novas interfaces de filtro de áudio`
- `feat: adicionar suporte para novos filtros de áudio e validações`
- `feat: adicionar filtros de áudio avançados com suporte LavaDSPX`
- `feat: implementar JavaLavaLyricsPlugin para tratamento avançado de letras`
- `feat: implementar JavaLyricsPlugin para suporte a letras aprimorado`
- `feat: integrar o tratamento de fim de faixa para o plugin de letras`
- `feat: estender o suporte a provedores para operações de letras`
- `feat: melhorar o tratamento de assinatura de letras ao vivo`
- `feat: aprimorar a exibição de assinatura de letras ao vivo`
- `feat: adicionar cache de letras ao Manager para desempenho`
- `feat: aprimorar a recuperação de letras estáticas e o fallback`
- `feat: implementar LyricsKtPlugin para gerenciamento de letras`
- `feat: adicionar suporte a provedores para assinatura de letras`
- `feat: melhorar o tratamento de letras com suporte a provedores`
- `feat: aprimorar o gerenciamento de letras e a flexibilidade de pesquisa`
- `feat: aprimorar a funcionalidade do comando de letras`
- `feat: aprimorar o mapeamento e o tratamento de resposta de letras`
- `feat: estender a definição de ILavaLyricsObject`
- `feat: estender tipos de fonte de pesquisa e adicionar fontes diretas`
- `feat: adicionar novas propriedades e métodos de faixa`
- `feat: melhorar o tratamento de fila com integração de lista negra`
- `feat: melhorar o tratamento do player e a integração de lista negra`
- `feat: adicionar remoção de faixa de lista negra durante a retomada do player`
- `feat: adicionar rastreamento de lista negra e suporte ao provedor Skybot`
- `feat: estender partialTrack para informações de posição`
- `feat: adicionar comando Speak e estender as capacidades do Skybot`
- `feat: adicionar SkybotPlugin para capacidades estendidas do bot`
- `feat: adicionar LavaLyricsPlugin para suporte a letras`
- `feat: adicionar comandos para assinatura de letras ao vivo`
- `feat: adicionar método POST ao cliente da API Rest`
- `feat: adicionar métodos de gerenciamento de letras ao Player`
- `feat: integrar o tratamento de eventos do plugin LavaLyrics`
- `feat: adicionar métodos de assinatura e recuperação de letras`
- `feat: aprimorar a recuperação de letras e a lógica de tratamento`
- `feat: adicionar tipagens LavaLyrics para integração de letras`
- `feat: adicionar LavaSearchPlugin para funcionalidade de pesquisa avançada`
- `feat: aprimorar SearchResult com campos LavaSearch`
- `feat: aprimorar pesquisa de música com suporte LavaSearch`
- `feat: adicionar método LavaSearch às tipagens do Manager`
- `feat: expandir tipagens para suportar resultados do LavaSearch`
- `feat: implementar plugin SponsorBlock`
- `feat: adicionar comandos de navegação de capítulos e SponsorBlock`
- `feat: adicionar campos relacionados a capítulos e refatorar o tratamento de origem`
- `feat: adicionar métodos REST para GET, PUT e DELETE`
- `feat: melhorar o registro de depuração do PluginManager para plugins`
- `feat: aprimorar o Player com recursos de TTS, capítulo e SponsorBlock`
- `feat: adicionar exibição de capítulo ao embed de reprodução atual`
- `feat: introduzir melhorias de TTS, capítulos e API do SponsorBlock`
- `feat: adicionar tratamento de eventos do plugin SponsorBlock`
- `feat: adicionar suporte a capítulos e segmentos nas tipagens do player`
- `feat: aprimorar o tratamento de consulta TTS na entidade Rest`
- `feat: aprimorar o suporte a TTS com flexibilidade de vários provedores`
- `feat: atualizar playerSpeak e introduzir ISpeakOptions`
- `feat: adicionar GoogleCloudTTSPlugin para suporte a TTS`
- `feat(spotify): adicionar opções clientId e clientSecret para autenticação da API do Spotify`
- `feat: reintroduzir Database com suporte a WAL e snapshot`
- `feat: adicionar YouTubePlugin para suporte a pesquisa do YouTube`
- `feat: adicionar LavaSrcPlugin para suporte a pesquisa estendida`
- `feat: introduzir PluginManager para registro de plugins`
- `feat: adicionar classe AbstractPlugin para definição de plugin`
- `feat: estender fontes de pesquisa e propriedades de faixa parciais`
- `feat: adicionar originNodeIdentifier à entidade Track`
- `feat: melhorar a seleção de node e adicionar suporte a FloweryTTS`
- `feat: aprimorar a validação de Node e adicionar seleção de node baseada em capacidade`
- `feat: aprimorar o plugin de node e a funcionalidade de reprodução automática`
- `feat: melhorar o gerenciamento de plugins e refatorar a lógica de pesquisa`
- `feat: adicionar evento playerSpeak e opções FloweryTTS`
- `feat: adicionar suporte a PluginManager para exportações`

### Tarefas
- `chore: atualizar versão e cabeçalhos User-Agent`
- `chore: limpar comentários e formatação menor no comando de letras`
- `chore: remover comentários redundantes do comando de letras`
- `chore: remover comentários redundantes do LavaLyricsPlugin`
- `chore: remover instruções de console de depuração em SearchResult`
- `chore: regenerar sourcemap do NodeManager.js`
- `chore: atualizar sourcemap para Manager.js`
- `chore: atualizar sourcemap para Manager.js`
- `chore: atualizar sourcemap para Manager.js`
- `chore: remover URL de token não utilizada`
- `chore: remover nova linha desnecessária no EOF em Utils.ts`
- `chore: atualizar mapas de origem para Track.js`
- `chore: remover nova linha desnecessária no EOF em PlayerManager.ts`
- `chore: aumentar a versão em package-lock.json`
- `chore: incluído o código construído`

## Versão v4.28.32 -> v4.28.34

### Novas Funcionalidades
- `feat: adicionar definições de tipo WebSocket e aumentar a versão`
- `feat: adicionar implementação de cliente WebSocket`

## Versão v.4.6.18 -> v4.28.32

### Problemas Corrigidos
- `fix: corrigir a geração do mapa de origem para o Spotify`
- `fix: melhorar a validação e o tratamento de erros do PlayerManager`
- `fix: corrigir a inicialização do WebSocket na entidade Listen`
- `fix: melhorar o tratamento de erros e adicionar logs de depuração na API do Deezer`
- `fix: melhorar o tratamento de erros e adicionar logs de depuração no Database`
- `fix: remover ouvinte de evento `nodeRaw` não utilizado`

### Refatorações
- `refactor: aprimorar a entidade Player com propriedades somente leitura, refinamentos e métodos privados`
- `refactor: simplificar a lógica `player.previous` e adicionar log de depuração na entidade Node`
- `refactor: remover a lógica `previousInArray` e adicionar log de depuração na entidade Node`
- `refactor: remover a propriedade `previousInArray` não utilizada das interfaces`

### Novas Funcionalidades
- `feat: adicionar lógica de repetição à função makeRequest`
- `feat: estender definições de tipo com enums e novo tipo`
- `feat: adicionar suporte para recuperação de miniaturas do YouTube`
- `feat: melhorar o método loadFolder com async e tratamento de erros`
- `feat: aprimorar a fila com ordenação, intervalo e deduplicação`
- `feat: aprimorar o Player com histórico, loop e eventos`
- `feat: melhorar o NodeManager com verificações de saúde e ordenação de nodes`
- `feat: aprimorar o Node com gerenciamento de estado melhorado`
- `feat: aprimorar o Manager com validação de configuração e fallback de fonte`
- `feat: adicionar serviço WebSocket à entidade Listen`
- `feat: estender tipagens de evento e campos de configuração`
- `feat: emitir `filtersUpdate` evento na atualização`
- `feat: emitir `filtersUpdate` evento em modificações de filtro`
- `feat: implementar Write-Ahead Logging (WAL) para persistência do Database e desempenho aprimorado`
- `feat: aprimorar as funcionalidades do Spotify e utilitários`

### Tarefas
- `chore: atualizar `User-Agent` e aumentar a versão do pacote`
- `chore: atualizar versões de pacote e limpar dependências`
- `chore: atualizar .npmignore para excluir o diretório de testes`
- `chore: atualizar o ícone da API de utilitários para `lucide:tool-case` na documentação`
- `chore: atualizar as configurações do bot para incluir a configuração `disableNativeSources``
- `chore: atualizar o arquivo Player.js.map para refletir os mapeamentos mais recentes`
- `chore: atualizar o arquivo Manager.js.map para refletir os mapeamentos mais recentes`

## Versão v4.6.18 (Atual)

### Problemas Corrigidos
- `fix: Atualizar a string User-Agent nos cabeçalhos com informações de versão atualizadas.`
- `fix: Atualizar tipagens, SourceManager e configurações do bot; melhorar o tratamento de erros e adicionar log de depuração.`
- `fix: Mudança de endpoint do Spotify.`
- `fix: Atualizar bot.js e index.js para nova configuração de servidor Lavalink; aprimorar comandos nowplaying e search para melhor informação de faixa.`

### Refatorações
- `refactor: Simplificar a atribuição de pluginInfo no construtor da classe Track.`
- `refactor: Simplificar o fallback de posição padrão para 0.`
- `refactor: Atualizar User-Agent em defaultHeaders para refletir nova versão e marca.`
- `refactor: Atualizar configuração do Manager e modificar consulta de pesquisa de faixa em index.js; ajustar opções partialTrack em bot.js.`
- `refactor: Renomear isLinkMatch para match na interface ISource e adicionar opções Spotify a IOptionsManager.`
- `refactor: Atualizar método isLinkMatch para retornar status de correspondência e nome da fonte.`

### Novas Funcionalidades
- `feat: Adicionar integração de fonte Deezer com opções configuráveis.`
- `feat: Refatorar implementação de fonte Spotify.`
- `feat: Adicionar método resolve à classe Track para resolução de faixa específica de plugin.`
- `feat: Implementar funcionalidade de reprodução automática do Spotify para players.`

### Tarefas
- `chore: Atualizar versão para 4.5.3.dev.2 em package.json.`
- `chore: Aumentar versão para 4.5.3 em package.json.`
- `chore: Atualizar versão para 4.4.62-dev.3 para fins de desenvolvimento.`
- `chore: Atualizar versão para 4.4.62 e aprimorar changelog com novas atualizações (#144).`
- `chore: Atualizar versão para 4.4.62 e aprimorar changelog com novas atualizações.`
- `chore: Atualizar string User-Agent e versão nos cabeçalhos; adicionar changelog e atualizar versão em package.json.`
- `chore: Atualizar configuração do bot com novas configurações de host e porta; remover parâmetros não utilizados.`

### Documentação
- `docs: Atualizar README para clareza e estrutura; aprimorar seções de documentação e melhorar a redação.`
- `docs: Atualizar versão de lançamento para v4.4.28 e aprimorar a documentação com nova seção de aplicativos de bot.`

## Versão v4.6.3 -> v4.6.18

### Problemas Corrigidos
- `fix: atualizar string User-Agent nos cabeçalhos com informações de versão atualizadas`
- `fix: atualizar tipagens, SourceManager e configurações do bot; melhorar o tratamento de erros e adicionar log de depuração`
- `fix: mudança de endpoint do Spotify`
- `fix: atualizar bot.js e index.js para nova configuração de servidor Lavalink; aprimorar comandos nowplaying e search para melhor informação de faixa`
- `fix: atualizar versão do User-Agent nos cabeçalhos para consistência`
- `fix: aprimorar correspondência de URL do Deezer e lógica de busca para links curtos`
- `fix: substituir lançamento de erro por log de depuração para falhas de requisição da API do Deezer`

### Refatorações
- `refactor: simplificar a atribuição de pluginInfo no construtor da classe Track`
- `refactor: simplificar o fallback de posição padrão para 0`
- `refactor: Atualizar User-Agent em defaultHeaders para refletir nova versão e marca`
- `refactor: Atualizar configuração do Manager e modificar consulta de pesquisa de faixa em index.js; ajustar opções partialTrack em bot.js`
- `refactor: Renomear isLinkMatch para match na interface ISource e adicionar opções Spotify a IOptionsManager`
- `refactor: Atualizar método isLinkMatch para retornar status de correspondência e nome da fonte`

### Novas Funcionalidades
- `feat: adicionar integração de fonte Deezer com opções configuráveis`
- `feat: Refatorar implementação de fonte Spotify`
- `feat: Adicionar método resolve à classe Track para resolução de faixa específica de plugin`
- `feat: Implementar funcionalidade de reprodução automática do Spotify para players`

## Versão v4.5.3 -> v4.6.3

### Problemas Corrigidos
- `fix: Melhorar o método search na classe Manager para lidar com fontes de forma mais eficaz e garantir a validação correta da consulta.`
- `fix: Atualizar versão para 4.4.62-dev.22 em package.json.`
- `fix: Atualizar versão para 4.4.62-dev.5 em package.json.`
- `fix: Definir modo de loop do player para "track" e garantir que a reprodução comece corretamente.`
- `fix: Impedir o processamento do fim da faixa para players destruídos.`
- `fix: Adicionar flag de destruído à classe Player para evitar múltiplas chamadas de destruição.`
- `fix: Quando o bot desconectava e tocava novamente, ele tocava 3s do início e voltava.`
- `fix: Melhorar a lógica de reconexão do player e adicionar evento de reconexão do player.`
- `fix: Analisar payload como JSON antes de enviar no método sendPayload.`
- `fix: Analisar payload antes de enviar no método sendPayload; atualizar comando search para usar sintaxe de objeto.`

### Novas Funcionalidades
- `feat: Adicionar método isLinkMatch às classes SourceManager e Spotify.`
- `feat: Adaptar estrutura para receber SourceManager, para carregar fontes nativamente e dinamicamente.`
- `feat: Adicionar cartão de equipe GalaxyBot e atualizar avatar para xotakfr.`
- `feat: Adicionar dependência ws e melhorar a detecção de ambiente.`
- `feat: Atualizar descrição do pacote para clareza; simplificar exibição de duração no comando play; definir ID do desenvolvedor na configuração.`
- `feat: Adicionar comando search, melhorar comando play, e adicionar melhorias ao comando join.`
- `feat: Integrar módulo nuxt-gtag para rastreamento do Google Analytics; atualizar configuração do bot com configurações de host e porta locais.`
- `feat: Adicionar opções disableDatabase e blacklistedSources à interface IOptionsManager.`
- `feat: Aprimorar a classe SearchResult com LoadType e métodos adicionais para gerenciamento de faixas.`
- `feat: Adicionar métodos find, move, slice, filter, reverse e propriedades position/previous à classe Queue para gerenciamento aprimorado de faixas.`
- `feat: Adicionar métodos has e delete à classe Player; refatorar gerenciamento de dados com o método updateData.`
- `feat: Adicionar métodos de monitoramento de sistema e migração de player à classe Node para gerenciamento de desempenho aprimorado.`
- `feat: Implementar funcionalidade disableDatabase na classe Database para controlar o carregamento e salvamento de dados.`
- `feat: Adicionar opção disableDatabase à configuração do Manager e depreciar métodos de gerenciamento de player para maior clareza.`

### Refatorações
- `refactor: Renomear generateShortUUID para generateUUID e atualizar sua implementação; adicionar opções disableDatabase e blacklistedSources à interface IOptionsManager.`
- `refactor: Substituir generateShortUUID por generateUUID no NodeManager para consistência.`
- `refactor: Remover vírgula à direita no cabeçalho accept-encoding para consistência na classe Rest.`
- `refactor: Renomear generateShortUUID para generateUUID para clareza e atualizar a lógica de geração de UUID.`
- `refactor: Otimizar o gerenciamento de dados do Player substituindo chamadas diretas ao banco de dados pelo método updateData; atualizar a documentação de instalação para clareza e estrutura.`

### Tarefas
- `chore: Atualizar versão para 4.5.3.dev.2 em package.json.`
- `chore: Aumentar versão para 4.5.3 em package.json.`
- `chore: Atualizar versão para 4.4.62-dev.3 para fins de desenvolvimento.`
- `chore: Atualizar versão para 4.4.62 e aprimorar changelog com novas atualizações (#144).`
- `chore: Atualizar versão para 4.4.62 e aprimorar changelog com novas atualizações.`
- `chore: Atualizar string User-Agent e versão nos cabeçalhos; adicionar changelog e atualizar versão em package.json.`
- `chore: Atualizar configuração do bot com novas configurações de host e porta; remover parâmetros não utilizados.`

### Documentação
- `docs: Atualizar README para clareza e estrutura; aprimorar seções de documentação e melhorar a redação.`
- `docs: Atualizar versão de lançamento para v4.4.28 e aprimorar a documentação com nova seção de aplicativos de bot.`

## Versão v4.4.14 -> v4.4.28

### Novas Funcionalidades
- `feat: Adicionada opção 'sortPlayersByRegion' à configuração do Manager para ordenação regional de players.`
- `feat: Introduzido 'pathVersion' na configuração do Node para especificar a versão da API do Lavalink.`
- `feat: Implementado novo site de documentação usando Nuxt.js e Shadcn Docs.`
- `feat: Adicionados novos comandos de bot de teste: 'join' e 'search'.`
- `feat: Opção 'partialTrack' adicionada à configuração do Manager para carregamento seletivo de propriedades de faixa.`
- `feat: Funções utilitárias 'compareVersions' e 'stringifyWithReplacer' adicionadas.`
- `feat: 'pluginInfo', 'isPartial', 'createPropertySetters', 'resolveData', 'isPartialTrack', 'raw' e 'unresolvedTrack' adicionados à classe 'Track'.`
- `feat: Getters 'duration', 'isEmpty', 'first', 'last' e 'all' adicionados à classe 'Queue'.`
- `feat: A classe 'Database' agora lida com erros de carregamento/parsing emitindo mensagens de depuração.`
- `feat: Módulo 'Register' introduzido para registrar estruturas.`

### Problemas Corrigidos
- `fix: Tratamento de 'requestedBy' do Player no método 'play' melhorado para dados corretos do solicitante.`
- `fix: Status 'playing' do Player agora definido corretamente como true durante a retomada automática.`
- `fix: Construtor da classe 'Track' agora lida corretamente com 'pluginInfo'.`

### Refatorações
- `refactor: 'requester' removido das opções de 'search' do Manager, agora tratado internamente por 'SearchResult'.`
- `refactor: Construção de 'url' do Node agora usa 'pathVersion' dinamicamente.`
- `refactor: Propriedade 'requestedBy' da 'Track' atualizada para aceitar diretamente Objeto ou string, com um novo método 'setRequester'.`
- `refactor: Tratamento de erros do Database melhorado para emitir mensagens de depuração em vez de lançar erros.`
- `refactor: Classe 'Track' agora usa a opção 'partialTrack' para carregamento seletivo de propriedades.`
- `refactor: Método 'add' da 'Queue' agora aceita uma única faixa ou um array de faixas.`
- `refactor: Classe 'Rest' agora usa 'stringifyWithReplacer' para stringificação JSON.`
- `refactor: 'index.ts' atualizado para usar 'structures' de 'Utils' para exportação.`

### Tarefas
- `chore: .gitignore atualizado para ignorar 'docs/node_modules', 'docs/.nuxt', 'docs/.output', 'docs/.vscode'.`
- `chore: Versão aumentada para 4.4.28.`
- `chore: 'pnpm-lock.yaml' atualizado.`
- `chore: 'README.md' atualizado com novos emblemas e descrição.`
- `chore: Diretório 'docs/' adicionado com nova documentação.`

## Versão v4.4.14

### Novas Funcionalidades
- `feat: Adicionada opção 'sortPlayersByRegion' à configuração do Manager para ordenação regional de players.`
- `feat: Introduzido 'pathVersion' na configuração do Node para especificar a versão da API do Lavalink.`
- `feat: Implementado novo site de documentação usando Nuxt.js e Shadcn Docs.`
- `feat: Adicionados novos comandos de bot de teste: 'join' e 'search'.`

### Problemas Corrigidos
- `fix: Tratamento de 'requestedBy' do Player no método 'play' melhorado para dados corretos do solicitante.`
- `fix: Status 'playing' do Player agora definido corretamente como true durante a retomada automática.`

### Refatorações
- `refactor: 'requester' removido das opções de 'search' do Manager, agora tratado internamente por SearchResult.`
- `refactor: Construção de 'url' do Node agora usa 'pathVersion' dinamicamente.`
- `refactor: Propriedade 'requestedBy' da 'Track' atualizada para aceitar diretamente Objeto ou string, com um novo método 'setRequester'.`
- `refactor: Tratamento de erros do Database melhorado para emitir mensagens de depuração em vez de lançar erros.`

### Tarefas
- `chore: .gitignore atualizado para incluir 'docs/' directory.`
- `chore: Versão aumentada para 4.4.14 e campo 'packageManager' adicionado a package.json.`
- `chore: pnpm-lock.yaml adicionado.`
- `chore: README.md atualizado com novos emblemas e descrição.`

## Versão v4.4.7

### Problemas Corrigidos
- `fix: Status de reprodução do Player redefinido para false na reconexão do node para evitar estado incorreto.`
- `fix: Tratamento de 'requestedBy' do Player melhorado para gerenciar corretamente dados de usuário string ou objeto.`

### Tarefas
- `chore: Versão aumentada para 4.4.7.`
- `chore: Adicionado utilitário decodeTrack ao bot de teste para depuração.`

### Refatorações
- `refactor: Método add da fila do Player no bot de teste agora passa o ID do solicitante.`

## Versão v4.4.6

### Novas Funcionalidades
- `feat: Adicionadas opções 'resume' e 'autoResume' à configuração do Manager.`

### Problemas Corrigidos
- `fix: Corrigido 'Session-Id' handling in WebSocket headers, now conditionally set based on manager options.`
- `fix: Updated 'requestedBy.userData' handling in Player.ts to ensure proper data structure.`

### Tarefas
- `chore: Versão aumentada para 4.4.6.`
- `chore: Removidos 'movePlayersOnReconnect', 'autoResume', e 'resume' das opções do manager do bot de teste.`

## Versão v4.4.4

### Problemas Corrigidos
- `fix: String User-Agent nos cabeçalhos atualizada com informações de versão corretas.`
- `fix: Tipagens e configurações do SourceManager atualizadas; tratamento de erros melhorado e log de depuração adicionado para eventos brutos do node.`
- `fix: Mudança de endpoint do Spotify abordada para busca de token.`
- `fix: Configurações do bot atualizadas para nova configuração de servidor Lavalink; comandos nowplaying e search aprimorados para melhor exibição de informações de faixa.`
- `fix: Versão do User-Agent nos cabeçalhos para consistência.`
- `fix: Correspondência de URL do Deezer e lógica de busca aprimoradas para links curtos.`
- `fix: Lançamento de erro substituído por log de depuração para falhas de requisição da API do Deezer.`
- `fix: Corrigido 'Session-Id' handling in WebSocket headers, now conditionally set based on manager options.`
- `fix: Updated 'requestedBy.userData' handling in Player.ts to ensure proper data structure.`

### Novas Funcionalidades
- `feat: Novo fluxo de trabalho do GitHub Actions para publicação de pull requests aprovados.`
- `feat: Nova classe Database introduzida para persistência de dados.`
- `feat: Classe SearchResult adicionada para encapsular resultados de pesquisa.`
- `feat: Adicionada opção 'previousInArray' às opções do Manager.`
- `feat: Adicionada propriedade 'attempt' a IVoiceState.`
- `feat: Adicionados botões de controle de player e comandos ao bot de teste.`
- `feat: Adicionada opção 'logFile' às opções do Manager para log.`
- `feat: Adicionada opção 'movePlayersOnReconnect' às opções do Manager.`
- `feat: Adicionadas opções 'autoResume' e 'resume' às opções do Manager.`
- `feat: Adicionados replay, restart, e transferNode methods to Player class.`
- `feat: Adicionados getPlayers e getPlayersCount to Node class.`
- `feat: Adicionado all getter to PlayerManager.`
- `feat: Adicionado queueEnd event to IEvents.`
- `feat: Adicionada IRESTGetPlayers interface.`

### Refatorações
- `refactor: Método search do Manager agora retorna SearchResult diretamente.`
- `refactor: Método packetUpdate do Manager agora é assíncrono.`
- `refactor: attemptConnection do Manager agora inclui log de depuração e uma flag de tentativa para voiceState.`
- `refactor: Construtor do Player agora usa Structure.get para Queue, Filters, Listen, e Lyrics.`
- `refactor: Método play do Player agora chama isVoiceStateAttempt.`
- `refactor: Método skip do Player agora lida com autoPlay.`
- `refactor: NodeManager e PlayerManager agora usam Structure.get para criação de Node e Player, respectivamente.`
- `refactor: MoonlinkFilters renomeado para Filters, e validação adicionada para filter setters.`
- `refactor: Classe Structure movida de src/core para src/Utils.`
- `refactor: Métodos da fila agora atualizam o banco de dados.`
- `refactor: Classe Rest agora inclui método patch.`
- `refactor: Propriedade requestedBy da Track agora usa userData.`
- `refactor: Métodos setVoiceChannelId, setTextChannelId, setAutoPlay, setAutoLeave, pause, resume, seek, setVolume, setLoop do Player agora atualizam o banco de dados.`
- `refactor: Tratamento de mensagens do Node melhorado com log de depuração e lógica de retomada automática.`
- `refactor: NodeManager agora usa UUID para identificação de node.`
- `refactor: Método create do PlayerManager agora usa UUID para identificação de node.`
- `refactor: Método delete do PlayerManager agora exclui dados de player e fila do banco de dados.`
- `refactor: isVoiceStateAttempt movido para PlayerManager.`

### Tarefas
- `chore: .gitignore atualizado para ignorar docs/.`
- `chore: package.json e package-lock.json com versão atualizada.`
- `chore: Adicionado .prettierrc.`
- `chore: Versão do motor do node atualizada.`
- `chore: Dependências atualizadas.`
- `chore: Adicionado moonlink.log ao .npmignore.`
- `chore: Adicionado dist/src/datastore ao .gitignore.`

### Documentação
- `docs: README.md atualizado com novo código de exemplo para bot Discord, incluindo comandos de barra e controles de player.`

## Versão v4.2.1

### Problemas Corrigidos
- `fix: String User-Agent nos cabeçalhos atualizada com informações de versão corretas.`
- `fix: Tipagens e configurações do SourceManager atualizadas; tratamento de erros melhorado e log de depuração adicionado para eventos brutos do node.`
- `fix: Mudança de endpoint do Spotify abordada para busca de token.`
- `fix: Configurações do bot atualizadas para nova configuração de servidor Lavalink; comandos nowplaying e search aprimorados para melhor exibição de informações de faixa.`

### Novas Funcionalidades
- `feat: Integração de fonte Deezer adicionada com opções configuráveis.`
- `feat: Implementação de fonte Spotify refatorada.`
- `feat: Método resolve adicionado à classe Track para resolução de faixa específica de plugin.`
- `feat: Funcionalidade de reprodução automática do Spotify implementada para players.`
- `feat: Novo fluxo de trabalho do GitHub Actions para publicação de pull requests aprovados.`
- `feat: Nova classe Database introduzida para persistência de dados.`
- `feat: Classe SearchResult adicionada para encapsular resultados de pesquisa.`
- `feat: Adicionada opção 'previousInArray' às opções do Manager.`
- `feat: Adicionada propriedade 'attempt' a IVoiceState.`
- `feat: Adicionados botões de controle de player e comandos ao bot de teste.`

### Refatorações
- `refactor: Método search do Manager agora retorna SearchResult diretamente.`
- `refactor: Método packetUpdate do Manager agora é assíncrono.`
- `refactor: attemptConnection do Manager agora inclui log de depuração e uma flag de tentativa para voiceState.`
- `refactor: Construtor do Player agora usa Structure.get para Queue, Filters, Listen, e Lyrics.`
- `refactor: Método play do Player agora chama isVoiceStateAttempt.`
- `refactor: Método skip do Player agora lida com autoPlay.`
- `refactor: NodeManager e PlayerManager agora usam Structure.get para criação de Node e Player, respectivamente.`
- `refactor: MoonlinkFilters renomeado para Filters, e validação adicionada para filter setters.`
- `refactor: Classe Structure movida de src/core para src/Utils.`

### Tarefas
- `chore: .gitignore atualizado para ignorar docs/.`
- `chore: package.json e package-lock.json com versão atualizada.`

### Documentação
- `docs: README.md atualizado com novo código de exemplo para bot Discord, incluindo comandos de barra e controles de player.`

## Versão v4.0.2

### Problemas Corrigidos
- `fix: Método stop do Player agora limpa corretamente a fila, evitando pulos indesejados.`
- `fix: Lógica de destruição do Player melhorada no método stop, permitindo o descarte adequado do player.`
- `fix: Senha padrão para nodes agora definida corretamente como "youshallnotpass" se não fornecida.`
- `fix: Funcionalidade de pesquisa agora lida corretamente com fontes não explicitamente presentes em variáveis de fonte e inclui 'deflate' nos cabeçalhos 'accept-encoding' para melhor compatibilidade.`
- `fix: String User-Agent nos cabeçalhos atualizada com informações de versão corretas.`

### Refatorações
- `refactor: Função makeRequest em Utils.ts agora lida com respostas não-JSON graciosamente, tentando ler como texto.`
- `refactor: Método loadTracks do Manager agora retorna cedo se loadType for error ou empty.`
- `refactor: Construtor do Player agora verifica NodeLinkFeatures ou node.info.isNodeLink para inicialização de Listen e Lyrics.`

### Diversos
- `misc: Versão aumentada para 4.0.2.`
- `misc: Mensagem de depuração para exceções em Node.ts agora stringifica a exceção do payload para melhor legibilidade.`