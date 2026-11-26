---
title: Review Text Request messages and failed texts in Claude
description: Ask Claude or ChatGPT to read the day's Text Request messages, show which customers still wait for a reply, and list the texts that did not arrive.
date: 2026-11-14
products: text-request
---
You can ask Claude or ChatGPT to go through the messages of your Text Request dashboard at the end of a day. The AI reads the conversations that are not resolved, tells you what each customer asked, and lists the texts that failed to arrive. Add `https://text-request.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Review today's Text Request messages. Which customers still wait for a reply, what did they ask, and which of our texts failed to deliver?

You can also name one dashboard, a different day or week, one tag, or one customer phone number. You can ask the AI to draft a reply for each open conversation.

## What does the AI do, step by step?

1. It finds your dashboards with `textrequest_list_dashboards`. Each dashboard has an id, a name, a phone number and a time zone. The other tools need the dashboard id, so name the dashboard if you have more than one.
2. It reads the conversations with `textrequest_list_conversations`. The AI can ask for unresolved conversations only, search them, or filter them by tag. Each conversation gives the customer's phone number and its last message, with the text, the direction, the time and the delivery status.
3. For a customer whose last message is not enough, it reads the history with `textrequest_list_contact_messages`. This gives the sent and received messages of one phone number, with the name of the user who replied.
4. For the delivery check, it reads the messages of the whole dashboard with `textrequest_list_messages`. You can give a start and an end time. The times are in UTC, so the AI must convert your day with the time zone of the dashboard. Each message has its direction, its delivery status and, when the delivery failed, the delivery error.
5. To see why a customer gets no texts, it opens the contact with `textrequest_get_contact`. The contact shows if the number opted out, is blocked or is suppressed, and its tags and groups.
6. If you ask about planned texts, it lists the scheduled one-to-one messages with `textrequest_list_scheduled_messages`.

The lists come in pages of 25 records, and the AI can ask for up to 100 in a page. If a day has more messages, the AI must make another call for the next page, so ask it to read all pages. Text Request data calls that succeed count toward your plan. The server tries to refund a failed call, and the four UsefulAPI account tools below do not count. A full day of messages on a busy dashboard needs many calls; a shorter time range needs fewer.

## Can it send a text to my customers?

No. The server has no tool that sends, schedules, changes or deletes a message, and no tool that changes a contact. All its Text Request tools only read data.

The AI can write a draft reply in the chat. You then send it yourself in Text Request. The messages come from your customers, so read a draft before you use it.

The UsefulAPI account tools are separate. `textrequest_usage_status` shows your usage and plan. `textrequest_upgrade` gives plan options or a payment link; a change from Pro to Pro+ requires confirmation. `textrequest_cancel_subscription` also requires confirmation and ends the subscription at the end of the current period. `textrequest_request_feature` sends us a feature request. These tools do not change Text Request data.

## What do I need?

A Text Request API key from **Integrations → API Access**. Your Text Request account must have API Access enabled. The messages and contact data that you ask for go through UsefulAPI to your AI client.

See the [Text Request setup steps](/text-request/) for Claude, ChatGPT, Cursor and other MCP clients.
