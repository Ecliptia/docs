---
title: Solução de Problemas
description: "Encontre soluções para problemas e erros comuns ao usar Moonlink.js."
icon: 'lucide:wrench'
---

## Solução de Problemas Comuns

Este guia ajuda você a resolver problemas comuns que você pode encontrar ao usar o Moonlink.js. Se você não conseguir encontrar uma solução aqui, sinta-se à vontade para pedir ajuda em nosso [servidor Discord](https://discord.gg/q8HzGuHuDY).

---

### Problemas de Conexão
*Problemas relacionados à conexão com o Lavalink ou canais de voz.*

::card
---
icon: lucide:x-circle
title: Erro ao Conectar ao Lavalink
---
  **Sintoma:** Você vê eventos `nodeError` com mensagens como `ECONNREFUSED`, `401 Unauthorized` ou `Invalid password`.
  <br>
  **Solução:**
  1.  **Verificar Status do Lavalink:** Certifique-se de que seu servidor Lavalink está funcionando corretamente.
  2.  **Verificar Configuração:** Verifique novamente o `host`, `port` e `password` em sua configuração do Manager. Eles devem corresponder exatamente ao seu `application.yml` do Lavalink.
  3.  **Firewall:** Certifique-se de que seu firewall não está bloqueando a conexão entre seu bot e o servidor Lavalink.

  ::code-group
    ```js [Configuração do Manager]
    const manager = new Manager({
      nodes: [{
        host: 'localhost', // Deve corresponder ao host do Lavalink
        port: 2333,        // Deve corresponder à porta do Lavalink
        password: 'youshallnotpass', // Deve corresponder à senha do Lavalink
      }],
      // ...
    });
    ```
    ```yaml [application.yml]
    server:
      port: 2333
    lavalink:
      server:
        password: "youshallnotpass"
    ```
  ::
::

::card
---
icon: lucide:mic-off
title: Bot Não Entra no Canal de Voz
---
  **Sintoma:** O bot não entra no canal de voz e nenhum som é reproduzido. Você pode não ver nenhum erro.
  <br>
  **Solução:**
  1.  **Função `sendPayload`:** Certifique-se de ter implementado corretamente a função `sendPayload`. Esta função é crucial para enviar atualizações de voz para o Discord.
  2.  **Intents:** Verifique se você ativou as Gateway Intents necessárias para o seu cliente Discord, especialmente `Guilds` e `GuildVoiceStates`.
  3.  **`packetUpdate`:** Certifique-se de que você está encaminhando pacotes de voz brutos para o manager usando `client.on('raw', (packet) => manager.packetUpdate(packet));`.

  ```js [Código Necessário]
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates, // Necessário para voz
    ],
  });

  const manager = new Manager({
    // ... nodes
    sendPayload: (guildId, payload) => {
      const guild = client.guilds.cache.get(guildId);
      if (guild) guild.shard.send(JSON.parse(payload));
    },
  });

  client.on('raw', (packet) => {
    manager.packetUpdate(packet);
  });
  ```
::

::card
---
icon: lucide:wifi-off
title: Node Desconecta Frequentemente
---
  **Sintoma:** O evento `nodeDisconnect` é emitido frequentemente, e o bot experimenta interrupções.
  <br>
  **Solução:**
  1.  **Saúde do Servidor Lavalink:** Verifique os logs e o uso de recursos (CPU/Memória) do seu servidor Lavalink. Ele pode estar sobrecarregado ou travando.
  2.  **Estabilidade da Rede:** Garanta uma conexão de rede estável entre seu bot e o servidor Lavalink.
  3.  **Configurações de Tentativa:** Ajuste as opções `retryAmount` e `retryDelay` em sua configuração de node para dar ao bot mais tempo para reconectar.

  ```js [Configuração do Node]
  {
    host: 'localhost',
    port: 2333,
    password: 'youshallnotpass',
    retryAmount: 10, // Aumentar tentativas
    retryDelay: 15000 // Aumentar atraso para 15 segundos
  }
  ```
::

::card
---
icon: lucide:server-off
title: Nenhum Node Lavalink Ativo
---
  **Sintoma:** As pesquisas falham com um resultado `empty`, e você vê mensagens de depuração como `No connected node available to handle the request.` ou `No available nodes`.
  <br>
  **Solução:**
  1.  **Status do Node:** Certifique-se de que pelo menos um dos seus nodes Lavalink na configuração do `Manager` esteja em execução e acessível pelo seu bot.
  2.  **Conexão Inicial:** O evento `nodeReady` deve ser emitido para cada node que se conecta com sucesso quando seu bot inicia. Se você não vir isso, verifique novamente sua configuração de node (`host`, `port`, `password`).
  3.  **Falha do Node:** Se um node desconectar, o Moonlink.js tentará reconectar com base nas suas configurações de `retryAmount` e `retryDelay`. Se todos os nodes estiverem offline, todas as ações do player e pesquisas falharão até que um se reconecte.
  4.  **Verificar `nodeError`:** Ouça o evento `nodeError` para capturar problemas de conexão assim que eles ocorrerem.

  ```js [Ouvinte de Eventos]
  manager.on('nodeError', (node, error) => {
    console.error(`Node ${node.identifier} encontrou um erro:`, error.message);
  });
  ```
::

---

### Problemas de Reprodução
*Problemas relacionados à reprodução de faixas, qualidade de áudio e eventos de faixas.*

::card
---
icon: lucide:volume-x
title: Nenhum Som Está Tocando
---
  **Sintoma:** O bot entra no canal de voz, um evento `trackStart` é emitido, mas nenhum áudio é ouvido.
  <br>
  **Solução:**
  1.  **Logs do Lavalink:** Verifique o console do servidor Lavalink em busca de erros como `TrackExceptionEvent` ou `WebSocketClosedEvent`. Estes geralmente fornecem pistas.
  2.  **Carregamento da Faixa:** Certifique-se de que a faixa foi carregada com sucesso. Um resultado `loadFailed` de `manager.search()` causará isso.
  3.  **Volume:** Certifique-se de que o volume do player não está definido como 0. Além disso, verifique se o bot não está silenciado no servidor.
::

::card
---
icon: lucide:alert-triangle
title: Eventos de Faixa Travada ou Exceção
---
  **Sintoma:** Você recebe eventos `trackStuck` ou `trackException`.
  <br>
  **Solução:**
  - **`trackStuck`**: Isso geralmente indica um problema de rede entre o Lavalink e a fonte de áudio (ex: YouTube). Pode ser temporário. Você pode lidar com isso pulando para a próxima faixa.
  - **`trackException`**: Isso significa que o Lavalink falhou ao reproduzir a faixa. O payload `exception` conterá detalhes. Razões comuns incluem conteúdo com restrição de idade, vídeos bloqueados por região ou faixas privadas. É melhor registrar o erro e pular a faixa.

  ```js [Tratamento de Eventos]
  manager.on('trackStuck', (player, track, threshold) => {
    console.error(`A faixa ${track.title} travou. Limite: ${threshold}ms`);
    player.skip();
  });

  manager.on('trackException', (player, track, exception) => {
    console.error(`A faixa ${track.title} falhou ao tocar:`, exception);
    player.skip();
  });
  ```
::

::card
---
icon: 'lucide:radio-tower'
title: Escolhendo Entre Fontes Nativas e LavaSrc
---
  **Contexto:** Moonlink.js tem suas próprias fontes internas (nativas) para plataformas como Spotify e Deezer. No entanto, para reprodução completa e mais confiável, é altamente recomendável usar um plugin Lavalink como [LavaSrc](https://github.com/topi314/LavaSrc).
  <br>
  **Problema:** Você não tem certeza por que os links do Spotify/Deezer não estão funcionando como esperado, ou você quer o melhor desempenho.
  <br>
  **Solução:**
  1.  **Usar LavaSrc:** Para a melhor experiência, instale o plugin LavaSrc em seu servidor Lavalink.
  2.  **Desabilitar Fontes Nativas:** Para garantir que todas as requisições passem pelo LavaSrc, desabilite as fontes nativas nas opções do manager. Isso evita potenciais conflitos ou comportamento inesperado.

  Ao usar o LavaSrc, você **não** precisa fornecer `clientId` e `clientSecret` do Spotify nas opções do manager do Moonlink.js. Eles devem ser configurados no arquivo `application.yml` do seu servidor Lavalink para o plugin LavaSrc.

  ::code-group
    ```js [Configuração do Manager para LavaSrc]
    const manager = new Manager({
      nodes: [/* ... */],
      sendPayload: (guildId, payload) => { /* ... */ },
      options: {
        // Desabilitar fontes internas para priorizar LavaSrc
        disableNativeSources: true,
      }
    });
    ```
    ```yaml [Lavalink application.yml para LavaSrc]
    lavalink:
      server:
        sources:
          youtube: true
          soundcloud: true
        plugins:
          - dependency: "com.github.topi314.lavasrc:lavasrc-plugin:4.0.0" # Use a versão mais recente
            repository: "[https://maven.lavalink.dev/releases](https://maven.lavalink.dev/releases)"
    plugins:
      lavasrc:
        sources:
          spotify:
            clientId: "SEU_CLIENT_ID_SPOTIFY"
            clientSecret: "SEU_CLIENT_SECRET_SPOTIFY"
            market: "US"
          deezer:
            masterKey: "SUA_MASTER_KEY_DEEZER"
    ```
  ::
  **Nota:** Se você optar por usar a fonte **nativa** do Spotify (definindo `disableNativeSources: false`), você deve fornecer o `clientId` e `clientSecret` no objeto `manager.options.spotify`. No entanto, este método é geralmente menos confiável para reprodução.
::

---

### Erros Gerais e Dicas
*Erros comuns de JavaScript e dicas de depuração.*

::card
---
icon: lucide:code
title: "TypeError: Não é possível ler propriedades de indefinido"
---
  **Sintoma:** Você recebe um erro como `TypeError: Cannot read properties of undefined (reading 'play')`.
  <br>
  **Solução:**
  Isso quase sempre significa que você está tentando acessar uma propriedade ou método em um objeto que é `undefined`. A causa mais comum no Moonlink.js é tentar usar um player que não existe.

  **Sempre verifique se o player existe antes de usá-lo:**
  ```js
  const player = manager.players.get(guildId);

  if (!player) {
    console.log('Nenhum player encontrado para este servidor.');
    return;
  }

  // Agora é seguro usar o player
  player.pause();
  ```
::

::card
---
icon: lucide:bug
title: Usando o Evento Debug
---
  **Sintoma:** Você não tem certeza do que está acontecendo internamente.
<br>
  **Solução:**
  Moonlink.js fornece um evento `debug` que emite informações detalhadas sobre operações internas. Isso é incrivelmente útil para entender o comportamento da biblioteca e diagnosticar problemas complexos.

  ```js
  manager.on('debug', (message) => {
    console.log(`[MOONLINK DEBUG] ${message}`);
  });
  ```
::

::card
---
icon: lucide:file-text
title: Verificando Logs do Lavalink
---
  **Sintoma:** Você suspeita que o problema possa estar no lado do Lavalink.
  <br>
  **Solução:**
  Sempre verifique a saída do console do seu servidor Lavalink. Ele fornece informações cruciais sobre carregamento de faixas, erros de reprodução e status de conexão. Procure por mensagens contendo `WARN`, `ERROR` ou `Exception`.
::

::card
---
icon: 'lucide:search-check'
title: Pesquisa Falha ou Não Retorna Faixas
---
  **Sintoma:** `manager.search()` retorna um `loadType` de `empty` ou `error`, mesmo para consultas válidas.
<br>
  **Solução:**
  1.  **Fallback de Fonte:** Se você estiver usando `enableSourceFallback: true`, uma pesquisa pode falhar na fonte primária e então falhar silenciosamente nas fontes de fallback se nenhuma estiver disponível ou adequada. Ative o evento `debug` para ver o processo de pesquisa em detalhes.
  2.  **Capacidades do Node:** Quando você pesquisa uma faixa de uma fonte específica (ex: Spotify), o Moonlink.js tenta encontrar um node conectado que tenha a capacidade necessária (ex: `search:spotify`). Se nenhum node for encontrado, a pesquisa falhará para essa fonte. Certifique-se de que seus plugins Lavalink (como LavaSrc) estejam corretamente carregados e relatados pelo node.
  3.  **Resolução de Faixa:** Se uma faixa de uma fonte específica (ex: uma faixa do Spotify na fila) estiver prestes a ser reproduzida em um node que não a suporta, a função `play` tentará encontrar um novo node adequado. Se isso falhar, ela tentará pesquisar a faixa pelo seu título e autor em uma plataforma padrão (como o YouTube). Se todas essas etapas falharem, a reprodução será interrompida. Verifique os logs de depuração para mensagens como `No suitable node found` ou `Generic search fallback failed`.
::

::card
---
icon: 'lucide:save'
title: Auto-Resume Não Funciona
---
  **Sintoma:** Players e filas não são restaurados após uma reinicialização do bot, mesmo com `autoResume: true`.
<br>
  **Solução:**
  1.  **Banco de Dados Ativado:** O recurso `autoResume` depende do banco de dados interno para armazenar o estado do player. Certifique-se de que você **não** definiu `disableDatabase: true` nas opções do manager.
  2.  **Armazenamento Persistente:** O banco de dados grava em arquivos no diretório `src/datastore`. Certifique-se de que seu ambiente de implantação tenha armazenamento persistente e que esses arquivos não sejam excluídos entre as reinicializações.
  3.  **Desligamento Gracioso:** Embora não seja estritamente necessário, garantir um desligamento gracioso permite que o banco de dados compacte e salve seu estado final corretamente, o que pode evitar perda de dados.
::