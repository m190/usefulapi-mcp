---
title: Find bad and pending Loox reviews from ChatGPT
description: ChatGPT or Claude can list your 1 and 2 star Loox reviews, show reviews that wait for approval, and sum up what customers praise and complain about.
date: 2026-10-25
products: loox
---
You can ask ChatGPT or Claude which Loox reviews need your attention. The AI lists the low-star reviews and the reviews that wait for approval, and sums up what customers praise and complain about. To start, add `https://loox.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Show the 1 and 2 star product reviews from the last 30 days, grouped by product. Which reviews are still pending approval?

## What does the AI do, step by step?

1. It lists product reviews by star rating, status and date range with `loox_list_product_reviews`. One review in full comes from `loox_get_product_review`.
2. It reads store reviews, about the shop and not one product, with `loox_list_store_reviews`.
3. It reads the average rating of all published product reviews with `loox_get_product_reviews_summary`, and of one product with `loox_get_product_rating`. The rating of the store reviews comes from `loox_get_store_reviews_summary`.

## Can the AI change my reviews?

- No. This server only reads. It cannot approve, hide, reply to or delete a review. You do that in Loox.
- The reviews include the reviewer's name and email. Use this data only for your store's work with your customers.

## What do I need?

Your Loox store id (publicStoreId) and a Loox API secret key. Both are in the Loox admin under **Settings → API Keys**. Loox shows the secret key only once. See the [setup steps](/loox/) for Claude, ChatGPT, Cursor and other clients.
