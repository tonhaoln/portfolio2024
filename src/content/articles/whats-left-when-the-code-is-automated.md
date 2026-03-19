---
title: "What's left when the code is automated"
description: "Six commits and I haven't written a single line of code. The context building became the architecture."
date: '2026-03-18'
category: 'On building'
ogImage: '/images/feb-og.png'
---

By the literal definition, if you're prompting AI to write all the code, you're vibe coding.

And the implications are real. At a short founders panel I attended recently, the topic of engineers spending double the time fixing AI-generated code came up with diverging opinions.

I'm no engineer by trade, but I've been building with AI for the last 12 months, using Claude Code daily. From manual prompting, ask mode and TodoWrite to automated feature development workflows, subagents, skills and more. I went through most of it. Package that up and put it in someone's hands with no real repetition and it's overwhelming. It still is for me sometimes.

![Placeholder: screenshot of canvas producing a markdown file in February's sidebar](/images/feb-article-img-1.png)

Comparing someone with hundreds of thousands of lines of code and experience with edge cases no one would think about, versus vibe coding. Of course the debate will continue. I get both sides.

But I can't stop thinking coding with AI was built by design. When code is figured out completely, everything else comes after. A friend put it simply when I brought this up: "Think agriculture. Full automation. Farmers would have thought the same thing."

[Steve Yegge said recently](https://www.oreilly.com/radar/steve-yegge-wants-you-to-stop-looking-at-your-code/): "Code is a liquid. You spray it through hoses. You don't freaking look at it." He also said taste is the moat. Companies will waste millions of tokens building software with no direction. An entrepreneur with good ideas can build something that matters.

I've been thinking about this. Because I just shipped a canvas feature for a writing tool I'm building. An AI agent that sits on the canvas while you brainstorm, watches what you're doing, and contributes when it has something worth saying. When the session ends, it synthesises everything into a structured file that keeps your notes as the spine.

Six commits and I haven't written a single line of code. Maybe one or two Tailwind class swaps.

So yeah, I vibe coded it. But it wasn't prompt it, accept it, ship it. The context building became the architecture.

<video src="/video/feb-video-1.mp4" autoplay muted loop playsinline></video>

Below I break down the build journey. I kept the details for my own reference, iteration on future builds, and hopefully to add value to other builders like me.

Here's how it went building canvas mode for February, a local-first writing tool with silent Git versioning and AI chat.

### The agent called it a second product

The idea started in a brainstorm session with a different AI agent. That one suggested cloud multiplayer infrastructure, a different framework and real-time sync. All breaking my project's stack rules. It validated every step with no pushback on scope, stack or whether this was the right thing to build.

When I brought the same concept to my build agent, it pushed back hard and called it "a second product wearing February's coat." Same idea with a completely different outcome. The variable was the context I'd built with this agent over weeks of working together.

I pushed back on the pushback. If the canvas session produces a markdown file that lands in the sidebar alongside your other files, the loop is closed. In other words, the canvas was just a different way of generating the files that February is built around.

> "Make sure we are not just compliant."

The agent conceded, but I didn't just take the win. I pressure tested it: "Make sure we are not just compliant." I needed to know whether it actually changed its thinking or just folded. 

The decision felt real when it showed me what actually changed and how it understood what the canvas would produce. The cloud multiplayer infrastructure was still a concern, Next.js still wrong for the stack. But it got the core idea.

<video src="/video/feb-video-2.mp4" autoplay muted loop playsinline></video>

### A chatbot wearing a canvas costume

The first implementation had the agent dropping AI notes on the canvas in a column. They looked like chat responses arranged spatially. I thought: "that's not a thinking peer, that's a chatbot wearing a canvas costume."

So I asked: "what do human facilitators actually do?" We went and researched it. They don't add ideas. They group things, name clusters, draw connections, and ask one targeted question about a gap they've noticed. The most valuable move is organising and illuminating, not generating.

That research changed the agent design from participant to facilitator. It stopped dropping "here are three thoughts" and started asking things like "what's the unifying idea?"

> "That's not a thinking peer, that's a chatbot wearing a canvas costume."

![Placeholder: screenshot of the canvas agent behaving as facilitator with spatial notes](/images/feb-article-img-4.png)

### Borrowing from Granola at the right time

Then the session synthesis came up flat. The agent had it as a raw dump of sticky notes. Useful as a record, but not the point.

I'd been thinking about [Granola.ai](https://www.granola.ai/), the meeting notes tool where your notes are the breadcrumbs and the AI enriches what you flagged. I introduced it at that moment because the conversation needed it. The agent's response: "Granola changes things." That reference reframed the entire synthesis from a safety net to the core value of the feature.

The timing of that wasn't random. It was knowing what to introduce, and when.

![Placeholder: screenshot of the Granola-style session synthesis output](/images/feb-article-img-5.png)

### We over-engineered it

With the agent redesigned and the synthesis reframed, the feature was working. So naturally, we started tweaking it. Example ratios, silence thresholds, timer values, to name a few. Every change swung the agent's behaviour from too chatty to too quiet and back again.

I asked: "Are we over-engineering this?" We were. So we reverted to the post-research state. The original balance was right and every patch after made it worse.

### The core value got deprioritised

While continuing the build, the agent pushed session synthesis to "phase 2." I had to call it out. When a canvas session ends, the AI produces a structured summary of everything that happened. Your sticky notes are the spine, the AI fills in the themes and connections around them. That was the whole point of the feature, so I moved it back.

### What was the work?

Looking back, it's clear the code was automated but the work around it wasn't.

Pushing back when the agent miscategorised the scope. Catching the chatbot pattern before it shipped. Introducing Granola at the right time.

These weren't single moves. They followed a flow. Each exchange sharpened the next one, and by the end the agent was operating at a completely different level than at the start.

The agent's own words at the end of the build: "You had the clearer instinct about what the feature should feel like. I had the clearer view of what was technically feasible. The best outcomes came when you named the problem and I stopped patching."

> None of that is in the code, but all of it shaped the product.

And the more I build this way, the thinking becomes the work.
