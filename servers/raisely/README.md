# Raisely MCP by usefulapi

Manage your nonprofit's Raisely fundraising from Claude, Cursor, or any MCP client — read campaigns, donations, profiles and supporters, record offline donations, upsert donors and post updates.

**Live endpoint:** `https://raisely.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/raisely

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://raisely.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http raisely https://raisely.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=raisely&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fraisely.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "raisely": {
      "url": "https://raisely.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Raisely credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/raisely/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Raisely campaign **Private API key** (Raisely admin → Settings → Developers). It's sent as a Bearer token and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `raisely_get_authenticated_user` | read | Get authenticated user |
| `raisely_list_campaigns` | read | List campaigns |
| `raisely_get_campaign` | read | Get a campaign |
| `raisely_list_profiles` | read | List fundraising profiles |
| `raisely_get_profile` | read | Get a fundraising profile |
| `raisely_list_donations` | read | List donations |
| `raisely_get_donation` | read | Get a donation |
| `raisely_list_users` | read | List users |
| `raisely_get_user` | read | Get a user |
| `raisely_list_subscriptions` | read | List subscriptions |
| `raisely_get_subscription` | read | Get a subscription |
| `raisely_list_posts` | read | List posts |
| `raisely_list_orders` | read | List orders |
| `raisely_list_segments` | read | List segments |
| `raisely_list_tags` | read | List tags |
| `raisely_list_campaign_donations` | read | List a campaign's donations |
| `raisely_list_campaign_profiles` | read | List a campaign's profiles |
| `raisely_list_user_donations` | read | List a user's donations |
| `raisely_request` | read | Raw read request |
| `raisely_create_donation` | **write** | Record a donation |
| `raisely_upsert_user` | **write** | Upsert a user |
| `raisely_update_profile` | **write** | Update a fundraising profile |
| `raisely_create_post` | **write** | Create a post |
| `raisely_usage_status` | meta | Usage status (free-tier meter) |
| `raisely_request_feature` | meta | Request a missing feature |
| `raisely_upgrade` | meta | Upgrade to Pro or Pro+ |
| `raisely_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `raisely_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `raisely_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `raisely_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Raisely.
