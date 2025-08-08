---
title: PluginManager
description: "Referência da API para a classe PluginManager em Moonlink.js"
icon: 'lucide:puzzle'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:puzzle"}
#title
Classe PluginManager

#description
A classe `PluginManager` é responsável por gerenciar e carregar plugins que estendem a funcionalidade do Moonlink.js, principalmente integrando-se com plugins do lado do servidor Lavalink. Ela lida com o registro, carregamento e descarregamento de instâncias `AbstractPlugin`.
<br>
```js
manager.pluginManager
```
::

::alert{type="info" icon="lucide:info"}
O `PluginManager` é acessado através da propriedade `pluginManager` da instância `Manager`. Você não precisa criá-lo manualmente.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `manager` | `Manager` | Referência à instância do Manager. |

## Métodos

#### registerPlugin
::field{name="registerPlugin" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:plus-circle'
  ---
  #title
  Registrar Plugin

  #description
  Registra uma nova classe de plugin com o PluginManager. Plugins registrados podem então ser carregados para nodes que os suportam.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="pluginClass" type="new (...args: any[]) => AbstractPlugin" required}
    O construtor da classe do plugin a ser registrado.
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
  // Exemplo de registro de um plugin personalizado
  class MyCustomPlugin extends AbstractPlugin {
    // ... implementação
  }
  manager.pluginManager.registerPlugin(MyCustomPlugin);
  ```
  ::
::
::

#### loadPluginsForNode
::field{name="loadPluginsForNode" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:download'
  ---
  #title
  Carregar Plugins para Node

  #description
  Carrega plugins registrados para um node específico com base nos plugins relatados pelo servidor Lavalink. Este método é chamado internamente pelo Node.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` para a qual os plugins devem ser carregados.
    ::
    ::field{name="lavalinkPlugins" type="INodeInfo['plugins']" required}
    Um array de plugins relatados pelo servidor Lavalink.
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
  // Este método é chamado internamente pela classe Node.
  // Você geralmente não precisará chamá-lo diretamente.
  ```
  ::
::
::

#### unloadPluginsForNode
::field{name="unloadPluginsForNode" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:upload'
  ---
  #title
  Descarregar Plugins para Node

  #description
  Descarrega todos os plugins atualmente carregados para um node específico. Este método é chamado internamente pelo Node.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` da qual os plugins devem ser descarregados.
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
  // Este método é chamado internamente pela classe Node.
  // Você geralmente não precisará chamá-lo diretamente.
  ```
  ::
::
::

#### updateNodePlugins
::field{name="updateNodePlugins" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:refresh-cw'
  ---
  #title
  Atualizar Plugins do Node

  #description
  Atualiza os plugins carregados para um node com base em suas últimas informações relatadas. Este método lida com o carregamento de novos plugins, descarregamento de plugins removidos e atualização de plugins existentes.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    A instância `Node` para a qual os plugins devem ser atualizados.
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
  // Este método é chamado internamente pela classe Node quando suas informações são atualizadas.
  // Você geralmente não precisará chamá-lo diretamente.
  ```
  ::
::
::

## Exemplo de Uso

::card{icon="lucide:code"}
#title
Registro Básico de Plugin

#description
Exemplo de como registrar um plugin personalizado com o PluginManager.

#content
```js
import { AbstractPlugin } from 'moonlink.js'; // Assumindo que AbstractPlugin é exportado

class MyCustomPlugin extends AbstractPlugin {
  public name = 'MyCustomPlugin';
  public capabilities = ['my-custom-capability'];

  load(node) {
    console.log(`MyCustomPlugin carregado para o node ${node.identifier}`);
    // Adicione lógica personalizada aqui
  }

  unload(node) {
    console.log(`MyCustomPlugin descarregado do node ${node.identifier}`);
    // Lógica de limpeza aqui
  }
}

// No seu arquivo principal do bot, após a inicialização do gerenciador:
manager.pluginManager.registerPlugin(MyCustomPlugin);

// Agora, se um node Lavalink relatar 'my-custom-capability', este plugin será carregado.
```
::

::button-link{right-icon="lucide:arrow-right" to="/api/plugins/abstract-plugin"}
  Continuar para AbstractPlugin
::
