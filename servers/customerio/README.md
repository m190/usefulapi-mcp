# Customer.io MCP by usefulapi

Manage your Customer.io people, segments, campaigns, and messaging from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Customer.io API credentials.

**Live endpoint:** `https://customerio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/customerio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://customerio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http customerio https://customerio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=customerio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcustomerio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "customerio": {
      "url": "https://customerio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Customer.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/customerio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Customer.io API key(s). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `customerio_search_customers` | read | Search customers |
| `customerio_get_customer_attributes` | read | Get customer attributes |
| `customerio_get_customer_segments` | read | Get customer segments |
| `customerio_get_customer_messages` | read | Get customer messages |
| `customerio_list_segments` | read | List segments |
| `customerio_list_campaigns` | read | List campaigns |
| `customerio_get_campaign` | read | Get campaign |
| `customerio_get_campaign_metrics` | read | Get campaign metrics |
| `customerio_list_messages` | read | List messages |
| `customerio_list_exports` | read | List exports |
| `customerio_list_collections` | read | List collections |
| `customerio_send_transactional_email` | **write** | Send transactional email |
| `customerio_trigger_broadcast` | **write** | Trigger broadcast |
| `customerio_usage_status` | meta | Usage status (free-tier meter) |
| `customerio_upgrade` | meta | Upgrade to Pro (unlimited) |
| `customerio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `customerio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `customerio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `customerio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
