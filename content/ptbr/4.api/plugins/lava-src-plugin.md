---
title: LavaSrcPlugin
description: "Referência da API para o LavaSrcPlugin em Moonlink.js"
icon: 'lucide:music'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:music"}
#title
Classe LavaSrcPlugin

#description
O `LavaSrcPlugin` se integra ao plugin LavaSrc Lavalink para fornecer suporte a várias fontes de música como Spotify, Apple Music, Deezer, Yandex Music, VK Music, Tidal e Qobuz. Ele declara uma ampla gama de capacidades de pesquisa e diretas para essas fontes.
<br>

::alert{type="info" icon="lucide:info"}
Este plugin requer um servidor Lavalink executando o plugin `LavaSrc`.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome do plugin: `lavasrc-plugin`. |
| `capabilities` | `string[]` | Declara várias capacidades de pesquisa e diretas para fontes suportadas. |

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
  Inicializa o plugin para um determinado node. Este plugin principalmente declara capacidades e não requer inicialização complexa.
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
  Limpa os recursos do plugin. Este plugin não requer limpeza complexa.
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
  Chamado quando as informações do node associado são atualizadas. Este método registra informações de depuração sobre a atualização do node.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância do node cujas informações foram atualizadas.
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
