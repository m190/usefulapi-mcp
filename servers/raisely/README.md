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
| `get_authenticated_user` | read | Get authenticated user |
| `list_campaigns` | read | List campaigns |
| `get_campaign` | read | Get a campaign |
| `list_profiles` | read | List fundraising profiles |
| `get_profile` | read | Get a fundraising profile |
| `list_donations` | read | List donations |
| `get_donation` | read | Get a donation |
| `list_users` | read | List users |
| `get_user` | read | Get a user |
| `list_subscriptions` | read | List subscriptions |
| `get_subscription` | read | Get a subscription |
| `list_posts` | read | List posts |
| `list_orders` | read | List orders |
| `list_segments` | read | List segments |
| `list_tags` | read | List tags |
| `list_campaign_donations` | read | List a campaign's donations |
| `list_campaign_profiles` | read | List a campaign's profiles |
| `list_user_donations` | read | List a user's donations |
| `raisely_request` | read | Raw read request |
| `create_donation` | **write** | Record a donation |
| `upsert_user` | **write** | Upsert a user |
| `update_profile` | **write** | Update a fundraising profile |
| `create_post` | **write** | Create a post |
| `raisely_usage_status` | meta | Usage status (free-tier meter) |
| `raisely_request_feature` | meta | Request a missing feature |
| `raisely_upgrade` | meta | Upgrade to Pro (unlimited) |
| `raisely_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `raisely_upgrade` (it returns a Stripe Checkout link). Cancel any time with `raisely_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `raisely_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Raisely.
