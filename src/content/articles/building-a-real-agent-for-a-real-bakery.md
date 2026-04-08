---
title: "Building a Real Agent for a Real Bakery"
description: "94,633 sales records, one bakery owner, and the line where the agent's job ends and judgment begins."
date: '2026-04-09'
category: 'On agents'
---

Mabel is an artisan bakery in East Ballina, on the NSW North Coast. Josh, the owner, makes everything from sourdough to croissants to beef pies. Every week, the same decision: what to make, how many, and when.

His words: *"The numbers are adjusted by a mix of data and feel."*

Josh has the intuition but the patterns sitting in ten months of Square data would take hours to pull apart and a problem worth solving.

![Josh's original message — the conversation that started this](/images/feb-article-img-4.png)

## The spike

The spike was working. Claude was processing Square transaction data, reasoning about weekly averages, weighting recent weeks and factoring in public holidays.

Except the numbers were drifting half the time.

The problem was I'd given Claude the precision task. It was reasoning about quantities and landing on different numbers each time. The spike had already shown me what Aviato's four-layer architecture puts clearly: a Layer 2 agent wraps an LLM in code. The LLM is a component. The agent is the system around it. Code computes. Claude narrates. Mabel decides.

![Side-by-side — spike output vs final output](/images/feb-article-img-4.png)

With the architecture corrected, the next question was the forecast method. One task for Claude: look at 94,633 transaction line items across ten months of actual trading, and recommend the best forecasting method.

The answer was simpler than I expected.

**4-week rolling average by day-of-week, per product, equal weights.**

To forecast Donuts for next Tuesday: average the last four Tuesdays. Josh can verify any number in 30 seconds.

![Rolling average for one product — four Tuesdays, one number](/images/feb-article-img-4.png)

The data also surfaced two things that guided everything after.

Zeros are ambiguous. A zero doesn't mean no demand — it means Josh didn't bake it that day, or sold out early. The rolling average uses only the last four weeks with non-zero sales.

Some ceilings are production limits, not demand limits. Seeded Loaf on Thursdays never exceeded 6 units — not once. The system can't know if that's demand or a fixed bake quantity. Only Josh knows.

Both cases pointed to the same thing: the system could detect the signal but not interpret it. Only Josh could do that. So the system flags it. Josh decides. That boundary held across every design decision that followed.

## What I got wrong, and what I moved

**Moving computation out of the prompt.** The original design had the formula inside Claude's prompt — start with the 4-week average, clamp to bounds, round to nearest 5. Claude was instructed to follow it. At any temperature, Claude can drift on computation across runs. The fix: move every calculation into code. Claude receives a fixed number. It can't change what doesn't exist in its context.

The guardrail went from "Claude is told not to change the number" to "there is no number for Claude to change."

![Code snippet — computation moved out of prompt into deterministic code](/images/feb-article-img-4.png)

**Category trends through the back door.** The forecasting session had explicitly excluded category trends — tested as a signal, degraded accuracy on every item. But the design had Claude narrating them anyway. "Croissants are down 16% this week — worth watching." That's a signal the forecast already decided didn't matter. It has the grammar of advice but not the grounding.

Category trends still appear in the report as a number. Code prints them. Claude doesn't narrate them.

> The guardrail went from "Claude is told not to change the number" to "there is no number for Claude to change."

**The feedback loop data poisoning risk.** The original design assumed silence meant compliance — no reply from Josh meant produced equals recommended. Josh is in a bakery at 3am. He won't reply most days. After eight weeks the produced column would be mostly fabricated. The waste metric would look like it's working. It wouldn't be.

Silence means null. Never assumed. Never backfilled. The system depends only on what Square confirms automatically. Everything else adds resolution when available. Its absence doesn't break anything.

## The build

By now, Claude Code had everything it needed. Design decisions, spike environment, documentation as the source of truth. Seven phases, each with a gate. Pass the criteria, move to the next.

The plan said 29 active products. The first sync told a different story: 67,189 line items rejected, and buried in those rejections were pies, sausage rolls, quiche, toasties, filled rolls. Real production items Josh makes every day.

The decision was immediate: everything in. A forecast Josh ignores is harmless. A forecast that doesn't exist can't help him. The registry went from 29 to 56 products.

![Terminal or log — the rejected line items discovery, 29 to 56](/images/feb-article-img-4.png)

The forecasting engine is a pure function. Sales data in, quantities and flags out. The 4-week rolling average with non-zero observations, outlier exclusion, floor and ceiling bounds — implemented exactly as designed.

Then the pipeline. Square sync, forecasting engine, Claude narration, output rendering — running in sequence every Friday at 3am AEST.

The failure hierarchy was a deliberate decision. Square down: warn and continue with stale data — a late sync is better than no forecast. Weather API down: report posts without the weather line — Josh doesn't need it to make decisions. Anything else: the pipeline stops. Nothing posts. No partial output.

The second build took four hours. The first build was the education.

> The system could detect the signal but not interpret it. Only Josh could do that.

## What Josh gets

Every Friday at 3am, the pipeline runs.

Square pulls the previous week's transaction data. The forecasting engine computes the 4-week rolling average by day-of-week, per product. Claude receives the pre-computed numbers and narrates them in plain English. The report lands in Discord — Josh's phone, every Friday morning.

![The actual Friday Discord report Josh receives](/images/feb-article-img-4.png)

He sees what to make, how many, and when. The numbers are grounded in the last four weeks of his own sales. He can verify any of them in 30 seconds.

But accuracy alone isn't the gate.

Two conditions, both must hold. The system lands within validated accuracy ranges. And Josh references the report as his starting point each week. A forecast he ignores is not a working system. It's a spreadsheet nobody opens.

That second condition is what makes this real. The system earns trust by being consistently right and consistently explainable. If it isn't — if after eight weeks the signal isn't reliable — we pause and iterate.

## What comes next

*"The two main variables to control week-to-week for any food business are Cost of Goods as a percentage of sales, and Wages as a percentage of sales."*

That's Josh. That's what the roadmap builds toward. A system that moves those two numbers — layer by layer, each one depending on the one before it being stable.

> A forecast he ignores is not a working system. It's a spreadsheet nobody opens.

**Layer 1 — Forecast.** What we just built.

**Layer 2 — Recipes.** Connect products to ingredients and production time. The bridge between "how many to make" and "what to buy."

**Layer 3 — Ordering.** Forecast × recipes = what to order. Turns "make 95 beef pies" into "buy 12kg mince, 8kg flour." The first time the system touches cost of goods directly.

**Layer 4 — Costs.** Supplier invoices × recipes = margin per product. Flags cost changes before they erode margin silently.

**Layer 5 — Wages.** Forecast × production time = labour hours required. Flags when the production plan exceeds the wages budget before the roster is locked.

![Simple diagram — five layers stacking, Layer 1 highlighted as live](/images/feb-article-img-4.png)

Josh is committed. Everything depends on Layer 1 proving stable. If the forecast doesn't hold after eight weeks, we stop building and iterate on the foundation. Everything above it fails with it.

## The job was never to replace Josh

The agent's job was never to replace Josh's judgment. It was to surface what 94,633 sales records say, grouped how he thinks, in language he uses, at the moment he decides.

Every Friday, the system tells Josh what to make. He reads it, adjusts with feel, and makes his call.

> Code computes. Claude narrates. Mabel decides.

The numbers are adjusted by a mix of data and feel. Just like he said.
