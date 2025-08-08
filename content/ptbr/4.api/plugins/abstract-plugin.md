---
title: AbstractPlugin
description: "Referência da API para a classe PluginManager em Moonlink.js"
icon: 'lucide:puzzle'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:puzzle"}
#title
Classe AbstractPlugin

#description
A classe `AbstractPlugin` serve como base para todos os plugins do Moonlink.js. Ela define a estrutura essencial e os métodos de ciclo de vida que as implementações concretas de plugins devem seguir.
<br>

::alert{type="info" icon="lucide:info"}
Esta é uma classe abstrata e não pode ser instanciada diretamente. Você deve estendê-la para criar seus próprios plugins personalizados.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome único do plugin. |
| `capabilities` | `string[]` | Um array de capacidades fornecidas por este plugin (ex: `"lavadspx"`, `"search:spotify"`). |

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
  Chamado quando o plugin é carregado para um node específico. Este método deve conter a lógica de inicialização do plugin.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` para a qual o plugin está sendo carregado.
    ::
  ::
  ::

  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  class MyPlugin extends AbstractPlugin {
    // ... construtor e outros métodos
    load(node) {
      node.manager.emit('debug', `MyPlugin carregado para o node ${node.identifier}`);
    }
  }
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
  Chamado quando o plugin é descarregado de um node específico. Este método deve conter a lógica de limpeza do plugin.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` da qual o plugin está sendo descarregado.
    ::
  ::
  ::

  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  class MyPlugin extends AbstractPlugin {
    // ... construtor e outros métodos
    unload(node) {
      node.manager.emit('debug', `MyPlugin descarregado do node ${node.identifier}`);
    }
  }
  ```
  ::
::
::

#### onNodeInfoUpdate
::field{name="onNodeInfoUpdate" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:info'
  ---
  #title
  Na Atualização de Informações do Node

  #description
  Método opcional chamado quando as informações do node associado são atualizadas. Útil para plugins que precisam reagir a mudanças nas capacidades do node ou outras propriedades.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` cujas informações foram atualizadas.
    ::
  ::
  ::

  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  class MyPlugin extends AbstractPlugin {
    // ... construtor e outros métodos
    onNodeInfoUpdate(node) {
      node.manager.emit('debug', `MyPlugin recebeu atualização de informações do node ${node.identifier}`);
      // Reage a node.info.plugins atualizados ou outras propriedades
    }
  }
  ```
  ::
::
::

## Plugins Oficiais

::card{icon="lucide:package"}
#title
Plugins Disponíveis

#description
Lista de plugins oficiais disponíveis para Moonlink.js.

#content
| Plugin | Descrição | Versão |
|--------|-------------|---------|
| [`GoogleCloudTTSPlugin`](/api/plugins/google-cloud-tts-plugin) | Fornece funcionalidade de Text-to-Speech (TTS) usando Google Cloud TTS. | N/A |
| [`JavaLavaLyricsPlugin`](/api/plugins/java-lavalyrics-plugin) | Fornece funcionalidade de letras usando o plugin Java LavaLyrics. | N/A |
| [`JavaLyricsPlugin`](/api/plugins/java-lyrics-plugin) | Fornece funcionalidade de letras usando o plugin Java Lyrics. | N/A |
| [`LavaDSPXPlugin`](/api/plugins/lava-dspx-plugin) | Fornece filtros avançados de processamento de sinal digital (DSP). | N/A |
| [`LavaLyricsPlugin`](/api/plugins/lava-lyrics-plugin) | Fornece funcionalidade de letras usando o plugin LavaLyrics. | N/A |
| [`LavaSearchPlugin`](/api/plugins/lava-search-plugin) | Fornece capacidades de pesquisa avançadas usando o plugin LavaSearch. | N/A |
| [`LavaSrcPlugin`](/api/plugins/lava-src-plugin) | Fornece suporte para várias fontes de música como Spotify, Apple Music, Deezer, etc. | N/A |
| [`LyricsKtPlugin`](/api/plugins/lyrics-kt-plugin) | Fornece funcionalidade de letras usando o plugin Lyrics.kt. | N/A |
| [`SkybotPlugin`](/api/plugins/skybot-plugin) | Fornece capacidades de pesquisa adicionais para várias fontes diretas. | N/A |
| [`SponsorBlockPlugin`](/api/plugins/sponsor-block-plugin) | Fornece integração com SponsorBlock para pular segmentos patrocinados em vídeos do YouTube. | N/A |
| [`YouTubePlugin`](/api/plugins/youtube-plugin) | Fornece capacidades de pesquisa do YouTube. | N/A |
| **Fontes Nativas** | Para documentação sobre integrações de fontes nativas (ex: Spotify, Deezer), consulte a seção [Fontes](/api/sources). | N/A |

::alert{type="info" icon="lucide:info"}
moonlink ainda não possui plugins oficiais, nem plugins criados pela comunidade.
::
