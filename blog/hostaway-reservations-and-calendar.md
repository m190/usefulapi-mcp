---
title: Check Hostaway reservations and free nights from Claude or ChatGPT
description: Claude, ChatGPT or Cursor can list your Hostaway listings and reservations across channels, show a listing's calendar, and read guest reviews.
date: 2026-10-18
products: hostaway
---
You can ask Claude, ChatGPT or Cursor what is booked across your Hostaway listings. The AI lists the reservations from every channel, shows the free and blocked nights of a listing, and reads the guest reviews. To start, add `https://hostaway.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> List next week's arrivals for all my listings, with guest name, channel and number of nights. Then show which nights are still free at the Beach House this month.

## What does the AI do, step by step?

1. It lists your properties with `hostaway_list_listings`, and reads one property in full with `hostaway_get_listing`.
2. It lists the reservations from Airbnb, Vrbo, Booking.com and direct bookings with `hostaway_list_reservations`, filtered by listing and arrival or departure dates.
3. It reads one booking in full with `hostaway_get_reservation`: guest details, dates, price breakdown and payment state.
4. It shows the day-by-day status and price of one listing with `hostaway_get_calendar`.
5. It quotes a stay with `hostaway_calculate_price`. This is a calculation only, and it books or holds nothing.
6. It reads the guest reviews and the host replies with `hostaway_list_reviews`.

## Can the AI change a booking or message a guest by mistake?

- The tools in the steps above only read data.
- Other tools can change data: `hostaway_update_calendar` blocks or opens nights and changes prices on every connected channel, and `hostaway_send_message` sends a message to the guest at once. A sent message cannot be recalled. Tell the AI to only read, and to ask you before any change.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.

## What do I need?

Your Hostaway Account ID and an API key. You find both in the Hostaway dashboard under **Settings → Hostaway API**. See the [setup steps](/hostaway/) for Claude, ChatGPT, Cursor and other clients.
