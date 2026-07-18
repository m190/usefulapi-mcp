# Raisely MCP by usefulapi

Manage your nonprofit's Raisely fundraising from Claude, Cursor, or any MCP client — read campaigns, donations, profiles and supporters, record offline donations, upsert donors and post updates.

**Live endpoint:** `https://raisely.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/raisely

## Add to Claude

```json
{
  "mcpServers": {
    "raisely": {
      "url": "https://raisely.usefulapi.io/mcp"
    }
  }
}
```

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
| `raisely_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Raisely.
