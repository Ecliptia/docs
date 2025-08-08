---
title: SpotifySource
description: "Referência da API para o SpotifySource em Moonlink.js"
icon: 'line-md:spotify-filled'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:spotify"}
#title
Classe SpotifySource

#description
O `SpotifySource` fornece integração com a API do Spotify, permitindo que o Moonlink.js pesquise e carregue faixas, álbuns, playlists e artistas do Spotify. Ele lida com a autenticação usando credenciais de cliente e requisições de API internamente.
<br>

::alert{type="info" icon="lucide:info"}
Esta fonte é carregada automaticamente se `disableNativeSources` não estiver definido como `true` nas opções do Manager. Você deve fornecer `clientId` e `clientSecret` nas opções `spotify` do Manager para que esta fonte funcione.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome da fonte: `Spotify`. |

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
  Verifica se uma determinada URL ou string de consulta corresponde a uma URL de faixa, álbum, playlist ou artista do Spotify, ou a uma consulta `spsearch:` ou `sprec:`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="url" type="string" required}
    A URL ou string de consulta a ser verificada.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`boolean`** — `true` se a consulta corresponder a um padrão Spotify, `false` caso contrário.

  ```js
  const isSpotifyLink = source.match('https://open.spotify.com/track/12345');
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
  Pesquisar Spotify

  #description
  Pesquisa faixas no Spotify com base em uma consulta. Os resultados são limitados por `manager.options.spotify.limitLoadSearch`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="query" type="string" required}
    A consulta de pesquisa.
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
  const results = await source.search('Never Gonna Give You Up');
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
  Carregar Conteúdo do Spotify

  #description
  Carrega conteúdo de uma URL do Spotify (faixa, álbum, playlist, artista) ou uma consulta de recomendação `sprec:`. Lida com a normalização de URL e limita os resultados com base nas configurações de `manager.options.spotify`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="rawUrl" type="string" required}
    A URL do Spotify ou consulta de recomendação a ser carregada.
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
  const track = await source.load('https://open.spotify.com/track/12345');
  const playlist = await source.load('https://open.spotify.com/playlist/67890');
  const recommendations = await source.load('sprec:seed_tracks=12345');
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
  Resolver Conteúdo do Spotify

  #description
  Resolve o conteúdo do Spotify a partir de uma URL. Este método é um alias para `load`.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="url" type="string" required}
    A URL do Spotify a ser resolvida.
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
  const resolvedTrack = await source.resolve('https://open.spotify.com/track/12345');
  ```
  ::
::
::