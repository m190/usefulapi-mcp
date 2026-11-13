---
title: Review Freshsales deals that close this month in Claude
description: Ask Claude or ChatGPT to list your open Freshsales deals that close this month, with stage, amount, owner and contacts, and flag past close dates.
date: 2026-11-13
products: freshsales
---
You can ask Claude or ChatGPT to review the open deals in your Freshsales account before a pipeline meeting. The AI reads a deal view, picks the deals that close this month, and adds the stage, the owner and the contacts of each deal. Add `https://freshsales.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Show my open Freshsales deals that close this month, with stage, amount, owner and contacts. Flag deals whose close date has passed.

You can also name a different view, one owner, one pipeline or a different month. You can ask for the overdue tasks too.

## What does the AI do, step by step?

1. It lists the saved deal views of your account with `freshsales_list_deal_views`. `freshsales_list_deals` needs the id of a saved view. For this prompt, the AI picks a view with only open deals, such as "Open Deals". The view names and ids differ for each account, so name the view if you use your own.
2. It reads the deals in that view with `freshsales_list_deals`, sorted by expected close date. Each deal comes with its name, amount, expected close date, probability and age. Deals come in pages of up to 25. If the reply gives a next page, the AI must make another call, so ask it to read all pages.
3. The list has no date filter. The AI keeps the deals whose expected close date is in the month you named, and it flags the deals whose date has passed.
4. It opens each deal with `freshsales_get_deal`. It can ask for the stage, the owner, the contacts and the company in the same call. Without them, the deal gives only the ids of its stage, pipeline and owner.
5. To turn ids into names, it can use `freshsales_list_deal_pipelines`, `freshsales_list_deal_stages` and `freshsales_list_owners`.
6. If you ask about one company or one person, it finds the record with `freshsales_search` or `freshsales_lookup`. It can read a contact with `freshsales_get_contact` and a company with `freshsales_get_account`, with their tasks, appointments and deals.
7. If you ask for tasks, it lists them with `freshsales_list_tasks`. One call gives one group: open, due today, due tomorrow, overdue or completed.

Freshsales data calls that succeed count toward your plan. The server tries to refund a failed call, and the four UsefulAPI account tools below do not count. Freshsales also allows 1,000 API requests per hour for each account, and your other integrations use the same limit. For a large view, use a smaller saved view, for example one with only your own deals.

## Can it change my deals?

Only if the AI calls a write tool. The deal review above uses read tools only. The server has no tool that deletes a record.

The server has these tools that write Freshsales data: `freshsales_create_contact`, `freshsales_update_contact`, `freshsales_create_account`, `freshsales_update_account`, `freshsales_create_deal`, `freshsales_update_deal`, `freshsales_create_note`, `freshsales_update_note`, `freshsales_create_task`, `freshsales_update_task` and `freshsales_create_appointment`. They act when they are called; they do not enforce a separate preview or confirmation step. `freshsales_update_deal` changes the live deal, for example its stage, amount or close date. The fields that the AI leaves out keep their values. A new note is visible to your team on the record. Freshsales can notify the attendees of a new appointment.

For a review, ask the AI not to call a write tool. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Freshsales data: `freshsales_usage_status` shows your UsefulAPI usage and plan, `freshsales_upgrade` returns a payment link or changes an existing subscription, `freshsales_cancel_subscription` cancels at the end of the current period, and `freshsales_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

Your Freshsales domain (for example acme.myfreshworks.com) and your personal API key. Both are under your profile picture, in **Profile Settings → API Settings**. The AI sees only what that user can see in Freshsales.

See the [Freshsales setup steps](/freshsales/) for Claude, ChatGPT, Cursor and other MCP clients.
