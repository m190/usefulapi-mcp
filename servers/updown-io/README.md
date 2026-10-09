# updown.io MCP by usefulapi

Use [updown.io](https://updown.io) from Claude, Cursor, or any MCP client — check uptime status, downtimes and response-time metrics, and create checks, recipients and status pages.
Hosted, no local install: connect with your own updown.io credentials.

**Live endpoint:** `https://updown-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/updown-io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://updown-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http updown-io https://updown-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=updown-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupdown-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "updown-io": {
      "url": "https://updown-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your updown.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/updown-io/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **updown.io API key** (Settings > API keys; read-only key for reads, read/write key to make changes).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `updown_list_checks` | read | List checks |
| `updown_get_check` | read | Get one check |
| `updown_list_downtimes` | read | List a check's downtimes |
| `updown_get_check_metrics` | read | Get a check's metrics |
| `updown_find_problems` | read | Find checks with problems |
| `updown_list_recipients` | read | List alert recipients |
| `updown_list_status_pages` | read | List status pages |
| `updown_list_nodes` | read | List monitoring nodes |
| `updown_list_node_ips` | read | List monitoring node IPs |
| `updown_create_check` | **write** | Create a check |
| `updown_update_check` | **write** | Update a check |
| `updown_add_recipient` | **write** | Add an alert recipient |
| `updown_create_status_page` | **write** | Create a status page |
| `updown_update_status_page` | **write** | Update a status page |
| `updown_usage_status` | meta | Usage status (free-tier meter) |
| `updown_request_feature` | meta | Request a missing feature |
| `updown_upgrade` | meta | Upgrade to Pro (unlimited) |
| `updown_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `updown_upgrade` (it returns a Stripe Checkout link). Cancel any time with `updown_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `updown_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by updown.io.
