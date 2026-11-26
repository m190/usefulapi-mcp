# Bitly MCP by usefulapi

Use your [Bitly](https://bitly.com) account from Claude, Cursor, or any MCP client. Shorten links, and read bitlinks, click totals, QR codes, groups and plan limits. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bitly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bitly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bitly https://bitly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bitly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbitly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bitly": {
      "url": "https://bitly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bitly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bitly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Bitly access token** (Settings → Developer settings → Generate token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bitly_get_user` | read | Get the signed-in user |
| `bitly_list_organizations` | read | List organizations |
| `bitly_get_plan_limits` | read | Get plan limits |
| `bitly_list_groups` | read | List groups |
| `bitly_get_group` | read | Get a group |
| `bitly_list_group_bitlinks` | read | List bitlinks in a group |
| `bitly_get_group_clicks` | read | Get group clicks over time |
| `bitly_get_bitlink` | read | Get a bitlink |
| `bitly_get_bitlink_clicks` | read | Get bitlink clicks over time |
| `bitly_get_bitlink_clicks_summary` | read | Get a bitlink click total |
| `bitly_get_qr_code` | read | Get a QR code |
| `bitly_get_qr_code_scans_summary` | read | Get QR code scan total |
| `bitly_shorten_link` | **write** | Shorten a link |
| `bitly_usage_status` | meta | Usage status (free-tier meter) |
| `bitly_request_feature` | meta | Request a missing feature |
| `bitly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bitly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bitly_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bitly_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bitly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
