---
title: WebSocket
description: "Referência da API para o cliente WebSocket personalizado em Moonlink.js"
icon: 'lucide:message-circle'
authors:
  - avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF2YXRhci5jb20vYXZhdGFyL2E2YTk0NWFhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
    name: Lucas Morais Rodrigues
    username: 1Lucas1apk
    to: https://github.com/1Lucas1apk
    target: _blank
---

::card{icon="lucide:message-circle"}
#title
Classe WebSocket

#description
A classe `WebSocket` em Moonlink.js é uma implementação personalizada de um cliente WebSocket, estendendo o `EventEmitter` do Node.js. Ela lida com o protocolo WebSocket de baixo nível para comunicação com servidores Lavalink.
<br>

::alert{type="info" icon="lucide:info"}
Esta classe é usada principalmente internamente pelo Moonlink.js para comunicação de node e geralmente não se destina ao uso direto pelos consumidores da biblioteca.
::

## Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `url` | `URL` | A URL do servidor WebSocket. |
| `headers` | `Record<string, string>` | Cabeçalhos enviados durante o handshake do WebSocket. |
| `connected` | `boolean` | Indica se o WebSocket está atualmente conectado. |

## Métodos

#### constructor
::field{name="constructor" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:wrench'
  ---
  #title
  Construtor

  #description
  Cria uma nova instância WebSocket e inicia a conexão.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="url" type="string" required}
    A URL do servidor WebSocket (ex: `ws://localhost:2333/v4/websocket`).
    ::
    ::field{name="options" type="Object"}
    Opcional: Opções de configuração.
    ::
    ::field{name="options.headers" type="Record<string, string>"}
    Opcional: Cabeçalhos personalizados para enviar durante o handshake.
    ::
  ::
  ::

  ::card
  #title
  Retornos e Exemplo

  #description
  **Retornos**
  • **`WebSocket`**

  ```js
  // Usado internamente pela classe Node
  // const socket = new WebSocket('ws://localhost:2333/v4/websocket', { headers: { Authorization: 'youshallnotpass' } });
  ```
  ::
::
::

#### send
::field{name="send" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:send'
  ---
  #title
  Enviar Dados

  #description
  Envia dados pela conexão WebSocket.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="data" type="string | Buffer" required}
    Os dados a serem enviados (string ou Buffer).
    ::
    ::field{name="cb" type="(err?: Error) => void"}
    Opcional: Uma função de callback a ser chamada quando a operação de envio for concluída.
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
  // Usado internamente pela classe Node
  // socket.send(JSON.stringify({ op: 'play', /* ... */ }));
  ```
  ::
::
::

#### close
::field{name="close" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:x-circle'
  ---
  #title
  Fechar Conexão

  #description
  Fecha a conexão WebSocket.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="code" type="number" defaultValue="1000"}
    Opcional: O código de fechamento do WebSocket.
    ::
    ::field{name="reason" type="string" defaultValue="''"}
    Opcional: Um motivo para fechar a conexão.
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
  // Usado internamente pela classe Node
  // socket.close(1000, 'Fechamento Normal');
  ```
  ::
::
::

#### addEventListener
::field{name="addEventListener" type="method"}
::stack
  ::card
  ---
  icon: 'lucide:bell'
  ---
  #title
  Adicionar Ouvinte de Eventos

  #description
  Registra um ouvinte de eventos para eventos WebSocket.
  <br>
  <h5>Parâmetros</h5>

  ::field-group
    ::field{name="event" type="string" required}
    O nome do evento (ex: `open`, `message`, `close`, `error`).
    ::
    ::field{name="listener" type="(...args: any[]) => void" required}
    A função de callback para o evento.
    ::
    ::field{name="options" type="{ once?: boolean }"}
    Opcional: Opções para o ouvinte (ex: `once: true` para um ouvinte de uma única vez).
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
  // Usado internamente pela classe Node
  // socket.addEventListener('message', (event) => console.log('Recebido:', event.data));
  ```
  ::
::
::

## Eventos

A classe `WebSocket` estende `EventEmitter` e emite os seguintes eventos:

| Evento | Descrição | Parâmetros |
|-------|-------------|------------|
| `open` | Emitido quando a conexão WebSocket é estabelecida. | `void` |
| `message` | Emitido quando uma mensagem é recebida do servidor. | `{ data: string | Buffer }` |
| `close` | Emitido quando a conexão WebSocket é fechada. | `{ code: number, reason: string }` |
| `error` | Emitido quando ocorre um erro. | `{ error: Error }` |
| `ping` | Emitido quando um frame de ping é recebido. | `void` |
| `pong` | Emitido quando um frame de pong é recebido. | `void` |

## Exemplo de Uso

::card{icon="lucide:code"}
#title
Uso Básico

#description
Exemplo de como a classe WebSocket é usada internamente pelo Node.
<br>
<h5>Exemplo de Código</h5>

#content
```js
// Esta é uma classe interna, o uso direto geralmente não é recomendado.
// Exemplo de como é usada dentro da classe Node:

// No método connect do Node:
// this.socket = new WebSocket(
//   `ws${this.secure ? "s" : ""}://${this.address}/${this.pathVersion}/websocket`,
//   {
//     headers: {
//       Authorization: this.password,
//       "User-Id": this.manager.options.clientId,
//       "Client-Name": this.manager.options.clientName,
//     },
//   }
// );
// this.socket.addEventListener('open', this.open.bind(this), { once: true });
// this.socket.addEventListener('close', this.close.bind(this), { once: true });
// this.socket.addEventListener('message', this.message.bind(this));
// this.socket.addEventListener('error', this.error.bind(this));

// No método message do Node (lidando com dados de entrada):
// this.socket.send(JSON.stringify({ op: 'pong' }));

// No método close do Node:
// this.socket.close();
```

#footer
Este exemplo demonstra operações básicas usando a classe WebSocket.
::
