---
title: Review Wincher keyword rankings and add keywords from ChatGPT
description: Ask ChatGPT or Claude to read your Wincher keyword positions, find the keywords that dropped or sit just below page one, and add new keywords to track.
date: 2026-11-11
products: wincher
---
You can ask ChatGPT or Claude to read the keyword rankings of a website you track in Wincher. The AI lists each keyword with its latest position, finds the ones that dropped or sit just below page one, and tells you which pages rank for them. When you find new search terms worth tracking, the AI can add them to Wincher in the same chat. Add `https://wincher.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Which of my Wincher keywords for example.com dropped in the last 30 days? Also show the keywords on page two.

Name the website by its domain. You can also ask which page ranks for each keyword, or compare with the best position in the period. If you track more than one website, the AI first finds the right one. You can also name a keyword group, for example "only the group Blog".

## What does the AI do, step by step?

1. It finds the website and its id with `wincher_list_websites`. `wincher_get_website` gives the settings of one website, its competitors and a ranking summary for a period.
2. It reads the keywords with `wincher_list_keywords` and ranking data turned on. Each keyword comes with its latest position, its best position in the period, the estimated traffic, the ranking pages, the search volume and the difficulty. One call returns 25 keywords by default and at most 100. If the reply has a next offset, the AI must make another call with it, so ask it to read all pages.
3. For a keyword that dropped, it can read the position over time with `wincher_get_keyword_ranking_history`, or for up to 50 keywords at once with `wincher_get_ranking_history_bulk`. `wincher_get_keyword_serps` shows which sites ranked above you in the search result pages that Wincher stored last. Each page has a date, so check it.
4. If you track competitors, `wincher_list_competitor_keyword_positions` puts your position next to each competitor's position for every keyword.
5. To add new keywords, it adds up to 50 keywords per call with `wincher_add_keywords`, optionally with the page you expect to rank and a keyword group name. Ask it to check your keyword usage and plan limit with `wincher_get_account` first. The server does not enforce this check.

Wincher tracks positions down to the top 30. The tools do not give an exact position below that.

## Can it delete keywords or use up my keyword quota?

It cannot delete anything. The server has no tool that removes a keyword, a group, an annotation or a website.

It can use up keyword slots. Each keyword that `wincher_add_keywords` adds takes one slot of your Wincher plan's keyword quota, and Wincher tracks it from then on. This server cannot remove a keyword again: you do that in Wincher. Wincher ignores invalid keywords and keywords you already track. A group name that does not exist yet can create a new group. If you only want suggestions, ask the AI to list the keywords in the chat and not to call a write tool yet.

The write tools are `wincher_add_keywords`, `wincher_create_group` and `wincher_create_annotation`. They act when they are called; they do not enforce a separate preview or confirmation step. An annotation is a note on the ranking graphs, and everyone with access to the website sees it. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Wincher data: `wincher_usage_status` shows your UsefulAPI usage and plan, `wincher_upgrade` returns a payment link or changes an existing subscription, `wincher_cancel_subscription` cancels at the end of the current period, and `wincher_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A Wincher Personal Access Token: in Wincher, open **Account → Personal Access Tokens** and create one. The Wincher API is part of the higher paid Wincher plans. The token acts with your user's permissions.

See the [Wincher setup steps](/wincher/) for ChatGPT, Claude, Cursor and other MCP clients.
