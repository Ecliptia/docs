---
title: DeezerSource
description: "Referência da API para o DeezerSource em Moonlink.js"
icon: 'lucide:music'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:music"}
#title
Classe DeezerSource

#description
O `DeezerSource` fornece integração com a API do Deezer, permitindo que o Moonlink.js pesquise e carregue faixas, álbuns, playlists e artistas do Deezer. Ele lida com autenticação e requisições de API internamente.
<br>

::alert{type="info" icon="lucide:info"}
Esta fonte é carregada automaticamente se `disableNativeSources` não estiver definido como `true` nas opções do Manager.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome da fonte: `Deezer`. |

## Métodos

#### match
::field{name="match" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:check-circle'
  ---
  #title
  Corresponder URL

  #description
  Verifica se uma determinada URL ou string de consulta corresponde a uma URL de faixa, álbum, playlist ou artista do Deezer, ou a uma consulta `dzsearch:`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A URL ou string de consulta a ser verificada.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`boolean`** — `true` se a consulta corresponder a um padrão Deezer, `false` caso contrário.

  ```js
  const isDeezerLink = source.match('https://deezer.com/track/12345');
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
  Pesquisar Deezer

  #description
  Pesquisa faixas no Deezer com base em uma consulta. Os resultados são limitados por `manager.options.deezer.maxSearchResults`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A consulta de pesquisa (ex: `dzsearch:título da música`).
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<any>`** — Um objeto de resultado de pesquisa contendo `loadType` e `data`.

  ```js
  const results = await source.search('dzsearch:Never Gonna Give You Up');
  ```
  ::
::
::

#### load
::field{name="load" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:download'
  ---
  #title
  Carregar Conteúdo do Deezer

  #description
  Carrega conteúdo de uma URL do Deezer (faixa, álbum, playlist, artista). Lida com links curtos e limita os resultados com base nas configurações de `manager.options.deezer`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A URL do Deezer a ser carregada.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<any>`** — Um objeto de resultado de carregamento contendo `loadType` e `data`.

  ```js
  const track = await source.load('https://deezer.com/track/12345');
  const playlist = await source.load('https://deezer.com/playlist/67890');
  ```
  ::
::
::

#### resolve
::field{name="resolve" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:check-circle'
  ---
  #title
  Resolver Conteúdo do Deezer

  #description
  Resolve o conteúdo do Deezer a partir de uma URL. Este método é um alias para `load`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A URL do Deezer a ser resolvida.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<any>`** — Um objeto de resultado de carregamento.

  ```js
  const resolvedTrack = await source.resolve('https://deezer.com/track/12345');
  ```
  ::
::
::