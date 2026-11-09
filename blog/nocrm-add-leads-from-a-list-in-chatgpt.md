---
title: Add new leads to noCRM.io from a list in ChatGPT
description: Ask ChatGPT or Claude to check a list of contacts against your noCRM.io leads, skip the ones you already have, and create the rest with owner and tags.
date: 2026-11-09
products: nocrm-io
---
You can give ChatGPT or Claude a list of contacts, for example from a trade show, an email thread or a spreadsheet, and ask it to add them to noCRM.io as leads. Ask it to search for each email in your existing leads first: this helps you skip contacts you already have. Add `https://nocrm-io.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Here are 8 contacts from yesterday's trade show. For each one, check if noCRM.io already has a lead with that email, unassigned leads included. Show me which ones are new. Then create the new ones as leads for anna@ourcompany.com in the step "Contacted", with the tag "trade-show-2026".

Paste the contacts below the prompt. Company, name, email and phone are enough. You can also ask the AI to show you the leads it plans to create before it creates them.

## What does the AI do, step by step?

1. It finds the owner with `nocrm_list_users` (or `nocrm_get_user` with the email), and the pipeline steps with `nocrm_list_steps`, so it uses names that exist in your account.
2. For each contact, it searches your leads with `nocrm_list_leads` and the email filter. That filter looks in the lead description and comments. Unassigned leads are left out unless the AI asks for them too, so name them in your prompt.
3. If a match exists, it can open the lead with `nocrm_get_lead` and tell you who owns it and in which step it is.
4. For each new contact, it creates a lead with `nocrm_create_lead`. The title is usually the company name. The description holds the contact details, one "Label: value" per line (for example "Email: ada@example.com"), so noCRM.io reads them as fields.
5. After you create a lead, it can check for possible duplicates with `nocrm_get_lead_duplicates`, add a first note with `nocrm_add_lead_comment`, or file the lead under a client folder with `nocrm_add_lead_to_client_folder`.

A pipeline step can only be set on a lead that has an owner. Without an owner, the lead is created unassigned, and you can hand it out later with `nocrm_assign_lead`.

## Can it create the same lead twice?

Yes, it can. `nocrm_create_lead` is not idempotent: each call makes a new lead, and the tool does not check for an existing lead. The email search in the prompt above is a step the AI does because you ask for it. It reduces duplicates but does not prevent them. If you only want a plan, ask the AI to show the list of new leads in the chat and not to call a write tool yet.

The write tools are `nocrm_create_lead`, `nocrm_update_lead`, `nocrm_assign_lead`, `nocrm_add_lead_comment`, `nocrm_create_client_folder` and `nocrm_add_lead_to_client_folder`. They act when they are called; they do not enforce a separate preview or confirmation step. `nocrm_update_lead` adds text to the end of a description and never replaces the existing text. A comment is an internal note and sends nothing to the contact. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

There is no tool that deletes a lead, a comment or a client folder.

The server also has tools that are not about noCRM.io data: `nocrm_usage_status` shows your UsefulAPI usage and plan, `nocrm_upgrade` and `nocrm_cancel_subscription` change your plan, and `nocrm_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A noCRM.io API key: in noCRM.io, open the **Admin** section, then **Integrations → API**, and generate a key (admins only). You also need your account name: `acme` for `https://acme.nocrm.io`. noCRM.io allows 2000 API requests per day per account.

See the [noCRM.io setup steps](/nocrm-io/) for ChatGPT, Claude, Cursor and other MCP clients.
