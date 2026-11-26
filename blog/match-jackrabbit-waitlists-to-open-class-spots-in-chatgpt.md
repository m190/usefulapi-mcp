---
title: Match Jackrabbit waitlists to open class spots in ChatGPT
description: Ask ChatGPT, Claude or Cursor which Jackrabbit classes have open spots and a waitlist, and who is next on each waitlist.
date: 2026-11-28
products: jackrabbit-class
---
You can ask ChatGPT, Claude or Cursor which of your Jackrabbit classes have open spots while students wait on the waitlist. The AI reads your classes, keeps the ones with openings and waitlist entries, and lists the waiting students in waitlist order. You then enroll the students in Jackrabbit. Add `https://jackrabbit-class.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which Jackrabbit classes have open spots and students on the waitlist? List who is waiting for each class.

You can also name one location, one day of the week or one session. If you ask, the AI also shows the family contacts of each waiting student.

## What does the AI do, step by step?

1. It reads your classes with `jackrabbit_list_classes`. Each class has its schedule, location, room, session, instructors, size, openings, waitlist count and tuition. The AI can filter by location or by instructor. A page has 10 classes by default and at most 100. One call reads one page, and the reply gives the next page number, so the AI must call again until no next page is left.
2. To find the ids of a location, a session or an instructor, it reads the option lists with `jackrabbit_list_options`. To filter by day of the week or by session, it can use the class schedule from `jackrabbit_list_class_listings` instead.
3. It keeps the classes that have openings and a waitlist count above zero.
4. For each of these classes, it reads the waitlist with `jackrabbit_list_waitlist_entries`: the student, the entry date, the position and the notes. A page has 25 entries by default and at most 100. The AI reads every page of each waitlist, then sorts the entries by position.
5. If you ask about time conflicts, it reads every page of the enrollments of a waiting student with `jackrabbit_list_enrollments`: the current ones (enrolled only) and, in a second call, the future ones. No tool finds conflicts, so the AI opens those classes with `jackrabbit_get_class` and compares their start and end dates, days and times.
6. If you ask for the family contacts, it opens the student with `jackrabbit_get_student` and reads the family contacts with `jackrabbit_list_contacts`.

A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should ask again from the same page with a smaller page size.

Jackrabbit data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it enroll students or change my classes?

No. No tool enrolls a student, drops an enrollment, removes a waitlist entry or changes a class. You enroll the students from the waitlist in Jackrabbit. The review above uses read tools only.

The server has two tools that write Jackrabbit data. `jackrabbit_create_student` adds a student to an existing family, and a second call adds a second student. `jackrabbit_create_waitlist_entry` puts a student on a class waitlist; it does not enroll the student. These tools act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Jackrabbit data: `jackrabbit_usage_status` shows your UsefulAPI usage and plan, `jackrabbit_upgrade` returns a payment link or undoes a scheduled cancellation, `jackrabbit_cancel_subscription` cancels at the end of the current period, and `jackrabbit_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

A Jackrabbit Customer API token. Turn on the Customer API in **Jackrabbit Labs**, then make a token in **Gear → Settings → General → API Settings** (you need the API Settings permission). The Jackrabbit API is in beta. Leave the organization id empty unless you have a corporate token. Student records can include health notes, and the records the AI reads go to your AI client.

See the [Jackrabbit Class setup steps](/jackrabbit-class/) for ChatGPT, Claude, Cursor and other MCP clients.
