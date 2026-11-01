# QuotaPath MCP by usefulapi

Use your [QuotaPath](https://www.quotapath.com) account from Claude, Cursor, or any MCP client. Read deals, payouts, plans, teams and users, and create, update or delete deals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quotapath.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quotapath.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quotapath https://quotapath.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quotapath&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquotapath.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quotapath": {
      "url": "https://quotapath.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your QuotaPath credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quotapath/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **QuotaPath API token** (create it in your QuotaPath workspace). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quotapath_list_deals` | read | List deals |
| `quotapath_get_deal` | read | Get a deal |
| `quotapath_create_deal` | **write** | Create a deal |
| `quotapath_bulk_create_deals` | **write** | Bulk create deals |
| `quotapath_update_deal` | **write** | Update a deal |
| `quotapath_delete_deal` | **write** | Delete a deal |
| `quotapath_list_payouts` | read | List payouts |
| `quotapath_list_resolved_payouts` | read | List resolved payouts |
| `quotapath_list_unresolved_payouts` | read | List unresolved payouts |
| `quotapath_list_plans` | read | List compensation plans |
| `quotapath_list_teams` | read | List teams |
| `quotapath_list_users` | read | List users |
| `quotapath_usage_status` | meta | Usage status (free-tier meter) |
| `quotapath_request_feature` | meta | Request a missing feature |
| `quotapath_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `quotapath_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `quotapath_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quotapath_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quotapath_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
