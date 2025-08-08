---
title: LavaLyricsPlugin
description: "Referência da API para o LavaLyricsPlugin em Moonlink.js"
icon: 'lucide:file-text'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:file-text"}
#title
Classe LavaLyricsPlugin

#description
O `LavaLyricsPlugin` integra-se com o plugin LavaLyrics Lavalink para fornecer recursos de busca de letras e assinatura de letras ao vivo. Ele suporta a busca de letras para a faixa atual ou uma faixa codificada específica.
<br>

::alert{type="info" icon="lucide:info"}
Este plugin requer um servidor Lavalink executando o plugin `LavaLyrics`.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome do plugin: `lavalyrics-plugin`. |
| `capabilities` | `string[]` | Declara a capacidade `lavalyrics`. |
| `node` | `Node` | A instância Node associada. |

## Métodos

#### load
::field{name="load" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:download'
  ---
  #title
  Carregar Plugin

  #description
  Inicializa o plugin para um determinado node.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância do node.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  // Chamado internamente pelo PluginManager
  ```
  ::
::
::

#### unload
::field{name="unload" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:upload'
  ---
  #title
  Descarregar Plugin

  #description
  Limpa os recursos do plugin.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância do node.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  // Chamado internamente pelo PluginManager
  ```
  ::
::
::

#### getLyricsForCurrentTrack
::field{name="getLyricsForCurrentTrack" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:music'
  ---
  #title
  Obter Letras para a Faixa Atual

  #description
  Busca letras para a faixa atualmente em reprodução de um player específico.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
    ::field{name="skipTrackSource" type="boolean"}
    Opcional: Se deve pular a fonte original da faixa ao procurar por letras.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<ILavaLyricsObject | null>`** — Dados das letras ou `null` se não encontrado.

  ```js
  const lyrics = await plugin.getLyricsForCurrentTrack('123456789');
  ```
  ::
::
::

#### getLyricsForTrack
::field{name="getLyricsForTrack" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:file-text'
  ---
  #title
  Obter Letras para a Faixa

  #description
  Busca letras para uma faixa codificada específica.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="encodedTrack" type="string" required}
    A string da faixa codificada em base64.
    ::
    ::field{name="skipTrackSource" type="boolean"}
    Opcional: Se deve pular a fonte original da faixa ao procurar por letras.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<ILavaLyricsObject | null>`** — Dados das letras ou `null` se não encontrado.

  ```js
  const lyrics = await plugin.getLyricsForTrack('base64EncodedTrack');
  ```
  ::
::
::

#### subscribeToLiveLyrics
::field{name="subscribeToLiveLyrics" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:message-square'
  ---
  #title
  Assinar Letras ao Vivo

  #description
  Assina as atualizações de letras ao vivo para um servidor específico.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
    ::field{name="skipTrackSource" type="boolean"}
    Opcional: Se deve pular a fonte original da faixa ao procurar por letras.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<void>`**

  ```js
  await plugin.subscribeToLiveLyrics('123456789');
  ```
  ::
::
::

#### unsubscribeFromLiveLyrics
::field{name="unsubscribeFromLiveLyrics" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:message-square-off'
  ---
  #title
  Cancelar Assinatura de Letras ao Vivo

  #description
  Cancela a assinatura das atualizações de letras ao vivo para um servidor específico.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<void>`**

  ```js
  await plugin.unsubscribeFromLiveLyrics('123456789');
  ```
  ::
::
::

#### registerLyricsCallback
::field{name="registerLyricsCallback" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:check-circle'
  ---
  #title
  Registrar Callback de Letras

  #description
  Registra uma função de callback para receber atualizações de linha de letras ao vivo para um servidor específico.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
    ::field{name="callback" type="(line: ILavaLyricsLine) => void" required}
    A função de callback para invocar com cada linha de letra.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  plugin.registerLyricsCallback('123456789', (line) => console.log(line.line));
  ```
  ::
::
::

#### unregisterLyricsCallback
::field{name="unregisterLyricsCallback" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:x-circle'
  ---
  #title
  Cancelar Registro de Callback de Letras

  #description
  Cancela o registro da função de callback de letras para um servidor específico.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  plugin.unregisterLyricsCallback('123456789');
  ```
  ::
::
::

#### handleEvent
::field{name="handleEvent" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:zap'
  ---
  #title
  Manipular Evento

  #description
  Manipula eventos de entrada do node Lavalink relacionados a letras. Este método é chamado internamente pelo Node.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância do node.
    ::
    ::field{name="payload" type="any" required}
    O payload do evento do Lavalink.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  // Chamado internamente pelo Node
  ```
  ::
::
::