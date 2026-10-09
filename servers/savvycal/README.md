# SavvyCal MCP by usefulapi

Read and create SavvyCal scheduling links and booked events. Hosted, no local install.

**Live endpoint:** `https://savvycal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://savvycal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http savvycal https://savvycal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=savvycal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsavvycal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "savvycal": {
      "url": "https://savvycal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SavvyCal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/savvycal/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **SavvyCal credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `savvycal_list_links` | read | List links |
| `savvycal_get_link` | read | Get link |
| `savvycal_get_link_slots` | read | Get link slots |
| `savvycal_list_events` | read | List events |
| `savvycal_get_event` | read | Get event |
| `savvycal_toggle_link` | **write** | Toggle link |
| `savvycal_duplicate_link` | **write** | Duplicate link |
| `savvycal_cancel_event` | **write** | Cancel event |
| `savvycal_usage_status` | meta | Usage status (free-tier meter) |
| `savvycal_request_feature` | meta | Request a missing feature |
| `savvycal_upgrade` | meta | Upgrade to Pro (unlimited) |
| `savvycal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `savvycal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `savvycal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `savvycal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
