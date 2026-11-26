# 15Five MCP by usefulapi

Use your [15Five](https://www.15five.com) account from Claude, Cursor, or any MCP client. Read people, check-ins, goals, high fives, priorities, 1-on-1s, vacations and review cycles. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://15five.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://15five.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http 15five https://15five.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=15five&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2F15five.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "15five": {
      "url": "https://15five.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your 15Five credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/15five/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **15Five Public API key** (Settings → Integrations → Public API in 15Five) and an optional **account subdomain**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `15five_check_connection` | read | Check 15Five connection |
| `15five_list_users` | read | List users |
| `15five_get_user` | read | Get a user |
| `15five_list_departments` | read | List departments |
| `15five_list_groups` | read | List groups |
| `15five_list_objectives` | read | List objectives |
| `15five_get_objective` | read | Get an objective |
| `15five_list_checkins` | read | List check-ins |
| `15five_get_checkin` | read | Get a check-in |
| `15five_list_pulse` | read | List pulse scores |
| `15five_list_high_fives` | read | List high fives |
| `15five_list_priorities` | read | List priorities |
| `15five_list_one_on_ones` | read | List 1-on-1s |
| `15five_list_vacations` | read | List vacations |
| `15five_list_review_cycles` | read | List review cycles |
| `15five_get_review_cycle` | read | Get a review cycle |
| `15five_list_cycle_participants` | read | List review cycle participants |
| `15five_list_cycle_reviews` | read | List review cycle reviews |
| `15five_usage_status` | meta | Usage status (free-tier meter) |
| `15five_request_feature` | meta | Request a missing feature |
| `15five_upgrade` | meta | Upgrade to Pro or Pro+ |
| `15five_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `15five_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `15five_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `15five_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
