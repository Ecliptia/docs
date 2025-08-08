---
title: SourceManager
description: "API reference for the SourceManager class in Moonlink.js"
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
SourceManager Class

#description
The `SourceManager` class is responsible for managing native audio sources like Spotify and Deezer within Moonlink.js. It handles the loading, registration, and matching of these sources, allowing the `Manager` to search and load tracks from them directly.
<br>
```js
manager.sources
```
::

::alert{type="info" icon="lucide:info"}
The `SourceManager` is accessed through the `sources` property of the `Manager` instance. You don't need to create it manually.
::

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `manager` | `Manager` | Reference to the Manager instance. |
| `sources` | `Record<string, ISource>` | An object containing all registered native sources, keyed by their name. |

## Methods

#### add
::field{name="add" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:plus-circle'
  ---
  #title
  Add Source

  #description
  Adds a new native source to the SourceManager. This method is primarily used internally during initialization to load built-in sources.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="source" type="ISource" required}
    The source object to add.
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
  // Used internally by Moonlink.js to load native sources.
  // You typically won't need to call this directly.
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
  Get Source

  #description
  Retrieves a registered native source by its name.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="name" type="string" required}
    The name of the source to retrieve.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`ISource | undefined`** — The source object if found, otherwise `undefined`.

  ```js
  const spotifySource = manager.sources.get('Spotify');
  if (spotifySource) {
    console.log(`Spotify source found: ${spotifySource.name}`);
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
  Has Source

  #description
  Checks if a native source with the given name is registered.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="name" type="string" required}
    The name of the source to check.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`boolean`** — `true` if the source is registered, `false` otherwise.

  ```js
  const hasDeezer = manager.sources.has('Deezer');
  if (hasDeezer) {
    console.log('Deezer source is available.');
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
  Remove Source

  #description
  Removes a registered native source from the SourceManager.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="name" type="string" required}
    The name of the source to remove.
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
  manager.sources.remove('Spotify');
  console.log('Spotify source removed.');
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
  Clear All Sources

  #description
  Removes all registered native sources from the SourceManager.
  <br>
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`void`**

  ```js
  manager.sources.clear();
  console.log('All native sources cleared.');
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
  Get All Sources

  #description
  Retrieves an array of all registered native sources.
  <br>
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`ISource[]`** — An array of all registered source objects.

  ```js
  const allSources = manager.sources.getAll();
  console.log('Available sources:', allSources.map(s => s.name));
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
  Load Sources from Folder

  #description
  Loads native source implementations from the designated sources folder. This method is called automatically during `SourceManager` initialization.
  <br>
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`Promise<void>`**

  ```js
  // This method is called internally.
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
  Check Link Match

  #description
  Checks if a given URL or query string matches any registered native source.
  <br>
  <h5>Parameters</h5>

  ::field-group
    ::field{name="url" type="string" required}
    The URL or query string to check.
    ::
    ::field{name="_unusedSourceParam" type="string"}
    Internal parameter, typically not used directly.
    ::
  ::
  ::

  ::card
  #title
  Returns & Example

  #description
  **Returns**
  • **`[boolean, string | null]`** — A tuple where the first element indicates if a match was found (`true`/`false`), and the second element is the name of the matching source (or `null` if no match).

  ```js
  const [isMatch, sourceName] = manager.sources.isLinkMatch('https://open.spotify.com/track/123');
  if (isMatch) {
    console.log(`Link matches source: ${sourceName}`);
  }
  ```
  ::
::
::

## Usage Example

::card{icon="lucide:code"}
#title
Accessing and Using Sources

#description
Example of how to access and use native sources through the `SourceManager`.

#content
```js
// Access the SourceManager instance
const sourceManager = manager.sources;

// Check if Spotify source is available
if (sourceManager.has('Spotify')) {
  const spotify = sourceManager.get('Spotify');
  console.log(`Spotify source name: ${spotify.name}`);

  // Search for a track on Spotify
  const searchResults = await spotify.search('spsearch:Never Gonna Give You Up');
  console.log('Spotify search results:', searchResults);

  // Load a Spotify track by URL
  const trackData = await spotify.load('https://open.spotify.com/track/4PTG3Z6ehFOyPTL5XdNygQ');
  console.log('Loaded Spotify track:', trackData);
}

// Get all registered sources
const allAvailableSources = sourceManager.getAll();
console.log('All available native sources:', allAvailableSources.map(s => s.name));
```
::

::button-link{right-icon="lucide:arrow-right" to="/api/manager"}
  Continue to Manager
::
