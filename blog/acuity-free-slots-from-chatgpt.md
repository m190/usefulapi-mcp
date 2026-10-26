---
title: Find free slots and check bookings in Acuity from ChatGPT
description: ChatGPT or Claude can read your Acuity Scheduling appointments, find free time slots for a service, and reschedule a booking when you ask.
date: 2026-08-23
products: acuity-scheduling
---
You can ask ChatGPT or Claude what is booked in Acuity Scheduling and when you are still free. The AI reads the appointments on each calendar, finds open slots for a service, and can move a booking to a new time. To start, add `https://acuity-scheduling.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> What appointments do I have tomorrow, grouped by calendar? Then find the next three free 60-minute consultation slots next week.

## What does the AI do, step by step?

1. It reads the calendars and the services with `acuity_list_calendars` and `acuity_list_appointment_types`.
2. It lists the bookings for a date range with `acuity_list_appointments`, and reads one booking in full with `acuity_get_appointment`.
3. It finds the days with free time for a service with `acuity_availability_dates`, then the free times on a day with `acuity_availability_times`.
4. When you ask, it moves a booking with `acuity_reschedule_appointment`, or books a new one with `acuity_create_appointment`.

## Does the client get an email when the AI changes a booking?

- By default, Acuity can send a confirmation, an update or a cancellation email, as when you make the change in Acuity.
- The tools that create, reschedule or cancel a booking can turn these emails off. Tell the AI if the client must not get an email.
- Most AI clients ask you to approve each call that changes data. This depends on the client's settings.

## What do I need?

Your Acuity User ID and API Key. You find both in Acuity under **Integrations → API**. See the [setup steps](/acuity-scheduling/) for Claude, ChatGPT, Cursor and other clients.
