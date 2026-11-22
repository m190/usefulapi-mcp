---
title: Catch up on this week's Text Request customer threads in Claude
description: Ask Claude or ChatGPT which customers texted you this week, what each conversation is about, and which customers still wait for your reply.
date: 2026-11-25
products: text-request
---
You can ask Claude or ChatGPT to catch up on your Text Request conversations, one customer at a time. The AI finds the contacts that had messages in the days you name, reads the conversation history of each one, and tells you what each customer wants and who still waits for a reply. Add `https://text-request.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Which Text Request customers texted us since Monday? Summarize each conversation and tell me who still waits for a reply.

You can also name one dashboard, one tag or one group, ask for unresolved contacts only, or give one customer's phone number.

## What does the AI do, step by step?

1. It finds your dashboards with `textrequest_list_dashboards`. Each dashboard has an id, a name, a phone number and a time zone. The other tools need the dashboard id, so name the dashboard if you have more than one.
2. It finds the contacts with `textrequest_list_contacts`. The AI can filter by the time of the last message, by tag, by group, by resolved state and by name or phone number. The times are in UTC, so the AI must convert "since Monday" with the time zone of the dashboard. Each contact shows the name, the phone number, the tags, the groups, the note, the resolved state, the time of the last sent and the last received message, and the number of messages. The filter on the last message counts messages in both directions. So the AI keeps only the contacts whose last received message came on or after Monday in the time zone of the dashboard.
3. It reads the history of each contact with `textrequest_list_contact_messages`. One call gives one page of the sent and received messages of one phone number, with the text, the direction, the time, the delivery status and, when there is one, the user name of the person who replied.
4. To check one customer by phone number, it opens the contact with `textrequest_get_contact`. The contact shows if the number opted out, is blocked or is suppressed, and why it is suppressed.
5. It gives you a short summary for each customer. It looks for customer messages that have no later reply from you, also for customers you never replied to. It then reads the message text and the resolved state before it tells you who still waits for a reply.

The lists come in pages of 25 records, and the AI can ask for up to 100 in a page. If more records match, the AI must make another call for the next page, so ask it to read all pages. Text Request data calls that succeed count toward your plan, and each page of contacts and each page of one contact's history is one call. The server tries to refund a failed call. A busy week with many customers needs many calls; a shorter time range or one tag needs fewer.

## Can it text my customers?

No. The server has no tool that sends, schedules, changes or deletes a message, and no tool that changes a contact. All its Text Request tools only read data.

The AI can write a draft reply in the chat. You then send it yourself in Text Request. The messages come from your customers, so read a draft before you use it.

The server also has tools that are not about Text Request data: `textrequest_usage_status` shows your UsefulAPI usage and plan, `textrequest_upgrade` returns a payment link or changes an existing subscription, `textrequest_cancel_subscription` cancels at the end of the current period, and `textrequest_request_feature` sends us a feature request. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A Text Request API key from **Integrations → API Access**. Your Text Request account must have API Access enabled. The messages and contact data that you ask for go through UsefulAPI to your AI client.

See the [Text Request setup steps](/text-request/) for Claude, ChatGPT, Cursor and other MCP clients. To review the messages of one day and the texts that failed, see [Review Text Request messages and failed texts in Claude](/blog/text-request-messages-and-failed-texts-in-claude/).
