---
title: Review an AgencyBloc client's policies in Claude
description: Use Claude or ChatGPT to find an AgencyBloc client, review policies and recent notes, and draft a follow-up before saving any changes.
date: 2026-10-29
products: agencybloc
---
You can ask Claude or ChatGPT to prepare an AgencyBloc client review: find the individual or group, check their policies, and bring recent notes and open activities into one answer. Add `https://agencybloc.usefulapi.io/mcp` as a connector, then describe the client and the question you need answered.

## Which prompt do I start with?

> Show Maria Lopez's policies, renewal dates and recent notes. Draft a short follow-up for my review.

Use a client you are authorized to work with. A name can match several records, so give the assistant an email address or another distinguishing detail when needed.

## What does the AI read, step by step?

1. It finds matching records with `agencybloc_search_individuals` and opens the selected client with `agencybloc_get_individual`. For an employer or business account, it uses `agencybloc_search_groups` and `agencybloc_get_group`.
2. It finds the relevant policies with `agencybloc_search_policies` and opens each one with `agencybloc_get_policy` for its carrier, status, dates, premium and available coverage details.
3. It reads record notes with `agencybloc_list_notes` and checks activities with `agencybloc_list_activities` or `agencybloc_get_activities`.
4. It separates what the records say from information that is missing, then drafts the follow-up for you to check.

Search results have a limit. For a large account, narrow the request by client, carrier, policy number or date rather than treating one result page as a complete agency report.

## Can I save the note or update a policy afterward?

Yes. After reviewing the exact record and proposed text, you can ask the assistant to save a note with `agencybloc_create_note`. Notes created through the API cannot be edited or deleted, so check the wording before approving the write.

For supported policy fields, `agencybloc_update_policy` can change values such as status, policy number, premium, effective date or renewal date. Ask the assistant to show the proposed changes first, save only the fields you approve, and read the policy again afterward. Review and approval are instructions you give the assistant; the policy update tool does not enforce a separate confirmation step.

## Can I set a coverage's carrier product?

Yes. Supply the carrier name and carrier product when creating a policy with `agencybloc_create_policy`. On an existing policy, `agencybloc_update_policy` first reads the coverages: it creates the first coverage if none exist, or changes the carrier product on the sole existing coverage. It refuses this change when several coverages exist, because the API would add another coverage rather than select one to update.

An unknown product name creates a new product for that carrier, so review its spelling before saving. Avoid simultaneous coverage edits in other integrations while making this change.

Coverage-level dates and premiums, writing-agent number assignments, Election Member ID edits, and commission-payment reads or moves are not exposed by the connector's documented REST API. Policy-level premium and dates remain separate fields. Use AMS+ for those remaining changes.

## What do I need?

An AgencyBloc AMS+ account with API access enabled, plus the API SID and API key issued by AgencyBloc support. Enter those credentials on the connector's login page. The key gives broad account access, so connect it only to an assistant you trust with your agency's records.

See the [AgencyBloc setup steps](/agencybloc/) for Claude, ChatGPT, Cursor and other MCP clients.
