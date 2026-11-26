---
title: Plan the week's Housecall Pro jobs and estimates in ChatGPT
description: Ask ChatGPT, Claude or Cursor for this week's Housecall Pro jobs and estimate visits, who is dispatched to each, and which jobs have no time yet.
date: 2026-11-29
products: housecall-pro
---
You can ask ChatGPT, Claude or Cursor for an overview of your week in Housecall Pro. The AI reads the jobs and the estimate visits scheduled this week, groups them by day and by employee, and lists the jobs that are not scheduled yet. Add `https://housecall-pro.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Show my Housecall Pro jobs and estimates for this week by day, with who is dispatched. Which jobs are unscheduled?

You can also ask for one employee only, for next week, or for the unpaid invoices of the jobs that are done.

## What does the AI do, step by step?

1. It reads your company with `housecall_get_company`, so that "this week" uses your company's time zone.
2. It reads the jobs with `housecall_list_jobs`, filtered by scheduled start time for the week. Each job has its customer, address, schedule, assigned employees, notes and totals. A filter by work status (unscheduled, scheduled, in progress, completed or canceled) and by employee is also available. One call reads one page, and the reply gives the total number of pages, so the AI must call again for the next page.
3. It reads the jobs that have no time yet with `housecall_list_jobs` and the work status unscheduled.
4. It reads the estimate visits of the week with `housecall_list_estimates`, with the same filters. To see the options of one estimate and the approval status of each option, it opens it with `housecall_get_estimate`.
5. It reads your employees with `housecall_list_employees`, so it can show names and filter by one employee.
6. It groups the jobs and the estimates by day and by employee, and lists the unscheduled jobs apart. To open one job, it uses `housecall_get_job`.
7. If you ask for the unpaid invoices of the jobs that are done, it lists the completed jobs with `housecall_list_jobs` and reads the invoices of each job with `housecall_list_job_invoices`. It keeps the invoices that are not paid. For all open invoices of the company, `housecall_list_invoices` filters by status (for example open or pending payment) and by date. Housecall Pro gives amounts in cents, so the AI divides them by 100.

A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should ask again for the same page with a smaller page size.

Housecall Pro data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my schedule without my approval?

The overview above uses read tools only. No tool deletes a record, records a payment, changes an invoice, or approves or declines an estimate.

The server has tools that write Housecall Pro data. `housecall_create_customer`, `housecall_update_customer` and `housecall_create_customer_address` add or change customers. `housecall_create_job`, `housecall_create_estimate` and `housecall_create_lead` add new records. `housecall_add_job_note` adds a note to a job. `housecall_update_job_schedule` changes the time of a job and can notify the customer. `housecall_dispatch_job` replaces the list of employees on a job. These tools act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Housecall Pro data: `housecall_usage_status` shows your UsefulAPI usage and plan, `housecall_upgrade` returns a payment link or undoes a scheduled cancellation, `housecall_cancel_subscription` cancels at the end of the current period, and `housecall_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

A Housecall Pro company API key. An account admin makes it in **My Apps → All Apps → API Key Management → Generate API Key**. API access needs the Housecall Pro MAX plan. Enter a company id only if you have several locations and want to use one of them.

See the [Housecall Pro setup steps](/housecall-pro/) for ChatGPT, Claude, Cursor and other MCP clients.
