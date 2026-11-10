# TempClock MCP by usefulapi

Use your [TempClock](https://tempclock.com) account from Claude, Cursor, or any MCP client. It reads workers, sites, time entries, shift bookings and who is on site now. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tempclock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tempclock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tempclock https://tempclock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tempclock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftempclock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tempclock": {
      "url": "https://tempclock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TempClock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tempclock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TempClock API key** (it starts with `tc_live_`) and a **TempClock address**, which you leave empty for tempclock.com. An account administrator creates the key under **Setup → API keys**, and API access must be on under **Setup → API**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tempclock_list_workers` | read | List workers |
| `tempclock_list_locations` | read | List sites |
| `tempclock_list_timesheets` | read | List time entries |
| `tempclock_list_shifts` | read | List bookings |
| `tempclock_get_on_site_now` | read | Who is on site now |
| `tempclock_usage_status` | meta | Usage status (free-tier meter) |
| `tempclock_request_feature` | meta | Request a missing feature |
| `tempclock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tempclock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tempclock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tempclock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tempclock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
