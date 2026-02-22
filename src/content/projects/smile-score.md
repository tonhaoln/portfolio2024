---
title: 'SmileScore: Clinical MVP'
description: '65+ data points on paper. One iPhone, one hand, chair-side.'
intro: "A scoring methodology run manually with pen, paper, and mental maths. The challenge was making it work on an iPhone, one-handed, chair-side during a 60-minute appointment."
outcome: '65+ clinical data points on paper. Turned into a product a practitioner could use mid-exam.'
date: '2025-01-01'
coverImage: '/images/smile-thumb.png'
---

<video src="/video/smile-video-1.mp4" autoplay muted loop playsinline></video>

## Context

A client in the oral health space had developed a comprehensive scoring methodology, 65+ data points across 8 assessment sections, run manually with pen, paper, and mental maths. Before building anything, I wrote a product strategy and defined validation criteria with the client: does the scoring work clinically, does it fit a 60-minute appointment, do patients understand the output?

## Design Decisions

The practitioner uses this on an iPhone, one-handed, chair-side during a 60-minute appointment. That constraint shaped everything:

- **Mobile-first, touch-optimised:** every interaction works with one hand.
- **8-section exam flow:** matches the natural sequence of an exam, no jumping between screens.
- **Score as centrepiece:** single 0-100 result with traffic-light visualisation. Complex data in, clear feedback out.
- **Deduction model:** start at 100, lose points per finding. Patients see exactly what's affecting their score.
- **Scoped for validation:** no tooth charting, no multi-clinician features, no patient app. Prove the core experience first.

Mid-build, clinical feedback showed the original tooth-by-tooth input was too slow chair-side.

> I adapted the flow based on the client's simpler approach rather than defending my first design.

![SmileScore — build](/images/smile-img-1.png)

## The Build

~50 hours from first meeting to live. I defined the product context and user flows first, then used AI to accelerate the build within those guardrails. Next.js, Supabase, TypeScript, deployed on Vercel.

> Now being tested in a real clinical setting and capturing feedback for the next phase.
