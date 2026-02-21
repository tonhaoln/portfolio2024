---
title: 'SmileScore: Clinical MVP'
description: 'Working MVP. ~50 hours from first meeting to live.'
intro: "A clinical methodology with 65+ data points on paper. The challenge was turning it into a digital product a practitioner could actually use mid-exam."
outcome: '~50 hours from first meeting to live.'
date: '2025-01-01'
coverImage: '/images/smile-thumb.png'
---

## Context

A client in the oral health space had developed a comprehensive scoring methodology, 65+ data points across 8 assessment sections, run manually with pen, paper, and mental maths. Before building anything, I wrote a product strategy and defined validation criteria with the client: does the scoring work clinically, does it fit a 60-minute appointment, do patients understand the output?

<video src="/video/smile-video-1.mp4" autoplay muted loop playsinline></video>

## Design Decisions

The practitioner uses this on an iPhone, one-handed, chair-side during a 60-minute appointment. That constraint shaped everything:

- **Mobile-first, touch-optimised:** every interaction works with one hand.
- **8-section exam flow:** matches the natural sequence of an exam, no jumping between screens.
- **Score as centrepiece:** single 0-100 result with traffic-light visualisation. Complex data in, clear feedback out.
- **Deduction model:** start at 100, lose points per finding. Patients see exactly what's affecting their score.
- **Scoped for validation:** no tooth charting, no multi-clinician features, no patient app. Prove the core experience first.

Mid-build, clinical feedback showed the original tooth-by-tooth input was too slow chair-side, so I adapted the flow based on the client's simpler approach rather than defending my first design.

## The Build

I structured the development around product context, UI system, user flows, and task plans, then used AI to accelerate the build within those guardrails. Next.js, Supabase, TypeScript, deployed on Vercel.

Not a prototype, a working MVP, now being tested in a real clinical setting and capturing feedback for the next phase.

![SmileScore — build](/images/smile-img-1.png)
