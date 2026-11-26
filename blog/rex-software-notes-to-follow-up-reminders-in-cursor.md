---
title: Turn Rex Software notes into follow-up reminders in Cursor
description: Ask Cursor, Claude or ChatGPT to read your recent Rex Software notes, check your open reminders, and add the follow-up reminders that are missing.
date: 2026-11-27
products: rex-software
---
You can ask Cursor, Claude or ChatGPT to go through your recent notes in Rex Software and check that each follow-up has a reminder. The AI reads the notes, compares them with your open reminders, and lists the follow-ups that have no reminder. When you ask, it adds the missing reminders. Add `https://rex-software.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Read my Rex notes from this week and list the follow-ups that have no open reminder yet.

You can also name one contact, one property or one listing, or a different period. When the list looks right, ask the AI to create the reminders and give a due date for each.

## What does the AI do, step by step?

1. It reads the signed-in Rex user with `rex_get_user_profile`. If you connected with a separate integration user, that user is not you: the AI then finds your own Rex user with `rex_search_users` before it filters notes and reminders.
2. It checks the search field names with `rex_describe_search_fields`. Rex has many fields per record type, and notes and reminders use different field names.
3. It reads the notes with `rex_search_notes`, filtered by the time each note was created and, for "my notes", by the user who created it. The note search fields also cover the linked contacts and properties. A page has 20 notes by default and at most 100. One call reads one page, so if more notes match, the AI must call again for the next page. To read one note in full, it can open it with `rex_get_note`.
4. It reads the open reminders with `rex_search_reminders`. An open reminder has no completion time. The AI can filter by due date, by the user to remind, and by the linked contact, property or listing. It includes overdue reminders and reminders due later. A page has 10 reminders by default and at most 100. Here too, the AI must read every page before it says that a follow-up has no reminder.
5. To find a person that a note names, it uses `rex_autocomplete_contacts` or `rex_search_contacts`. To find a property, it uses `rex_search_properties`. To find a listing, it uses `rex_autocomplete_listings`, and `rex_get_listing` shows the property of that listing.
6. It lists each follow-up from the notes and says whether an open reminder covers it. The AI matches them by reading the text and the linked records; no tool links a note to a reminder.
7. When you ask, it creates each missing reminder with `rex_create_reminder`: a short description, a due date, a reminder type, and a link to a contact, a property or a listing if you want one. Rex needs the reminder type. The AI finds the list of types with `rex_list_value_lists` and reads the allowed values with `rex_get_value_list`, or it asks you. Priority is optional. If you want one, the AI looks up its allowed values in the same way. If you do not name a user to remind, Rex uses its default.

A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should ask again from the same position with a smaller page or narrower filters, so that it does not skip notes or reminders.

Rex data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change Rex without my approval?

The review above uses read tools only. The prompt asks for a list, not for new reminders.

The server has three tools that write Rex data. `rex_create_reminder` adds a reminder. `rex_create_note` adds a note to contacts or properties, and it can also set the contacts' last-contacted date. `rex_create_contact` adds a person contact. These tools act when they are called; they do not enforce a separate preview step. They are not repeated automatically after an error, so if a write fails without a clear answer, check Rex before you ask again. No tool edits, completes or deletes a reminder, a note or a contact, but a new note can change the last-contacted date of its contacts, as said above. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Rex data: `rex_usage_status` shows your UsefulAPI usage and plan, `rex_upgrade` returns a payment link or undoes a scheduled cancellation, `rex_cancel_subscription` cancels at the end of the current period, and `rex_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

A Rex user login: the email address, the password and the region (Australia and New Zealand, or United Kingdom). Rex has no API keys, so the server signs in as that user and has the same privileges. We suggest a separate integration user with only the privileges you need. Such a user counts toward your agency's paid seats unless Rex grants Verified Integrator status. If you belong to several Rex accounts, also enter the account id.

See the [Rex Software setup steps](/rex-software/) for Cursor, Claude, ChatGPT and other MCP clients.
