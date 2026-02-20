---
title: 'When building stopped being the bottleneck'
description: 'AI lowered the cost of building. It did not lower the cost of owning what you build.'
date: '2026-02-06'
category: 'Design diary'
tags: ['process']
---

I ignored the clone-this-SaaS posts for a while. You know the ones: screenshots of revenue dashboards, threads about rebuilding tools with AI in a few hours, mostly clickbait.

Six months ago I wouldn't have taken them seriously past prototype stage. Not that I don't believe in AI. I'd been hands-on with it daily, designing, building, deploying, so I had a sense of what production actually required.

AI could scaffold quickly, but getting from "this kind of works" to "this is safe to rely on" required reps: back and forth with agents, debugging, handling edge cases. The gap between prototype and production was still wide, and most of those posts weren't being honest about that.

![](/images/placeholder.jpg)

---

Then I read Gabriel Grieve's piece about rebuilding a Canny clone after his subscription jumped to $360 a month. What stayed with me wasn't the build log. It was a single line near the end: *"Some of those line items might be worth a weekend."* That one I believed, not because it promised easy money, but because it came at the end of a detailed build log from someone who'd worked through the actual friction.

The build vs buy question hasn't gone away, but one side of it has shifted. Two years ago, rebuilding a small internal tool meant weeks of friction. Today, for a specific category of products — well-understood tools, clear interfaces, limited domain complexity — the distance between idea and something usable has shrunk. The tooling got better, iteration loops tightened, and getting to production is a shorter walk than it used to be.

That said, established SaaS tools carry invisible features: edge-case handling, workflow glue, years of accumulated decisions you've stopped noticing. AI lowers the cost of writing code without removing the responsibility of running it.

> Execution got cheaper, but ownership didn't.

Six months ago I would have dismissed replacing a small subscription tool as anything more than an experiment. Now, in specific cases, I wouldn't, and that changes how I think about the question. If rebuilding is suddenly feasible, how do you decide if it's wise?

![](/images/placeholder.jpg)

---

That's what led me to build [build-vs-buy.antoniodesign.work](https://build-vs-buy.antoniodesign.work), a small tool of my own. Not a precise calculator, more a way to think through three variables: what you're paying, how complex the tool actually is, and who's doing the building. The output is a rough read, a nudge, something to surface the assumptions you'd otherwise skip.

> The value isn't really in the number but in being forced to sit with the question properly.

When building is no longer the primary bottleneck, judgment becomes the scarce thing. It's no longer just "can we build this?" It's whether you should, and whether you're ready to own what you build. Scattered across most people's billing history are a few line items that might genuinely be worth a weekend. Working out which ones is harder than the code.

![](/images/placeholder.jpg)
