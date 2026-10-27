---
title: Count Follow Up Boss leads by source and agent from Claude
description: Claude or ChatGPT can count your Follow Up Boss leads from a source per agent, show how many are now in a closed stage, and add a note to a contact.
date: 2026-10-27
products: follow-up-boss
---
You can ask Claude or ChatGPT how many leads from a source such as Zillow each agent has now, and how many of them are now in a closed stage. The AI counts the leads per agent and per lender with one report tool, so it does not page through every contact. To start, add `https://follow-up-boss.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Count the Zillow leads created since July 1 per assigned agent, and how many of them are now in the Closed stage. Show the conversion rate per agent and the leads per lender.

## What does the AI do, step by step?

1. It checks whose key it uses with `fub_get_identity`, and lists the agents and lenders with `fub_list_users`.
2. It reads the lifecycle stages with `fub_list_stages`, so it uses the exact stage names of your account.
3. It counts the leads with `fub_lead_source_report`, per assigned agent and for the whole account. If you name more than one source, it adds them together. By default, the agent rows leave out lenders and inactive users. Before it counts, the tool refuses a report that is too large for one call. Then name fewer agents, sources or closed stages, or leave out the lenders. A lead counts as converted when it is now in one of the closed stages (default: Closed). The tool gives the conversion rate and also counts the leads per lender.
4. When you want names behind a number, it lists the contacts with `fub_search_people`.
5. When you ask, it adds a note to a contact's timeline with `fub_add_note`.

## What can the AI change, and are the numbers exact?

- The numbers can differ from the Follow Up Boss Lead Source report. That report has its own definitions and no API, so `fub_lead_source_report` counts the contacts through the API, by their current agent and current stage.
- The report counts only the contacts that the API key can see. An agent's key sees only that agent's contacts. Use an owner, admin or broker key for the whole account.
- The report reads data only. `fub_add_note` writes the note at once, with no preview, and the other write tools also change data.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.

## What do I need?

A Follow Up Boss API key. You find it in Follow Up Boss under **Admin → API**. Every user has a key with the permissions of that user. See the [setup steps](/follow-up-boss/) for Claude, ChatGPT, Cursor and other clients.
