---
title: SourceManager
description: "Referência da API para a classe SourceManager em Moonlink.js"
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
Classe SourceManager

#description
A classe `SourceManager` é responsável por gerenciar fontes de áudio nativas como Spotify e Deezer dentro do Moonlink.js. Ela lida com o carregamento, registro e correspondência dessas fontes, permitindo que o `Manager` pesquise e carregue faixas diretamente delas.
<br>
```js
manager.sources
```
::

::alert{type="info" icon="lucide:info"}
O `SourceManager` é acessado através da propriedade `sources` da instância `Manager`. Você não precisa criá-lo manualmente.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `manager` | `Manager` | Referência à instância do Manager. |
| `sources` | `Record<string, ISource>` | Um objeto contendo todas as fontes nativas registradas, indexadas pelo seu nome. |

## Métodos

#### add
::field{name="add" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:plus-circle'
  ---
  #title
  Adicionar Fonte

  #description
  Adiciona uma nova fonte nativa ao SourceManager. Este método é usado principalmente internamente durante a inicialização para carregar fontes embutidas.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="source" type="ISource" required}
    O objeto da fonte a ser adicionado.
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
  // Usado internamente pelo Moonlink.js para carregar fontes nativas.
  // Você geralmente não precisará chamá-lo diretamente.
  ```
  ::
::
::

#### get
::field{name="get" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:search'
  ---
  #title
  Obter Fonte

  #description
  Recupera uma fonte nativa registrada pelo seu nome.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="name" type="string" required}
    O nome da fonte a ser recuperada.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`ISource | undefined`** — O objeto da fonte se encontrado, caso contrário `undefined`.

  ```js
  const spotifySource = manager.sources.get('Spotify');
  if (spotifySource) {
    console.log(`Fonte Spotify encontrada: ${spotifySource.name}`);
  }
  ```
  ::
::
::

#### has
::field{name="has" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:check-circle'
  ---
  #title
  Tem Fonte

  #description
  Verifica se uma fonte nativa com o nome fornecido está registrada.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="name" type="string" required}
    O nome da fonte a ser verificada.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`boolean`** — `true` se a fonte estiver registrada, `false` caso contrário.

  ```js
  const hasDeezer = manager.sources.has('Deezer');
  if (hasDeezer) {
    console.log('Fonte Deezer está disponível.');
  }
  ```
  ::
::
::

#### remove
::field{name="remove" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:trash-2'
  ---
  #title
  Remover Fonte

  #description
  Remove uma fonte nativa registrada do SourceManager.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="name" type="string" required}
    O nome da fonte a ser removida.
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
  manager.sources.remove('Spotify');
  console.log('Fonte Spotify removida.');
  ```
  ::
::
::

#### clear
::field{name="clear" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:eraser'
  ---
  #title
  Limpar Todas as Fontes

  #description
  Remove todas as fontes nativas registradas do SourceManager.
  <br>
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`void`**

  ```js
  manager.sources.clear();
  console.log('Todas as fontes nativas limpas.');
  ```
  ::
::
::

#### getAll
::field{name="getAll" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:list'
  ---
  #title
  Obter Todas as Fontes

  #description
  Recupera um array de todas as fontes nativas registradas.
  <br>
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`ISource[]`** — Um array de todos os objetos de fonte registrados.

  ```js
  const allSources = manager.sources.getAll();
  console.log('Fontes nativas disponíveis:', allSources.map(s => s.name));
  ```
  ::
::
::

#### loadFolder
::field{name="loadFolder" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:folder-open'
  ---
  #title
  Carregar Fontes da Pasta

  #description
  Carrega implementações de fontes nativas da pasta de fontes designada. Este método é chamado automaticamente durante a inicialização do `SourceManager`.
  <br>
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`Promise<void>`**

  ```js
  // Este método é chamado internamente.
  ```
  ::
::
::

#### isLinkMatch
::field{name="isLinkMatch" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:link'
  ---
  #title
  Verificar Correspondência de Link

  #description
  Verifica se uma determinada URL ou string de consulta corresponde a qualquer fonte nativa registrada.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="url" type="string" required}
    A URL ou string de consulta a ser verificada.
    ::
    ::field{name="_unusedSourceParam" type="string"}
    Parâmetro interno, tipicamente não usado diretamente.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`[boolean, string | null]`** — Uma tupla onde o primeiro elemento indica se uma correspondência foi encontrada (`true`/`false`), e o segundo elemento é o nome da fonte correspondente (ou `null` se não houver correspondência).

  ```js
  const [isMatch, sourceName] = manager.sources.isLinkMatch('https://open.spotify.com/track/123');
  if (isMatch) {
    console.log(`Link corresponde à fonte: ${sourceName}`);
  }
  ```
  ::
::
::

## Exemplos de Uso

::card{icon="lucide:code"}
#title
Acessando e Usando Fontes

#description
Exemplo de como acessar e usar fontes nativas através do `SourceManager`.

#content
```js
// Acesse a instância do SourceManager
const sourceManager = manager.sources;

// Verifique se a fonte Spotify está disponível
if (sourceManager.has('Spotify')) {
  const spotify = sourceManager.get('Spotify');
  console.log(`Nome da fonte Spotify: ${spotify.name}`);

  // Pesquise por uma faixa no Spotify
  const searchResults = await spotify.search('spsearch:Never Gonna Give You Up');
  console.log('Resultados da pesquisa do Spotify:', searchResults);

  // Carregue uma faixa do Spotify por URL
  const trackData = await spotify.load('https://open.spotify.com/track/4PTG3Z6ehFOyPTL5XdNygQ');
  console.log('Faixa do Spotify carregada:', trackData);
}

// Obtenha todas as fontes registradas
const allAvailableSources = sourceManager.getAll();
console.log('Todas as fontes nativas disponíveis:', allAvailableSources.map(s => s.name));
```
::

::button-link{right-icon="lucide:arrow-right" to="/api/manager"}
  Continuar para Manager
::