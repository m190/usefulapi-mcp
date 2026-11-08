# Bedrijfsrooster MCP by usefulapi

Use your [Bedrijfsrooster](https://www.bedrijfsrooster.nl) account from Claude, Cursor, or any MCP client. It reads company setup, employees, contracts, timetable shifts, finished reports and availability, and changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bedrijfsrooster.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bedrijfsrooster.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bedrijfsrooster https://bedrijfsrooster.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bedrijfsrooster&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbedrijfsrooster.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bedrijfsrooster": {
      "url": "https://bedrijfsrooster.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Bedrijfsrooster app's client ID and secret, then sign in with your Bedrijfsrooster account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bedrijfsrooster/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Connect client ID** and **Connect client secret** of a Bedrijfsrooster Connect user. A company owner creates that user at developers.bedrijfsrooster.nl. Then you sign in to Bedrijfsrooster and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bedrijfsrooster_get_configuration` | read | Get company configuration |
| `bedrijfsrooster_list_users` | read | List employees |
| `bedrijfsrooster_list_contracts` | read | List employment contracts |
| `bedrijfsrooster_list_timetable` | read | List timetable shifts |
| `bedrijfsrooster_get_report` | read | Get a finished report |
| `bedrijfsrooster_get_availability` | read | Get availability |
| `bedrijfsrooster_usage_status` | meta | Usage status (free-tier meter) |
| `bedrijfsrooster_request_feature` | meta | Request a missing feature |
| `bedrijfsrooster_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bedrijfsrooster_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bedrijfsrooster_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bedrijfsrooster_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bedrijfsrooster_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
