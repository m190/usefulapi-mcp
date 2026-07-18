# Memberful MCP by usefulapi

Manage your Memberful memberships from Claude, Cursor, or any MCP client — read and manage members, subscriptions, plans, passes and coupons over the Memberful GraphQL API.

**Live endpoint:** `https://memberful.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/memberful

## Add to Claude

```json
{
  "mcpServers": {
    "memberful": {
      "url": "https://memberful.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Memberful API key** — create one in the Memberful dashboard under Settings → Custom applications. It's sent as a Bearer token to your account's GraphQL endpoint.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_member` | read | Get a member |
| `list_members` | read | List members |
| `get_subscription` | read | Get a subscription |
| `list_subscriptions` | read | List subscriptions |
| `list_plans` | read | List plans |
| `list_passes` | read | List passes |
| `memberful_query` | read | Run a GraphQL query (read-only) |
| `create_member` | **write** | Create a member |
| `update_member` | **write** | Update a member |
| `change_subscription_expiration` | **write** | Change subscription expiration |
| `create_coupons` | **write** | Create coupons |
| `memberful_graphql` | **write** | Run a GraphQL operation (query or mutation) |
| `memberful_usage_status` | meta | Usage status (free-tier meter) |
| `memberful_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Memberful.
