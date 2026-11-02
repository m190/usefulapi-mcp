---
title: Catch up on open Re:amaze conversations from Claude or ChatGPT
description: Ask Claude or ChatGPT which Re:amaze support conversations are still open, read their messages, and get a short summary of what each customer needs.
date: 2026-11-02
products: re-amaze
---
You can ask Claude or ChatGPT to go through your open Re:amaze support conversations, read the messages in each one, and tell you what each customer is waiting for. Add `https://re-amaze.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Show me the open Re:amaze conversations from the last 3 days. For each one, read the messages and tell me in one line what the customer needs and who replied last.

You can narrow it: name a channel (for example your email inbox or live chat), a tag, or a customer email.

## What does the AI do, step by step?

1. It lists the conversations with `reamaze_list_conversations`. The `filter` can be `open`, `unassigned`, `archived` or `all`, and a start and end date limit the time range. It can also filter by customer email, tag, channel or origin (email, chat, SMS and more).
2. If you name a channel, it can find its slug with `reamaze_list_channels` first, because conversations are filtered by the channel slug.
3. For each conversation, it reads the thread with `reamaze_list_messages` and the conversation slug. It can keep only the customer's messages or only your team's messages.
4. It can open one conversation with `reamaze_get_conversation` to see its status, tags and assignee.
5. To answer a common question, it can look up a help center article with `reamaze_list_articles` and `reamaze_get_article`, so you can link the customer to it.

Results come one page at a time. For a busy inbox, ask the AI to read the next pages too, or narrow the date range.

## Can it reply to a customer by mistake?

The steps above only read. They do not change anything in Re:amaze.

The server also has write tools: `reamaze_reply_conversation`, `reamaze_update_conversation`, `reamaze_create_conversation`, `reamaze_create_contact` and `reamaze_update_contact`. They act when they are called; they do not enforce a separate preview or confirmation step. A reply from `reamaze_reply_conversation` goes to the customer by default. Sent with `visibility` 1, it is saved at once as an internal note that only your team sees. If you only want a draft, ask the AI to show the proposed reply in the chat and not to call a write tool. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

There is no tool that deletes a conversation, message, contact or article.

## What do I need?

A Re:amaze API token (in Re:amaze, open **Settings → Developer → API Token**), the email you log in with, and your brand: the subdomain in `yourbrand.reamaze.io`.

See the [Re:amaze setup steps](/re-amaze/) for ChatGPT, Claude, Cursor and other MCP clients.
