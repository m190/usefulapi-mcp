# beehiiv MCP by usefulapi

Use your [beehiiv](https://www.beehiiv.com) account from Claude, Cursor, or any MCP client. Read subscribers, posts, automations and segments, change subscribers and tags, and create draft posts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://beehiiv.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://beehiiv.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http beehiiv https://beehiiv.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=beehiiv&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbeehiiv.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "beehiiv": {
      "url": "https://beehiiv.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your beehiiv credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/beehiiv/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **beehiiv API key** (Settings → Workspace Settings → API in beehiiv) and, if the key covers several publications, its **publication id** (starts with pub_). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beehiiv_list_publications` | read | List publications |
| `beehiiv_get_publication` | read | Get a publication |
| `beehiiv_list_subscriptions` | read | List subscriptions |
| `beehiiv_get_subscription` | read | Get a subscription |
| `beehiiv_get_subscription_by_email` | read | Get a subscriber by email |
| `beehiiv_list_posts` | read | List posts |
| `beehiiv_get_post` | read | Get a post |
| `beehiiv_list_automations` | read | List automations |
| `beehiiv_get_automation` | read | Get an automation |
| `beehiiv_list_segments` | read | List segments |
| `beehiiv_get_segment` | read | Get a segment |
| `beehiiv_list_custom_fields` | read | List custom fields |
| `beehiiv_list_tiers` | read | List premium tiers |
| `beehiiv_list_newsletter_lists` | read | List newsletter lists |
| `beehiiv_list_webhooks` | read | List webhooks |
| `beehiiv_list_polls` | read | List polls |
| `beehiiv_get_referral_program` | read | Get the referral program |
| `beehiiv_create_subscription` | **write** | Add a subscriber |
| `beehiiv_update_subscription` | **write** | Update a subscriber |
| `beehiiv_add_subscription_tags` | **write** | Add tags to a subscriber |
| `beehiiv_remove_subscription_tags` | **write** | Remove tags from a subscriber |
| `beehiiv_create_draft_post` | **write** | Create a draft post |
| `beehiiv_usage_status` | meta | Usage status (free-tier meter) |
| `beehiiv_request_feature` | meta | Request a missing feature |
| `beehiiv_upgrade` | meta | Upgrade to Pro or Pro+ |
| `beehiiv_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `beehiiv_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `beehiiv_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `beehiiv_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
