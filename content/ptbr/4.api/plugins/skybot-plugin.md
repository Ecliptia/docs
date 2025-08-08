---
title: SkybotPlugin
description: "Referência da API para o SkybotPlugin em Moonlink.js"
icon: 'lucide:bot'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:bot"}
#title
Classe SkybotPlugin

#description
O `SkybotPlugin` se integra ao plugin DuncteBot Lavalink para fornecer recursos de pesquisa adicionais para várias fontes diretas, incluindo conteúdo especializado. Ele declara uma ampla gama de recursos de pesquisa e diretos.
<br>

::alert{type="info" icon="lucide:info"}
Este plugin requer um servidor Lavalink executando o plugin `DuncteBot`.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `name` | `string` | O nome do plugin: `DuncteBot-plugin`. |
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
