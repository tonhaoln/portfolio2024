---
title: 'When building stopped being the bottleneck'
description: 'AI lowered the cost of building. It did not lower the cost of owning what you build.'
date: '2026-02-06'
category: 'Design diary'
---

I ignored the clone-this-SaaS posts for a while. You know the ones: screenshots of revenue dashboards, threads about rebuilding tools with AI in a few hours, mostly clickbait.

Six months ago I wouldn't have taken them seriously past prototype stage. Not that I don't believe in AI. I'd been hands-on with it daily, designing, building, deploying, so I had a sense of what production actually required.

AI could scaffold quickly, but getting from "this kind of works" to "this is safe to rely on" required reps: back and forth with agents, debugging, handling edge cases. The gap between prototype and production was still wide, and most of those posts weren't being honest about that.

![Placeholder — screenshot of clone-this-SaaS post](/images/w180-img-1.png)

Then I read [Gabriel Grieve's piece](https://www.linkedin.com/posts/gabrielgrieve_dev-diary-building-a-canny-clone-in-production-activity-7429373964776374273-srYs) about rebuilding a Canny clone after his subscription jumped to $360 a month. What stayed with me wasn't the build log. It was a single line near the end: *"Some of those line items might be worth a weekend."* That one I believed, not because it promised easy money, but because it came at the end of a detailed build log from someone who'd worked through the actual friction.

The build vs buy question hasn't gone away, but one side of it has shifted. Two years ago, rebuilding a small internal tool meant weeks of friction. Today, for well-understood tools with clear interfaces, the distance between idea and something usable has shrunk. The tooling got better, iteration loops tightened, and getting to production is a shorter walk than it used to be.

That said, established SaaS tools carry invisible features: edge-case handling, workflow glue, years of accumulated decisions you've stopped noticing. AI lowers the cost of writing code without removing the responsibility of running it.

> Execution got cheaper, but ownership didn't.

That shift is what led me to build [aweekend.antoniodesign.work](https://aweekend.antoniodesign.work/). A quick estimate to start the conversation, not end it — what you're paying, how complex the tool actually is, and who's doing the building.

![Placeholder — screenshot of build-vs-buy tool](/images/w180-img-2.png)

> Scattered across most people's billing history are a few line items that might genuinely be worth a weekend.

Working out which ones is harder than the code.
