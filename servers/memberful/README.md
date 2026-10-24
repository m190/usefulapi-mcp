# Memberful MCP by usefulapi

Manage your Memberful memberships from Claude, Cursor, or any MCP client — read and manage members, subscriptions, plans, passes and coupons over the Memberful GraphQL API.

**Live endpoint:** `https://memberful.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/memberful

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://memberful.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http memberful https://memberful.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=memberful&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmemberful.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "memberful": {
      "url": "https://memberful.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Memberful credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/memberful/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Memberful API key** — create one in the Memberful dashboard under Settings → Custom applications. It's sent as a Bearer token to your account's GraphQL endpoint.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `memberful_get_member` | read | Get a member |
| `memberful_list_members` | read | List members |
| `memberful_get_subscription` | read | Get a subscription |
| `memberful_list_subscriptions` | read | List subscriptions |
| `memberful_list_plans` | read | List plans |
| `memberful_list_passes` | read | List passes |
| `memberful_query` | read | Run a GraphQL query (read-only) |
| `memberful_create_member` | **write** | Create a member |
| `memberful_update_member` | **write** | Update a member |
| `memberful_change_subscription_expiration` | **write** | Change subscription expiration |
| `memberful_create_coupons` | **write** | Create coupons |
| `memberful_graphql` | **write** | Run a GraphQL operation (query or mutation) |
| `memberful_usage_status` | meta | Usage status (free-tier meter) |
| `memberful_request_feature` | meta | Request a missing feature |
| `memberful_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `memberful_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `memberful_upgrade` (it returns a Stripe Checkout link). Cancel any time with `memberful_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `memberful_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Memberful.
