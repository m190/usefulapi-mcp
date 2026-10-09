# Inngest MCP by usefulapi

Trace events to function runs to the failing step, and bulk-cancel runs. Hosted, no local install.

**Live endpoint:** `https://inngest.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inngest.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inngest https://inngest.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inngest&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finngest.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inngest": {
      "url": "https://inngest.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Inngest credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inngest/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Inngest credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inngest_list_events` | read | List events |
| `inngest_get_event` | read | Get one event |
| `inngest_list_event_runs` | read | List the runs an event started |
| `inngest_get_run` | read | Get one function run |
| `inngest_list_run_jobs` | read | List a run's steps |
| `inngest_list_cancellations` | read | List bulk cancellations |
| `inngest_list_webhooks` | read | List webhooks |
| `inngest_get_webhook` | read | Get one webhook |
| `inngest_create_cancellation` | **write** | Bulk cancel function runs |
| `inngest_delete_cancellation` | **write** | Stop a bulk cancellation |
| `inngest_delete_webhook` | **write** | Delete a webhook |
| `inngest_usage_status` | meta | Usage status (free-tier meter) |
| `inngest_request_feature` | meta | Request a missing feature |
| `inngest_upgrade` | meta | Upgrade to Pro (unlimited) |
| `inngest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `inngest_upgrade` (it returns a Stripe Checkout link). Cancel any time with `inngest_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `inngest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
