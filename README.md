# Astro Enhanced Starter Kit

```sh
pnpm create astro@latest -- --template basics
pnpm astro add tailwind mdx alpinejs preact react solid svelte vue partytown
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

An enhanced Astro project based on the basics template with additional integrated frameworks and tools.

![astro-enhanced-kit](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├── astro.config.mjs
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── global.css
├── svelte.config.js
└── tsconfig.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## ✨ Integrated Tools & Frameworks

This enhanced starter kit includes:

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[Alpine.js](https://alpinejs.dev/)** - Lightweight JavaScript framework
- **[React](https://reactjs.org/)** - UI component library
- **[Preact](https://preactjs.com/)** - Fast 3kB alternative to React
- **[Solid](https://www.solidjs.com/)** - Declarative UI library
- **[Svelte](https://svelte.dev/)** - Component framework with no runtime
- **[Vue](https://vuejs.org/)** - Progressive JavaScript framework
- **[Partytown](https://partytown.builder.io/)** - Relocate resource intensive scripts

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🧠 Framework Usage

### Using MDX

Create `.mdx` files in the `pages` directory to use MDX:

```mdx
---
title: My MDX Page
---

# Hello from MDX!

<div className="bg-blue-500 text-white p-4">This uses Tailwind CSS classes</div>
```

### Using UI Frameworks

You can use any of the integrated frameworks in `.astro` files:

```astro
---
import MyReactComponent from '../components/react/MyComponent.jsx';
import MySvelteComponent from '../components/svelte/MyComponent.svelte';
import MyVueComponent from '../components/vue/MyComponent.vue';
import MySolidComponent from '../components/solid/MyComponent.jsx';
import MyPreactComponent from '../components/preact/MyComponent.jsx';
---

<MyReactComponent />
<MySvelteComponent />
<MyVueComponent />
<MySolidComponent />
<MyPreactComponent />
```

### Using Alpine.js

```html
<div x-data="{ count: 0 }">
  <button x-on:click="count++">Increment</button>
  <span x-text="count"></span>
</div>
```

### Using Partytown

Simply add the `type="text/partytown"` attribute to any script you want to offload to a web worker:

```html
<!-- This script will be handled by Partytown -->
<script type="text/partytown" src="fancy-analytics.js"></script>

<!-- Regular script -->
<script src="critical-script.js"></script>
```

You can check your browser's Network tab to confirm that Partytown is intercepting these requests.

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs/)
- [Astro Discord Server](https://astro.build/chat)
