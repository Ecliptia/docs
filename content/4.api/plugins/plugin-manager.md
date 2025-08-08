---
title: PluginManager
description: "API reference for the PluginManager class in Moonlink.js"
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
PluginManager Class

#description
The `PluginManager` class is responsible for managing and loading plugins that extend Moonlink.js's functionality, primarily by integrating with Lavalink server-side plugins. It handles the registration, loading, and unloading of `AbstractPlugin` instances.
<br>
```js
manager.pluginManager
```
::

::alert{type="info" icon="lucide:info"}
The `PluginManager` is accessed through the `pluginManager` property of the `Manager` instance. You don't need to create it manually.
::

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `manager` | `Manager` | Reference to the Manager instance. |

## Methods

#### registerPlugin
::field{name="registerPlugin" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:plus-circle'
  ---
  #title
  Register Plugin

  #description
  Registers a new plugin class with the PluginManager. Registered plugins can then be loaded for nodes that support them.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="pluginClass" type="new (...args: any[]) => AbstractPlugin" required}
    The constructor of the plugin class to register.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`void`**

  ```js
  // Example of registering a custom plugin
  class MyCustomPlugin extends AbstractPlugin {
    // ... implementation
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
  Load Plugins for Node

  #description
  Loads registered plugins for a specific node based on the Lavalink server's reported plugins. This method is called internally by the Node.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    The `Node` instance for which plugins should be loaded.
    ::
    ::field{name="lavalinkPlugins" type="INodeInfo['plugins']" required}
    An array of plugins reported by the Lavalink server.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`void`**

  ```js
  // This method is called internally by the Node class.
  // You typically won't need to call this directly.
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
  Unload Plugins for Node

  #description
  Unloads all plugins currently loaded for a specific node. This method is called internally by the Node.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    The `Node` instance from which plugins should be unloaded.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`void`**

  ```js
  // This method is called internally by the Node class.
  // You typically won't need to call this directly.
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
  Update Node Plugins

  #description
  Updates the plugins loaded for a node based on its latest reported information. This method handles loading new plugins, unloading removed ones, and updating existing ones.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="node" type="Node" required}
    The `Node` instance to update plugins for.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`void`**

  ```js
  // This method is called internally by the Node class when its info updates.
  // You typically won't need to call this directly.
  ```
  ::
::
::

## Usage Example

::card{icon="lucide:code"}
#title
Basic Plugin Registration

#description
Example of how to register a custom plugin with the PluginManager.

#content
```js
import { AbstractPlugin } from 'moonlink.js'; // Assuming AbstractPlugin is exported

class MyCustomPlugin extends AbstractPlugin {
  public name = 'MyCustomPlugin';
  public capabilities = ['my-custom-capability'];

  load(node) {
    console.log(`MyCustomPlugin loaded for node ${node.identifier}`);
    // Add custom logic here
  }

  unload(node) {
    console.log(`MyCustomPlugin unloaded from node ${node.identifier}`);
    // Clean up logic here
  }
}

// In your main bot file, after manager initialization:
manager.pluginManager.registerPlugin(MyCustomPlugin);

// Now, if a Lavalink node reports 'my-custom-capability', this plugin will be loaded.
```
::

::button-link{right-icon="lucide:arrow-right" to="/api/plugins/abstract-plugin"}
  Continue to AbstractPlugin
::
