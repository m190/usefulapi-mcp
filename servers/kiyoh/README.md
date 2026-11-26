# Kiyoh MCP by usefulapi

Use your [Kiyoh](https://www.kiyoh.com) account from Claude, Cursor, or any MCP client. Read the review locations of your account and the reviews of each location, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kiyoh.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kiyoh.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kiyoh https://kiyoh.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kiyoh&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkiyoh.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kiyoh": {
      "url": "https://kiyoh.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kiyoh credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kiyoh/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **review platform** (Kiyoh or Klantenvertellen) and a **Publication API token** (invite API settings under extra options). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kiyoh_list_locations` | read | List locations |
| `kiyoh_list_reviews` | read | List reviews of a location |
| `kiyoh_usage_status` | meta | Usage status (free-tier meter) |
| `kiyoh_request_feature` | meta | Request a missing feature |
| `kiyoh_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kiyoh_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kiyoh_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kiyoh_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kiyoh_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
