# Buk.ng MCP by usefulapi

Use your [Buk.ng](https://buk.ng) account from Claude, Cursor, or any MCP client. It reads services, customers, bookings, and booking page and website insights. It cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://buk-ng.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buk-ng.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buk-ng https://buk-ng.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buk-ng&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuk-ng.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buk-ng": {
      "url": "https://buk-ng.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Buk.ng credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buk-ng/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Buk.ng API key** (it starts with `buk_sk_`, or `buk_test_` for test mode), created by the business owner in Buk.ng under **Settings → Developers**, with API access switched on. Booking page and website insights need a paid Buk.ng plan. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buk_get_account` | read | Get API key and business |
| `buk_list_services` | read | List services |
| `buk_list_customers` | read | List customers |
| `buk_list_bookings` | read | List bookings |
| `buk_get_insights` | read | Get page insights |
| `buk_get_website_insights` | read | Get website insights |
| `buk_usage_status` | meta | Usage status (free-tier meter) |
| `buk_request_feature` | meta | Request a missing feature |
| `buk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `buk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `buk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `buk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `buk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
