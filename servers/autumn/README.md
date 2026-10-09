# Autumn MCP by usefulapi

Read your Autumn customers, features, plans, balances and invoices — and create customers, track usage or attach plans — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Autumn API key.

**Live endpoint:** `https://autumn.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/autumn

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://autumn.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http autumn https://autumn.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=autumn&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fautumn.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "autumn": {
      "url": "https://autumn.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Autumn credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/autumn/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Autumn API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_customer` | read | Get a customer |
| `list_customers` | read | List customers |
| `check` | read | Check feature access / balance |
| `list_invoices` | read | List invoices |
| `get_entity` | read | Get an entity |
| `list_entities` | read | List entities |
| `list_features` | read | List features |
| `get_feature` | read | Get a feature |
| `list_plans` | read | List plans |
| `get_plan` | read | Get a plan |
| `preview_attach` | read | Preview attaching a plan |
| `autumn_request` | read | Raw read request |
| `get_or_create_customer` | **write** | Get or create a customer |
| `update_customer` | **write** | Update a customer |
| `track_usage` | **write** | Track usage |
| `attach_plan` | **write** | Attach a plan |
| `create_entity` | **write** | Create an entity |
| `open_customer_portal` | **write** | Open customer billing portal |
| `autumn_usage_status` | meta | Usage status (free-tier meter) |
| `autumn_request_feature` | meta | Request a missing feature |
| `autumn_upgrade` | meta | Upgrade to Pro (unlimited) |
| `autumn_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `autumn_upgrade` (it returns a Stripe Checkout link). Cancel any time with `autumn_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `autumn_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
