# REVIEWS.io MCP by usefulapi

Use [REVIEWS.io](https://www.reviews.io) from Claude, Cursor, or any MCP client — product and company reviews, ratings, UGC, surveys and invitations, plus review tags.
Hosted, no local install: connect with your own REVIEWS.io credentials.

**Live endpoint:** `https://reviews-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/reviews-io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reviews-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reviews-io https://reviews-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reviews-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freviews-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reviews-io": {
      "url": "https://reviews-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your REVIEWS.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reviews-io/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reviewsio_list_reviews` | read | List reviews and questions |
| `reviewsio_list_company_reviews` | read | List company reviews |
| `reviewsio_get_review_stats` | read | Get review statistics |
| `reviewsio_get_product_ratings` | read | Get product ratings |
| `reviewsio_get_review_nuggets` | read | Get review nuggets |
| `reviewsio_list_ugc` | read | List user generated content |
| `reviewsio_list_surveys` | read | List surveys |
| `reviewsio_list_survey_responses` | read | List survey responses |
| `reviewsio_list_product_invitations` | read | List product invitations |
| `reviewsio_list_company_invitations` | read | List company invitations |
| `reviewsio_list_unsubscribed_users` | read | List unsubscribed users |
| `reviewsio_list_webhooks` | read | List webhooks |
| `reviewsio_tag_company_review` | **write** | Tag a company review |
| `reviewsio_tag_product_review` | **write** | Tag a product review |
| `reviewsio_unsubscribe_user` | **write** | Unsubscribe a user from invitation e-mails |
| `reviewsio_queue_company_invitation` | **write** | Queue one company review invitation (e-mails a customer) |
| `reviewsio_usage_status` | meta | Usage status (free-tier meter) |
| `reviewsio_request_feature` | meta | Request a missing feature |
| `reviewsio_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `reviewsio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `reviewsio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `reviewsio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `reviewsio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by REVIEWS.io.
