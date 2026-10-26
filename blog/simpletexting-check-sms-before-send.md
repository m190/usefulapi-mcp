---
title: Check an SMS before you send it with SimpleTexting and Claude
description: Claude or ChatGPT can test a SimpleTexting message for segments, SMS or MMS and estimated cost without sending it. Sending is a separate step.
date: 2026-09-21
products: simpletexting
---
You can ask Claude or ChatGPT to check a text message before it goes out with SimpleTexting. The AI tells you how many segments the text uses, whether it sends as SMS or MMS, and its estimated cost, without sending anything. To start, add `https://simpletexting.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Check whether this fits in one text and what it costs: "Your order is ready for pickup. Show this message at the counter." Make it shorter if it does not fit.

## What does the AI do, step by step?

1. It tests the text with `simpletexting_evaluate_message`. This is a dry run: nothing is sent.
2. It finds the contact by id or phone number with `simpletexting_get_contact`.
3. It sends the message with `simpletexting_send_message`. This is a separate call, and it sends the text at once.
4. Later, it reads the message history with `simpletexting_list_messages` and your campaigns with `simpletexting_list_campaigns`.

## Can the AI send a text by mistake?

- `simpletexting_send_message` sends a real SMS or MMS and uses message credits. Ask the AI to show you the final text and the phone number before it sends.
- Most AI clients ask you to approve each call that changes data. This depends on the client's settings.
- `simpletexting_list_campaigns` returns only immediate campaigns. Scheduled and recurring campaigns are not in the list.

## What do I need?

A SimpleTexting API token. You find it in SimpleTexting under **Settings → API**. See the [setup steps](/simpletexting/) for Claude, ChatGPT, Cursor and other clients.
