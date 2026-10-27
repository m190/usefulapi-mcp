---
title: Read the Shiftbase schedule per department from Claude
description: Claude or ChatGPT can list the Shiftbase schedule for a department and date range, with employees, hours and open shifts, and move a shift when you ask.
date: 2026-10-17
products: shiftbase
---
You can read the Shiftbase schedule from Claude or ChatGPT. The AI lists the shifts of a department for a week, shows who works when and for how many hours, and finds the open shifts and the absences. When you ask, it moves a shift. To start, add `https://shiftbase.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Show next week's schedule for the Amsterdam department per day, with employee, team, start and end time. Add the total hours per employee and list the open shifts and approved absences.

## What does the AI do, step by step?

1. It lists the departments with `shiftbase_list_departments` and the teams with `shiftbase_list_teams`.
2. It lists the scheduled shifts for a date range of at most 62 days with `shiftbase_list_rosters`: date, times, break, employee, team and hours.
3. It maps the user ids to names with `shiftbase_list_users`.
4. It lists the open shifts with `shiftbase_list_open_shifts` and the absences with `shiftbase_list_absences`.
5. When you ask, it moves a shift to another date, time or employee with `shiftbase_update_roster`.

## Can the AI change the schedule by mistake?

- The tools in steps 1 to 4 only read data.
- `shiftbase_update_roster` changes a shift. For a recurring shift, it changes this date only, this date and all later ones, or the whole series. Tell the AI which one you want.
- `shiftbase_create_roster` adds a shift. It notifies the employee only when the call asks for it.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.

## What do I need?

A Shiftbase API key. Create it in Shiftbase under **Settings → App center → Public API → Add**. The API needs the **App Center Plus** add-on. Open shifts and absences also need the Shiftbase **Basic** plan or higher. See the [setup steps](/shiftbase/) for Claude, ChatGPT, Cursor and other clients.
