# CaptiFi MCP by usefulapi

Use your [CaptiFi](https://captifi.com) account from Claude, Cursor, or any MCP client. It reads the account, venues, guest sign-ups and visit and opt-in totals. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://captifi-connect.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://captifi-connect.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http captifi-connect https://captifi-connect.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=captifi-connect&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcaptifi-connect.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "captifi-connect": {
      "url": "https://captifi-connect.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CaptiFi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/captifi-connect/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **CaptiFi API key** (Integrations → CaptiFi API → Configure; needs the Growth plan or above). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `captifi_get_account` | read | Get the connected account |
| `captifi_list_venues` | read | List venues |
| `captifi_list_guests` | read | List guest sign-ups |
| `captifi_get_stats` | read | Get visit and opt-in totals |
| `captifi_usage_status` | meta | Usage status (free-tier meter) |
| `captifi_request_feature` | meta | Request a missing feature |
| `captifi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `captifi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `captifi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `captifi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `captifi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
