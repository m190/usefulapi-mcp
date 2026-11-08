# Zaui MCP by usefulapi

Use your [Zaui](https://www.zaui.com) account from Claude, Cursor, or any MCP client. Read activities, availability, product stock, bookings and day manifests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zaui.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zaui.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zaui https://zaui.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zaui&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzaui.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zaui": {
      "url": "https://zaui.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zaui credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zaui/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Zaui system address** (the part before .zaui.net), a **ZAPI token**, and the **ZAPI account ID** and **ZAPI user ID**, all shown under Resellers → API Integrations in Zaui. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zaui_list_activity_catalog` | read | List activity and product catalog |
| `zaui_list_activities_by_date` | read | List activities by date |
| `zaui_get_activity_details` | read | Get activity details |
| `zaui_check_activity_inventory` | read | Check activity inventory |
| `zaui_check_product_inventory` | read | Check product inventory |
| `zaui_search_bookings` | read | Search bookings |
| `zaui_get_booking` | read | Get booking by number |
| `zaui_get_day_manifest` | read | Get day manifest |
| `zaui_get_activity_manifest` | read | Get activity manifest |
| `zaui_usage_status` | meta | Usage status (free-tier meter) |
| `zaui_request_feature` | meta | Request a missing feature |
| `zaui_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zaui_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zaui_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zaui_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zaui_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
