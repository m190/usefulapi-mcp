# Otter Waiver MCP by usefulapi

Use your [Otter Waiver](https://www.otterwaiver.com) account from Claude, Cursor, or any MCP client. Read your digital waivers, the people who signed them and the latest check-ins. All tools are read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://otter-waiver.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://otter-waiver.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http otter-waiver https://otter-waiver.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=otter-waiver&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fotter-waiver.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "otter-waiver": {
      "url": "https://otter-waiver.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Otter Waiver credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/otter-waiver/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Client ID** and **Client Secret** (app.ottersign.com → Settings → Account and Preferences → API keys, use Show). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `otterwaiver_list_waivers` | read | List waivers |
| `otterwaiver_get_waiver` | read | Get waiver |
| `otterwaiver_list_latest_participants` | read | List latest participants |
| `otterwaiver_list_latest_checkins` | read | List latest check-ins |
| `otterwaiver_get_participant` | read | Get participant |
| `otterwaiver_usage_status` | meta | Usage status (free-tier meter) |
| `otterwaiver_request_feature` | meta | Request a missing feature |
| `otterwaiver_upgrade` | meta | Upgrade to Pro or Pro+ |
| `otterwaiver_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `otterwaiver_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `otterwaiver_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `otterwaiver_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
