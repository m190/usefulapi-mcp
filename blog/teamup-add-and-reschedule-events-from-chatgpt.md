---
title: Add and reschedule Teamup Calendar events from ChatGPT
description: Use ChatGPT or Claude to add events to a shared Teamup Calendar and move existing ones, with an undo for one hour after each change.
date: 2026-10-28
products: teamup-calendar
---
You can ask ChatGPT or Claude to add events to a shared Teamup Calendar and to move events that already exist: book a room, add a team meeting, or shift a site visit to another time. Add `https://teamup-calendar.usefulapi.io/mcp` as a connector, then describe the change in plain words.

## Which prompt do I start with?

> Add a team meeting to the Meeting Room sub-calendar next Tuesday from 10:00 to 11:00. Then move Friday's site visit to 14:00.

Name the sub-calendar (the colored lane for a person, room or resource) and give your timezone if the calendar uses a different one.

## What does the AI do, step by step?

1. It reads the calendar with `teamup_get_calendar` and finds the sub-calendar by name with `teamup_list_subcalendars`. A new event needs at least one sub-calendar, a start and an end.
2. It creates the new event with `teamup_create_event`, with the title, time, location and notes you asked for.
3. It finds the event to move with `teamup_search_events` or `teamup_list_events`. Searches cover today only unless a date range is given, so it should search the dates you mean. It opens the event with `teamup_get_event` to check the details.
4. It changes the time with `teamup_update_event`. Fields it does not send keep their value. The tool reads the event first and sends its version back, so Teamup refuses the change if someone else edited the event in the meantime, instead of overwriting their edit.
5. For a recurring event, it uses the id of the one occurrence and chooses whether the change applies to that occurrence only or to it and all later ones.

## Can I undo a change?

Yes, for one hour. Each create, update and delete returns an undo id, and `teamup_undo_event_action` reverses that change within one hour. The undo is refused if someone else changed the event after it.

The write tools act when they are called; they do not enforce a separate preview or confirmation step. Your AI client can ask you to approve each tool call; this depends on the client and its settings. A repeated create makes a second event, so check the calendar before you ask again after an error.

The calendar key limits what the AI can do: with a read-only key it can only read, with an "add only" key it can add but not change events, and with a "modify" key it can also update and delete them.

## What do I need?

A free personal Teamup API key (request one at [teamup.com/api-keys/request](https://teamup.com/api-keys/request)) and a calendar key: in your calendar, open **Settings → Sharing** and create a link with the permission you want the AI to have.

See the [Teamup Calendar setup steps](/teamup-calendar/) for ChatGPT, Claude, Cursor and other MCP clients.
