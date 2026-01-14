---
title: Moonlink.js v5 | The Definitive Library for Discord Music Bots with Node.js
navigation: false
description: Build powerful Discord music bots with Moonlink.js, a feature-rich and flexible library for Node.js and Lavalink. Offers advanced queue management, audio filters, and integration with Spotify, Deezer, and more.
---
::vhs-intro
::

<div style="display: flex; justify-content: center;">

![Moonlink](https://moonlink.js.org/moonlink_banner.png){lifted}

</div>

::alert{type="note" icon="lucide:pencil"}
**Heads up:** Only use with `nodejs` version `v18.x.x` or higher.
::

::hero
---
announcement:
  title: 'New Release v5.0.0'
  icon: '🎉'
  to: https://github.com/Ecliptia/moonlink.js/releases
  target: _blank
actions:
- name: Get Started
  to: /getting-started/introduction
  leftIcon: lucide:arrow-up-right
- name: GitHub
  variant: outline
  to: https://github.com/Ecliptia/moonlink.js/
  leftIcon: 'lucide:github'
  mobileRight: 'top'
---

#title
Moonlink.js v5 — Does the leaf even fall? 🍃🌙

#description
Moonlink.js v5 is a specialized client for Node.js that communicates with Lavalink nodes. It handles WebSocket connections, REST requests, and manages player states. With a built-in local database for queues, it provides a structured and efficient way to control your bot's audio playback.
::

::hero-alt
---
announcement:
  title: 'NodeLink'
  icon: 'lucide:rocket'
  to: https://github.com/PerformanC/NodeLink
actions:
  - name: Learn More
    to: https://github.com/PerformanC/NodeLink
  - name: GitHub
    variant: ghost
    to: https://github.com/PerformanC/NodeLink
mobileRight: 'top'
---

#title
NodeLink — A alternative Lavalink

#description
A blazing-fast, alternative built entirely in Node.js. Lightweight, modular, and optimized for real-time audio performance. ⚡ Simpler. Faster. Node-Powered.

#right
<p align="center">
  <img
    src="https://moonlink.js.org/nodelink_banner.png"
    alt="NodeLink Banner"
    width="400"
    style="border-radius: 12px;"
  />
</p>
::  

# Features
> - `Queue Management`: Queue is integrated with a local database, to retrieve data if necessary.
> - `Audio Filters`: Apply various audio filters.
> - `Auto Resume`: Automatically resumes playing after a disconnect.
> - `Logging`: Logging options with log file support.
> - `Node Management`: Management of different Lavalink nodes.
> - `Filters Management`: Various audio filters like Equalizer, Karaoke, Timescale, Tremolo, Vibrato, Rotation, Distortion, Channel Mix, and LowPass.
> - `Player Management`: Manage player configurations and states.
> - `Plugin Management`: Lavalink plugin support.
> - `Structure`: Allows you to extend classes by complementing with your own functionalities.

## Need Help?
::hero-alt
---
announcement:
  title: 'Support'
  icon: 'lucide:pie-chart'
actions:
  - name: 
    to: https://discord.gg/bVz6ppZ3SP
    leftIcon: logos:discord
    variant: outline
---

#title
Questions or Problems?

#description
Get in touch with us! The best way to get help is by joining our support server on Discord.
::

## Found a Bug?

<p>If you found a bug and want to report it, please create an "Issue" on our GitHub. We will look into it as soon as possible to fix the problem.</p>
<br>

::button-link{left-icon="lucide:github" to="https://github.com/Ecliptia/moonlink.js/issues" target="_blank"}
  Report Bug on GitHub
::

<p>Want to contribute by fixing the problem or adding a new feature? Send a "Pull Request"! Your name will be forever registered in the project's code.</p>
<br>

::button-link{left-icon="lucide:github" to="https://github.com/Ecliptia/moonlink.js/pulls" target="_blank"}
  Submit a Pull Request
::

## Used By
::card
---
icon: 'lucide:bot-message-square'
icon-size: 26
horizontal: true
---
#title
Discord Bots that Use and Trust Moonlink.js

#description
A showcase for our amazing community

#content
::team-card-group
  ::team-card
  ---
  avatar: https://s3.galaxybot.app/media/brand/GalaxyBot.png
  center: false
  name: GalaxyBot
  title: "Used by over 90k guilds; Team: galaxybot.app"
  links:
    - icon: lucide:bot
      to: https://galaxybot.app/go/invite
    - icon: line-md:discord
      to: https://galaxybot.app/go/support
    - icon: lucide:unlink-2
      to: https://galaxybot.app
    - icon: lucide:users-round
      to: https://galaxybot.app/en/team
  ---
  ::
  ::team-card
  ---
  avatar: 
  center: false
  name: YADB (Yet Another Discord Bot)
  title: by Xotak
  links:
    - icon: line-md:github-loop
      to: https://framagit.org/xotak/yadb
    - icon: line-md:discord
      to: https://discord.com/oauth2/authorize?client_id=1174614219560341586&permissions=2033703774278&scope=bot+applications.commands
    - icon: material-symbols:docs-outline
      to: https://xotak.frama.io/yadb-docs/
  ---
  ::
  ::team-card
  ---
  avatar: https://camo.githubusercontent.com/1108dccb9fc7b98242def6ba2a98f76832dec5050f1384bcf2a6e94aa37e1bae/68747470733a2f2f692e696d6775722e636f6d2f39396d6e776a672e706e67
  center: false
  name: ComicallyBot
  title: by Comicallybad
  links:
    - icon: line-md:github-loop
      to: https://github.com/comicallybad/ComicallyBot
  ---
  ::
  ::team-card
  --- 
  avatar: https://github.com/khouwdevin/stalker-discord/raw/master/images/spy.png
  center: false
  name: stalker-discord
  title: by khouwdevin
  links:
    - icon: line-md:github-loop
      to: https://github.com/khouwdevin/stalker-discord
  ---
  ::
::

#footer
  ::alert{type="note" icon="lucide:pencil"}
  Want to add your bot to the list? Join our Discord or open a Pull Request at `docs/content/index.md`.
  ::
::

## Meet the Team

### Development Team & Collaborators
::team-card-group
  ::team-card
  ---
  center: false
  avatar: https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNmE5NDVhYjJiNzk1MjcyNzVjN2IwMWEyNWM1YzQ2NT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5hP6oyShhR-UWUi6KF-lA0cWmE_BJjvIFAwkYCGEZNo
  name: Lucas Morais (1Lucas1apk)
  title: Project Maintainer
  links:
    - icon: lucide:github
      to: https://github.com/1Lucas1apk
    - icon: lucide:coffee
      to: https://github.com/sponsors/1Lucas1apk
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://cdn.discordapp.com/avatars/882757043142950974/652c890e45a0c01b8daec3510b51596a.png?size=2048
  name: MotoG
  title: Creator & Designer
  links:
    - icon: lucide:github
      to: https://github.com/Moto65075
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/50148901?s=60&v=4
  name: Comicallybad
  title: Collaborator & Developer
  links:
    - icon: lucide:github
      to: https://github.com/comicallybad
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/76094069?v=4
  name: UnschooledGamer
  title: Collaborator
  links:
    - icon: lucide:github
      to: https://github.com/UnschooledGamer
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://cdn.discordapp.com/avatars/336885637934481409/371faca58eb88781b922d4967b91fab4.png?size=2048
  name: xotakfr
  title: Collaborator
  links:
    - icon: lucide:github
      to: https://github.com/xotakfr
  ---
  ::
::

### Our Amazing Contributors
::team-card-group
  ::team-card
  ---
  center: false
  avatar: https://images-ext-1.discordapp.net/external/EzD_6L_K28EMUN8RwQhssNUaZEyVN1H3dG6VIHczPvc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/389709853511122944/cd8fa0420ae13e16f5bfd87340da35d8.png?format=webp&quality=lossless&width=810&height=810
  name: iamforster
  title: Tester & Bug Hunter
  ---
  ::
  ::team-card
  ---
  center: false
  avatar: https://avatars.githubusercontent.com/u/88549470?s=60&v=4
  name: PiscesXD
  title: Ideas, Features, Fixes & Sponsor
  links:
    - icon: lucide:github
      to: https://github.com/PiscesXD
  ---
  ::
::

::alert{type="note" icon="lucide:pencil"}
  Join us and contribute to the v5 version of moonlink.js!
::
::alert{type="success" icon="lucide:lightbulb"}
  We thank everyone who joins the server and reports bugs, thus helping to make the project increasingly stable and amazing for the developer community.
::

::div{class="my-20 mx-auto max-w-4xl px-6 text-center"}
  <h2 class="mb-10 text-3xl font-bold tracking-tight md:text-4xl">amidst the hive 🐝</h2>

  ::div{class="space-y-6 text-lg italic leading-relaxed text-muted-foreground md:text-xl"}
    <p>
      i feel out of place<br>
      amidst the beehive…<br>
      they look at me<br>
      with disapproval in their eyes —<br>
      as if they could see<br>
      the secrets of my heart.
    </p>

    <p>
      they say i am a rebel<br>
      for not serving —<br>
      with devotion —<br>
      the queen bee.
    </p>

    <p>
      but if i serve,<br>
      what good will it do,<br>
      if it is not what my soul<br>
      has chosen to love?
    </p>

    <p>
      i wish i could fly,<br>
      free among the garden flowers,<br>
      without worrying about returning —<br>
      to the place i no longer know how to inhabit.
    </p>

    <p>
      but i believe that one day,<br>
      i will break this prison,<br>
      and i will finally be able to fly<br>
      wherever i want —<br>
      with my own wings and<br>
      my own direction.
    </p>
  ::

  ::div{class="mt-8 font-semibold not-italic text-foreground"}
    — [Geo](https://www.instagram.com/geovanazlw){target="_blank" class="hover:underline"}
  ::
::

::div{class="mt-20 mb-10 flex flex-col items-center justify-center space-y-4 border-t pt-10 text-center"}
  ::div{class="flex flex-wrap items-center justify-center gap-2 text-lg font-medium text-muted-foreground"}
    <span>Made with</span>
    :icon{name="lucide:heart" class="h-5 w-5 fill-current text-blue-500"}
    <span>and curiosity by</span>
    <span class="font-bold text-primary">Ecliptia</span>
  ::

  ::badge{variant="secondary" class="px-3 py-1 text-sm"}
    <span class="mr-2">Brazil</span>
    <span class="text-base">🇧🇷</span>
  ::
::
