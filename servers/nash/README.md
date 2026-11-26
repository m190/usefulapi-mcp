# Nash MCP by usefulapi

Use your [Nash](https://www.usenash.com) account from Claude, Cursor, or any MCP client. Read orders, jobs, providers, routes and zones in Nash, and create or update pre-dispatch orders that return quotes. Creating an order never dispatches a courier. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nash.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nash.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nash https://nash.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nash&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnash.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nash": {
      "url": "https://nash.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nash credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nash/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Nash API key** (Nash Portal → Settings → API keys), with the environment and region you use. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nash_list_orders` | read | List orders |
| `nash_get_order` | read | Get an order |
| `nash_list_jobs` | read | List jobs |
| `nash_get_job` | read | Get a job |
| `nash_get_job_by_external_identifier` | read | Get a job by external identifier |
| `nash_list_providers` | read | List delivery providers |
| `nash_list_routes` | read | List routes |
| `nash_get_route` | read | Get a route |
| `nash_list_zones` | read | List zones |
| `nash_create_or_update_order` | **write** | Create or update an order |
| `nash_usage_status` | meta | Usage status (free-tier meter) |
| `nash_request_feature` | meta | Request a missing feature |
| `nash_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nash_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nash_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nash_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nash_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
