---
title: Get a hiring overview from Recruitee
description: Use Claude or ChatGPT to review a Recruitee job, candidate stages, recruiter notes, upcoming interviews and open tasks before your hiring meeting.
date: 2026-10-31
products: recruitee
---
You can ask Claude or ChatGPT to prepare a hiring handover from Recruitee: find the job, check each candidate's current stage, and bring recruiter notes, upcoming interviews and open tasks into one answer. Add `https://recruitee.usefulapi.io/mcp` as a connector, then name the role you want to review.

## Which prompt do I start with?

> Show the candidates for our Customer Success Manager role, their current stage, and any interviews this week.

Replace the example with a role you manage. Include its location or department when several jobs have the same title, and specify your timezone for interview dates.

## What does the AI read, step by step?

1. It finds the role with `recruitee_list_offers` and opens it with `recruitee_get_offer`. Recruitee calls jobs "offers" in its API; these are job records, not employment offer letters.
2. It uses `recruitee_list_candidates` with the selected job ID, then opens the relevant profiles with `recruitee_get_candidate`. A candidate can belong to several jobs, so the handover should use their placement on this role.
3. It reads existing team notes with `recruitee_list_candidate_notes`. If you ask for interview feedback too, it can read `recruitee_list_evaluations` and distinguish recorded feedback from its own summary.
4. It checks `recruitee_list_interview_events` for each candidate within your date range and `recruitee_list_tasks` for their incomplete tasks.
5. It assembles the handover with the current stage, scheduled interviews and outstanding follow-ups, keeping missing information visible.

Job lists use page numbers; candidate lists use an offset. Ask the assistant to continue through the matching results before calling the handover complete. An empty result or a permission error does not establish that a candidate has no outstanding work.

## Can I save a note or change a candidate's stage?

After reviewing the candidate ID and exact text, you can ask the assistant to save a team-visible note with `recruitee_add_candidate_note`. It can also create a follow-up with `recruitee_create_task` after you choose the candidate, assignee and due date.

For a stage change, it reads the candidate's placement and the job's pipeline with `recruitee_get_pipeline_template`, then calls `recruitee_move_candidate_stage` with the placement ID and destination stage ID. The placement ID identifies a candidate on a particular job. Stage changes can trigger automations configured in Recruitee.

These write tools act when called; they do not enforce a separate preview or confirmation step. Ask your assistant to show the exact change and wait for approval. Keep the initial handover focused on the records you need for the meeting, and make hiring decisions yourself.

## What do I need?

A Recruitee company ID and a personal API token. Find Personal API tokens under **Settings → Apps and plugins**, then enter the credentials on the connector's login page. The token uses the permissions of the hiring role that created it; Recruitee explains this in its [API token guide](https://support.recruitee.com/en/articles/8213076-faq-api).

Connect an AI client your organization permits to handle candidate information. See the [Recruitee setup steps](/recruitee/) for Claude, ChatGPT, Cursor and other MCP clients.
