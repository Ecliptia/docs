---
title: LavaSearchPlugin
description: "Referência da API para o LavaSearchPlugin em Moonlink.js"
icon: 'lucide:search'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:search"}
#title
Classe LavaSearchPlugin

#description
O `LavaSearchPlugin` se integra ao plugin LavaSearch Lavalink para fornecer recursos de pesquisa avançados. Ele permite pesquisar vários tipos de conteúdo, como faixas, álbuns, artistas, playlists e texto.
<br>

::alert{type="info" icon="lucide:info"}
Este plugin requer um servidor Lavalink executando o plugin `LavaSearch`.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome do plugin: `lavasearch-plugin`. |
| `capabilities` | `string[]` | Declara a capacidade `lavasearch`. |
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

#### search
::field{name="search" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:search'
  ---
  #title
  Realizar LavaSearch

  #description
  Realiza uma pesquisa usando a API LavaSearch, suportando vários tipos de conteúdo.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A consulta de pesquisa.
    ::
    ::field{name="options" type="Object"}
    Opções de pesquisa.
    ::
    ::field{name="options.source" type="string"}
    Opcional: A fonte para pesquisar (ex: `youtube`, `spotify`).
    ::
    ::field{name="options.types" type="string"}
    Opcional: String separada por vírgulas dos tipos de resultado a serem retornados (ex: `track,album,artist`). Padrão para `track,album,artist,playlist,text`.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<ILavaSearchResultData>`** — Os dados dos resultados da pesquisa.

  ```js
  const results = await plugin.search('Never Gonna Give You Up', { types: 'track,artist' });
  console.log(results.tracks);
  console.log(results.artists);
  ```
  ::
::
::
