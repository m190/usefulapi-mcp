# Nexudus MCP by usefulapi

Use your [Nexudus](https://www.nexudus.com) account from Claude, Cursor, or any MCP client. Read coworkers, bookings, resources, check-ins and coworker invoices of a coworking space. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nexudus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nexudus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nexudus https://nexudus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nexudus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnexudus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nexudus": {
      "url": "https://nexudus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nexudus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nexudus/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Nexudus admin email** and **Nexudus password** you use for the Nexudus admin panel (a login without two-factor authentication). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nexudus_list_coworkers` | read | List coworkers |
| `nexudus_get_coworker` | read | Get a coworker |
| `nexudus_list_bookings` | read | List bookings |
| `nexudus_get_booking` | read | Get a booking |
| `nexudus_list_resources` | read | List resources |
| `nexudus_get_resource` | read | Get a resource |
| `nexudus_list_checkins` | read | List check-ins |
| `nexudus_list_coworker_invoices` | read | List coworker invoices |
| `nexudus_get_coworker_invoice` | read | Get a coworker invoice |
| `nexudus_list_my_profiles` | read | List my profiles |
| `nexudus_usage_status` | meta | Usage status (free-tier meter) |
| `nexudus_request_feature` | meta | Request a missing feature |
| `nexudus_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nexudus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nexudus_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nexudus_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nexudus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
