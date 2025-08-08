---
title: SponsorBlockPlugin
description: "Referência da API para o SponsorBlockPlugin em Moonlink.js"
icon: 'lucide:shield-check'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:shield-check"}
#title
Classe SponsorBlockPlugin

#description
O `SponsorBlockPlugin` se integra ao plugin SponsorBlock Lavalink para fornecer funcionalidade para pular segmentos patrocinados em vídeos do YouTube. Ele também lida com o carregamento e o início de capítulos.
<br>

::alert{type="info" icon="lucide:info"}
Este plugin requer um servidor Lavalink executando o plugin `SponsorBlock`.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome do plugin: `sponsorblock-plugin`. |
| `capabilities` | `string[]` | Atualmente vazio, mas pode declarar capacidades relacionadas ao SponsorBlock. |
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

#### getCategories
::field{name="getCategories" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:list'
  ---
  #title
  Obter Categorias

  #description
  Recupera as categorias do SponsorBlock atualmente configuradas para um servidor.
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
  • **`Promise<string[]>`** — Um array de strings de categoria.

  ```js
  const categories = await plugin.getCategories('123456789');
  console.log('Categorias do SponsorBlock:', categories);
  ```
  ::
::
::

#### setCategories
::field{name="setCategories" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:settings'
  ---
  #title
  Definir Categorias

  #description
  Define as categorias do SponsorBlock para um servidor.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="guildId" type="string" required}
    O ID do servidor.
    ::
    ::field{name="categories" type="string[]" required}
    Um array de strings de categoria para definir.
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
  await plugin.setCategories('123456789', ['sponsor', 'selfpromo']);
  ```
  ::
::
::

#### clearCategories
::field{name="clearCategories" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:eraser'
  ---
  #title
  Limpar Categorias

  #description
  Limpa todas as categorias do SponsorBlock configuradas para um servidor.
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
  await plugin.clearCategories('123456789');
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
  Manipula eventos de entrada do node Lavalink relacionados ao SponsorBlock. Este método é chamado internamente pelo Node.
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
