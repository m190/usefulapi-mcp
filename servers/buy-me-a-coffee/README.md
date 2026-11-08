# Buy Me a Coffee MCP by usefulapi

Use your [Buy Me a Coffee](https://www.buymeacoffee.com) account from Claude, Cursor, or any MCP client. Read members, one-time supporters and Extras purchases. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://buy-me-a-coffee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buy-me-a-coffee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buy-me-a-coffee https://buy-me-a-coffee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buy-me-a-coffee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuy-me-a-coffee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buy-me-a-coffee": {
      "url": "https://buy-me-a-coffee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Buy Me a Coffee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buy-me-a-coffee/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Buy Me a Coffee access token** (developer dashboard at developers.buymeacoffee.com → generate my token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buymeacoffee_list_members` | read | List members |
| `buymeacoffee_get_member` | read | Get a member |
| `buymeacoffee_list_supporters` | read | List one-time supporters |
| `buymeacoffee_get_supporter` | read | Get a one-time supporter |
| `buymeacoffee_list_extras` | read | List Extras purchases |
| `buymeacoffee_get_extra_purchase` | read | Get an Extras purchase |
| `buymeacoffee_usage_status` | meta | Usage status (free-tier meter) |
| `buymeacoffee_request_feature` | meta | Request a missing feature |
| `buymeacoffee_upgrade` | meta | Upgrade to Pro or Pro+ |
| `buymeacoffee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `buymeacoffee_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `buymeacoffee_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `buymeacoffee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
