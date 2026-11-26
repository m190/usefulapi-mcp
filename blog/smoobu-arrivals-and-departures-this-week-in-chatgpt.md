---
title: See this week's Smoobu arrivals and departures in ChatGPT
description: Ask ChatGPT, Claude or Cursor for this week's Smoobu check-ins and check-outs by property, with guest, channel, price and payment status.
date: 2026-12-02
products: smoobu
---
You can ask ChatGPT, Claude or Cursor for the arrivals and departures of the week in Smoobu. The AI reads your reservations from all channels (Airbnb, Booking.com, direct and others), groups them by day and by property, and shows the guest, the channel, the price and the payment status of each booking. Add `https://smoobu.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Show my Smoobu arrivals and departures for this week by day and property, with guest, channel and payment status.

You can also ask for one property only, for next week, or for the check-in and check-out times of the bookings.

## What does the AI do, step by step?

1. It reads your properties with `smoobu_list_apartments`, so it can show property names and filter by one property. Smoobu calls a property an apartment.
2. It reads the bookings of the week with `smoobu_list_reservations`, filtered by a stay range from the first to the last day of the week. The tool also has arrival and departure date filters, but Smoobu's help says that only the stay range filter works at the moment.
3. Cancelled bookings are left out unless the AI asks for them. Blocked periods also come back as bookings, so the AI should hide them with the filter for blocked periods.
4. One call reads one page of up to 100 bookings (25 by default). If the reply has more pages, the AI must call again for the next page, with the same filters and page size.
5. It keeps the bookings whose arrival date or departure date falls in this week. Each booking in the list has its guest, dates, channel, price and payment status. When Smoobu fills them, the list also has the check-in and check-out times, the deposit status and the channel's reference.
6. It groups the arrivals and the departures by day and by property. To read one booking again, it uses `smoobu_get_reservation`.

A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should start the same query again from page 1 with a smaller page size, keep that page size for all pages, and skip bookings it already has.

Smoobu data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my bookings or message a guest without my approval?

The overview above uses read tools only. No tool in this server cancels or deletes a booking.

The server has tools that write Smoobu data. `smoobu_create_reservation` adds a booking or a blocked period, and Smoobu sends the blocked dates to every connected channel. `smoobu_update_reservation` changes times, guest details, notes, prices and the paid status of a booking. `smoobu_set_rates` changes nightly prices and minimum stays, and Smoobu sends them to the channels with price sync. `smoobu_send_message_to_guest` sends a message to the guest at once through Smoobu, on the booking's channel or by email, and the message cannot be unsent. `smoobu_send_message_to_host` posts a message or an internal note on a booking. These tools act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The UsefulAPI account tools are separate. `smoobu_usage_status` shows your usage and plan. `smoobu_upgrade` gives plan options or a payment link; a change from Pro to Pro+ requires confirmation. `smoobu_cancel_subscription` also requires confirmation and ends the subscription at the end of the current period. `smoobu_request_feature` sends us a feature request. These tools do not change Smoobu data.

## What do I need?

A Smoobu API key and API secret, made in the main Smoobu account under **Advanced → API Keys**. A paid Smoobu account is required. For guest names, enable **Allow access to guest personal data** on the key; without it, Smoobu returns empty personal-data fields.

See the [Smoobu setup steps](/smoobu/) for ChatGPT, Claude, Cursor and other MCP clients.
