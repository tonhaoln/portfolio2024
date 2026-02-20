# Portfolio 2026 — Project Overview

## What this is

A personal portfolio for Antonio Almeida. Product designer and developer. Eleven years of client delivery. The site needed to reflect both sides of that — considered design and clean production code — without one undermining the other.

Built from scratch, solo, with AI as co-pilot. Which is also the story the portfolio tells.

---

## Goals

- Show work clearly, without the site getting in the way
- Feel personal and considered, not templated
- Load fast, stay simple, scale without friction
- Be something worth showing as a piece of work in itself

---

## Stack decisions

**Astro** — static output by default, content collections for projects and articles, minimal JavaScript. Chose it because the site is mostly content and doesn't need a runtime.

**No UI framework, no component library** — everything hand-rolled. Fewer abstractions meant fewer surprises and full control over the output.

**Adobe Fonts** — Neue Haas Grotesk for UI and headings, Freight Text Pro for body. Two-font system: one does structure, one does reading. The pairing was the first decision and everything else followed from it.

**CSS custom properties as design tokens** — one source of truth for spacing, colour, and type. Made consistency enforceable rather than aspirational.

**Markdown content collections** — projects and articles live as `.md` files. Adding new work means adding a file, nothing else.

---

## Design decisions

**Palette** — near-white background, near-black text, one red accent. The accent is used sparingly: links, visit buttons, the two fixed lines at the top and bottom of every page. Those lines are the only persistent decoration on the site.

**Spacing system** — four tokens do all the work: `section-gap`, `row-gap`, `col-gap`, `item-gap`. Every layout decision traces back to one of these. Mobile reduces the two largest; everything else stays the same.

**Full-viewport hover** — list items (projects, writing, build, experience) expand their hover state to the full viewport width using a CSS pseudo-element. Gives the interaction a physical quality without any JavaScript.

**Image spacing** — images in project and article content always get `section-gap` above and below. Consecutive images get `row-gap` between them. Text-to-text is `row-gap`. One rule: everything is `section-gap` unless it's paragraph to paragraph.

**No decorative animation** — the only motion on the site is the card image zoom on hover (scale 1.05, 0.4s), the email copy bubble, and the nav hover backgrounds. All three are functional, not decorative.

---

## Challenges

**Image spacing system** — the hardest CSS problem on the project. Getting margin-top and margin-bottom not to stack between text and images required switching from a margin-bottom model to a margin-top model, then using `:has()` selectors with sibling combinators to handle adjacency cases. Ended up much simpler once the mental model shifted.

**Hover formula across all viewports** — the full-viewport hover pseudo-element needed to work at both desktop and mobile without separate media query overrides. Solved with `min()`: one formula that picks the right value at any viewport width.

**Fixed nav alignment** — `position: fixed` is relative to the viewport, not the layout container. Keeping the nav visually aligned with the page at all widths required the same offset calculation as the hover formula.

**hr visibility** — the footer divider was invisible on project and article pages. The footer used `align-items: flex-start` which collapsed the `<hr>` to zero width. Fixed with `width: 100%` on `hr`. Small bug, specific cause.

**Scope creep temptation** — the site stayed simple because we kept asking whether each addition was necessary. `thumbBg` got removed. Bullet list styling stayed minimal. The More Projects and More Writing sections only needed three CSS rules each.

---

## How it paced

Started with design tokens and global styles — the foundation before any visible work. Then the home page, then the project layout, then the article layout. Each stage built on shared patterns rather than reinventing them.

Content came in waves. Work180 first, as the anchor project. POD Combined second, which surfaced the need for bullet list styling and confirmed the image spacing system worked across different content structures.

The biggest time was spent on things users will never consciously notice: spacing, hover states, the gap between a paragraph and an image. That's usually where the difference between a rough build and a finished one lives.

---

## What the site carries

The portfolio is its own argument. It's a static site built without a framework, styled without a library, deployed from markdown files. Fast, legible, maintainable. The same values Antonio brings to product work.

The content and the medium are aligned. A designer who builds. A site that was designed and built.

---

## What's still open

- `favicon.svg`
- `og-default.jpg` for social sharing
- Build vs Buy URL in the build section
- A second article to activate the More Writing section
