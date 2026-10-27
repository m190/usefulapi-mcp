---
title: Book and reschedule Shopmonkey appointments from Claude or Cursor
description: Claude, ChatGPT or Cursor can read the Shopmonkey calendar, book a job for a customer's vehicle, and move or cancel an appointment when you ask.
date: 2026-10-27
products: shopmonkey
---
You can manage the Shopmonkey shop calendar from Claude, ChatGPT or Cursor. The AI reads the appointments for a day or a technician, books a new job for a customer and vehicle, and moves an existing appointment to a new time. To start, add `https://shopmonkey.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Show tomorrow's appointments by technician. Then move the brake job for the customer Miller to Thursday at 9:00 and keep the same technician. Do not send the customer a message.

## What does the AI do, step by step?

1. It reads the calendar for a date range with `shopmonkey_search_appointments`, and maps technician ids to names with `shopmonkey_list_users`.
2. It finds the customer with `shopmonkey_search_customers` or `shopmonkey_find_customers_by_phone`, and the vehicles with `shopmonkey_list_customer_vehicles`.
3. If the job has a work order, it finds the order by its number with `shopmonkey_find_order_by_number`.
4. To book a new job, it uses `shopmonkey_create_appointment`, for the customer, the vehicle, the order and the technicians.
5. To move a job, it changes the existing appointment with `shopmonkey_update_appointment`. The tool sends only the fields in the call, such as the new start and end time. It does not create a new appointment.
6. To cancel a job, it uses `shopmonkey_delete_appointment`. Without `confirm: true`, the tool only shows a preview.

## Does the customer get a message, and can the AI delete by mistake?

- The booking and reschedule tools have options to send the customer a confirmation, a reminder or a message about the new time, by email or SMS. Tell the AI if the customer must not get a message.
- Without `confirm: true`, `shopmonkey_delete_appointment` only shows a preview of the appointment and deletes nothing. With `confirm: true`, it deletes at once. Ask the AI to show you the preview and to wait for your approval.
- To move a job, ask the AI to change the start and end time of the existing appointment, not to delete it and book it again. Tell the AI to keep the customer, the vehicle, the order and the technicians, because the tool can also change them.
- Most AI clients ask you to approve each call that creates or changes data. This depends on the client's settings.

## What do I need?

A Shopmonkey API key. A shop admin creates it in Shopmonkey under **Settings → Integration → API Keys**. The key has the same permissions as the user who creates it. See the [setup steps](/shopmonkey/) for Claude, ChatGPT, Cursor and other clients.
